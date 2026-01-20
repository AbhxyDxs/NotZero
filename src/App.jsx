import React, { useState } from 'react';

import { Modal } from './components/ui/Modal';

import { Hero } from './components/Hero';
import { PriceBreakdown } from './components/PriceBreakdown';
import { Timeline } from './components/Timeline';
import { EMITable } from './components/EMITable';
import { GSTSection } from './components/GSTSection';
import { Statements } from './components/Statements';
import { Summary } from './components/Summary';

export default function App() {
  const [selectedProof, setSelectedProof] = useState(null);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        
        {/* Header */}
        <header className="mb-8 border-b border-slate-800 pb-6">
          <h1 className="text-2xl font-bold text-white tracking-tight">Transaction Details</h1>
          <p className="text-slate-400 text-sm">iPhone 16 Purchase Transparency</p>
        </header>

        {/* 1. Overview */}
        <Hero />
        <EMITable />

        {/* 2. History & Setup */}
        <Timeline />

        {/* 3. Data Tables */}
        <GSTSection />

        {/* 4. Costs */}
        <PriceBreakdown />
        
        {/* 5. Proofs (With Image Popup Feature) */}
        <Statements 
          onSelectStatement={(item) => setSelectedProof(item)} 
        />

        {/* 6. Conclusion */}
        <Summary />

      </div>

      {/* Popup Modal Logic */}
      <Modal 
        isOpen={!!selectedProof}
        title={selectedProof?.label}
        imageSrc={selectedProof?.file}
        onClose={() => setSelectedProof(null)}
      />
    </div>
  );
}