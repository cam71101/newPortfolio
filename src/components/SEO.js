import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const query = graphql`
  {
    site {
      siteMetadata {
        siteTitle: title
        siteDescription: description
        siteUrl
        twitterUsername
        author
        image
      }
    }
  }
`
// const cardImage = node.front

const SEO = ({ title, description, meta, image: metaImage, pathname }) => {
  const { site } = useStaticQuery(query)

  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
  } = site.siteMetadata

  const imageMan = metaImage
    ? `${site.siteMetadata.siteUrl}${metaImage.src}`
    : `${siteUrl}${image}`

  const canonical = pathname ? `${siteUrl}${pathname}` : null
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${siteTitle}`}
      titleTemplate={`%s | ${siteTitle}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: siteDesc,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: imageMan,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  property: "og:image",
                  content: imageMan,
                },
                {
                  property: "og:image:width",
                  content: image.width,
                },
                {
                  property: "og:image:height",
                  content: image.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
                // {
                //   name: "twitter:image",
                //   content: imageMan,
                // },
              ]
        )
        .concat(meta)}
    >
      {/* <meta name="description" content={description || siteDesc} /> */}
      {/* <meta name="image" content={image} /> */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} /> */}
      {/* <meta name="twitter:image" content={`${siteUrl}${image}`} /> */}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
}

export default SEO
