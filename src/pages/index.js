import React from "react"
import Layout from "../components/layout"

import SEO from "../components/SEO"

import Projects from "../components/Projects"
import About from "../components/About"
import Blogs from "../components/Blogs"

// import "fontsource-rubik"

export default function Index({ data }) {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <SEO title="Home" description="Home page" />
      <About data={data.about.nodes[0]} />
      <Projects projects={projects} />
      <Blogs data={data} showLink title={"Latest Blogs"} />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(sort: { fields: Priority, order: ASC }) {
      nodes {
        github
        id
        description
        title
        url
        link
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        id
        date(formatString: "MMMM Do, YYYY")
        title
        category
        desc
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
