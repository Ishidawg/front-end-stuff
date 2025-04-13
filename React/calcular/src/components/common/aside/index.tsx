import { useEffect, useState } from "react";

interface AsideProps {
  text: string;
}

function Aside({ text }: AsideProps) {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [userValue, setUserValue] = useState<number | null>(null);
  const [score, setScore] = useState<number>(0);
  const [currentOperator, setCurrentOperator] = useState<string>("+");

  const generateRandomNumbers = () => {
    setFirstNumber(Math.floor(Math.random() * 100));
    setSecondNumber(Math.floor(Math.random() * 100));
    setCurrentOperator(returnOperator());
  };

  const returnOperator = () => {
    const operators = ["+", "-", "*", "/"];
    return operators[Math.floor(Math.random() * operators.length)];
  };

  const returnValue = (operator: string) => {
    let result: number;
    switch (operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
      default:
        result = 0;
    }
    return parseFloat(result.toFixed(2));
  };

  const handleCalculate = () => {
    if (userValue === returnValue(currentOperator)) {
      setScore((prevScore) => prevScore + 1);
    } else {
      alert("Você errou! POntos resetados!");
      setScore(0);
    }
    generateRandomNumbers();
  };

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  console.log(returnValue(currentOperator));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "600px",
        maxHeight: "100%",
        zIndex: -1,
        color: "#808080",
        backgroundColor: "#8257E5",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <h2
        style={{
          color: "#f7f7f7",
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Score: {score}
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
          marginTop: "60px",
        }}
      >
        <span
          style={{
            backgroundColor: "#f7f7f7",
            color: "#494D4B",
            fontSize: "1.5rem",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "5px",
            border: "2px solid #494D4B",
          }}
        >
          {firstNumber}
        </span>
        <span
          style={{
            color: "#f7f7f7",
            fontSize: "1.5rem",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {currentOperator}
        </span>
        <span
          style={{
            backgroundColor: "#f7f7f7",
            color: "#494D4B",
            fontSize: "1.5rem",
            fontWeight: "bold",
            padding: "10px",
            borderRadius: "5px",
            border: "2px solid #494D4B",
          }}
        >
          {secondNumber}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <button
          style={{
            backgroundColor: "#e61740",
            color: "#f7f7f7",
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            width: "150px",
          }}
          onClick={generateRandomNumbers}
        >
          Reset
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            type="number"
            style={{
              width: "100px",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              marginLeft: "10px",
            }}
            onChange={(e) => setUserValue(parseFloat(e.target.value))}
          />
          <button
            style={{
              backgroundColor: "#1cd90b",
              color: "#f7f7f7",
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              width: "150px",
            }}
            onClick={handleCalculate}
          >
            Calcular
          </button>
        </div>
      </div>

      {text}
    </div>
  );
}

export default Aside;
