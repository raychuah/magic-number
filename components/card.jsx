import React from "react";

const Card = ({ step, card, ans }) => {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  // console.log(card[`card${step}`]);

  if (step > 5)
    return (
      <div className="card">
        <h4 className="card__title">The number in your mind is....</h4>
        <p className="card__desc">{ans}</p>
      </div>
    );

  return (
    <>
      {step === 0 ? (
        <div className="card">
          <h4 className="card__title">Magic Number</h4>
          <p className="card__desc">Pick a number between 1 and 30</p>
        </div>
      ) : (
        <div className={`card card__color${step}`}>
          <ul className="card__box">
            {card[`card${step}`].map(num => (
              <li key={num} className="card__box-inner">
                {num}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Card;
