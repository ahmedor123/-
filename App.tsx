
import React from 'react';
import CalculatorBody from './components/CalculatorBody';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-white mb-8 opacity-80">آلة حاسبة</h1>
      <CalculatorBody />
      <p className="mt-8 text-slate-600 text-sm">بسيطة وسهلة الاستخدام</p>
    </div>
  );
};

export default App;
