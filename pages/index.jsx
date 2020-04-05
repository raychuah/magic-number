import React, { useState } from "react";
import Layout from "../components/layout";
import Card from "../components/card";
import Button from "../components/button";

const Index = () => {
  const cardNum = {
    card1: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29],
    card2: [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30],
    card3: [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30],
    card4: [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30],
    card5: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
  };

  const [step, setStep] = useState(0);
  const [ans, setAns] = useState(0);

  const restart = () => {
    setStep(0);
    setAns(0);
  };

  const next = () => {
    setStep(step + 1);
  };

  const yesClick = () => {
    next();
    // console.log("yes");
    if (step > 0 && step <= Object.keys(cardNum).length) {
      console.log("inside");
      setAns(ans + cardNum[`card${step}`][0]);
    }
    console.log(step);
    console.log(ans);
  };

  const noClick = () => {
    next();
    console.log("no");
  };

  return (
    <Layout>
      <section className="flex-center-center">
        <Card step={step} card={cardNum} ans={ans}></Card>
      </section>
      <section className="flex-center-center">
        {step === 0 ? <Button handleClick={next}>Next</Button> : null}
        {step > 0 && step <= Object.keys(cardNum).length ? (
          <h1>Is your number on this card?</h1>
        ) : null}
      </section>
      <section className="flex-center-center">
        {step > 0 && step <= Object.keys(cardNum).length ? (
          <>
            <Button color="red" handleClick={yesClick}>
              Yes
            </Button>
            <Button color="green" handleClick={noClick}>
              No
            </Button>
          </>
        ) : null}
        {step === 6 ? (
          <Button color="green" handleClick={restart}>
            Restart
          </Button>
        ) : null}
      </section>
    </Layout>
  );
};

export default Index;
