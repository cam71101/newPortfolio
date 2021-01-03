import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"

import SkillTag from "./SkillTag"

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link
      to={`/blogs/${slug}`}
      key={id}
      data-sal="slide-up"
      data-sal-delay="100"
      data-sal-easing="ease"
      data-sal-duration="1000"
    >
      <Card elevation={6}>
        <article>
          <CardActionArea>
            {image && (
              <Image
                fluid={image.childImageSharp.fluid}
                className="blog-img"
              ></Image>
            )}
            <div className="blog-card">
              <h4>{title}</h4>
              <p>{desc}</p>
            </div>
          </CardActionArea>
          <div className="blog-footer">
            <SkillTag>{category}</SkillTag>
            <p>{date}</p>
          </div>
        </article>
      </Card>
    </Link>
  )
}

Blog.protoTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Blog
