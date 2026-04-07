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
    <div className="w-full flex flex-col md:gap-18   gap-10   animate-in fade-in duration-700">
      
      {/* Header Section */}
      <header className="space-y-4">
        <h1 className="text-[30px] sm:text-[38px] md:text-[42px] xl:text-[48px] heading-font text-[#1A1A1A] leading-[1.1] md:leading-[1.1] xl:leading-[59px] ">
          Tell us about this room
        </h1>
        <p className="text-[#8E8E8E] text-[14px] sm:text-[15px] md:text-[15px] xl:text-[16px] text-font leading-[1.5]">
          Understanding your space helps us match you with the right products.
        </p>
      </header>

      {/* Section 1: Room Type */}
      <div className="space-y-6">
        <h3 className="text-[24px] sm:text-[28px] md:text-[28px] xl:text-[32px] heading-font text-[#1A1A1A]">
          What type of room is this? <span className="text-[#BC9661] ml-1">*</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {ROOM_TYPES.map((item) => {
            const Icon = item.icon;
            const isSelected = roomType === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setRoomType(item.id)}
                className={`flex flex-col items-center min-h-[120px] justify-center p-6  transition-all gap-4 border
                  ${isSelected 
                    ? "bg-[#0F172A] border-[#0F172A] text-white shadow-md" 
                    : "bg-[#FBF9F6] border-transparent text-[#8E8E8E] hover:bg-white hover:border-[#D1C7B7]"
                  }`}
              >
                <div className="min-h-[60px]   flex flex-col items-center justify-between">

                <Icon size={20} className={isSelected ? "text-[#BC9661]" : "text-[#BC9661] opacity-70"} />
                <span className={`text-[15px] sm:text-[17px] md:text-[18px] xl:text-[20px] text-font font-medium ${isSelected ? "text-white" : "text-[#727272]"}`}>
                  {item.label}
                </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 2: Primary Use */}
      <div className="space-y-6">
        <h3 className="text-[24px] sm:text-[28px] md:text-[28px] xl:text-[32px] heading-font text-[#1A1A1A]">
          Primary use of this space? <span className="text-[#BC9661] ml-1">*</span>
        </h3>
     <div className="grid grid-cols-1 grid-cols-4 lg:grid-cols-6 gap-5">
  {USAGE_TYPES.map((item, index) => {
    const Icon = item.icon;
    const isSelected = roomUsage === item.id;
    const isBottomRow = index >= 3;

    return (
      <button
        key={item.id}
        onClick={() => setRoomUsage(item.id)}
        className={`flex flex-col items-start p-8  transition-all md:min-h-[225px] text-left gap-4 border
          ${isBottomRow ? " col-span-2 lg:col-span-3" : " col-span-2 lg:col-span-2"}
          ${
            isSelected
              ? "bg-[#0F172A] border-[#0F172A] text-white shadow-lg"
              : "bg-[#FBF9F6] border-transparent text-[#1A1A1A] hover:bg-white hover:border-[#D1C7B7]"
          }`}
      >
        <div
          className={`rounded-full h-[50px] w-[50px] flex items-center justify-center ${
            isSelected ? "bg-[#BC9661] text-white" : "bg-[#0F172A] text-white"
          }`}
        >
          <Icon size={18} />
        </div>

        <div>
          <h4
            className={`text-[24px] sm:text-[28px] md:text-[28px] xl:text-[32px] heading-font mb-1 ${
              isSelected ? "text-white" : "text-[#1A1A1A]"
            }`}
          >
            {item.title}
          </h4>

          <p
            className={`text-[15px] sm:text-[17px] md:text-[16px] xl:text-[18px] text-font ${
              isSelected ? "text-slate-300" : "text-[#8E8E8E]"
            }`}
          >
            {item.desc}
          </p>
        </div>
      </button>
    );
  })}
</div>
      </div>

      {/* Footer Navigation */}
      <div className="flex flex-col md:flex-row gap-4 pt-4 ">
        <button 
          onClick={prevStep}
          className="flex-1 py-4 border border-[#1A1A1A] rounded-full text-[#1A1A1A] text-[13px] md:text-[13px] xl:text-[14px] text-font font-medium hover:bg-white/50 transition-all text-center"
        >
          Back
        </button>
        
        <button 
          onClick={nextStep}
          disabled={!isComplete}
          className={`flex-1 py-4 rounded-full text-white text-[14px] md:text-[15px] xl:text-[16px] text-font font-semibold transition-all shadow-sm ${
            isComplete ? "bg-[#BC9661] hover:brightness-105 active:scale-[0.98]" : "bg-[#D1C7B7] cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>

      {/* <p className="text-center text-[11px] text-[#A0A0A0] text-font tracking-wide">
        Your info is secure | No spam | We never share your details
      </p> */}
    </div>
  );
}
