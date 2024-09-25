interface Course {
  title: string;
  description: string;
  company: string;
  image: string;
  link: string;
  datePublished: string;
  dateModified: string;
  postedBy: string;
  level: string;
  locked: boolean;
  requiredMembership: number;
}

export const AllCourses: Course[] = [
  {
    title: "Get started with GitHub and GitHub Copilot",
    description:
      "Understand the basics of version control and learn to use key features of GitHub and GitHub Codespaces.",
    company: "Microsoft Learn",
    image: "/courses/1.png",
    link: "https://learn.microsoft.com/plans/gm88tr6o5y5zyk?tab=tab-created&learnerGroupId=ef5ae42f-2a14-4a7b-a09f-6faa55ff16fe&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "beginner",
    locked: true,
    requiredMembership: 1,
  },
  {
    title: "Get started with Python",
    description:
      "Learn the basic syntax and thought processes required to build simple applications using Python.",
    company: "Microsoft Learn",
    image: "/courses/2.jpg",
    link: "https://learn.microsoft.com/plans/kk44h5r34wgk33?tab=tab-created&learnerGroupId=c23c888e-45eb-4c9f-a616-4e196c738e7b&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "beginner",
    locked: false,
    requiredMembership: 0,
  },
  {
    title: "Get started with C#",
    description:
      "Learn the basic syntax and thought processes required to build simple applications using C#.",
    company: "Microsoft Learn",
    image: "/courses/3.png",
    link: "https://learn.microsoft.com/plans/31zzc4mw2wk5re?tab=tab-created&learnerGroupId=bcbe7a42-7d58-44ba-b238-71f9925c6f8f&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "beginner",
    locked: false,
    requiredMembership: 0,
  },
  {
    title: "Azure Fundamentals",
    description:
      "Develop foundational knowledge of cloud concepts and related Azure services.",
    company: "Microsoft Learn",
    image: "/courses/4.jpg",
    link: "https://learn.microsoft.com/plans/qdwwbm3p0x7gom?tab=tab-created&learnerGroupId=d5b4fef5-19e8-4f92-abd3-4519f50ad8be&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "beginner",
    locked: false,
    requiredMembership: 0,
  },
  {
    title: "Azure AI Fundamentals",
    description:
      "Develop foundational knowledge of AI concepts and related Azure services.",
    company: "Microsoft Learn",
    image: "/courses/5.png",
    link: "https://learn.microsoft.com/plans/8pkkiy5x76oy7y?learnerGroupId=df506a2e-f76e-48d5-952b-5b5fc3800930&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "beginner",
    locked: false,
    requiredMembership: 0,
  },
  {
    title: "Azure Data Fundamentals",
    description:
      "Develop foundational knowledge of data concepts and related Azure services.",
    company: "Microsoft Learn",
    image: "/courses/6.png",
    link: "https://learn.microsoft.com/plans/8pkkiy5xgxnpmw?tab=tab-created&learnerGroupId=e0d840eb-9236-4ac6-abe9-086e548407c9&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "beginner",
    locked: true,
    requiredMembership: 0,
  },
  {
    title: "Web Development for Beginners",
    description:
      "Learn the basics of web development, including programming languages and tools, and web accessibility.",
    company: "Microsoft Learn",
    image: "/courses/9.png",
    link: "https://learn.microsoft.com/training/paths/web-development-101?tab=tab-created&learnerGroupId=ef5ae42f-2a14-4a7b-a09f-6faa55ff16fe&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "beginner",
    locked: false,
    requiredMembership: 0,
  },
  {
    title: "Creating your first web apps with React",
    description:
      "Learn how to create your first web apps using React, a popular JavaScript library for building user interfaces.",
    company: "Microsoft Learn",
    image: "/courses/8.png",
    link: "https://learn.microsoft.com/training/paths/react?tab=tab-created&learnerGroupId=c23c888e-45eb-4c9f-a616-4e196c738e7b&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "intermediate",
    locked: false,
    requiredMembership: 0,
  },
  {
    title: "Build JavaScript applications with Node.js",
    description:
      "Node.js provides a large set of built-in APIs that help you build various types of applications, command-line apps, web apps, and more. ",
    company: "Microsoft Learn",
    image: "/courses/7.png",
    link: "https://learn.microsoft.com/training/paths/build-javascript-applications-nodejs?tab=tab-created&learnerGroupId=ef5ae42f-2a14-4a7b-a09f-6faa55ff16fe&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "intermediate",
    locked: false,
    requiredMembership: 0,
  },
  {
    title: "Build web apps with Blazor ",
    description:
      "Learn how to build your first web app with the Blazor web user-interface framework.",
    company: "Microsoft Learn",
    image: "/courses/10.png",
    link: "https://learn.microsoft.com/training/paths/build-web-apps-with-blazor?tab=tab-created&learnerGroupId=ef5ae42f-2a14-4a7b-a09f-6faa55ff16fe&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "intermediate",
    locked: false,
    requiredMembership: 0,
  },
  {
    title: "Build applications using TypeScript",
    description:
      "Learn how using TypeScript for JavaScript development can help you build more robust code, reduce runtime type errors.",
    company: "Microsoft Learn",
    image: "/courses/11.png",
    link: "https://learn.microsoft.com/training/paths/build-javascript-applications-typescript?tab=tab-created&learnerGroupId=ef5ae42f-2a14-4a7b-a09f-6faa55ff16fe&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "intermediate",
    locked: false,
    requiredMembership: 0,
  },
  {
    title: "Take your first steps with Vue.js",
    description:
      "Vue.js is a progressive web framework allowing developers to get up and running quickly, with the addition of a script tag.",
    company: "Microsoft Learn",
    image: "/courses/12.png",
    link: "https://learn.microsoft.com/training/paths/vue-first-steps?tab=tab-created&learnerGroupId=ef5ae42f-2a14-4a7b-a09f-6faa55ff16fe&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "beginner",
    locked: false,
    requiredMembership: 0,
  },
  {
    title: "Get started with Java on Azure",
    description:
      "Learn how you can build, migrate and scale Java applications on Azure using Azure services.",
    company: "Microsoft Learn",
    image: "/courses/13.png",
    link: "https://learn.microsoft.com/training/paths/get-started-java-azure?tab=tab-created&learnerGroupId=ef5ae42f-2a14-4a7b-a09f-6faa55ff16fe&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "intermediate",
    locked: false,
    requiredMembership: 10,
  },
  {
    title: "Microsoft Security, Compliance, and Identity Fundamentals",
    description:
      "Develop foundational knowledge of security, compliance, and identity and related Azure services.",
    company: "Microsoft Learn",
    image: "/courses/16.png",
    link: "https://learn.microsoft.com/en-us/plans/5dyyborpmok24n?tab=tab-created&learnerGroupId=71b3586a-d4a5-4bca-9fba-a98e37400d5e&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "beginner",
    locked: false,
    requiredMembership: 0,
  },
  {
    title: "Copilot for Microsoft 365",
    description:
      "Develop foundational knowledge of Copilot for Microsoft 365 and explore real-world scenarios.",
    company: "Microsoft Learn",
    image: "/courses/15.png",
    link: "https://learn.microsoft.com/en-us/plans/o1mmcm6o12jygw?tab=tab-created&learnerGroupId=12d5f336-40c3-4500-8105-2a6127dbeae0&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "intermediate",
    locked: false,
    requiredMembership: 0,
  },
  {
    title: "Microsoft Power Platform Fundamentals",
    description: "Develop foundational knowledge of Microsoft Power Platform.",
    company: "Microsoft Learn",
    image: "/courses/14.png",
    link: "https://learn.microsoft.com/en-us/plans/zkddhk2dw1d1op?tab=tab-created&learnerGroupId=a05f8e85-52c7-4cec-b80d-1829bd38a1d6&wt.mc_id=studentamb_410163",
    datePublished: "2024-09-11",
    dateModified: "2024-09-11",
    postedBy: "MLSA",
    level: "beginner",
    locked: false,
    requiredMembership: 10,
  },
];
