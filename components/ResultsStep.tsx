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
      <div className="flex flex-col gap-10">
        {recommendations.map((product, index) => (
          <>
        {index ==0 &&<div className="flex flex-col md:flex-row gap-3 md:items-center">
          <div className="w-[70px] h-[70px] bg-[#BC9661] rounded-full flex items-center justify-center text-white shadow-md shrink-0">
            <svg width="36" height="34" viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6667 1L22.8167 11.4333L34.3333 13.1167L26 21.2333L27.9667 32.7L17.6667 27.2833L7.36667 32.7L9.33333 21.2333L1 13.1167L12.5167 11.4333L17.6667 1Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h4 className="text-[24px] sm:text-[28px] md:text-[28px] xl:text-[32px] leading-[1.1] heading-font text-[#1A1A1A]">
            Primary Recommendation
          </h4>
        </div>}
        {index == 1 &&
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <div className="w-[70px] h-[70px] bg-[#18191A] rounded-full flex items-center justify-center text-white shadow-md shrink-0">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5617 25.8334C16.4129 25.2566 16.1123 24.7303 15.6911 24.3091C15.2699 23.8879 14.7435 23.5872 14.1667 23.4384L3.94173 20.8018C3.76728 20.7522 3.61374 20.6472 3.50442 20.5025C3.39509 20.3578 3.33594 20.1814 3.33594 20.0001C3.33594 19.8188 3.39509 19.6424 3.50442 19.4977C3.61374 19.353 3.76728 19.2479 3.94173 19.1984L14.1667 16.5601C14.7433 16.4114 15.2695 16.111 15.6907 15.6902C16.1119 15.2693 16.4127 14.7432 16.5617 14.1668L19.1984 3.94176C19.2474 3.76662 19.3524 3.61233 19.4973 3.50241C19.6422 3.3925 19.819 3.33301 20.0009 3.33301C20.1828 3.33301 20.3596 3.3925 20.5045 3.50241C20.6494 3.61233 20.7544 3.76662 20.8034 3.94176L23.4384 14.1668C23.5872 14.7435 23.8878 15.2699 24.309 15.6911C24.7302 16.1123 25.2566 16.413 25.8334 16.5618L36.0584 19.1968C36.2342 19.2453 36.3893 19.3501 36.4998 19.4952C36.6103 19.6403 36.6701 19.8177 36.6701 20.0001C36.6701 20.1825 36.6103 20.3598 36.4998 20.505C36.3893 20.6501 36.2342 20.7549 36.0584 20.8034L25.8334 23.4384C25.2566 23.5872 24.7302 23.8879 24.309 24.3091C23.8878 24.7303 23.5872 25.2566 23.4384 25.8334L20.8017 36.0584C20.7527 36.2336 20.6478 36.3879 20.5029 36.4978C20.358 36.6077 20.1811 36.6672 19.9992 36.6672C19.8174 36.6672 19.6405 36.6077 19.4956 36.4978C19.3507 36.3879 19.2457 36.2336 19.1967 36.0584L16.5617 25.8334Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M33.334 5V11.6667" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M36.6667 8.33301H30" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6.66602 28.333V31.6663" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.33333 30H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <h4 className="text-[24px] sm:text-[28px] md:text-[28px] xl:text-[32px] leading-[1.1] heading-font text-[#1A1A1A]">
            Alternatives
          </h4>
        </div>}
          <div 
            key={product.id} 
            className="flex relative flex-col md:flex-row bg-[#FBF9F6] border border-transparent hover:border-[#D1C7B7]/30 transition-all  "
          >
            <div className={`px-4 absolute h-[34px] w-[144px] -top-5 text-center items-center flex justify-center  right-0  ${index === 0 ? "bg-[#bc9661]" : "bg-[#18191A]"} text-white text-[18px] font-bold rounded-full`}>
              {index ==0 ?"Primary":"Alternatives"}
            </div>
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
                className={`w-full rounded-full ${index === 0 ? "bg-[#bc9661]" : ""} ${index === 0 ? "text-white" : "text-black"} items-center flex justify-center h-[48px] text-[14px] font-sans font-bold text-center transition-all border `}
              >
                View Product
              </a>
            </div>
          </div>
            </>))}
      </div>

      {/* Footer Navigation */}
      <div className="flex flex-col gap-4 pt-8 ">
        <button 
          onClick={handleRestart}
          className="w-full py-4 border border-[#1A1A1A] rounded-full text-[#1A1A1A] text-[14px] font-sans font-medium hover:bg-[#FBF9F6] transition-all text-center uppercase tracking-widest"
        >
          Start New Consultation
        </button>
      </div>
    </div>
  );
}