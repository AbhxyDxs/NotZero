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
          <h1 className="text-malayalam-bold  text-white tracking-tight">Not Zero!</h1>
          <p className="text-malayalam text-slate-400 text-sm">BBD No-Cost EMI is actually <b>Not Zero</b>!!</p><br></br>
          <p className="text-malayalam text-slate-400 text-sm">Interest വരുന്ന പൈസ upfront discount ആയിട്ട് തരുന്ന് ഇണ്ടേൽ പോലും additional ആയിട്ട് കൊറച്ച് പൈസ കൂടെ വരുന്ന് ഇണ്ട്!!
            <br></br>അതിൻ്റെ complete breakdown!</p>
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