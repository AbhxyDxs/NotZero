import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const Summary = () => {
  return (
    <div className="bg-indigo-900 rounded-2xl p-6 text-white shadow-xl ring-1 ring-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="space-y-1 text-center md:text-left">
          <h2 className="text-2xl font-bold">Summary</h2>
          <p className="text-indigo-200 text-sm">Advertised vs Reality</p>
        </div>
        
        <div className="flex gap-8 text-center">
          <div>
            <p className="text-xs text-indigo-300 uppercase tracking-wider mb-1">Advertised</p>
            <p className="text-xl font-semibold">₹59,614</p>
          </div>
          <div className="w-px bg-indigo-700"></div>
          <div>
            <p className="text-xs text-red-300 uppercase tracking-wider mb-1">Extra Cost</p>
            <p className="text-xl font-semibold text-red-300">~₹3,650</p>
          </div>
          <div className="w-px bg-indigo-700"></div>
          <div>
            <p className="text-xs text-green-300 uppercase tracking-wider mb-1">Total Paid</p>
            <p className="text-2xl font-bold text-green-300">~₹63,264</p>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-indigo-800 text-center">
         <p className="text-sm text-indigo-200 flex items-center justify-center gap-2">
           <CheckCircle2 className="w-4 h-4" /> No hidden charges beyond GST & Processing Fee.
         </p>
      </div>
    </div>
  );
};