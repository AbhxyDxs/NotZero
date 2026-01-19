import React from 'react';
import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, imageSrc, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative max-w-4xl w-full bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
          <h3 className="text-white font-medium">{title} Statement</h3>
          <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Modal Content (Image) */}
        <div className="p-1 bg-slate-950 flex justify-center items-center min-h-[300px]">
          {imageSrc ? (
            <img src={imageSrc} alt={title} className="max-h-[80vh] w-auto object-contain rounded" />
          ) : (
             <div className="text-slate-500 py-20">Image not found</div>
          )}
        </div>
      </div>
    </div>
  );
};