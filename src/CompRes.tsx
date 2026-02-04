import type { Operation } from "./App";

type ResultProps = {
  num1: string;
  num2: string;
  operation: Operation;
};

function CompRes({
  num1,
  num2,
  operation,
}: ResultProps) {
  if (num1 === "" || num2 === "") {
    return (
      <div className="result-box">
        <h2>Резултат</h2>
        <p className="result-placeholder"></p>
      </div>
    );
  }

  const a = Number(num1);
  const b = Number(num2);

  let result: number | string;

  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result =
        b === 0
          ? "Грешка: деление на 0 е невъзможно!"
          : a / b;
      break;
    default:
      result = "";
  }

  return (
    <div className="result-box">
      <h2>Резултат</h2>
      <p
        className={
          typeof result === "string" ? "error" : "result"
        }
      >
        {result}
      </p>
    </div>
  );
}

export default CompRes;
