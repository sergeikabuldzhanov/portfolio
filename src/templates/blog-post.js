import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import moment from "moment";
import { DiscussionEmbed } from "disqus-react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Share from "../components/share";

export default function BlogPost(props) {
  const data = props.data.contentfulBlogs;
  const disqusShortname = "ksportfolio";
  const disqusConfig = {
    identifier: data.id,
    title: data.title,
  };

  const siteurl = props.data.contentfulSiteInformation.siteUrl + "/";
  const twiteerhandle = props.data.contentfulSiteInformation.twiteerHandle;
  const socialConfigs = {
    site: {
      siteMetadata: { siteurl, twiteerhandle },
    },
    title: data.title,
    slug: data.slug,
  };

  return (
    <Layout>
      <SEO
        title={data.title}
        keywords={[
          `Sergei Kabuldzhanov`,
          `Web Developer`,
          `Frontend Developer`,
          `Developer`,
          `${data.title}`,
        ]}
      />
      <div className="site-container blog-post">
        <div className="container">
          {data.featureImage ? (
            <Img
              className="feature-img"
              fixed={data.featureImage.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
            />
          ) : (
            <div className="no-image"></div>
          )}

          <div className="details">
            <h1 className="title">{data.title}</h1>
            <span className="date">
              <i class="fas fa-calendar-alt"></i>{" "}
              {moment(data.createdAt).format("LL")}
            </span>
            <div
              dangerouslySetInnerHTML={{
                __html: data.description.childMarkdownRemark.html,
              }}
            />
          </div>
          <Share
            socialConfig={{
              ...socialConfigs.site.siteMetadata.twiteerhandletitle,
              config: {
                url: `${siteurl}${socialConfigs.slug}`,
                title: `${socialConfigs.title}`,
              },
            }}
          />
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      id
      title
      slug
      featureImage {
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
      description {
        childMarkdownRemark {
          html
        }
      }
      createdAt
    }
    contentfulSiteInformation {
      siteUrl
      twiteerHandle
    }
  }
`;
