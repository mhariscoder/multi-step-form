"use client";
import { useFormStore } from "@/store/useFormStore";

interface Product {
  id: string;
  title: string;
  image: string | null;
  url: string;
  reason: string;
  product_type: string;
}

export default function ResultsStep({ recommendations }: { recommendations: Product[] }) {
  const { setStep } = useFormStore();

  const handleRestart = () => {
    window.location.reload(); 
  };

  return (
    <div className="w-full flex flex-col gap-10 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <header className="space-y-3">
        <h1 className="text-[44px] font-serif text-[#1A1A1A] leading-tight tracking-tight">
          Your Personalized Recommendations
        </h1>
        <p className="text-[#8E8E8E] text-[16px] font-sans max-w-2xl">
          Our AI has analyzed your preferences. Here are the best window treatments for your space.
        </p>
      </header>

      {/* Recommendations List */}
      <div className="flex flex-col gap-6">
        {recommendations.map((product, index) => (
          <div 
            key={product.id} 
            className="flex flex-col md:flex-row bg-[#FBF9F6] border border-transparent hover:border-[#D1C7B7]/30 transition-all overflow-hidden "
          >
            {/* Product Image Section */}
            <div className="w-full md:max-w-[257px]  max-h-[257px]   md:w-1/3 aspect-square bg-[#E8E8E8] relative overflow-hidden">
              <img 
                src={product.image || "https://placehold.co/600x600?text=Product+Image"} 
                alt={product.title}
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Product Content Section */}
            <div className="flex-1 xl:ml-5  p-3 max-w-3xl xl:max-w-[993px] flex min-[180px]  my-auto flex-col justify-center space-y-4">
              <h3 className="text-[32px] font-serif text-[#1A1A1A] leading-tight">
                {product.title}
              </h3>
              
              <div className="space-y-2">
                <p className="text-[15px] text-[#1A1A1A] leading-relaxed font-sans">
                  <span className="font-bold">Why this works:</span> {product.reason}
                </p>
              </div>

              {/* View Product Button - Alternating Gold/White Style */}
              <a 
                href={product.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full rounded-full hover:bg-[#BC9661] items-center flex justify-center h-[48px] hover:text-white bg-white text-[14px] font-sans font-bold text-center transition-all border `}
              >
                View Product
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="flex flex-col gap-4 pt-8 ">
        <button 
          onClick={handleRestart}
          className="w-full py-4 border border-[#1A1A1A] rounded-full text-[#1A1A1A] text-[14px] font-sans font-medium hover:bg-[#FBF9F6] transition-all text-center uppercase tracking-widest"
        >
          Start New Consultation
        </button>
        
        {/* Security Footer */}
        <p className="text-center text-[11px] text-[#A0A0A0] font-sans tracking-wide uppercase mt-4">
          Your info is secure Â· No spam Â· We never share your details
        </p>
      </div>
    </div>
  );
}