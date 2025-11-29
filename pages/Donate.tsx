import React, { useState } from 'react';
import { Check, Shield, Lock } from 'lucide-react';

const DONATION_AMOUNTS = [
  { amount: 500, label: 'School supplies for 2 children' },
  { amount: 1500, label: 'Educate a child for 6 months' },
  { amount: 5000, label: 'Complete healthcare for a family' },
];

const Donate: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1500);
  const [customAmount, setCustomAmount] = useState('');
  const [isMonthly, setIsMonthly] = useState(false);

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAmount(null);
    setCustomAmount(e.target.value);
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const renderStep1 = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-center mb-6">
        <div className="bg-gray-100 p-1 rounded-lg inline-flex">
          <button 
            className={`px-6 py-2 rounded-md font-bold text-sm transition-all ${!isMonthly ? 'bg-white shadow text-teal' : 'text-gray-500'}`}
            onClick={() => setIsMonthly(false)}
          >
            One-Time
          </button>
          <button 
             className={`px-6 py-2 rounded-md font-bold text-sm transition-all ${isMonthly ? 'bg-white shadow text-teal' : 'text-gray-500'}`}
             onClick={() => setIsMonthly(true)}
          >
            Monthly
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {DONATION_AMOUNTS.map((item) => (
          <button
            key={item.amount}
            onClick={() => { setSelectedAmount(item.amount); setCustomAmount(''); }}
            className={`p-4 rounded-xl border-2 text-center transition-all ${
              selectedAmount === item.amount 
                ? 'border-saffron bg-orange-50' 
                : 'border-gray-200 hover:border-saffron'
            }`}
          >
            <div className="text-xl font-bold text-charcoal mb-1">₹{item.amount}</div>
            <div className="text-xs text-gray-500">{item.label}</div>
          </button>
        ))}
      </div>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
        <input 
          type="number" 
          placeholder="Enter Custom Amount" 
          value={customAmount}
          onChange={handleCustomAmountChange}
          onClick={() => setSelectedAmount(null)}
          className={`w-full pl-8 pr-4 py-4 rounded-xl border-2 focus:outline-none font-bold text-lg ${
            selectedAmount === null ? 'border-saffron' : 'border-gray-200'
          }`}
        />
      </div>

      <button 
        onClick={nextStep}
        className="w-full bg-saffron hover:bg-[#E55A2B] text-white font-bold py-4 rounded-xl shadow-lg transition-transform transform hover:-translate-y-1"
      >
        Continue to Details
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-4 animate-fade-in">
      <h3 className="font-heading font-bold text-xl mb-4">Your Information</h3>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="p-3 border rounded-lg w-full focus:outline-none focus:border-teal" />
        <input type="text" placeholder="Last Name" className="p-3 border rounded-lg w-full focus:outline-none focus:border-teal" />
      </div>
      <input type="email" placeholder="Email Address" className="p-3 border rounded-lg w-full focus:outline-none focus:border-teal" />
      <input type="tel" placeholder="Phone Number" className="p-3 border rounded-lg w-full focus:outline-none focus:border-teal" />
      <input type="text" placeholder="PAN Number (for 80G Tax Benefit)" className="p-3 border rounded-lg w-full focus:outline-none focus:border-teal" />
      
      <div className="flex items-start gap-2 pt-2">
        <input type="checkbox" id="tax" className="mt-1" defaultChecked />
        <label htmlFor="tax" className="text-sm text-gray-600">Send me an 80G tax exemption receipt.</label>
      </div>

      <div className="flex gap-4 pt-4">
        <button onClick={prevStep} className="w-1/3 py-3 border border-gray-300 rounded-xl font-bold text-gray-600">Back</button>
        <button onClick={nextStep} className="w-2/3 py-3 bg-saffron text-white rounded-xl font-bold shadow-lg hover:bg-[#E55A2B]">Proceed to Pay</button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="text-center space-y-6 animate-fade-in py-8">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Lock className="text-green-600" size={40} />
      </div>
      <h3 className="font-heading font-bold text-2xl">Secure Payment</h3>
      <p className="text-gray-600">Redirecting to Razorpay secure gateway...</p>
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
        <div className="bg-teal h-full w-2/3 animate-pulse"></div>
      </div>
      <p className="text-xs text-gray-400 mt-4">This is a demo. No actual payment will be processed.</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream py-12 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Left: Donation Form */}
        <div className="md:w-2/3 bg-white p-8 rounded-2xl shadow-xl">
          <div className="flex items-center gap-4 mb-8">
            {[1, 2, 3].map(i => (
              <div key={i} className={`flex items-center ${i < 3 ? 'flex-1' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  step >= i ? 'bg-teal text-white' : 'bg-gray-200 text-gray-500'
                }`}>
                  {step > i ? <Check size={16} /> : i}
                </div>
                {i < 3 && <div className={`h-1 w-full mx-2 ${step > i ? 'bg-teal' : 'bg-gray-200'}`}></div>}
              </div>
            ))}
          </div>

          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </div>

        {/* Right: Trust Sidebar */}
        <div className="md:w-1/3 space-y-6">
          <div className="bg-teal text-white p-6 rounded-xl shadow-lg">
             <h4 className="font-bold text-lg mb-4 flex items-center gap-2"><Shield size={20} /> Why Donate?</h4>
             <ul className="space-y-3 text-sm text-teal-100">
               <li className="flex gap-2"><Check size={16} className="shrink-0" /> 80G Tax Benefits</li>
               <li className="flex gap-2"><Check size={16} className="shrink-0" /> 100% Transparency</li>
               <li className="flex gap-2"><Check size={16} className="shrink-0" /> Immediate Receipt</li>
             </ul>
          </div>
          <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
            <h4 className="font-bold text-charcoal mb-2">Need Help?</h4>
            <p className="text-sm text-gray-600 mb-4">Contact our donor support team.</p>
            <p className="font-bold text-saffron">+91 98765 43210</p>
            <p className="text-sm text-gray-500">support@udayasankalp.org</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Donate;