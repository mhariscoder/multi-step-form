"use client";
import { useFormStore } from "@/store/useFormStore";
import { Sun, Monitor, Moon, CloudMoon, Mountain, ArrowLeft, ArrowRight } from "lucide-react";

const PRIORITIES = [
  {
    id: 'soft_filtered',
    title: 'Soft / Filtered Light',
    desc: 'Gently softens sunlight while maintaining a bright, welcoming atmosphere',
    icon: Sun,
  },
  {
    id: 'reduce_glare',
    title: 'Reduce Glare & Heat',
    desc: 'Minimizes screen glare and heat gain - perfect for rooms with TVs or computers',
    icon: Monitor,
  },
  {
    id: 'room_darkening',
    title: 'Room Darkening',
    desc: 'Creates a darker environment ideal for sleeping or watching movies',
    icon: Moon,
  },
  {
    id: 'full_blackout',
    title: 'Full Blackout',
    desc: 'Blocks nearly all light for complete darkness - ideal for day sleepers',
    icon: CloudMoon,
  },
  {
    id: 'keep_view',
    title: 'Keep the View',
    desc: 'Reduces brightness while preserving your daytime view of the outdoors',
    icon: Mountain,
  },
];

export default function StepSix() {
  const { lightPriority, setLightPriority, nextStep, prevStep } = useFormStore();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">What matters most for light in this room?</h1>
        <p className="text-slate-500 text-lg">
          Light control is one of the most important factors in choosing window treatments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PRIORITIES.map((item) => {
          const Icon = item.icon;
          const isSelected = lightPriority === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setLightPriority(item.id)}
              className={`flex flex-col items-start p-6 rounded-2xl border-2 transition-all text-left group ${
                isSelected
                  ? "border-blue-600 bg-blue-50/50 ring-1 ring-blue-600 shadow-sm"
                  : "border-slate-100 hover:border-blue-200 hover:bg-slate-50"
              }`}
            >
              <div className={`p-2 rounded-lg mb-4 transition-colors ${
                isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-blue-100"
              }`}>
                <Icon size={20} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-slate-100">
        <button
          onClick={prevStep}
          className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors"
        >
          <ArrowLeft size={20} /> Back
        </button>

        <button
          onClick={nextStep}
          disabled={!lightPriority}
          className={`px-10 py-3 rounded-xl flex items-center gap-2 font-bold transition-all ${
            lightPriority
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