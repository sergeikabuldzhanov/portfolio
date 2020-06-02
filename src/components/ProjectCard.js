import React from "react";
import Img from "gatsby-image";

export default function ProjectCard({
  url,
  image,
  siteName,
  description,
  role,
  impact,
  tech,
}) {
  return (
    <li className="item">
      <div className="inner">
        <a href={url}>
          <Img fixed={image.fluid} objectFit="cover" objectPosition="50% 50%" />
          <span className="name">{siteName}</span>
        </a>
      </div>
      <div className="outer">
        <p>
          {description && description.description}
          <br />
          <strong>Role: </strong>
          {role}
          <br />
          <strong>Impact: </strong>
          <span dangerouslySetInnerHTML={{
                __html: impact && impact.childMarkdownRemark.html,
              }}/>
          <strong>Stack: </strong>
          {tech}
        </p>

        <div className="d-flex justify-content-between">
          <div className="see-more">
            <a className="small">
              <span> GitHub </span>
            </a>
          </div>
          <div className="see-more">
            <a className="small">
              <span>View Live</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}