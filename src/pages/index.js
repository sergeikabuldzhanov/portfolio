import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Banner from "../components/banner";
import About from "../components/about";
import Work from "../components/work";
import Blogs from "../components/blogs";
import Contact from "../components/contact";

const IndexPage = ({ data }) => (
  <Layout header="home">
    <SEO
      title={data.contentfulAboutMe.designation}
      keywords={[
        `Sergei Kabuldzhanov`,
        `Frontend Developer`,
        `Developer`,
        `Software Developer`,
      ]}
    />
    <Banner data={data.contentfulAboutMe}></Banner>

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "About")
      .map((t) => {
        return <About key={t} data={data.contentfulAboutMe}></About>;
      })}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Blogs")
      .map((t) => {
        return <Blogs key={t} data={data.allContentfulBlogs}></Blogs>;
      })}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Work")
      .map((t) => {
        return <Work key={t} data={data.allContentfulWorks}></Work>;
      })}

    {data.contentfulSiteInformation.menus
      .filter((item) => item === "Contact")
      .map((t) => {
        return <Contact key={t} data={data.contentfulAboutMe.gmail}></Contact>;
      })}
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query AboutQuery {
    contentfulAboutMe {
      name
      photo {
        file {
          url
        }
        fluid {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      designation
      age
      github
      gmail
      id
      linkdin
      twitter
      location
      description {
        childMarkdownRemark {
          html
        }
      }
      bannerImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      bannerList
    }
    allContentfulBlogs(limit: 5, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          title
          slug
          featureImage {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
          createdAt
        }
      }
    }
    allContentfulWorks {
      edges {
        node {
          siteName
          url
          github
          tech
          role
          description{
            description
            childMarkdownRemark {
              html
            }
          }
          impact{
            impact
            childMarkdownRemark {
              html
            }
          }
          image {
            fluid(maxWidth: 600) {
              base64
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
    contentfulSiteInformation {
      menus
    }
  }
`;
