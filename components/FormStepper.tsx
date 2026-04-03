import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FormStepper = ({ currentStep }: { currentStep: number }) => {
  const steps = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="relative flex items-center justify-between w-full">
      {/* Background Track */}
      <div className="absolute top-4 left-0 w-full h-0.5 bg-slate-100 -z-0" />
      
      {steps.map((s) => (
        <div key={s} className="relative z-10 flex flex-col items-center">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 border-2",
              s === currentStep 
                ? "bg-white border-blue-600 text-blue-600 ring-4 ring-blue-50" 
                : s < currentStep 
                ? "bg-blue-600 border-blue-600 text-white" 
                : "bg-white border-slate-200 text-slate-400"
            )}
          >
            {s}
          </div>
          {/* Blue progress fill for the track */}
          {s < 10 && (
            <div 
              className={cn(
                "absolute top-4 left-8 h-0.5 transition-all duration-500 -z-10",
                s < currentStep ? "bg-blue-600 w-[calc(100vw/10)]" : "w-0"
              )}
              style={{ width: 'clamp(20px, 6vw, 80px)' }}
            />
          )}
        </div>
      ))}
    </div>
  );
};