import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Card, SectionTitle } from './ui/Card';

export const PriceBreakdown = () => (
  <section>
    <SectionTitle icon={TrendingUp} title="Real Cost Breakdown" />
    <Card>
      <div className="space-y-3">
        <Row label="Sale Price (Zero-Cost Adjusted)" val="₹59,614.00" />
        <Row label="EMI Processing Fee" val="+ ₹299.00" isRed />
        <Row label="GST on Processing Fee (18%)" val="+ ₹53.82" isRed />
        <Row label="Total Bank Interest Charged" val="+ ₹2,919.00" isRed />
        <Row label="GST on Interest (18%)" val="+ ₹378.90" isRed />
        <div className="h-px bg-slate-700 my-2"></div>
        <div className="flex justify-between items-center text-lg font-bold text-white">
          <span>Final Effective Cost</span>
          <span>≈ ₹63,264.72</span>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500 text-center">
        *GST on interest is charged monthly.
      </p>
    </Card>
  </section>
);

const Row = ({ label, val, isRed }) => (
  <div className="flex justify-between items-center text-slate-300">
    <span>{label}</span>
    <span className={`font-medium ${isRed ? 'text-red-400' : ''}`}>{val}</span>
  </div>
);