import React from "react"
import Image from "gatsby-image"
import Markdown from "markdown-to-jsx"
import Button from "@material-ui/core/Button"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

import SkillTag from "./SkillTag"

export default function Index({ data }) {
  const { info, stack, image } = data

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
          <Image
            fluid={image.childImageSharp.fluid}
            className="about-img-border"
          />
        </div>
        <h2
          data-sal="slide-left"
          data-sal-delay="200"
          data-sal-easing="ease"
          data-sal-duration="1000"
          className="about-title"
        >
          Hi, I'm David Fisher. <br />A <span> Developer</span> living in
          London.
        </h2>
        <div className="about-text">
          <Markdown
            data-sal="slide-left"
            data-sal-delay="350"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            {info}
          </Markdown>

          <div
            className="about-contact"
            data-sal="slide-left"
            data-sal-delay="350"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <Button
              href={"https://www.linkedin.com/in/davidlfisher/"}
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
          </div>
        </div>

        <div
          className="about-stack-container"
          data-sal="slide-left"
          data-sal-delay="350"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          {stack.map(item => {
            return <SkillTag key={stack.id}>{item.title}</SkillTag>
          })}
        </div>
      </div>
    </section>
  )
}
