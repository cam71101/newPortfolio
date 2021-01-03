import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Markdown from "markdown-to-jsx"

import Title from "../components/Title"
import Image from "gatsby-image"
import GitHubIcon from "@material-ui/icons/GitHub"

import SEO from "../components/SEO"
import OtherProjects from "../components/OtherProjects"
import IconComp from "../components/IconComp"

import WebAssetIcon from "@material-ui/icons/WebAsset"

const ProjectPage = ({ data, location }) => {
  const {
    title,
    description,
    firstImage,
    github,
    url,
    tech,
    goalDesc,
    secondImage,
    thirdImage,
    hurdlesDesc,
    stackDescr,
    lessons,
    features,
    durationProject,
  } = data.project

  const projects = data.allStrapiProjects.nodes

  const filteredProjects = projects.filter(project => {
    const projectTitle = project.title.toLowerCase()
    const pageTitle = title.toLowerCase()
    return projectTitle !== pageTitle
  })

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  console.log(secondImage)

  return (
    <Layout colour={"white"}>
      <section className="project-page">
        <SEO title={title} pathname={location.pathname} />
        <div className="project-page-center">
          <div className="project-page-desc">
            <h1>{title}</h1>
            <Markdown>{description}</Markdown>
          </div>
          <div className="project-page-time">
            <h5>TIME SPENT ON PROJECT</h5>
            <Markdown>{durationProject}</Markdown>
          </div>
          <div className="project-page-type">
            <h5>TYPE</h5>
            <p>Personal</p>
          </div>
          <div className="project-page-github">
            <h5>REPOSITORY</h5>
            <a href={github} target="_blank">
              <GitHubIcon fontSize="large" />
            </a>
          </div>
          <div className="project-page-url">
            <h5>LIVE LINK</h5>
            <a href={url} target="_blank">
              <WebAssetIcon fontSize="large" />
            </a>
          </div>

          <img
            src={firstImage.publicURL}
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="1000"
            className="project-page-img-first"
          />

          <div className="project-page-features">
            <h2>Features</h2>
            {features.map((feature, index) => (
              <p key={index}>> {feature.title}</p>
            ))}
          </div>

          <div className="project-page-tech-list">
            {tech.map((v, index) => {
              return <IconComp key={index} title={v.title} />
            })}
          </div>

          <div className="project-page-goal">
            <h2>Project Goal</h2>
            <Markdown>{goalDesc}</Markdown>
          </div>

          <div className="project-page-tech">
            <h2>Technologies</h2>
            <Markdown>{stackDescr}</Markdown>
          </div>

          <div className="project-page-hurdles">
            <h2>Technical Hurdles & Solutions</h2>
            <Markdown>{hurdlesDesc}</Markdown>
          </div>

          <img
            src={secondImage.publicURL}
            className="project-page-img-second"
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="1000"
          />
          <div
            className="project-page-img-responsive-container"
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <img
              src={thirdImage.publicURL}
              className="project-page-img-responsive"
            />
          </div>

          <div className="project-page-lessons">
            <h2>Lessons Learned</h2>
            <Markdown>{lessons}</Markdown>
          </div>

          <div className="project-page-projects">
            <h2>Other Projects</h2>
            <OtherProjects projects={filteredProjects} />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProject($Slug: String) {
    project: strapiProjectPages(Slug: { eq: $Slug }) {
      firstImage {
        childImageSharp {
          fixed(quality: 100, width: 1170) {
            ...GatsbyImageSharpFixed
          }
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
        publicURL
      }
      durationProject
      lessons
      goalDesc
      url
      secondImage {
        publicURL
      }
      thirdImage {
        childImageSharp {
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
        publicURL
      }
      features {
        id
        title
      }
      stackDescr
      hurdlesDesc
      description
      github
      type
      title
      tech {
        id
        title
      }
    }
    allStrapiProjects(sort: { fields: Priority, order: ASC }) {
      nodes {
        github
        id
        description
        title
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
  }
`

export default ProjectPage
