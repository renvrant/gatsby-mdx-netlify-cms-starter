import React from "react";
import { graphql } from "gatsby";

export const HomePageTemplate = ({
                                   title,
                                   headerImage,
                                   sponsors,
                                   sections
                                 }) => (
  <>
    <Header heading={title} backgroundImage={headerImage} />

      {sponsors.map(sponsor => (
        <a>{sponsor.url}</a>
      ))}
      {sections.map(section => (
        <h1>{ section.title }</h1>
        {section.body}
      ))}
  </>
);

const HomePage = (data) => {
  console.log(data);
  return (<h1>Testing Homepage</h1>)
};

export default HomePage;

export const homePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        header_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sponsors {
          type
          url
          logo {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        sections {
          title
          body
        }
      }
    }
  }
`;
