export type Calculator = {
  firstNumber: string;
  secondNumber: string;
  operator: "sum" | "subtract" | "multiplication" | "division" | null;
  total: number;
  state: 1 | 2 | 3;
}