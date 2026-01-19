import React from 'react';

export const Card = ({ children, className = "" }) => (
  <div className={`bg-slate-800 rounded-2xl shadow-sm border border-slate-700 p-6 ${className}`}>
    {children}
  </div>
);

export const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-2 mb-4 text-slate-100">
    {Icon && <Icon className="w-5 h-5 text-indigo-400" />}
    <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
  </div>
);