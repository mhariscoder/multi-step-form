"use client";
import { useState } from "react";
import { useFormStore } from "@/store/useFormStore";
import ResultsStep from "./ResultsStep"; // Ensure this path is correct
import { 
  User, 
  Mail, 
  MapPin, 
  Lock, 
  Sparkles, 
  ArrowLeft, 
  Send,
  Loader2 
} from "lucide-react";

// Define the interface for the product
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
    designStyle,
    lightPriority,
    privacyPreference,
    roomVibe,
    prevStep 
  } = useFormStore();

  const isComplete = userName && userEmail.includes('@') && userZip.length >= 5;

  const handleSubmit = async () => {
    setLoading(true);

    const payload = {
      coverType: coverType || "Wooden Blind",
      color: "White",
      room: roomType || "Living Room",
      style: designStyle || "Modern",
      material: "Wood",
      lightControl: lightPriority || "Medium",
      privacy: privacyPreference || "High",
      budget: "200-400",
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
      setResults(recommendations); // Save the results to trigger the UI switch

    } catch (error) {
      console.error("Submission Error:", error);
      alert("There was an error generating your results. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // IF WE HAVE RESULTS, SHOW THE RESULTS STEP
  if (results) {
    return <ResultsStep recommendations={results} />;
  }

  // OTHERWISE SHOW THE FORM
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Almost there! Get your personalized results</h1>
        <p className="text-slate-500 text-lg">
          Enter your details to receive your custom window treatment recommendations.
        </p>
      </div>

      <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 flex gap-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm shrink-0">
          <Sparkles size={24} />
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Your AI-Powered Design Consultation</h4>
          <p className="text-sm text-slate-600 leading-relaxed">
            Based on your preferences, our AI will generate personalized window treatment recommendations.
          </p>
        </div>
      </div>

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
            disabled={loading}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all disabled:opacity-50"
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
            disabled={loading}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all disabled:opacity-50"
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
            disabled={loading}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none transition-all disabled:opacity-50"
          />
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-slate-100">
        <button 
          onClick={prevStep} 
          disabled={loading}
          className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors disabled:opacity-50"
        >
          <ArrowLeft size={20} /> Back
        </button>
        
        <button 
          onClick={handleSubmit}
          disabled={!isComplete || loading}
          className={`px-10 py-4 rounded-xl flex items-center gap-2 font-bold transition-all ${
            isComplete && !loading
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-xl shadow-blue-200 active:scale-95" 
              : "bg-blue-200 text-white cursor-not-allowed"
          }`}
        >
          {loading ? (
            <>Generating... <Loader2 size={18} className="animate-spin" /></>
          ) : (
            <>Get My Results <Send size={18} /></>
          )}
        </button>
      </div>
    </div>
  );
}