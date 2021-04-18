import React from "react";

function ProjectItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{props.date}</p>
        <h1 className="title is-4">{props.name}</h1>
        <p style={{ maxWidth: "20em" }}><a href={props.url}>{props.url}</a></p>
        <p style={{ maxWidth: "20em" }}>{props.summary}</p>
        <p style={{ maxWidth: "20em" }}>{props.tools}</p>
      </div>
    </div>
  );
}

export default ProjectItem;
