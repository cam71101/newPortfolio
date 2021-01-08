import React from "react"
import Layout from "../components/Layout"

import SEO from "../components/SEO"
import Projects from "../components/Projects"
import About from "../components/About"
import Blogs from "../components/Blogs"

export default function Index({ data }) {
  const {
    allStrapiProjects: { nodes: projects },
  } = data

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout
      logo={data.about.nodes[0].logo.childImageSharp.fluid}
      logoFixed={data.about.nodes[0].logo.childImageSharp.fixed}
      logoURL={data.about.nodes[0].logo.publicURL}
    >
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
        logo {
          id
          childImageSharp {
            fluid(quality: 50) {
              ...GatsbyImageSharpFluid_noBase64
            }
            fixed(width: 130) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
          publicURL
        }
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
