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
    image: "/twitter.png",
  },
  plugins: [
    // "gatsby-plugin-top-layout",
    // "gatsby-plugin-material-ui",
    // `gatsby-theme-material-ui`,
    // "gatsby-plugin-layout",
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      // options: {
      //   threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
      //   once: true, // Defines if animation needs to be launched once
      //   disable: false, // Flag for disabling animations

      //   // Advanced Options
      //   selector: "[data-sal]", // Selector of the elements to be animated
      //   animateClassName: "sal-animate", // Class name which triggers animation
      //   disabledClassName: "sal-disabled", // Class name which defines the disabled state
      //   rootMargin: "0% 50%", // Corresponds to root's bounding box margin
      //   enterEventName: "sal:in", // Enter event name
      //   exitEventName: "sal:out", // Exit event name
      // },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
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
                return Object.assign({}, node, {
                  description: node.desc,
                  date: node.date,
                  url: site.siteMetadata.siteUrl + "/blogs/" + node.slug,
                  guid: site.siteMetadata.siteUrl + "/blogs/" + node.slug,
                  custom_elements: [
                    { "content:encoded": "none" },
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
                  allStrapiBlogs (sort: {fields: date, order: DESC})  { 
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
                  allMarkdownRemark  (sort: {fields: frontmatter___date, order: DESC}){
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
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [`Karla`, `Rubik`],
    //     display: "swap",
    //   },
    // },
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
        contentTypes: ["projects", "blogs", "project-pages"],
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
            resolve: `gatsby-remark-images`,
            options: {
              quality: 100,
            },
          },
          {
            resolve: "gatsby-plugin-social-cards",
            options: {
              // ommit to skip
              authorImage: "./static/profile_pic.png",
              // image to use when no cover in frontmatter
              backgroundImage: "./static/profile_pic.png",
              // author to use when no auth in frontmatter
              defaultAuthor: "David Fisher",
              // card design
              design: "default", // 'default' or 'card'
            },
          },
          // { resolve: `gatsby-remark-social-cards` },
          // {
          //   resolve: `gatsby-remark-twitter-cards`,
          //   options: {
          //     title: "anti/pattern", // website title
          //     separator: "|", // default
          //     author: "alessia bellisario",
          //     background: require.resolve("./src/assets/base.png"), // path to 1200x630px file or hex code, defaults to black (#000000)
          //     fontColor: "#228B22", // defaults to white (#ffffff)
          //     titleFontSize: 96, // default
          //     subtitleFontSize: 60, // default
          //     fontStyle: "monospace", // default
          //     // fontFile: require.resolve("./assets/fonts/someFont.ttf"), // will override fontStyle - path to custom TTF font
          //     useFrontmatterSlug: false, // default, if true it will use the slug defined in the post frontmatter
          //   },
          // },
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-offline",
  ],
}
