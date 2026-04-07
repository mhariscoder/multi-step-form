"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import { Camera, Upload } from "lucide-react";
import { useFormStore } from "@/store/useFormStore";

export default function StepOne() {
  const { setRoomImage, roomImage, nextStep } = useFormStore();
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setRoomImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const infoItems = [
    "Window shape and size", 
    "Natural lighting conditions", 
    "Interior design style",
    "Color palette and textures", 
    "Privacy exposure level", 
    "Glare and reflection risks"
  ];

  return (
    <div className="w-full flex flex-col gap-10 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <header className="space-y-3">
        <h1 className="text-[40px] font-serif text-[#1A1A1A] leading-tight tracking-tight">
          Let's Start with Your Room
        </h1>
        <p className="text-[#8E8E8E] text-[15px] font-sans">
          Upload a photo of your room for AI-powered design analysis, or skip this step to continue with the quiz.
        </p>
      </header>

      {/* Upload Dropzone */}
      <div 
        className={`relative border-[1px] border-dashed rounded-sm py-20 flex flex-col items-center justify-center transition-all
          ${dragActive ? 'border-[#BC9661] bg-white/30' : 'border-[#D1C7B7]'}`}
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
      >
        <input 
          type="file" 
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
          onChange={handleFileChange}
          accept="image/*"
        />

        {/* Icon Container - Navy Blue #0D1B2A */}
        <div className="bg-[#0D1B2A] p-5 rounded-full mb-8 shadow-md">
          <Camera className="text-white w-7 h-7" />
        </div>

        <h2 className="text-[26px] font-serif text-[#1A1A1A] mb-2">Drop Your Photo Here</h2>
        <p className="text-center text-[#8E8E8E] text-[14px] font-sans max-w-[340px] mb-10 leading-relaxed">
          Upload a photo of your room and our AI will analyze features to personalize your recommendations.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 relative z-20">
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
            className="flex items-center gap-2 bg-[#0D1B2A] text-white px-6 py-3 rounded-full text-[10px] font-sans font-bold tracking-[0.1em] hover:bg-slate-800 transition-all uppercase"
          >
            <Upload size={14} strokeWidth={3} />
            Upload Photo
          </button>
          
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); nextStep(); }}
            className="px-8 py-3 border border-[#8E8E8E] rounded-full text-[#1A1A1A] text-[12px] font-sans font-medium hover:bg-white/50 transition-all"
          >
            Skip This Steps
          </button>
        </div>
        
        <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileChange} accept="image/*" />
      </div>

      {/* Info Section Box - Soft Cream #FBF9F6 */}
      <div className="bg-[#FBF9F6] p-12 rounded-sm border border-[#F0EDE6]">
        <h3 className="text-[20px] font-serif text-[#1A1A1A] mb-8">What Our AI Looks For:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
          {infoItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-[#8E8E8E] text-[13px] font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BC9661] flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Navigation - Gold #BC9661 */}
      <div className="space-y-5">
        <button 
          onClick={nextStep}
          className="w-full py-4 rounded-[8px] text-white font-sans text-[14px] font-semibold transition-all hover:brightness-105 active:scale-[0.99] shadow-sm"
          style={{ backgroundColor: '#BC9661' }}
        >
          Next
        </button>

        <p className="text-center text-[11px] text-[#A0A0A0] font-sans tracking-wide">
          Your info is secure · No spam · We never share your details
        </p>
      </div>
    </div>
  );
}