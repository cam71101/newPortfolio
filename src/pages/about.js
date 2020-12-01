import React from "react"
import Title from "../components/Title"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import SkillTag from "../components/SkillTag"
import { Typography } from "@material-ui/core"
import Image from "gatsby-image"
import Markdown from "markdown-to-jsx"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"
import { Link } from "gatsby"
import { Button } from "@material-ui/core"
import SEO from "../components/SEO"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "calc(100vh - 5rem - 9rem)",
    padding: "4rem 0",
  },
  container: {
    width: "90vw",
    margin: "0 auto",
    maxWidth: "1170px",
    [theme.breakpoints.up("md")]: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      alignItems: "center",
      columnGap: "4rem",
    },
  },
  img: {
    marginBottom: "2rem",
    height: "20rem",
    borderRadius: "100%",
    [theme.breakpoints.up("md")]: {
      gridColumn: "1 / span 5",
      margiBottom: 0,
      height: "25rem",
      borderRadius: "50%",
    },
  },
  info: {
    marginBottom: "2rem",
    textAlign: "left",
    marginLeft: 0,
    marginRight: 0,
    [theme.breakpoints.up("md")]: {
      gridColumn: "6 / -1",
    },
  },
  links: {
    marginTop: ".5rem",
    padding: 0,
  },
  stack: {
    display: "flex",
    flexWrap: "wrap",
  },
  button: {
    paddingLeft: 0,
    minWidth: 0,
  },
}))

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h2",
        align: "center",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h4", align: "center" },
    },
    p: {
      component: Typography,
      props: { paragraph: true, variant: "subtitle1" },
    },
  },
}

const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const classes = useStyles()
  const { info, stack, image, title } = nodes[0]

  return (
    <Layout>
      <SEO title="About" description="About me" />
      <section className={classes.root}>
        <div className={classes.container}>
          <Image fluid={image.childImageSharp.fluid} className={classes.img} />
          <article className={classes.info}>
            <Title title={title} />
            <Markdown options={options}>{info}</Markdown>
            <Typography className={classes.stack}>
              {stack.map(item => {
                return <SkillTag key={stack.id}>{item.title}</SkillTag>
              })}
            </Typography>
            <Typography className={classes.links}>
              <Button
                href={"https://www.linkedin.com/in/davidlfisher/"}
                className={classes.button}
                target="_blank"
              >
                <LinkedInIcon fontSize="large" />
              </Button>
              <Button href={"mailto:david@d-fisher.com"}>
                <EmailIcon fontSize="large" />
              </Button>
              <Button href={"https://github.com/cam71101"} target="_blank">
                <GitHubIcon fontSize="large" />
              </Button>
            </Typography>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default About
