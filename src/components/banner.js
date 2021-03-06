import React from "react";
import Img from "gatsby-image";

export default function Banner({ data }) {
  return (
    <section className="banner">
      <Img
        fluid={data.bannerImage.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
      />
      <div className="container">
        <div className="banner-details">
          <span>Hey, I'm {data.name.split(' ')[0]}</span>
          <h1>I'm a {data.designation}.</h1>
          <ul className="sub-data">
            {data.bannerList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
          <ul className="social">
            <li>
              <a
                className="fab fa-linkedin-in"
                href={data.linkdin}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              <a
                className="fab fa-github"
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
            <li>
              <a
                className="fab fa-cv"
                href={data.cv.file.url}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
