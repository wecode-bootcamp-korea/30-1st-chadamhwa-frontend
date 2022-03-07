import React from 'react';

function Rate({ score }) {
  // 0 ~ 5, 3.5
  switch (score) {
    case 0:
      return (
        <span>
          {/* {test.map()} */}
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
        </span>
      );
    case 0.5:
      return (
        <span>
          <i className="fa fa-star-half" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
        </span>
      );
    case 1:
      return (
        <span>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
        </span>
      );
    case 1.5:
      return (
        <span>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star-half" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
        </span>
      );
    case 2.0:
      return (
        <span>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
        </span>
      );
    case 2.5:
      return (
        <span>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star-half" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
        </span>
      );
    case 3.0:
      return (
        <span>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
        </span>
      );
    case 3.5:
      return (
        <span>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star-half" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
        </span>
      );
    case 4.0:
      return (
        <span>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star-half" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
        </span>
      );
    case 4.5:
      return (
        <span>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star-half" aria-hidden="true" />
        </span>
      );
    case 5:
      return (
        <span>
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
          <i className="fa fa-star" aria-hidden="true" />
        </span>
      );

    default:
      return (
        <span>
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
          <i className="fa fa-star-o" aria-hidden="true" />
        </span>
      );
  }
}

export default Rate;
