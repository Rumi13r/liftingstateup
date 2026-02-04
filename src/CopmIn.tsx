import type { Operation } from "./App";

type InputProps = {
  num1: string;
  num2: string;
  operation: Operation;
  onNum1Change: (value: string) => void;
  onNum2Change: (value: string) => void;
  onOperationChange: (op: Operation) => void;
};

function CompIn({
  num1,
  num2,
  operation,
  onNum1Change,
  onNum2Change,
  onOperationChange,
}: InputProps) {
   return (
    <>
      <input
        type="number"
        value={num1}
        onChange={(e) => onNum1Change(e.target.value)}
        placeholder="Първо число"
      />

      <select
        value={operation}
        onChange={(e) =>
          onOperationChange(e.target.value as Operation)
        }
      >
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>

      <input
        type="number"
        value={num2}
        onChange={(e) => onNum2Change(e.target.value)}
        placeholder="Второ число"
      />
    </>
  );
}

export default CompIn;
