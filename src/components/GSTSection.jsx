import React from 'react';
import { Info } from 'lucide-react';
import { Card, SectionTitle } from './ui/Card';
import { GST_DATA } from '../data/transactionData';

const StatusBadge = ({ status }) => {
  const isPaid = status === "Paid";
  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
      isPaid 
        ? "bg-green-900/30 text-green-400" 
        : "bg-amber-900/30 text-amber-400"
    }`}>
      {status}
    </span>
  );
};

export const GSTSection = () => {
  return (
    <section>
      <SectionTitle icon={Info} title="The 'Hidden' GST Cost" />
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-900/20 p-4 rounded-xl border border-indigo-800">
            <h4 className="font-semibold text-indigo-300 mb-2">What is Retail Interest?</h4>
            <p className="text-sm text-indigo-400">
              This is the interest calculated by the bank on your loan. Even if the merchant discounts the phone price to offset this, the <strong>government still taxes the financial service.</strong>
            </p>
          </div>
          <div className="bg-indigo-900/20 p-4 rounded-xl border border-indigo-800">
             <h4 className="font-semibold text-indigo-300 mb-2">Why Monthly?</h4>
             <p className="text-sm text-indigo-400">
               Interest is a financial service. Financial services attract 18% GST. This is calculated only on the interest portion, not on the principal.
             </p>
          </div>
        </div>

        <Card className="!p-0 overflow-hidden">
           <table className="w-full text-sm text-left">
            <thead className="bg-slate-700/50 text-slate-400 border-b border-slate-700">
              <tr>
                <th className="px-6 py-3">Month</th>
                <th className="px-6 py-3">Interest Base</th>
                <th className="px-6 py-3 text-red-400">GST (18%)</th>
                <th className="px-6 py-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {GST_DATA.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-3 text-slate-300">{row.month}</td>
                  <td className="px-6 py-3 text-slate-300">₹{row.interest}</td>
                  <td className="px-6 py-3 font-medium text-red-400">₹{row.gst}</td>
                  <td className="px-6 py-3 text-right"><StatusBadge status={row.status} /></td>
                </tr>
              ))}
            </tbody>
           </table>
        </Card>
      </div>
    </section>
  );
};