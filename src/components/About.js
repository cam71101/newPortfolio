import React from "react"

import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Image from "gatsby-image"
import Markdown from "markdown-to-jsx"
import Button from "@material-ui/core/Button"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

import SkillTag from "./SkillTag"

// const useStyles = makeStyles(theme => ({
//   root: {
//     minHeight: "calc(100vh - 5rem - 9rem)",
//     padding: "4rem 0",
//     marginBottom: "7rem",
//   },
//   container: {
//     width: "90vw",
//     margin: "0 auto",
//     maxWidth: "1170px",
//     [theme.breakpoints.up("md")]: {
//       display: "grid",
//       gridTemplateColumns: "repeat(12, 1fr)",
//       alignItems: "center",
//       columnGap: "4rem",
//     },
//   },
//   img: {
//     marginBottom: "2rem",
//     height: "20rem",
//     borderRadius: "100%",
//     [theme.breakpoints.up("md")]: {
//       gridColumn: "1 / span 5",
//       margiBottom: 0,
//       height: "25rem",
//       borderRadius: "50%",
//     },
//   },
//   info: {
//     marginBottom: "2rem",
//     textAlign: "left",
//     marginLeft: 0,
//     marginRight: 0,
//     [theme.breakpoints.up("md")]: {
//       gridColumn: "6 / -1",
//     },
//   },
//   stackContainer: {
//     marginBottom: "2rem",
//     textAlign: "left",
//     marginLeft: 0,
//     marginRight: 0,
//     [theme.breakpoints.up("md")]: {
//       gridColumn: "2 / -1",
//     },
//   },
//   links: {
//     marginTop: ".5rem",
//     padding: 0,
//   },
//   stack: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   button: {
//     paddingLeft: 0,
//     minWidth: 0,
//   },
//   text: {
//     "& span": {
//       background:
//         "linear-gradient(-60deg, #ff0040, #904e95, #e73c7e, #0080ff);",
//       WebkitBackgroundClip: "text",
//       WebkitTextFillColor: "transparent",
//     },
//   },
// }))

// const options = {
//   overrides: {
//     h1: {
//       component: Typography,
//       props: {
//         gutterBottom: true,
//         variant: "h2",
//         align: "center",
//       },
//     },
//     h2: {
//       component: Typography,
//       props: { gutterBottom: true, variant: "h4", align: "center" },
//     },
//     p: {
//       component: Typography,
//       props: { paragraph: true, variant: "subtitle1" },
//     },
//   },
// }

export default function Index({ data }) {
  const { info, stack, image, title } = data

  // const classes = useStyles()

  return (
    <section className="about-page">
      <div className="section-center about-center">
        <div
          data-sal="slide-right"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-duration="1000"
          className="about-img"
        >
          <Image fluid={image.childImageSharp.fluid} />
        </div>
        <div className="about-text">
          {/* <Typography
            variant={"h2"}
            className={classes.text}
            key={1}
            data-sal="slide-left"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Hi, I'm David Fisher. <br />A <span> Developer</span> living in
            London.
          </Typography> */}
          <Markdown
            // options={options}
            data-sal="slide-left"
            data-sal-delay="350"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            {info}
          </Markdown>

          {/* <Typography className={classes.links}>
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
          </Typography> */}
        </div>
        {/* <div className={classes.stackContainer}>
          <Typography className={classes.stack}>
            {stack.map(item => {
              return <SkillTag key={stack.id}>{item.title}</SkillTag>
            })}
          </Typography>
        </div> */}
      </div>
    </section>
  )
}
