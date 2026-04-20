import fs from "node:fs/promises";
import path from "node:path";

const cwd = process.cwd();
const projectsPath = path.join(cwd, "src", "data", "projects.json");
const outputPath = path.join(cwd, "src", "data", "github.generated.json");
const token = process.env.VITE_GH_TOKEN;

async function main() {
  const projectFile = JSON.parse(await fs.readFile(projectsPath, "utf8"));
  const repos = [...projectFile.biotech, ...projectFile.mlai, ...projectFile.other]
    .map((item) => item.githubRepo)
    .filter(Boolean);

  if (!token || repos.length === 0) {
    await fs.writeFile(outputPath, "[]\n", "utf8");
    return;
  }

  const query = `
    query RepoCards($owner: String!, $name: String!) {
      repository(owner: $owner, name: $name) {
        stargazerCount
        homepageUrl
        repositoryTopics(first: 6) {
          nodes {
            topic {
              name
            }
          }
        }
      }
    }
  `;

  const results = [];

  for (const repo of repos) {
    const [owner, name] = repo.split("/");
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        query,
        variables: { owner, name }
      })
    });

    if (!response.ok) {
      continue;
    }

    const body = await response.json();
    const repository = body.data?.repository;

    if (!repository) {
      continue;
    }

    results.push({
      repo,
      stars: repository.stargazerCount,
      topics: repository.repositoryTopics.nodes.map((node) => node.topic.name),
      homepage: repository.homepageUrl || undefined
    });
  }

  await fs.writeFile(outputPath, `${JSON.stringify(results, null, 2)}\n`, "utf8");
}

main().catch(async (error) => {
  console.error("Failed to prepare GitHub metadata:", error);
  await fs.writeFile(outputPath, "[]\n", "utf8");
  process.exit(0);
});
