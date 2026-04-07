import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FormStepper = ({ currentStep }: { currentStep: number }) => {
  const steps = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="relative flex items-center justify-between w-full">
      {/* Background Track Line */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#BC9661]/20 -translate-y-1/2 z-0" />
      
      {steps.map((s, index) => (
        <div key={s} className="relative z-10 flex flex-col items-center flex-1">
          {/* Increased Circle Size and Font Size */}
          <div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center text-[16px] font-serif transition-all duration-500 border shadow-sm",
              s === currentStep 
                ? "bg-white border-[#BC9661] text-[#1A1A1A] scale-110 ring-8 ring-[#BC9661]/5" 
                : s < currentStep 
                ? "bg-[#BC9661] border-[#BC9661] text-white" 
                : "bg-[#F3F0EB] border-[#D1C7B7]/40 text-[#8E8E8E]"
            )}
          >
            {s.toString().padStart(2, '0')}
          </div>

          {/* Progress Connector Fill */}
          {index < steps.length - 1 && (
            <div className="absolute top-1/2 left-[50%] w-full h-[1px] -z-10 -translate-y-1/2 overflow-hidden">
              <div 
                className={cn(
                  "h-full bg-[#BC9661] transition-all duration-700 ease-in-out",
                  s < currentStep ? "w-full" : "w-0"
                )}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};