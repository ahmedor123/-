
import React, { useState } from 'react';
import { STANDARD_KEYS } from '../constants';
import { CalculatorKey } from '../types';

const CalculatorBody: React.FC = () => {
  const [display, setDisplay] = useState('');
  const [equation, setEquation] = useState('');
  const [isResult, setIsResult] = useState(false);

  const handleKey = (key: CalculatorKey) => {
    if (key.value === 'CLEAR') {
      setDisplay('');
      setEquation('');
      setIsResult(false);
      return;
    }

    if (key.value === 'DELETE') {
      if (isResult) {
        setDisplay('');
        setEquation('');
        setIsResult(false);
      } else {
        setDisplay(prev => prev.slice(0, -1));
        setEquation(prev => prev.slice(0, -1));
      }
      return;
    }

    if (key.value === 'EVALUATE') {
      try {
        if (!equation) return;
        const cleanEquation = equation.replace(/×/g, '*').replace(/÷/g, '/');
        // Simple evaluation using Function instead of eval for slightly better safety
        const result = new Function(`return ${cleanEquation}`)();
        const resultStr = String(Number(result.toFixed(8)));
        
        setDisplay(resultStr);
        setEquation(resultStr);
        setIsResult(true);
      } catch (err) {
        setDisplay('خطأ');
        setEquation('');
        setIsResult(true);
      }
      return;
    }

    // Input handling
    if (isResult && key.type === 'number') {
      setDisplay(key.label);
      setEquation(key.value);
      setIsResult(false);
    } else {
      setDisplay(prev => prev + key.label);
      setEquation(prev => prev + key.value);
      setIsResult(false);
    }
  };

  return (
    <div className="w-full max-w-sm glass rounded-[2rem] p-6 shadow-2xl border border-slate-700/50">
      {/* Result Screen */}
      <div className="mb-6 h-28 bg-slate-900/80 rounded-2xl p-6 flex flex-col justify-end items-end overflow-hidden">
        <div className="text-4xl font-bold text-white truncate w-full text-right" dir="ltr">
          {display || '0'}
        </div>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-4 gap-3">
        {STANDARD_KEYS.map((key, idx) => (
          <button
            key={`${key.label}-${idx}`}
            onClick={() => handleKey(key)}
            className={`
              ${key.color} 
              h-16 rounded-2xl flex items-center justify-center text-xl transition-all active:scale-95
              ${key.colSpan ? `col-span-${key.colSpan}` : ''}
            `}
          >
            {key.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CalculatorBody;
