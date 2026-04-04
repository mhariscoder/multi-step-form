"use client";
import { useFormStore } from "@/store/useFormStore";
import { ExternalLink, CheckCircle2, ArrowLeft, RefreshCcw } from "lucide-react";

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
    // Optional: Clear store and go to step 1
    window.location.reload(); 
  };

  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-500 max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-2">
          <CheckCircle2 size={32} />
        </div>
        <h1 className="text-4xl font-bold text-slate-900">Your Personalized Recommendations</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Our AI has analyzed your preferences. Here are the best window treatments for your space.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recommendations.map((product) => (
          <div 
            key={product.id} 
            className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-blue-100 transition-all duration-300 flex flex-col"
          >
            {/* Image Section */}
            <div className="relative h-56 bg-slate-100 overflow-hidden">
              <img 
                src={product.image || "https://placehold.co/600x400?text=No+Image+Available"} 
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-blue-600 shadow-sm uppercase tracking-wider">
                  {product.product_type}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-grow space-y-4">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {product.title}
              </h3>
              
              <div className="bg-blue-50 rounded-2xl p-4 flex-grow">
                <p className="text-sm text-blue-800 leading-relaxed">
                  <span className="font-bold">Why this works:</span> {product.reason}
                </p>
              </div>

              <a 
                href={product.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all active:scale-95"
              >
                View Product <ExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center pt-10">
        <button 
          onClick={handleRestart}
          className="flex items-center gap-2 text-slate-500 font-bold hover:text-slate-800 transition-colors"
        >
          <RefreshCcw size={20} /> Start New Consultation
        </button>
      </div>
    </div>
  );
}