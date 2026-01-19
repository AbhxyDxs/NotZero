import React from 'react';
import { Calendar, ShoppingBag, FileText, CheckCircle2, Flag } from 'lucide-react';
import { SectionTitle } from './ui/Card';

export const Timeline = () => {
  return (
    <section>
      <SectionTitle icon={Calendar} title="Loan Lifecycle" />
      
      {/* Container for the specific Timeline Card */}
      <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
        
        <div className="relative space-y-8 pl-2">
          
          {/* THE VERTICAL LINE */}
          {/* This div draws the line connecting the dots */}
          <div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-slate-700" />

          {/* Event 1: Purchase */}
          <TimelineItem 
            icon={ShoppingBag}
            date="29 Sep 2025"
            title="Purchase on Flipkart"
            color="bg-indigo-500"
          >
            <p>Order placed during Big Billion Days. Price locked at <strong>₹59,614</strong>.</p>
          </TimelineItem>

          {/* Event 2: Loan Creation (The One-Time Fees) */}
          <TimelineItem 
            icon={FileText}
            date="30 Sep 2025"
            title="Loan Booking & Fees"
            color="bg-amber-500"
          >
            <p>HDFC converts the transaction into a Loan.</p>
            <div className="mt-2 p-2 bg-slate-900/50 rounded border border-slate-700/50 text-xs">
              <div className="flex justify-between"><span>Processing Fee</span><span>₹299.00</span></div>
              <div className="flex justify-between"><span>GST @18%</span><span>₹53.82</span></div>
            </div>
          </TimelineItem>

          {/* Event 3: EMI Starts */}
          <TimelineItem 
            icon={CheckCircle2}
            date="05 Oct 2025"
            title="Repayment Begins"
            color="bg-green-500"
          >
            <p>First EMI generated. The 6-month cycle begins.</p>
            <p className="text-xs text-slate-500 mt-1">Status: Active</p>
          </TimelineItem>

          {/* Event 4: Completion */}
          <TimelineItem 
            icon={Flag}
            date="05 Mar 2026"
            title="Loan Closure"
            color="bg-slate-600"
            isLast={true} // Optional prop to maybe fade it out if future
          >
            <p>Final EMI payment. Bank issues No Objection Certificate (NOC) internally.</p>
          </TimelineItem>

        </div>
      </div>
    </section>
  );
};

// --- Helper Component for Individual Events ---
const TimelineItem = ({ icon: Icon, date, title, children, color, isLast }) => (
  <div className="relative flex gap-6">
    
    {/* The Dot / Icon Bubble */}
    <div className={`
      relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center 
      border-4 border-slate-800 shadow-lg ${color}
    `}>
      <Icon className="w-5 h-5 text-white" />
    </div>

    {/* The Content */}
    <div className={`flex-grow pt-1 ${isLast ? 'opacity-50' : ''}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
        <h4 className="font-bold text-white text-lg">{title}</h4>
        <span className="text-xs font-mono text-indigo-300 bg-indigo-900/30 px-2 py-1 rounded w-fit">
          {date}
        </span>
      </div>
      <div className="text-sm text-slate-400 leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);