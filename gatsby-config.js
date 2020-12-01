require("dotenv").config({
  path: `.env`,
})

module.exports = {
  // pathPrefix: "/newPortfolio",
  siteMetadata: {
    title: "David Fisher's Portfolio",
    description: "This is David Fisher's portfolio site",
    author: "David Fisher",
    twitterUsername: "@dfisherwebdev",
    siteUrl: "https://d-fisher.com",
  },
  plugins: [
    "gatsby-plugin-top-layout",
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-theme-material-ui`,
    //   webFontsConfig: {
    //     fonts: {
    //       google: [
    //         {
    //           family: `Rubik`,
    //         },
    //         {
    //           family: `Karla`,
    //         },
    //       ],
    //     },
    //   },
    // },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Karla`, `Rubik`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        contentTypes: ["projects", "blogs"],
        singleTypes: ["about"],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/favicon/android-chrome-512x512.png`,
      },
    },

    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
  ],
}
