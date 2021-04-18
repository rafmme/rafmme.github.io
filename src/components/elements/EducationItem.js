import React from "react";

function EducationItem(props) {
  return (
    <div className="timeline-item is-success">
      <div className="timeline-marker is-image is-32x32">
        <img src="" alt="" />
      </div>
      <div className="timeline-content">
        <p className="heading">{props.date}</p>
        <h1 className="title is-4">{props.institution}</h1>
        <p style={{ maxWidth: "25em" }}>{props.area}</p>
        <p style={{ maxWidth: "25em" }}>{props.courses}</p>
      </div>
    </div>
  );
}

export default EducationItem;
