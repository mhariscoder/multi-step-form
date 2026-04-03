"use client";
import { useFormStore } from "@/store/useFormStore";
import { 
  User, 
  Mail, 
  MapPin, 
  Lock, 
  Sparkles, 
  ArrowLeft, 
  Send 
} from "lucide-react";

export default function StepTen() {
  const { 
    userName, setUserName,
    userEmail, setUserEmail,
    userZip, setUserZip,
    prevStep 
  } = useFormStore();

  const isComplete = userName && userEmail.includes('@') && userZip.length >= 5;

  const handleSubmit = () => {
    console.log("Submitting to AI engine...");
    // Trigger your final API call here
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Almost there! Get your personalized results</h1>
        <p className="text-slate-500 text-lg">
          Enter your details to receive your custom window treatment recommendations.
        </p>
      </div>

      {/* AI Consultation Box */}
      <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 flex gap-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm shrink-0">
          <Sparkles size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Your AI-Powered Design Consultation</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Based on your preferences, our AI will generate personalized window treatment recommendations, 
            complete with product details, style explanations, and upgrade suggestions.
          </p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <User size={16} /> Your Name <span className="text-red-500">*</span>
          </label>
          <input 
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <Mail size={16} /> Email Address <span className="text-red-500">*</span>
          </label>
          <input 
            type="email"
            placeholder="you@example.com"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>

        <div className="space-y-2 md:col-span-1">
          <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
            <MapPin size={16} /> Zip Code <span className="text-red-500">*</span>
          </label>
          <input 
            type="text"
            placeholder="12345"
            value={userZip}
            onChange={(e) => setUserZip(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
          />
        </div>
      </div>

      {/* Security Note */}
      <div className="flex gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
        <Lock size={18} className="text-slate-400 shrink-0 mt-0.5" />
        <p className="text-xs text-slate-500 leading-relaxed">
          Your information is secure. We'll email your results and may follow up with helpful design tips. 
          We never share your data with third parties.
        </p>
      </div>

      {/* Deliverables List */}
      <div className="space-y-4">
        <h4 className="font-bold text-slate-900 uppercase text-xs tracking-widest">What you'll receive:</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
          {[
            "Primary product recommendation with detailed explanation",
            "2-3 alternative options that also match your needs",
            "Personalized upgrade suggestions (motorization, blackout, etc.)",
            "Links to order free samples and explore products"
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={prevStep} className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors">
          <ArrowLeft size={20} /> Back
        </button>
        
        <button 
          onClick={handleSubmit}
          disabled={!isComplete}
          className={`px-10 py-4 rounded-xl flex items-center gap-2 font-bold transition-all ${
            isComplete 
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200 active:scale-95" 
              : "bg-blue-200 text-white cursor-not-allowed"
          }`}
        >
          Get My Results <Send size={18} />
        </button>
      </div>
    </div>
  );
}