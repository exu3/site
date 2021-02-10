import React from "react";
import "./Card.scss";

class Card extends React.Component {
  render() {
    const { blurb, projectName, metaInfo, image, alt } = this.props;
    return (
      <div className="column">
        <div className="card">
          <div className="card-header">
            <figure className="thumbnail">
              <img src={image} alt={alt} />
            </figure>
            <p className="card-title">{projectName}</p>
            <p className="card-meta">{metaInfo}</p>
          </div>
          <div className="card-body">{blurb}</div>
          <div className="card-footer">
            <button className="btn"> icon </button>
            <button className="btn"> icon </button>
            <button className="btn"> icon </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
