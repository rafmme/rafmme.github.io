import React from "react";
import EducationItem from "./EducationItem";
import Resume from "../../resume.json";

function Education() {
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
      {Resume.education
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
            Resume.education
              .filter(education => new Date(education.startDate).getFullYear() === year)
              .map((item, j) => {
                return (
                  <EducationItem
                    key={j}
                    date={new Date(item.startDate).toLocaleString("en-UK", {
                      month: "long",
                      year: "numeric"
                    })}
                    institution={item.institution}
                    area={item.area}
                    courses={item.courses}
                  />
                );
              })
          );
          return content;
        })}
    </div>
  );
}

export default Education;
