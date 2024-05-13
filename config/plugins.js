module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
      sites: [
        {
          name: "nyanyan-cms",
          id: "911aa6e9-4771-4577-a2a7-a1666b4c32d2",
          buildHook: "https://api.netlify.com/build_hooks/6641c16e1107b27047a0be33",
          branch: "main", // optional
        },
      ],
    },
  },
});
