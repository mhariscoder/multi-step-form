"use client";
import { useFormStore } from "@/store/useFormStore";
import { 
  Sofa, Bed, UtensilsCrossed, Bath, 
  Briefcase, Monitor, Baby, Shirt, Car,
  Coffee, Moon, PartyPopper, BookOpen, Users
} from "lucide-react";

const ROOM_TYPES = [
  { id: 'living', label: 'Living Room', icon: Sofa },
  { id: 'bedroom', label: 'Bedroom', icon: Bed },
  { id: 'kitchen', label: 'Kitchen', icon: Coffee },
  { id: 'dining', label: 'Dining Room', icon: UtensilsCrossed },
  { id: 'bathroom', label: 'Bathroom', icon: Bath },
  { id: 'office', label: 'Home Office', icon: Briefcase },
  { id: 'media', label: 'Media/Theater', icon: Monitor },
  { id: 'nursery', label: 'Nursery/Kids', icon: Baby },
  { id: 'laundry', label: 'Laundry Room', icon: Shirt },
  { id: 'garage', label: 'Garage', icon: Car },
];

const USAGE_TYPES = [
  { id: 'relaxing', title: 'Relaxing / Lounging', desc: 'A calm space to unwind', icon: Coffee },
  { id: 'sleeping', title: 'Sleeping', desc: 'Restful nights are the priority', icon: Moon },
  { id: 'entertaining', title: 'Entertaining', desc: 'Hosting guests and gatherings', icon: PartyPopper },
  { id: 'work', title: 'Work / Studying', desc: 'Productivity is key here', icon: BookOpen },
  { id: 'family', title: 'Family Activities', desc: 'Where the family comes together', icon: Users },
];

export default function StepThree() {
  const { roomType, setRoomType, roomUsage, setRoomUsage, nextStep, prevStep } = useFormStore();

  const isComplete = roomType && roomUsage;

  return (
    <div className="w-full flex flex-col gap-10 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <header className="space-y-3">
        <h1 className="text-[44px] font-serif text-[#1A1A1A] leading-tight tracking-tight">
          Tell us about this room
        </h1>
        <p className="text-[#8E8E8E] text-[16px] font-sans">
          Understanding your space helps us match you with the right products.
        </p>
      </header>

      {/* Section 1: Room Type */}
      <div className="space-y-6">
        <h3 className="text-[22px] font-serif text-[#1A1A1A]">
          What type of room is this? <span className="text-[#BC9661] ml-1">*</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {ROOM_TYPES.map((item) => {
            const Icon = item.icon;
            const isSelected = roomType === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setRoomType(item.id)}
                className={`flex flex-col items-center justify-center p-6 rounded-sm transition-all gap-4 border
                  ${isSelected 
                    ? "bg-[#0F172A] border-[#0F172A] text-white shadow-md" 
                    : "bg-[#FBF9F6] border-transparent text-[#8E8E8E] hover:bg-white hover:border-[#D1C7B7]"
                  }`}
              >
                <Icon size={20} className={isSelected ? "text-[#BC9661]" : "text-[#BC9661] opacity-70"} />
                <span className={`text-[13px] font-sans font-medium ${isSelected ? "text-white" : "text-[#1A1A1A]"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 2: Primary Use */}
      <div className="space-y-6">
        <h3 className="text-[22px] font-serif text-[#1A1A1A]">
          Primary use of this space? <span className="text-[#BC9661] ml-1">*</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USAGE_TYPES.map((item) => {
            const Icon = item.icon;
            const isSelected = roomUsage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setRoomUsage(item.id)}
                className={`flex flex-col items-start p-8 rounded-sm transition-all text-left gap-4 border
                  ${isSelected 
                    ? "bg-[#0F172A] border-[#0F172A] text-white shadow-lg" 
                    : "bg-[#FBF9F6] border-transparent text-[#1A1A1A] hover:bg-white hover:border-[#D1C7B7]"
                  }`}
              >
                <div className={`p-3 rounded-full ${isSelected ? "bg-[#BC9661] text-white" : "bg-[#0F172A] text-white"}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className={`text-[20px] font-serif mb-1 ${isSelected ? "text-white" : "text-[#1A1A1A]"}`}>
                    {item.title}
                  </h4>
                  <p className={`text-[13px] font-sans ${isSelected ? "text-slate-300" : "text-[#8E8E8E]"}`}>
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex flex-col md:flex-row gap-4 pt-4 border-t border-[#D1C7B7]/30">
        <button 
          onClick={prevStep}
          className="flex-1 py-4 border border-[#1A1A1A] rounded-full text-[#1A1A1A] text-[14px] font-sans font-medium hover:bg-white/50 transition-all text-center"
        >
          Back
        </button>
        
        <button 
          onClick={nextStep}
          disabled={!isComplete}
          className={`flex-1 py-4 rounded-full text-white text-[16px] font-sans font-semibold transition-all shadow-sm ${
            isComplete ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>

      <p className="text-center text-[11px] text-[#A0A0A0] font-sans tracking-wide">
        Your info is secure · No spam · We never share your details
      </p>
    </div>
  );
}