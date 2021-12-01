const completionSpec: Fig.Spec = {
  name: "goblins",
  description: "Xcraft Goblins CLI",
  subcommands: [
    {
      name: "status",
      description: "Display bundle status",
    },
    {
      name: "select",
      description: "Select default craft destination module",
      subcommands: [
        {
          name: "module",
          description:
            "Module name, example usage: goblins select goblin-treasure",
        },
      ],
    },
    {
      name: "apply",
      description: "Apply and trigger dedicated goblins procedure",
      subcommands: [
        {
          name: "codename",
          description:
            "Procedure codename, example usage: goblins apply BFDT-21.10-*",
        },
      ],
    },
    {
      name: "init",
      description: `Provide all needed files for crafting a new goblin app
    in the current directory.`,
      subcommands: [
        {
          name: "appId",
          description:
            "Your application identifier, example usage: 'goblins init bazaar'",
          subcommands: [
            {
              name: "initializer",
              description:
                "Use specific project initializer, example usage: 'goblins init resty api'",
            },
          ],
        },
      ],
    },
    {
      name: "craft",
      description: `craft initial files`,
      subcommands: [
        {
          name: "module",
          description: "Craft a new goblin module",
          subcommands: [
            {
              name: "name",
              description: "Module name",
            },
          ],
        },
        {
          name: "service",
          description: "Craft a minimal goblin service",
          subcommands: [
            {
              name: "name",
              description: "Service name",
            },
          ],
        },
        {
          name: "worker-q",
          description: "Craft a worker queue service",
          subcommands: [
            {
              name: "name",
              description: "Queue name",
            },
          ],
        },
        {
          name: "workbench",
          description: "Craft all workshop's base services for an entity",
          subcommands: [
            {
              name: "namespace",
              description: "Namespace used for entity and workitems",
            },
          ],
        },
        {
          name: "entity",
          description: "Craft entity service",
          subcommands: [
            {
              name: "name",
              description: "Entity name",
            },
          ],
        },
        {
          name: "workitem",
          description: "Craft workitem UI service for entity",
          subcommands: [
            {
              name: "name",
              description: "Entity name",
            },
          ],
        },
        {
          name: "hinter",
          description: "Craft hinter service for entity",
          subcommands: [
            {
              name: "name",
              description: "Entity name",
            },
          ],
        },
        {
          name: "search",
          description: "Craft search service for entity",
          subcommands: [
            {
              name: "name",
              description: "Entity name",
            },
          ],
        },
        {
          name: "plugin",
          description: "Craft plugin service for CRUD",
          subcommands: [
            {
              name: "name",
              description: "Entity name",
            },
          ],
        },
      ],
    },
  ],
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for goblins",
    },
  ],
  args: {},
};
export default completionSpec;
