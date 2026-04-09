"use client";
import { useState } from "react";
import { useFormStore } from "@/store/useFormStore";
import ResultsStep from "./ResultsStep";
import { Sparkles, Loader2, CheckCircle2, CircleDashed } from "lucide-react";

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
  const [isAnalysing, setIsAnalysing] = useState(false);
  const [analysisStage, setAnalysisStage] = useState(0);
  const [results, setResults] = useState<Product[] | null>(null);

  const {
    userName, setUserName, userEmail, setUserEmail, userZip, setUserZip,
    coverType, roomType, roomUsage, roomVibe, designStyle,
    privacyPreference, lightPriority, lookPreference, prevStep,
  } = useFormStore();

  const isComplete = userName && userEmail.includes("@") && userZip.length >= 5;

  // Function to handle the API call with built-in retry logic
  const fetchWithRetry = async (payload: any, retries = 3, delay = 2000): Promise<any> => {
    try {
      const response = await fetch("https://shopify-product-recommendation.vercel.app/api/recommendations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        // If we get a 503 or 429, it's a candidate for retry
        if (retries > 0 && (response.status === 503 || response.status === 429)) {
          await new Promise(res => setTimeout(res, delay));
          return fetchWithRetry(payload, retries - 1, delay * 1.5); // Exponential backoff
        }
        throw new Error("Failed to fetch recommendations");
      }
      return await response.json();
    } catch (err) {
      if (retries > 0) {
        await new Promise(res => setTimeout(res, delay));
        return fetchWithRetry(payload, retries - 1, delay * 1.5);
      }
      throw err;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    setIsAnalysing(true);
    setAnalysisStage(0);

    const timer1 = setTimeout(() => setAnalysisStage(1), 1500);
    const timer2 = setTimeout(() => setAnalysisStage(2), 3000);

    const payload = {
      coverType, roomType, roomUsage, roomVibe, designStyle,
      privacyPreference, lightPriority, lookPreference,
      notes: roomVibe || "Personalized recommendation request",
    };

    try {
      const recommendations = await fetchWithRetry(payload);

      // Smooth transition to results
      setTimeout(() => {
        setResults(recommendations);
        setLoading(false);
      }, 4000);

    } catch (error) {
      console.error("Submission Error after retries:", error);

      // CRITICAL: Clear timers so animation doesn't look like it's succeeding
      clearTimeout(timer1);
      clearTimeout(timer2);

      // CRITICAL: Reset states so user can try again manually
      setIsAnalysing(false);
      setAnalysisStage(0);
      setLoading(false);

      alert("The AI service is currently very busy. We tried 3 times but couldn't get your results. Please wait a moment and click 'Get My Results' again.");
    }
  };

  // --- LOADING VIEW ---
  if (isAnalysing && !results) {
    const loadingStages = [
      { id: 0, text: "Analyzing Your Preferences....", icon: analysisStage > 0 ? CheckCircle2 : Loader2 },
      { id: 1, text: "Matching With Product Families...", icon: analysisStage > 1 ? CheckCircle2 : analysisStage === 1 ? Loader2 : CircleDashed },
      { id: 2, text: "Generating Personalized Recommendations....", icon: analysisStage === 2 ? Loader2 : Sparkles },
    ];

    return (
      <div className="w-full flex flex-col items-center justify-center py-10 animate-in fade-in zoom-in duration-700">
        <div className="relative mb-10">
          <div className="w-[100px] h-[100px] bg-[#0F172A] rounded-full flex items-center justify-center shadow-xl">
            <Loader2 className="text-[#BC9661] animate-spin" size={50} strokeWidth={2.5} />
          </div>
        </div>

        <h1 className="text-[32px] md:text-[48px] heading-font text-[#1A1A1A] text-center mb-4 leading-tight">
          Creating Your Personalized Recommendations
        </h1>
        <p className="text-[#8E8E8E] text-[18px] text-center mb-12 max-w-2xl text-font">
          Our AI is analyzing your preferences and room details to find the perfect window treatments for your spaces.
        </p>

        <div className="w-full max-w-[800px] space-y-4">
          {loadingStages.map((stage) => {
            const isActive = analysisStage === stage.id;
            const isDone = analysisStage > stage.id;

            return (
              <div
                key={stage.id}
                className={`flex items-center gap-6 p-8 border transition-all duration-500 ${
                  isActive ? "bg-[#E5D5BC] border-[#BC9661]" : isDone ? "bg-[#FBF9F6] border-transparent" : "bg-transparent border-[#E5D5BC] border-dashed"
                }`}
              >
                <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center shrink-0 ${
                  isDone || isActive ? "bg-[#BC9661] text-white" : "text-[#D1C7B7]"
                }`}>
                  <stage.icon size={30} className={isActive ? "animate-spin" : ""} />
                </div>
                <span className={`text-[20px] md:text-[24px] heading-font ${isActive || isDone ? "text-[#1A1A1A]" : "text-[#D1C7B7]"}`}>
                  {stage.text}
                </span>
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-center text-[14px] text-[#727272] text-font">
            Your info is secure | No spam | We never share your details
        </p>
      </div>
    );
  }

  if (results) {
    return <ResultsStep recommendations={results} />;
  }

  const infoItems = [
    "Primary product recommendation with detailed explanation",
    "Personalized upgrade suggestions (motorization, blackout, etc.)",
    "2-3 alternative options that also match your needs",
    "Links to order free samples and explore products",
  ];

  return (
    <div className="w-full flex flex-col md:gap-18 gap-10 animate-in fade-in duration-700">
      <header className="space-y-4">
        <h1 className="text-[30px] sm:text-[38px] md:text-[42px] xl:text-[48px] heading-font text-[#1A1A1A] leading-[1.1]">
          Almost there! Get your personalized results
        </h1>
        <p className="text-[#8E8E8E] text-[16px] sm:text-[18px] md:text-[20px] text-font">
          Enter your details to receive your custom window treatment recommendations.
        </p>
      </header>

      <div className="bg-[#E5D5BC] p-10 flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <div className="w-[50px] h-[50px] bg-[#BC9661] rounded-full flex items-center justify-center text-white shadow-md shrink-0">
             <Sparkles size={24} />
          </div>
          <h4 className="text-[24px] md:text-[32px] heading-font text-[#1A1A1A]">
            Your AI-Powered Design Consultation
          </h4>
        </div>
        <p className="text-[15px] md:text-[18px] text-[#1A1A1A] text-font leading-relaxed">
          Based on your preferences, our AI will generate personalized window treatment recommendations.
        </p>
      </div>

      <div className="bg-[#F7F4EF] p-10 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input
            type="text"
            placeholder="Full Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            disabled={loading}
            className="w-full px-6 py-4 bg-[#F3EEE7] md:min-h-[61px] text-[#727272] text-[18px] outline-none focus:border-[#BC9661] border border-transparent transition-all disabled:opacity-50"
          />
          <input
            type="text"
            placeholder="Zip Code"
            value={userZip}
            onChange={(e) => setUserZip(e.target.value)}
            disabled={loading}
            className="w-full px-6 py-4 bg-[#F3EEE7] md:min-h-[61px] text-[#727272] text-[18px] outline-none focus:border-[#BC9661] border border-transparent transition-all disabled:opacity-50"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          disabled={loading}
          className="w-full px-6 py-4 bg-[#F3EEE7] md:min-h-[61px] text-[#727272] text-[18px] outline-none focus:border-[#BC9661] border border-transparent transition-all disabled:opacity-50"
        />
      </div>

      <div className="bg-[#F7F4EF] p-10 flex gap-3 items-start">
         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-1">
            <path d="M15.8333 9.16699H4.16667C3.24619 9.16699 2.5 9.91318 2.5 10.8337V16.667C2.5 17.5875 3.24619 18.3337 4.16667 18.3337H15.8333C16.7538 18.3337 17.5 17.5875 17.5 16.667V10.8337C17.5 9.91318 16.7538 9.16699 15.8333 9.16699Z" stroke="#727272" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.83398 9.16699V5.83366C5.83398 4.72859 6.27297 3.66878 7.05437 2.88738C7.83577 2.10598 8.89558 1.66699 10.0007 1.66699C11.1057 1.66699 12.1655 2.10598 12.9469 2.88738C13.7283 3.66878 14.1673 4.72859 14.1673 5.83366V9.16699" stroke="#727272" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
         </svg>
        <span className="text-[#727272] text-[16px] md:text-[18px] leading-relaxed">
          Your information is secure. We'll email your results and may follow up with helpful design tips. We never share your data with third parties.
        </span>
      </div>

      <div className="bg-[#F7F4EF] p-12 border border-[#F0EDE6]">
        <h3 className="text-[24px] md:text-[32px] heading-font text-[#1A1A1A] mb-8">What you'll receive:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
          {infoItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-[#727272] text-[16px] md:text-[18px] text-font">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BC9661] flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-4">
        <button
          onClick={prevStep}
          disabled={loading}
          className="flex-1 py-4 border border-[#1A1A1A] rounded-full text-[#1A1A1A] text-[14px] font-[700] hover:bg-white/50 transition-all text-center disabled:opacity-50"
        >
          Back
        </button>

        <button
          onClick={handleSubmit}
          disabled={!isComplete || loading}
          className={`flex-1 py-4 rounded-full text-white text-[14px] font-[700] text-font transition-all shadow-sm flex items-center justify-center gap-3 ${
            isComplete && !loading ? "bg-[#BC9661] hover:brightness-105" : "bg-[#D1C7B7] cursor-not-allowed"
          }`}
        >
          {loading ? "Generating..." : "Get My Results"}
        </button>
      </div>
    </div>
  );
}