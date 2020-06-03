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
              <ProjectCard key={item.node.siteName} {...item.node} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
