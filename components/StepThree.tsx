"use client";
import { useFormStore } from "@/store/useFormStore";
import { 
  Sofa, Bed, UtensilsCrossed, Wine, Bath, 
  Briefcase, Monitor, Baby, Shirt, Car,
  Coffee, Moon, PartyPopper, BookOpen, Users,
  ArrowLeft, ArrowRight 
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
    <div className="space-y-10 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Tell us about this room</h1>
        <p className="text-slate-500 text-lg">Understanding your space helps us match you with the right products.</p>
      </div>

      {/* Section 1: Room Type */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800">What type of room is this? <span className="text-red-500">*</span></h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {ROOM_TYPES.map((item) => {
            const Icon = item.icon;
            const isSelected = roomType === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setRoomType(item.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all gap-2 ${
                  isSelected ? "border-blue-600 bg-blue-50 text-blue-600" : "border-slate-100 hover:border-slate-200 text-slate-600"
                }`}
              >
                <Icon size={20} />
                <span className="text-xs font-semibold">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Section 2: Primary Use */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800">Primary use of this space? <span className="text-red-500">*</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {USAGE_TYPES.map((item) => {
            const Icon = item.icon;
            const isSelected = roomUsage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setRoomUsage(item.id)}
                className={`flex flex-col items-start p-5 rounded-2xl border-2 transition-all text-left gap-1 ${
                  isSelected ? "border-blue-600 bg-blue-50 shadow-sm" : "border-slate-100 hover:border-slate-200"
                }`}
              >
                <div className={`p-2 rounded-lg mb-2 ${isSelected ? "bg-blue-600 text-white" : "bg-slate-50 text-slate-500"}`}>
                  <Icon size={20} />
                </div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-slate-100">
        <button onClick={prevStep} className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors">
          <ArrowLeft size={20} /> Back
        </button>
        
        <button 
          onClick={nextStep}
          disabled={!isComplete}
          className={`px-10 py-3 rounded-xl flex items-center gap-2 font-bold transition-all ${
            isComplete 
              ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 active:scale-95" 
              : "bg-blue-200 text-white cursor-not-allowed"
          }`}
        >
          Next <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}