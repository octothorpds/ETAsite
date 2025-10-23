import React, { useState } from 'react';
import { X } from 'lucide-react';

interface EasyQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EasyQuoteModal: React.FC<EasyQuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    company: '',
    program: 'Supply Chain Practitioner',
    employees: 10,
    duration: 3,
    mode: 'Online'
  });

  const basePrice = 4000;
  const total = basePrice * formData.employees * formData.duration;
  const perLearner = basePrice * formData.duration;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Quote generated! Total: R${total.toLocaleString()}\n\nA formal proposal will be sent to your email within 24 hours.`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-to-r from-[#3349df] to-[#2c4ae8] p-6 rounded-t-2xl relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2">
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-bold text-white">EasyQuote Calculator</h2>
          <p className="text-white/90 mt-2">Get an instant training cost estimate</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
            <input type="text" required value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df] focus:border-transparent" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Select Program</label>
            <select value={formData.program} onChange={(e) => setFormData({...formData, program: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3349df]">
              <option>Supply Chain Practitioner</option>
              <option>Project Management Fundamentals</option>
              <option>Digital Transformation & AI</option>
              <option>Leadership & People Management</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Employees: {formData.employees}</label>
            <input type="range" min="1" max="100" value={formData.employees} onChange={(e) => setFormData({...formData, employees: parseInt(e.target.value)})} className="w-full" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Duration (months): {formData.duration}</label>
            <input type="range" min="1" max="6" value={formData.duration} onChange={(e) => setFormData({...formData, duration: parseInt(e.target.value)})} className="w-full" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Mode</label>
            <div className="flex gap-4">
              {['Online', 'Onsite', 'Blended'].map(mode => (
                <label key={mode} className="flex items-center">
                  <input type="radio" name="mode" value={mode} checked={formData.mode === mode} onChange={(e) => setFormData({...formData, mode: e.target.value})} className="mr-2" />
                  {mode}
                </label>
              ))}
            </div>
          </div>

          <div className="bg-[#f9fafc] p-6 rounded-xl border-2 border-[#3349df]">
            <div className="flex justify-between mb-2">
              <span className="font-semibold text-gray-700">Estimated Total:</span>
              <span className="text-2xl font-bold text-[#3349df]">R{total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Cost per Learner:</span>
              <span className="text-lg font-semibold text-gray-800">R{perLearner.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500 mt-4 italic">This is an indicative quote — a formal proposal will follow within 24 hours.</p>
          </div>

          <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#3349df] to-[#2c4ae8] text-white rounded-full font-bold text-lg hover:shadow-xl transition-all">
            Generate Quote
          </button>

          <p className="text-xs text-center text-gray-500">
            Powered by <a href="https://octothorp.online" target="_blank" rel="noopener noreferrer" className="text-[#3349df] hover:underline">EasyQuote — Build your own at octothorp.online</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default EasyQuoteModal;
