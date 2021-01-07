import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Markdown from "markdown-to-jsx"
import GitHubIcon from "@material-ui/icons/GitHub"
import Img from "gatsby-image"
import Button from "@material-ui/core/Button"

import SEO from "../components/SEO"
import OtherProjects from "../components/OtherProjects"
import IconComp from "../components/IconComp"
import Modal from "../components/Modal"

import WebAssetIcon from "@material-ui/icons/WebAsset"

const ProjectPage = ({ data, location }) => {
  // const [openImage, setOpenImage] = React.useState("none")
  // const [openImageTwo, setOpenImageTwo] = React.useState("none")

  const [openImageOne, setOpenImageOne] = React.useState(false)
  const [openImageTwo, setOpenImageTwo] = React.useState(false)
  const [openImageThree, setOpenImageThree] = React.useState(false)

  const handleOpenImageOne = () => {
    setOpenImageOne(true)
  }

  const handleOpenImageTwo = () => {
    setOpenImageTwo(true)
  }

  const handleOpenImageThree = () => {
    setOpenImageThree(true)
  }

  const handleCloseImageOne = () => {
    setOpenImageOne(false)
  }

  const handleCloseImageTwo = () => {
    setOpenImageTwo(false)
  }

  const handleCloseImageThree = () => {
    setOpenImageThree(false)
  }

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
    designImageOne,
    designImageTwo,
    designImageTitle,
    codeSnippetOne,
    codeSnippetTwo,
    codeSnippetThree,
    codeSnippetTextOne,
    codeSnippetTextTwo,
    codeSnippetTextThree,
    codeSnippetTitleOne,
    codeSnippetTitleTwo,
    codeSnippetTitleThree,
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

  // const handleImgOneButton = () => {
  //   if (openImage === "none") {
  //     setOpenImage("inline")
  //   } else {
  //     setOpenImage("none")
  //   }
  // }

  // const handleImgTwoButton = () => {
  //   if (openImageTwo === "none") {
  //     setOpenImageTwo("inline")
  //   } else {
  //     setOpenImageTwo("none")
  //   }
  // }

  const thirdImageComp = (
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
        alt="third"
      />
    </div>
  )

  return (
    <Layout colour={"white"}>
      <section className="project-page">
        <SEO title={title} pathname={location.pathname} />
        <div className="project-page-center">
          <div className="project-page-desc">
            <h1>{title}</h1>
            <Markdown>{description}</Markdown>
          </div>
          <div className="project-headings">
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
              <a href={github} rel="noreferrer noopener" target="_blank">
                <GitHubIcon fontSize="large" />
              </a>
            </div>
            <div className="project-page-url">
              <h5>LIVE LINK</h5>
              <a href={url} rel="noreferrer noopener" target="_blank">
                <WebAssetIcon fontSize="large" />
              </a>
            </div>
          </div>
          <img
            src={firstImage.publicURL}
            data-sal="slide-right"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="1000"
            className="project-page-img-first"
            alt="first"
          />

          <div className="project-page-features">
            <h2>Features</h2>
            {features.map((feature, index) => (
              <p key={index}>> {feature.title}</p>
            ))}
          </div>

          <div className="project-page-goal">
            <h2>Project Goal</h2>
            <Markdown>{goalDesc}</Markdown>
          </div>

          {designImageTitle ? (
            <div className="project-page-design-img-container">
              <h2>{designImageTitle}</h2>
              <img
                src={designImageTwo.publicURL}
                className="project-page-design-img-one"
                alt="designImageTwo"
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-easing="ease"
                data-sal-duration="1000"
              />
              <img
                src={designImageOne.publicURL}
                className="project-page-design-img-one"
                alt="designImageTwo"
                data-sal="slide-right"
                data-sal-delay="100"
                data-sal-easing="ease"
                data-sal-duration="1000"
              />
              <div className="project-page-technologies">
                <div className="project-page-tech">
                  <h2>Technologies</h2>
                  <Markdown>{stackDescr}</Markdown>
                </div>
                <div className="project-page-tech-list">
                  {tech.map((v, index) => {
                    return <IconComp key={index} title={v.title} />
                  })}
                </div>
              </div>
            </div>
          ) : (
            <React.Fragment>
              <div className="project-page-tech">
                <h2>Technologies</h2>
                <Markdown>{stackDescr}</Markdown>
              </div>
              <div className="project-page-tech-list">
                {tech.map((v, index) => {
                  return <IconComp key={index} title={v.title} />
                })}
              </div>
            </React.Fragment>
          )}

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
            alt="second"
          />

          {codeSnippetOne ? (
            <div className="project-page-code-responsive">
              {thirdImageComp}
              <h2>Code Snippets</h2>
              <div className="project-page-code-container">
                <Modal
                  open={openImageOne}
                  handleOpen={() => handleOpenImageOne()}
                  handleClose={() => handleCloseImageOne()}
                  img={codeSnippetOne.publicURL}
                  title={codeSnippetTitleOne}
                  text={codeSnippetTextOne}
                />
                {codeSnippetTwo ? (
                  <Modal
                    open={openImageTwo}
                    handleOpen={() => handleOpenImageTwo()}
                    handleClose={() => handleCloseImageTwo()}
                    img={codeSnippetTwo.publicURL}
                    title={codeSnippetTitleTwo}
                    text={codeSnippetTextTwo}
                  />
                ) : null}
                {codeSnippetThree ? (
                  <Modal
                    open={openImageThree}
                    handleOpen={() => handleOpenImageThree()}
                    handleClose={() => handleCloseImageThree()}
                    img={codeSnippetThree.publicURL}
                    title={codeSnippetTitleThree}
                    text={codeSnippetTextThree}
                  />
                ) : null}
              </div>
            </div>
          ) : (
            thirdImageComp
          )}

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
      designImageOne {
        publicURL
      }
      designImageTitle
      designImageTwo {
        publicURL
      }
      codeSnippetOne {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
        publicURL
      }
      codeSnippetTwo {
        publicURL
      }
      codeSnippetThree {
        publicURL
      }
      codeSnippetTitleOne
      codeSnippetTitleTwo
      codeSnippetTitleThree
      codeSnippetTextOne
      codeSnippetTextTwo
      codeSnippetTextThree
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
