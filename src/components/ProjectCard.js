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
  github,
  bullets
}) {
  console.log(impact);
  return (
    <li className="item">
      <div className="inner">
        <a href={url}>
          <Img fixed={image.fluid} objectFit="cover" objectPosition="50% 50%" />
          <span className="name">{siteName}</span>
        </a>
      </div>
      <div className="outer">
        <div>
          <p>{description.description}</p>
          <p>
          <strong>Role: </strong>
          {role}
          </p>

          <strong>Impact: </strong>
          <ul>
            {bullets.map((bullet, index)=><li key={index}>{bullet}</li>)}
          </ul>
          {/* <span
            dangerouslySetInnerHTML={{
              __html: impact.childMarkdownRemark.html,
            }}
          ></span> */}
          <strong>Stack: </strong>
          {tech}
        </div>

        <div className="d-flex justify-content-between">
          <div className="see-more">
            <a className="small" target="blank" href={github}>
              <span> GitHub </span>
            </a>
          </div>
          <div className="see-more">
            <a className="small" target="blank" href={url}>
              <span>View Live</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
