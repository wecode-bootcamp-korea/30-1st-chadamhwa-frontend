import React from 'react';

const handleStar = starIndex => {
  if (starIndex === 0) {
    return 'fa-star-o';
  } else if (starIndex === 1) {
    return 'fa-star';
  }
};

const Rate = ({ score }) => {
  let int = Math.round(score);
  let arr = [0, 0, 0, 0, 0];

  const divideScore = () => {
    for (let i = 0; i < int; i++) {
      arr[i] = 1;
    }

    return arr;
  };

  return (
    <span>
      {divideScore().map((ele, index) => {
        return (
          <i
            key={index}
            className={`fa ${handleStar(ele)}`}
            aria-hidden="true"
          />
        );
      })}
    </span>
  );
};

export default Rate;
