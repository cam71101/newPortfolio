import React from "react"
import { Link } from "gatsby"
import Title from "../components/Title"
import Blog from "./Blog"

const Blogs = ({ data, page, title, showLink }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data

  const blogPage = blogs.map(blog => <Blog key={blog.id} {...blog} />)

  const blogSection = blogs
    .slice(0, 3)
    .map(blog => <Blog key={blog.id} {...blog} />)

  return (
    <section className="blogs">
      <Title title={title}></Title>
      <div className="section-center blogs-center">
        {page ? blogPage : blogSection}
      </div>
      {showLink && (
        <Link
          to="/blog"
          className="btn center-btn"
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          <h6>more blogs ></h6>
        </Link>
      )}
    </section>
  )
}

export default Blogs
