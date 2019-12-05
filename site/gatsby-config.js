module.exports = {
  siteMetadata: {
    title: `Ivan Kristianto Blog`,
    description: `Personal Blog with Gatsby Starter Theme.`,
    author: `@ivankrisdotcom`,
    wordPressUrl: `http://dev-twenty-nineteen-gatsby-demo.pantheonsite.io`
  },
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-twentynineteen",
      options: {
        wordPressUrl: `http://dev-twenty-nineteen-gatsby-demo.pantheonsite.io`
      }
    }
  ]
};
