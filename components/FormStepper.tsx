import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const FormStepper = ({ currentStep }: { currentStep: number }) => {
  const steps = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="relative w-full">
  <div className="absolute top-[35px] left-[35px] right-[35px] h-[1px] bg-[#BC9661]/20" />

  <div
    className="absolute top-[35px] left-[35px] h-[1px] bg-[#BC9661] transition-all duration-700 ease-in-out"
    style={{
      width:
        currentStep <= 1
          ? "0%"
          : `calc(((100% - 70px) / ${steps.length - 1}) * ${currentStep - 1})`,
    }}
  />

  <div className="relative flex items-center justify-between">
    {steps.map((s) => (
      <div key={s} className="z-10 flex flex-col items-center">
        <div
          className={cn(
            "w-[70px] h-[70px] rounded-full heading-font flex items-center justify-center text-[32px] font-serif transition-all duration-500",
            s === currentStep
              ? "bg-[#C19A5B] text-white"
              : s < currentStep
              ? "bg-[#BC9661] text-white"
              : "bg-[#F3EEE7] text-[#727272]"
          )}
        >
          {s.toString().padStart(2, "0")}
        </div>
      </div>
    ))}
  </div>
</div>
  );
};