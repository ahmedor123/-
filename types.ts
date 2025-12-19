
export interface CalculatorKey {
  label: string;
  value: string;
  type: 'number' | 'operator' | 'action';
  color: string;
  colSpan?: number;
}
