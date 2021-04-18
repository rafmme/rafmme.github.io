import React from "react";
import ProjectItem from "./ProjectItem";
import Resume from "../../resume.json";

function Project() {
  return (
    <div className="timeline is-centered">
      <header className="timeline-header">
        <span className="tag is-medium is-dark">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      {Resume.project
        .map(item => {
          return new Date(item.startDate).getFullYear();
        })
        .map((year, i) => {
          let content = [];
          content.push(
            <header key={i} className="timeline-header">
              <span className="tag is-success">{year}</span>
            </header>
          );
          content.push(
            Resume.project
              .filter(project => new Date(project.startDate).getFullYear() === year)
              .map((item, j) => {
                return (
                  <ProjectItem
                    key={j}
                    date={new Date(item.startDate).toLocaleString("en-UK", {
                      month: "long",
                      year: "numeric"
                    })}
                    url={item.url}
                    summary={item.summary}
                    name={item.name}
                    tools={item.tools}
                  />
                );
              })
          );
          return content;
        })}
    </div>
  );
}

export default Project;
