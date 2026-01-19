import React from 'react';
import { Calendar, FileText } from 'lucide-react';
import { Card } from './ui/Card';

export const Timeline = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Loan Creation Card */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="w-5 h-5 text-indigo-400" />
          <h3 className="font-semibold text-white">Loan Created</h3>
        </div>
        <div className="pl-2 border-l-2 border-indigo-800 space-y-4">
          <div className="relative">
            <div className="absolute -left-[13px] top-1 w-3 h-3 bg-indigo-500 rounded-full border-2 border-slate-800"></div>
            <p className="text-xs font-semibold text-slate-500">29 Sep 2025</p>
            <p className="text-sm font-medium text-slate-200">Loan Booked via Flipkart</p>
            <p className="text-xs text-slate-500 mt-1">
              Bank creates a loan of ₹59,614 to pay Flipkart. This is not money in your hand.
            </p>
          </div>
        </div>
      </Card>

      {/* One-Time Fees Card */}
      <Card>
        <div className="flex items-center gap-2 mb-3">
          <FileText className="w-5 h-5 text-indigo-400" />
          <h3 className="font-semibold text-white">One-Time Fees</h3>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-slate-300">
            <span>Processing Fee</span>
            <span>₹299.00</span>
          </div>
          <div className="flex justify-between text-sm text-slate-300">
            <span>GST (18%)</span>
            <span>₹53.82</span>
          </div>
          <div className="p-2 bg-slate-700/50 rounded text-xs text-slate-400 mt-2">
            HDFC charges this for converting purchase to EMI. Mandatory per tax law.
          </div>
        </div>
      </Card>
    </div>
  );
};