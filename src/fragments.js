export const siteFragment = graphql`
  fragment SiteFragment on RootQueryType {
    site {
      siteMetadata {
        title
        social {
          facebook
          github
          instagram
          twitter
        }
        crypto {
          BTC
          LTC
          XMR
          ETH
          ETC
        }
      }
    }
  }
`;

export const markdownMetadataFragment = graphql`
  fragment MarkdownMetadataFragment on MarkdownRemark {
    cover: childImageSharp {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    excerpt
    html
    timeToRead
    fields {
      date
      slug
      url
    }
  }
`;

export const markdownFrontmatterFragment = graphql`
  fragment MarkdownFrontmatterFragment on MarkdownRemark {
    frontmatter {
      cover
      tags
      title
    }
  }
`;
