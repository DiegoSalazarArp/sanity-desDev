export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "636da75013ee946b42ca16f3",
                  title: "Sanity Studio",
                  name: "sanity-desdev-studio",
                  apiId: "7ab2b019-7a9d-491e-881c-1eb1e87516ac",
                },
                {
                  buildHookId: "636da75027c9c86a88559f95",
                  title: "Blog Website",
                  name: "sanity-desdev",
                  apiId: "852d6410-34ad-4811-ac67-3ff87136383b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/DiegoSalazarArp/sanity-desDev",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-desdev.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
