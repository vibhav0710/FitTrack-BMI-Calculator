import { useMemo, useState } from "react";

const App = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(180);
  const [result, setResult] = useState(22)

  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleOutput = (weight, height) => {
    const calcHeight = height/100
    const bmi = (weight/(calcHeight**2)).toFixed(2)
    setResult(bmi)
  }

  // const output = useMemo(() => {
  //   const calcHeight = height/100
  //   const bmi = (weight/calcHeight**2).toFixed(2)
  //   return (bmi)
  // }, [weight, height])

  let healthStat;

  switch (true) {
    case (result < 18.5):
      healthStat = `Underweight.\nEat more Exercise more.`
      break;
    
    case (result >= 18.5 && result <= 24.9):
      healthStat = `Healthy.\nEnjoy your life.`
      break;
    
    case (result >= 25):
      healthStat = `Overweight.\nEat less Exercise more`
      break;
  }

  let color = result < 18.5 ? "red" : (result >= 18.5 && result <= 24.9 ? "green" : "red");


  return (
    <div className="container">
      <h1>BMI CALCULATOR</h1>
      <div className="slider-container">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          type="range"
          className="input-slider"
          step="1"
          min="40"
          max="200"
          onChange={handleWeight}
          />
      </div>
      <div className="slider-container">
        <p className="slider-output">Height: {height} cm</p>
        <input
          type="range"
          className="input-slider"
          step="1"
          min="50"
          max="300"
          onChange={handleHeight}
          />
      </div>
      <button onClick={() => handleOutput(weight, height)}>CALCULATE</button>
      <div className={"output-section " + color}>
        {/* <p className="output">{output}</p> */}
        <p className="output">Your BMI is {result}</p>
        <p>You are {healthStat}</p>
      </div>
    </div>
  );
};

export default App;
