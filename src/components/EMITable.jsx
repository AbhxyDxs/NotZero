import React from 'react';
import { Clock } from 'lucide-react';
import { Card, SectionTitle } from './ui/Card';
import { EMI_DATA } from '../data/transactionData';

export const EMITable = () => {
  return (
    <section>
      <SectionTitle icon={Clock} title="EMI Schedule" />
      <Card className="!p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-700/50 text-slate-400 font-medium border-b border-slate-700">
              <tr>
                <th className="px-6 py-3">Month</th>
                <th className="px-6 py-3">Principal</th>
                <th className="px-6 py-3">Interest</th>
                <th className="px-6 py-3 text-right">Total EMI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {EMI_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-700/30 transition-colors">
                  <td className="px-6 py-3 font-medium text-slate-200">{row.month}</td>
                  <td className="px-6 py-3 text-slate-400">₹{row.principal.toLocaleString()}</td>
                  <td className="px-6 py-3 text-red-400">₹{row.interest}</td>
                  <td className="px-6 py-3 text-right font-medium text-slate-200">₹{row.total.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 bg-slate-800/50 border-t border-slate-700">
           <p className="text-xs text-slate-500 text-center">
             Even in "Zero-Cost EMI", interest exists. Flipkart gives an upfront discount equal to this interest, but GST on this interest is still payable by you.
           </p>
        </div>
      </Card>
    </section>
  );
};