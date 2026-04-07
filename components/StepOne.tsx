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
    <div className="w-full flex flex-col md:gap-18  animate-in fade-in duration-700">
      
      {/* Header Section */}
      <header className="space-y-4">
        <h1 className="text-[48px] leading-[59px] font-serif text-[#1A1A1A]">
          Let's Start with Your Room
        </h1>
        <p className="text-[#8E8E8E] text-[20px] leading-[20px] font-sans">
          Upload a photo of your room for AI-powered design analysis, or skip this step to continue with the quiz.
        </p>
      </header>

      {/* Upload Dropzone */}
      <div 
        className={`relative border border-dashed bg-[#F7F4EF] rounded-sm py-40 md:min-h-[541px] flex flex-col items-center justify-center transition-all
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
        <div className="bg-[#0D1B2A] p-5 h-[100px] w-[100px] flex items-center justify-center rounded-full mb-8 shadow-md">
          <svg width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.16667 4.16667H10.4167L14.5833 0H27.0833L31.25 4.16667H37.5C38.6051 4.16667 39.6649 4.60565 40.4463 5.38705C41.2277 6.16846 41.6667 7.22826 41.6667 8.33333V33.3333C41.6667 34.4384 41.2277 35.4982 40.4463 36.2796C39.6649 37.061 38.6051 37.5 37.5 37.5H4.16667C3.0616 37.5 2.00179 37.061 1.22039 36.2796C0.438987 35.4982 0 34.4384 0 33.3333V8.33333C0 7.22826 0.438987 6.16846 1.22039 5.38705C2.00179 4.60565 3.0616 4.16667 4.16667 4.16667ZM20.8333 10.4167C18.0707 10.4167 15.4211 11.5141 13.4676 13.4676C11.5141 15.4211 10.4167 18.0707 10.4167 20.8333C10.4167 23.596 11.5141 26.2455 13.4676 28.199C15.4211 30.1525 18.0707 31.25 20.8333 31.25C23.596 31.25 26.2455 30.1525 28.199 28.199C30.1525 26.2455 31.25 23.596 31.25 20.8333C31.25 18.0707 30.1525 15.4211 28.199 13.4676C26.2455 11.5141 23.596 10.4167 20.8333 10.4167ZM20.8333 14.5833C22.4909 14.5833 24.0807 15.2418 25.2528 16.4139C26.4249 17.586 27.0833 19.1757 27.0833 20.8333C27.0833 22.4909 26.4249 24.0806 25.2528 25.2528C24.0807 26.4249 22.4909 27.0833 20.8333 27.0833C19.1757 27.0833 17.586 26.4249 16.4139 25.2528C15.2418 24.0806 14.5833 22.4909 14.5833 20.8333C14.5833 19.1757 15.2418 17.586 16.4139 16.4139C17.586 15.2418 19.1757 14.5833 20.8333 14.5833Z" fill="white"/>
</svg>

        </div>

        <h2 className="text-[32px] font-serif text-[#1A1A1A] mb-2">Drop Your Photo Here</h2>
        <p className="text-center text-[#8E8E8E] text-[20px] font-sans max-w-[649px] mb-10 leading-relaxed">
          Upload a photo of your room and our AI will analyze features to personalize your recommendations.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 text-[14px] relative z-20">
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
        <h3 className="text-[32px] font-serif text-[#1A1A1A] mb-8">What Our AI Looks For:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-4">
          {infoItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-[#727272] text-[20px] font-sans">
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
          className="w-full py-4 rounded-[59px] text-[14px ] font-[700] text-white font-sans text-[14px] font-semibold transition-all hover:brightness-105 active:scale-[0.99] shadow-sm"
          style={{ backgroundColor: '#C19A5B' }}
        >
          Next
        </button>

        <p className="text-center text-[16px] text-[#727272] font-sans tracking-wide">
          Your info is secure · No spam · We never share your details
        </p>
      </div>
    </div>
  );
}