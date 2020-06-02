import React from "react";
import ProjectCard from "./ProjectCard";

export default function Work({ data }) {
  return (
    <div className="work section" id="Work">
      <div className="container">
        <div className="section-head">
          <h2 className="text-center">Work</h2>
        </div>
        <ul className="work-list">
          {data.edges.map((item, index) => {
            return (
              <ProjectCard key={index} {...item.node} />
              /* <li key={index} className="item">
                <div className="inner">
                  <a href={item.node.url}>
                    <Img
                      fixed={item.node.image.fluid}
                      objectFit="cover"
                      objectPosition="50% 50%"
                    />
                    <span className="name">{item.node.siteName}</span>
                  </a>
                </div>
              </li> */
            );
          })}
        </ul>
      </div>
    </div>
  );
}
