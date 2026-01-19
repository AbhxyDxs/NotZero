import React, { useState } from 'react';

// Import your new components
import { Hero } from './components/Hero';
import { PriceBreakdown } from './components/PriceBreakdown';
import { Statements } from './components/Statements';
import { Modal } from './components/ui/Modal';
// ... Import the others if you created them (Timeline, EMI, etc.) 
// For now, I'll assume you might keep the others inline or refactor them later. 
// But the Statements feature is fully wired up below.

export default function App() {
  const [selectedProof, setSelectedProof] = useState(null);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 dark font-sans">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        
        {/* Header */}
        <header className="mb-8 border-b border-slate-800 pb-6">
          <h1 className="text-2xl font-bold text-white tracking-tight">Transaction Details</h1>
          <p className="text-slate-400 text-sm">iPhone 16 Purchase Transparency</p>
        </header>

        {/* Components */}
        <Hero />
        <PriceBreakdown />
        
        {/* ... Add Timeline, EMITable, GSTSection here ... */}

        {/* The New Statement Feature */}
        <Statements 
          onSelectStatement={(item) => setSelectedProof(item)} 
        />

        {/* ... Add Summary here ... */}

      </div>

      {/* The Popup Modal */}
      <Modal 
        isOpen={!!selectedProof}
        title={selectedProof?.label}
        imageSrc={selectedProof?.file}
        onClose={() => setSelectedProof(null)}
      />
    </div>
  );
}