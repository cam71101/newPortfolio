require("dotenv").config({
  path: `.env`,
})

module.exports = {
  // pathPrefix: "/newPortfolio",

  siteMetadata: {
    title: "David Fisher's Portfolio",
    description: "This is David Fisher's portfolio site",
    author: "@DavidFisher",
    twitterUsername: "@d_fisherWebDev",
    siteUrl: "https://d-fisher.com/",
    image: "/twitter-img.png",
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
    "gatsby-plugin-sitemap",
    // "gatsby-plugin-social-cards",
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({
              query: { site, allStrapiBlogs, allMarkdownRemark },
            }) => {
              const blogs = allStrapiBlogs.nodes.map((node, index) => {
                console.log(node.date)
                return Object.assign({}, node, {
                  description: node.desc,
                  date: node.date,
                  url: site.siteMetadata.siteUrl + "/blogs/" + node.slug,
                  guid: site.siteMetadata.siteUrl + "/blogs/" + node.slug,
                  custom_elements: [
                    { "content:encoded": "test" },
                    { category: node.category },
                    {
                      featuredImage:
                        site.siteMetadata.siteUrl +
                        node.image.childImageSharp.fixed.src,
                    },
                    { subtitle: node.subtitle },
                  ],
                })
              })

              allMarkdownRemark.edges.map((edge, index) => {
                blogs[index].custom_elements[0]["content:encoded"] =
                  edge.node.html
              })

              return blogs
            },
            query: `
                {
                  allStrapiBlogs (
                    sort: { order: DESC, fields: id },
                  )  { 
                    nodes {
                      slug
                      id
                      date
                      title
                      category
                      desc
                      subtitle
                      image {
                        childImageSharp {
                          fixed {
                            src
                          }
                        }
                      }
                    }
                  }
                  allMarkdownRemark  (
                    sort: { order: DESC, fields: id },
                  ){
                  edges {
                    node {
                      html
                    }
                  }
                }
                }
              `,
            output: "/rss.xml",
            title: `David's RSS Feed`,
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            // link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          {
            resolve: `gatsby-remark-twitter-cards`,
            options: {
              title: "anti/pattern", // website title
              separator: "|", // default
              author: "alessia bellisario",
              // background: require.resolve("./content/assets/base.png"), // path to 1200x630px file or hex code, defaults to black (#000000)
              fontColor: "#228B22", // defaults to white (#ffffff)
              titleFontSize: 96, // default
              subtitleFontSize: 60, // default
              fontStyle: "monospace", // default
              // fontFile: require.resolve("./assets/fonts/someFont.ttf"), // will override fontStyle - path to custom TTF font
              useFrontmatterSlug: false, // default, if true it will use the slug defined in the post frontmatter
            },
          },
        ],
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

    // {
    //   resolve: `gatsby-plugin-react-helmet-canonical-urls`,
    //   options: {
    //     siteUrl: `https://d-fisher.com`,

    //     // Query string parameters are inclued by default.
    //     // Set `stripQueryString: true` if you don't want `/blog`
    //     // and `/blog?tag=foobar` to be indexed separately
    //     stripQueryString: true,
    //   },
    // },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
  ],
}
