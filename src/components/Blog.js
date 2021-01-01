import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import SkillTag from "./SkillTag"

const useStyles = makeStyles({
  root: {
    maxWidth: "26rem",
    marginBottom: "2rem",
  },
  media: {
    height: 140,
  },
  content: {
    height: 110,
    marginBottom: "1rem",
  },
})

const Blog = ({ id, title, image, date, category, slug, desc }) => {
  const classes = useStyles()

  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <Card className={classes.root} elevation={6}>
        <CardActionArea>
          {image && (
            <Image
              fluid={image.childImageSharp.fluid}
              className="blog-img"
            ></Image>
          )}
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography className={classes.tag}>
            <SkillTag>{category}</SkillTag>
          </Typography>
          <Button size="small" color="primary">
            {date}
          </Button>
        </CardActions>
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
