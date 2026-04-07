"use client";
import { useState } from "react";
import { useFormStore } from "@/store/useFormStore";
import ResultsStep from "./ResultsStep"; 
import { 
  Sparkles, 
  Loader2 
} from "lucide-react";

interface Product {
  id: string;
  title: string;
  image: string | null;
  url: string;
  reason: string;
  product_type: string;
}

export default function StepTen() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Product[] | null>(null);
  
  const { 
    userName, setUserName,
    userEmail, setUserEmail,
    userZip, setUserZip,
    coverType,
    roomType,
    roomUsage,
    roomVibe,
    designStyle,
    privacyPreference,
    lightPriority,
    lookPreference,
    prevStep 
  } = useFormStore();

  const isComplete = userName && userEmail.includes('@') && userZip.length >= 5;

  const handleSubmit = async () => {
    setLoading(true);
    const payload = {
      coverType,
      roomType,
      roomUsage,
      roomVibe,
      designStyle,
      privacyPreference,
      lightPriority,
      lookPreference,
      notes: roomVibe || "Personalized recommendation request"
    };

    try {
      const response = await fetch("https://shopify-product-recommendation.vercel.app/api/recommendations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Failed to fetch recommendations");
      const recommendations = await response.json();
      setResults(recommendations);
    } catch (error) {
      console.error("Submission Error:", error);
      alert("There was an error generating your results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (results) {
    return <ResultsStep recommendations={results} />;
  }

  return (
    <div className="w-full flex flex-col gap-10 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <header className="space-y-3">
        <h1 className="text-[44px] font-serif text-[#1A1A1A] leading-tight tracking-tight">
          Almost there! Get your personalized results
        </h1>
        <p className="text-[#8E8E8E] text-[16px] font-sans">
          Enter your details to receive your custom window treatment recommendations.
        </p>
      </header>

      {/* AI Consultation Banner */}
      <div className="bg-[#E5D5BC] rounded-sm p-8 flex items-start gap-6 border-l-4 border-[#BC9661]">
        <div className="w-12 h-12 bg-[#BC9661] rounded-full flex items-center justify-center text-white shadow-md shrink-0">
          <Sparkles size={24} />
        </div>
        <div className="space-y-1">
          <h4 className="text-[22px] font-serif text-[#1A1A1A]">Your AI-Powered Design Consultation</h4>
          <p className="text-[15px] text-[#5A5A5A] leading-relaxed font-sans">
            Based on your preferences, our AI will generate personalized window treatment recommendations.
          </p>
        </div>
      </div>

      {/* Form Inputs Grid */}
      <div className="bg-[#FBF9F6] p-10 rounded-sm space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <input 
              type="text"
              placeholder="Full Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              disabled={loading}
              className="w-full px-6 py-4 bg-white border border-[#D1C7B7] text-[#1A1A1A] placeholder-[#A0A0A0] rounded-sm focus:border-[#1A1A1A] outline-none transition-all disabled:opacity-50 font-sans"
            />
          </div>

          <div className="space-y-3">
            <input 
              type="text"
              placeholder="Zip Code"
              value={userZip}
              onChange={(e) => setUserZip(e.target.value)}
              disabled={loading}
              className="w-full px-6 py-4 bg-white border border-[#D1C7B7] text-[#1A1A1A] placeholder-[#A0A0A0] rounded-sm focus:border-[#1A1A1A] outline-none transition-all disabled:opacity-50 font-sans"
            />
          </div>
        </div>

        <div className="relative group">
          <input 
            type="email"
            placeholder="Email Address"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            disabled={loading}
            className="w-full px-6 py-4 bg-white border border-[#D1C7B7] text-[#1A1A1A] placeholder-[#A0A0A0] rounded-sm focus:border-[#1A1A1A] outline-none transition-all disabled:opacity-50 font-sans"
          />
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-[#D1C7B7]/30">
        <button 
          onClick={prevStep} 
          disabled={loading}
          className="flex-1 py-4 border border-[#1A1A1A] rounded-full text-[#1A1A1A] text-[14px] font-sans font-medium hover:bg-white/50 transition-all text-center disabled:opacity-50"
        >
          Back
        </button>
        
        <button 
          onClick={handleSubmit}
          disabled={!isComplete || loading}
          className={`flex-1 py-4 rounded-full text-white text-[16px] font-sans font-semibold transition-all shadow-sm flex items-center justify-center gap-3 ${
            isComplete && !loading ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
          }`}
        >
          {loading ? (
            <>Generating... <Loader2 size={18} className="animate-spin" /></>
          ) : (
            "Get My Results"
          )}
        </button>
      </div>

      {/* Security Disclaimer */}
      <p className="text-center text-[11px] text-[#A0A0A0] font-sans tracking-wide uppercase">
        Your info is secure · No spam · We never share your details
      </p>
    </div>
  );
}