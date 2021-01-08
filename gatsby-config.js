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
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 800,
      },
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.2, // Percentage of an element's area that needs to be visible to launch animation
        once: true, // Defines if animation needs to be launched once
        disable: false, // Flag for disabling animations

        // Advanced Options
        // selector: "[data-sal]", // Selector of the elements to be animated
        // animateClassName: "sal-animate", // Class name which triggers animation
        // disabledClassName: "sal-disabled", // Class name which defines the disabled state
        // rootMargin: "0% 50%", // Corresponds to root's bounding box margin
        // enterEventName: "sal:in", // Enter event name
        // exitEventName: "sal:out", // Exit event name
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`karla`],
        display: "swap",
      },
    },

    // {
    //   resolve: `gatsby-plugin-global-styles`,
    //   options: {
    //     pathToConfigModule: `src/styles/GlobalStyleComponent`,
    //     props: {
    //       other: {
    //         light: true,
    //       },
    //     },
    //   },
    // },
    // "gatsby-plugin-top-layout",
    // "gatsby-plugin-material-ui",
    // `gatsby-theme-material-ui`,
    // "gatsby-plugin-layout",

    "gatsby-plugin-react-helmet",
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
        ],
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
          },
        ],
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
        contentTypes: ["projects", "blogs", "project-pages"],
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
