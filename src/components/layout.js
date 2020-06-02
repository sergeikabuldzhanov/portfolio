import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.css";

import Header from "./header";
import Footer from "./footer";

import "../css/style.css";
import "../css/font-awesome.css";

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]');
}

const Layout = ({ children, header }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      contentfulSiteInformation {
        siteName
        siteDescription
        logo {
          file {
            url
          }
        }
        menus
      }
    }
  `);

  return (
    <>
      <Header
        data={data.contentfulSiteInformation}
        siteTitle={data.contentfulSiteInformation.siteName}
        header={header}
      />
      <div>
        <main id="home">{children}</main>
      </div>
      <Footer siteName={data.contentfulSiteInformation.siteName} />
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
