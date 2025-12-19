
import { CalculatorKey } from './types';

export const STANDARD_KEYS: CalculatorKey[] = [
  { label: 'C', value: 'CLEAR', type: 'action', color: 'bg-red-500/20 text-red-400 hover:bg-red-500/30' },
  { label: '÷', value: '/', type: 'operator', color: 'bg-slate-700/50 text-blue-400 hover:bg-slate-700' },
  { label: '×', value: '*', type: 'operator', color: 'bg-slate-700/50 text-blue-400 hover:bg-slate-700' },
  { label: '⌫', value: 'DELETE', type: 'action', color: 'bg-slate-700/50 text-slate-300 hover:bg-slate-700' },
  
  { label: '7', value: '7', type: 'number', color: 'bg-slate-800 text-white hover:bg-slate-700' },
  { label: '8', value: '8', type: 'number', color: 'bg-slate-800 text-white hover:bg-slate-700' },
  { label: '9', value: '9', type: 'number', color: 'bg-slate-800 text-white hover:bg-slate-700' },
  { label: '-', value: '-', type: 'operator', color: 'bg-slate-700/50 text-blue-400 hover:bg-slate-700' },
  
  { label: '4', value: '4', type: 'number', color: 'bg-slate-800 text-white hover:bg-slate-700' },
  { label: '5', value: '5', type: 'number', color: 'bg-slate-800 text-white hover:bg-slate-700' },
  { label: '6', value: '6', type: 'number', color: 'bg-slate-800 text-white hover:bg-slate-700' },
  { label: '+', value: '+', type: 'operator', color: 'bg-slate-700/50 text-blue-400 hover:bg-slate-700' },
  
  { label: '1', value: '1', type: 'number', color: 'bg-slate-800 text-white hover:bg-slate-700' },
  { label: '2', value: '2', type: 'number', color: 'bg-slate-800 text-white hover:bg-slate-700' },
  { label: '3', value: '3', type: 'number', color: 'bg-slate-800 text-white hover:bg-slate-700' },
  { label: '=', value: 'EVALUATE', type: 'action', color: 'bg-blue-600 text-white font-bold hover:bg-blue-500' },
  
  { label: '0', value: '0', type: 'number', color: 'bg-slate-800 text-white hover:bg-slate-700', colSpan: 2 },
  { label: '.', value: '.', type: 'number', color: 'bg-slate-800 text-white hover:bg-slate-700' },
];
