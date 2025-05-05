import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `blogs/**/*.md`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date" },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.md`,
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    date: { type: "date" },
    url: { type: "string" },
    repository: { type: "string" },
  },
}));

export const Review = defineDocumentType(() => ({
  name: "Review",
  filePathPattern: `reviews/**/*.md`,
  fields: {
    name: { type: "string", required: true },
    text: { type: "string", required: true },
    rating: { type: "number", required: true },
    country: { type: "string", required: true },
  },
}));

export default makeSource({
  contentDirPath: "contents",
  documentTypes: [Blog, Project, Review],
});
