import React from 'react';
import { CreditCard, AlertCircle } from 'lucide-react';
import { Card } from './ui/Card';

export const Hero = () => (
  <Card className="relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 opacity-10 text-white">
      <CreditCard size={120} />
    </div>
    <div className="relative z-10 space-y-4">
      <div>
        <p className="text-sm font-medium text-indigo-400 uppercase tracking-wide">Product</p>
        <h2 className="text-3xl font-bold text-white">
          iPhone 16 <span className="text-lg font-normal text-slate-500">— 256GB (Pink)</span>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div><p className="text-slate-400">Platform</p><p className="font-medium text-slate-200">Flipkart BBD 2025</p></div>
        <div><p className="text-slate-400">Payment</p><p className="font-medium text-slate-200">HDFC Millenia (Zero-Cost EMI)</p></div>
        <div><p className="text-slate-400">Principal</p><p className="font-medium text-slate-200">₹59,614</p></div>
        <div><p className="text-slate-400">Tenure</p><p className="font-medium text-slate-200">Oct '25 → Mar '26</p></div>
      </div>
      <div className="mt-4 bg-amber-900/20 border border-amber-800 rounded-xl p-3 flex gap-3 items-start">
        <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-amber-200">
          Advertised as <strong>Zero-Cost EMI</strong>, but government taxes and bank fees still apply.
        </p>
      </div>
    </div>
  </Card>
);