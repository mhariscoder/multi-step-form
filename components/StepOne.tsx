"use client";
import { Camera, Upload, ArrowRight } from "lucide-react";
import { useFormStore } from "@/store/useFormStore";
import { ChangeEvent, useRef } from "react";

export default function StepOne() {
  const { setRoomImage, roomImage, nextStep } = useFormStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setRoomImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const infoItems = [
    "Window shape and size", "Natural lighting conditions",
    "Interior design style", "Color palette and textures",
    "Privacy exposure level", "Glare and reflection risks"
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Let's Start with Your Room</h1>
        <p className="text-slate-500 text-lg">
          Upload a photo of your room for AI-powered design analysis, or skip this step to continue with the quiz.
        </p>
      </div>

      {/* Upload Box Container */}
      <div className="relative group border-2 border-dashed border-slate-200 rounded-3xl p-12 flex flex-col items-center justify-center bg-white hover:border-blue-400 transition-colors">
        
        {/* 1. THE FIX: The hidden input now only triggers if you click the EMPTY space of the box */}
        <input 
          type="file" 
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-0" 
          onChange={handleFileChange}
          accept="image/*"
        />
        
        {/* Icon and Text - Pointer events none so they don't block clicks to the input underneath */}
        <div className="relative z-10 pointer-events-none flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 transition-transform">
            <Camera size={32} />
          </div>

          {roomImage ? (
             <div className="text-center">
               <p className="text-green-600 font-medium">Image uploaded successfully!</p>
               <p className="text-xs text-slate-400">Click box to replace</p>
             </div>
          ) : (
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold text-slate-800">Drop your photo here</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto">
                Upload a photo of your room and our AI will analyze features to personalize your recommendations.
              </p>
            </div>
          )}
        </div>
        
        {/* 2. THE FIX: Buttons are relative and have z-20 so they sit ABOVE the invisible file input */}
        <div className="relative z-20 flex gap-4 pt-6">
          {/* Custom Upload Button that triggers the hidden ref */}
          <button 
            type="button"
            onClick={(e) => {
               e.stopPropagation(); // Stops the click from reaching the "absolute" input
               fileInputRef.current?.click();
            }}
            className="bg-blue-600 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 font-medium shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
          >
            <Upload size={18} />
            Upload Photo
          </button>

          <button 
            type="button"
            onClick={(e) => {
              e.stopPropagation(); // CRITICAL: Stops the click from opening the file uploader
              nextStep();
            }} 
            className="bg-white text-slate-700 px-6 py-2.5 rounded-xl border border-slate-200 font-medium hover:bg-slate-50 transition-colors"
          >
            Skip This Step
          </button>
        </div>

        {/* Hidden Ref Input for the "Upload Photo" button specifically */}
        <input 
          ref={fileInputRef}
          type="file" 
          className="hidden" 
          onChange={handleFileChange} 
          accept="image/*" 
        />
      </div>

      {/* Info Grid */}
      <div className="bg-slate-50/80 rounded-2xl p-8 border border-slate-100">
        <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-widest">What our AI looks for:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
          {infoItems.map((item) => (
            <div key={item} className="flex items-center gap-3 text-slate-600 font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Nav */}
      <div className="flex justify-end pt-4">
        <button 
          onClick={nextStep}
          className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl flex items-center gap-2 font-bold transition-all hover:shadow-xl active:scale-95"
        >
          Next <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}