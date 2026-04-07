"use client";
import { useState } from "react";
import { useFormStore } from "@/store/useFormStore";
import ResultsStep from "./ResultsStep";
import { Sparkles, Loader2 } from "lucide-react";

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
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userZip,
    setUserZip,
    coverType,
    roomType,
    roomUsage,
    roomVibe,
    designStyle,
    privacyPreference,
    lightPriority,
    lookPreference,
    prevStep,
  } = useFormStore();

  const isComplete = userName && userEmail.includes("@") && userZip.length >= 5;

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
      notes: roomVibe || "Personalized recommendation request",
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
    <div className="w-full flex flex-col md:gap-18 animate-in fade-in duration-700">
      <header className="space-y-4">
        <h1 className="text-[48px] heading-font text-[#1A1A1A] leading-[59px]">
          Almost there! Get your personalized results
        </h1>
        <p className="text-[#8E8E8E] text-[20px] leading-[20px] text-font">
          Enter your details to receive your custom window treatment recommendations.
        </p>
      </header>

      <div className="bg-[#E5D5BC]  p-10 flex flex-col  gap-5 ">

        <div className="flex gap-3 items-center">
          <div className="w-[50px] h-[50px] bg-[#BC9661] rounded-full flex items-center justify-center text-white shadow-md shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_351_2820)">
                <path d="M11.0174 2.81444C11.0603 2.58504 11.182 2.37786 11.3615 2.22876C11.5411 2.07966 11.7671 1.99805 12.0004 1.99805C12.2338 1.99805 12.4598 2.07966 12.6393 2.22876C12.8189 2.37786 12.9406 2.58504 12.9834 2.81444L14.0344 8.37244C14.1091 8.76759 14.3011 9.13106 14.5855 9.41541C14.8698 9.69977 15.2333 9.8918 15.6284 9.96644L21.1864 11.0174C21.4158 11.0603 21.623 11.182 21.7721 11.3615C21.9212 11.5411 22.0028 11.7671 22.0028 12.0004C22.0028 12.2338 21.9212 12.4598 21.7721 12.6393C21.623 12.8189 21.4158 12.9406 21.1864 12.9834L15.6284 14.0344C15.2333 14.1091 14.8698 14.3011 14.5855 14.5855C14.3011 14.8698 14.1091 15.2333 14.0344 15.6284L12.9834 21.1864C12.9406 21.4158 12.8189 21.623 12.6393 21.7721C12.4598 21.9212 12.2338 22.0028 12.0004 22.0028C11.7671 22.0028 11.5411 21.9212 11.3615 21.7721C11.182 21.623 11.0603 21.4158 11.0174 21.1864L9.96644 15.6284C9.8918 15.2333 9.69977 14.8698 9.41541 14.5855C9.13106 14.3011 8.76759 14.1091 8.37244 14.0344L2.81444 12.9834C2.58504 12.9406 2.37786 12.8189 2.22876 12.6393C2.07966 12.4598 1.99805 12.2338 1.99805 12.0004C1.99805 11.7671 2.07966 11.5411 2.22876 11.3615C2.37786 11.182 2.58504 11.0603 2.81444 11.0174L8.37244 9.96644C8.76759 9.8918 9.13106 9.69977 9.41541 9.41541C9.69977 9.13106 9.8918 8.76759 9.96644 8.37244L11.0174 2.81444Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M20 2V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M22 4H18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 22C5.10457 22 6 21.1046 6 20C6 18.8954 5.10457 18 4 18C2.89543 18 2 18.8954 2 20C2 21.1046 2.89543 22 4 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_351_2820">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </div>
          <h4 className="text-[32px] leading-[1.1] heading-font text-[#1A1A1A]">
            Your AI-Powered Design Consultation
          </h4>
        </div>

        <div className="">

          <p className="text-[18px] leading-[20px] text-[#000000] text-font">
            Based on your preferences, our AI will generate personalized window treatment recommendations.
          </p>
        </div>
      </div>

      <div className="bg-[#FBF9F6] p-10  space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              disabled={loading}
              className="w-full px-6 py-4 bg-[#F3EEE7] md:min-h-[61px] text-[#727272] text-[18px]  placeholder-[#A0A0A0]  focus:border-[#1A1A1A] outline-none transition-all disabled:opacity-50 text-font"
            />
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Zip Code"
              value={userZip}
              onChange={(e) => setUserZip(e.target.value)}
              disabled={loading}
              className="w-full px-6 py-4 bg-[#F3EEE7] md:min-h-[61px] text-[#727272] text-[18px]  placeholder-[#A0A0A0]  focus:border-[#1A1A1A] outline-none transition-all disabled:opacity-50 text-font"
            />
          </div>
        </div>

        <div className="relative group">
          <div className="absolute right-5 top-[30%]">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.75 6.437C0.854 4.337 1.165 3.027 2.097 2.097C3.027 1.165 4.337 0.854 6.437 0.75M19.75 6.437C19.646 4.337 19.335 3.027 18.403 2.097C17.473 1.165 16.163 0.854 14.063 0.75M14.063 19.75C16.163 19.646 17.473 19.335 18.403 18.403C19.335 17.473 19.646 16.163 19.75 14.063M6.437 19.75C4.337 19.646 3.027 19.335 2.097 18.403C1.165 17.473 0.854 16.163 0.75 14.063M15.75 15.25L15.548 14.401C15.4659 14.0565 15.2937 13.74 15.0491 13.4838C14.8045 13.2276 14.4963 13.041 14.156 12.943L11.75 12.249V10.782C12.646 10.177 13.25 9.046 13.25 7.75C13.25 5.817 11.906 4.25 10.25 4.25C8.593 4.25 7.25 5.817 7.25 7.75C7.25 9.046 7.853 10.177 8.75 10.782V12.249L6.359 12.949C6.02885 13.0457 5.72922 13.2258 5.48905 13.4721C5.24889 13.7184 5.07631 14.0225 4.988 14.355L4.75 15.25" stroke="#727272" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </div>
          <input
            type="email"
            placeholder="Email Address"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            disabled={loading}
            className="w-full px-6 py-4 bg-[#F3EEE7] md:min-h-[61px] text-[#727272] text-[18px]  placeholder-[#A0A0A0]  focus:border-[#1A1A1A] outline-none transition-all disabled:opacity-50 text-font"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-4 ">
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
          className={`flex-1 py-4 rounded-full text-white text-[14px] font-[700] text-font transition-all shadow-sm flex items-center justify-center gap-3 ${isComplete && !loading ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
            }`}
        >
          {loading ? (
            <>
              Generating... <Loader2 size={18} className="animate-spin" />
            </>
          ) : (
            "Get My Results"
          )}
        </button>
      </div>
{/* 
      <p className="text-center text-[16px] text-[#727272] text-font tracking-wide">
        Your info is secure | No spam | We never share your details
      </p> */}
    </div>
  );
}
