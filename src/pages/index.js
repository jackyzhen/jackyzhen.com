import React from 'react'
import Helmet from 'react-helmet'
import Post from '../components/Post'
import Sidebar from '../components/Sidebar'

class IndexRoute extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata
    const posts = this.props.data.allMarkdownRemark.edges
    const items = posts.map(p => <Post data={p} key={p.node.fields.slug} />)

    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={subtitle} />
        </Helmet>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">{items}</div>
        </div>
      </div>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        subtitle
        menu {
          label
          path
        }
        author {
          name
          email
          github
          linkedin
          rss
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`
