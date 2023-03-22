import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Bio = defineDocumentType(() => ({
  name: "Bio",
  filePathPattern: `**/bio.md`,
  contentType: 'mdx',
  fields: {
    title: {
      type: "string",
      description: "Student name",
      required: true,
    },
    slug: {
      type: 'string',
      description: 'Student username',
      required: true,
    },
    profile_picture: {
      type: "string",
      description: "Student photograph",
      required: true,
    },
    portfolio: {
      type: "string",
      description: "Student homepage",
      required: false,
    },
    email: {
      type: "string",
      description: "Student email",
      required: true,
    },
    linkedin: {
      type: "string",
      description: "Student linkedin",
      required: false,
    },
    twitter: {
      type: "string",
      description: "Student twitter",
      required: false,
    },
    facebook: {
      type: "string",
      description: "Student facebook",
      required: false,
    },
    behance: {
      type: "string",
      description: "Student behance",
      required: false,
    },
    instagram: {
      type: "string",
      description: "Student instagram",
      required: false,
    },
    studyProgram: {
      type: "string",
      description: "Student linkedin",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc.studyProgram}/${doc.slug}`,
    }
  },
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `**/project_*.md`,
  contentType: 'mdx',
  fields: {
    title: {
      type: "string",
      description: "Project Name",
      required: true,
    },
    heading: {
      type: "string",
      description: "Project Name",
      required: true,
    },
    image: {
      type: "string",
      description: "Project photograph",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileDir.split('/')[1],
    }
  },
}));

export default makeSource({
  contentDirPath: "_content",
  documentTypes: [Bio, Project],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
