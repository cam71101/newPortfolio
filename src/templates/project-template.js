import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Markdown from "markdown-to-jsx"
import GitHubIcon from "@material-ui/icons/GitHub"

import SEO from "../components/SEO"
import OtherProjects from "../components/OtherProjects"
import IconComp from "../components/IconComp"
import Modal from "../components/Modal"

import WebAssetIcon from "@material-ui/icons/WebAsset"

const ProjectPage = ({ data, location }) => {
  const [openImageOne, setOpenImageOne] = React.useState(false)
  const [openImageTwo, setOpenImageTwo] = React.useState(false)
  const [openImageThree, setOpenImageThree] = React.useState(false)

  const handleOpenImageOne = img => {
    cacheImages([img.src]).then(value => {
      setOpenImageOne(true)
    })
  }

  const handleOpenImageTwo = img => {
    cacheImages([img.src])
    setOpenImageTwo(true)
  }

  const handleOpenImageThree = img => {
    cacheImages([img.src])
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
    subtitle,
  } = data.project

  const projects = data.allStrapiProjects.nodes

  const filteredProjects = projects.filter(project => {
    const projectTitle = project.title.toLowerCase()
    const pageTitle = title.toLowerCase()
    return projectTitle !== pageTitle
  })

  const cacheImages = async srcArray => {
    const promises = await srcArray.map(src => {
      return new Promise(function (resolve, reject) {
        const img = new Image()
        img.src = src
        img.onLoad = resolve()
        img.onError = reject()
      })
    })
    await Promise.all(promises)
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)

    if (codeSnippetOne && codeSnippetTwo && codeSnippetThree) {
      cacheImages([
        codeSnippetOne.childImageSharp.fluid.src,
        codeSnippetTwo.childImageSharp.fluid.src,
        codeSnippetThree.childImageSharp.fluid.src,
      ])
    } else if (codeSnippetOne && codeSnippetTwo) {
      cacheImages([
        codeSnippetOne.childImageSharp.fluid.src,
        codeSnippetTwo.childImageSharp.fluid.src,
      ])
    } else {
      cacheImages([codeSnippetOne.childImageSharp.fluid.src])
    }
  }, [codeSnippetOne, codeSnippetTwo, codeSnippetThree])

  const thirdImageComp = (
    <div
      className="project-page-img-responsive-container"
      data-sal="fade"
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
    <Layout logoFixed={data.about.nodes[0].logo.childImageSharp.fixed}>
      <section className="project-page">
        <SEO
          title={title}
          pathname={location.pathname}
          description={subtitle}
        />
        <div className="project-page-center">
          <div
            className="project-page-desc"
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            <h1>{title}</h1>
            <Markdown>{description}</Markdown>
          </div>
          <div
            className="project-headings"
            data-sal="fade"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
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
            className="project-page-img-first"
            alt="first"
            data-sal="fade"
            data-sal-delay="500"
            data-sal-easing="ease"
            data-sal-duration="800"
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
                alt="design"
                data-sal="fade"
                data-sal-delay="100"
                data-sal-easing="ease"
                data-sal-duration="1000"
              />
              <img
                src={designImageOne.publicURL}
                className="project-page-design-img-one"
                alt="design"
                data-sal="fade"
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
            data-sal="fade"
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
                  handleOpen={img => handleOpenImageOne(img)}
                  handleClose={() => handleCloseImageOne()}
                  img={codeSnippetOne.childImageSharp.fluid}
                  title={codeSnippetTitleOne}
                  text={codeSnippetTextOne}
                />
                {codeSnippetTwo ? (
                  <Modal
                    open={openImageTwo}
                    handleOpen={img => handleOpenImageTwo(img)}
                    handleClose={() => handleCloseImageTwo()}
                    img={codeSnippetTwo.childImageSharp.fluid}
                    title={codeSnippetTitleTwo}
                    text={codeSnippetTextTwo}
                  />
                ) : null}
                {codeSnippetThree ? (
                  <Modal
                    open={openImageThree}
                    handleOpen={img => handleOpenImageThree(img)}
                    handleClose={() => handleCloseImageThree()}
                    img={codeSnippetThree.childImageSharp.fluid}
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
      subtitle
      secondImage {
        publicURL
      }
      thirdImage {
        childImageSharp {
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
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
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
        publicURL
      }
      codeSnippetTwo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
        publicURL
      }
      codeSnippetThree {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
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
    allStrapiProjects(sort: { fields: Priority, order: ASC }) {
      nodes {
        github
        id
        description
        title
        link
        stack {
          id
          title
        }
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`

export default ProjectPage
