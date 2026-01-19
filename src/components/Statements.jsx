import React from 'react';
import { FileText } from 'lucide-react';
import { SectionTitle } from './ui/Card';
import { STATEMENT_FILES } from '../data/transactionData';

export const Statements = ({ onSelectStatement }) => {
  return (
    <section>
      <SectionTitle icon={FileText} title="Statement Proofs" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {STATEMENT_FILES.map((item, i) => (
          <div 
            key={i} 
            onClick={() => onSelectStatement(item)}
            className="group relative aspect-video bg-slate-700 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden border border-slate-600 hover:border-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-500/20"
          >
            <div className="text-center z-10">
              <FileText className="w-6 h-6 mx-auto mb-1 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                {item.label}
              </span>
            </div>
            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors"></div>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-slate-500 text-center">
        Click any block to view the original credit card statement.
      </p>
    </section>
  );
};