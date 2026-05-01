const defaultUrls = [
  "https://www.instagram.com/p/POST_ID_1/",
  "https://www.instagram.com/p/POST_ID_2/"
];

function padIndex(index) {
  return String(index).padStart(2, "0");
}

function getInstagramImagePath(slug, extension = "jpg") {
  return `/photos/instagram/${slug}.${extension}`;
}

function createInstagramTemplates({
  urls,
  year = new Date().getFullYear(),
  startIndex = 1,
  category = "photography",
  mediaKind = "image",
  extension = "jpg"
}) {
  return urls.map((url, index) => {
    const slug = `ig-${year}-${padIndex(startIndex + index)}`;

    return {
      id: slug,
      slug,
      title: "Instagram Photo",
      description: "Imported from Instagram",
      tags: ["Instagram"],
      image: getInstagramImagePath(slug, extension),
      instagramUrl: url,
      year,
      mediaKind,
      category
    };
  });
}

const templates = createInstagramTemplates({
  urls: defaultUrls
});

console.log(JSON.stringify(templates, null, 2));
