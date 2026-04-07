import { Search, ShoppingBag, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#f5f2ed] border-b border-black/5">
      <div className="mx-auto flex h-[92px] max-w-[1920px] items-center justify-between px-8 xl:px-16">
        
        <div className="flex items-center gap-3">
         <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_351_2312)">
<path d="M36.1535 0V30.2363H35.0414V0H33.1949V30.2363H32.0723V7.77416V5.92766V4.80508V2.95859V1.84649V0H30.2258H0V1.84649H30.2258V2.95859H0V4.80508H30.2258V5.92766H7.76367H5.92766H4.80508H2.95859H1.84649H0V7.77416V38H1.84649V7.77416H2.95859V38H4.80508V7.77416H5.92766V30.2363V32.0723V33.1949V35.0414V36.1535V38H7.76367H38V36.1535H7.76367V35.0414H38V33.1949H7.76367V32.0723H30.2258H32.0723H33.1949H35.0414H36.1535H38V30.2363V0H36.1535Z" fill="#C19A5B"/>
</g>
<defs>
<clipPath id="clip0_351_2312">
<rect width="38" height="38" fill="white"/>
</clipPath>
</defs>
</svg>

          <h1 className="font-serif text-[24px] font-normal tracking-[-0.02em] text-[#1a1a1a] sm:text-[22px] md:text-[24px]">
            Shop Modern Blinds
          </h1>
        </div>

        <nav className="hidden items-center gap-10 lg:flex">
          <a
            href="#"
            className="text-[16px] leading-[28px] font-normal text-[#1a1a1a] transition-opacity hover:opacity-70"
          >
            Home
          </a>
          <a
            href="#"        className="text-[16px] leading-[28px] font-normal text-[#1a1a1a] transition-opacity hover:opacity-70"
          >
            About Us
          </a>

          <a
            href="#"
               className="text-[16px] leading-[28px] font-normal flex items-center gap-1 text-[#1a1a1a] transition-opacity hover:opacity-70"
          >
            Shop
            <ChevronDown size={15} strokeWidth={1.8} />
          </a>

          <a
            href="#"
        className="text-[16px] leading-[28px] font-normal text-[#1a1a1a] transition-opacity hover:opacity-70"
          >
            Design Consultant
          </a>
          <a
            href="#"
             className="text-[16px] leading-[28px] font-normal text-[#1a1a1a] transition-opacity hover:opacity-70"
          >
            Resources
          </a>
          <a
            href="#"
                className="text-[16px] leading-[28px] font-normal text-[#1a1a1a] transition-opacity hover:opacity-70"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <button className="relative text-[#1a1a1a] transition-opacity hover:opacity-70">
           <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.512 4.488H13.488C13.488 3.672 13.288 2.92 12.888 2.232C12.488 1.544 11.944 1 11.256 0.6C10.568 0.199999 9.816 0 9 0C8.184 0 7.432 0.199999 6.744 0.6C6.056 1 5.512 1.544 5.112 2.232C4.712 2.92 4.512 3.672 4.512 4.488H1.512C1.096 4.488 0.74 4.636 0.444 4.932C0.148 5.228 0 5.584 0 6V22.512C0 22.928 0.148 23.28 0.444 23.568C0.74 23.856 1.096 24 1.512 24H16.512C16.928 24 17.28 23.856 17.568 23.568C17.856 23.28 18 22.928 18 22.512V6C18 5.584 17.856 5.228 17.568 4.932C17.28 4.636 16.928 4.488 16.512 4.488ZM9 1.488C9.544 1.488 10.044 1.624 10.5 1.896C10.956 2.168 11.32 2.532 11.592 2.988C11.864 3.444 12 3.944 12 4.488H6.024C6.024 3.944 6.16 3.444 6.432 2.988C6.704 2.532 7.064 2.172 7.512 1.908C7.96 1.644 8.456 1.504 9 1.488ZM16.512 22.512H1.512V6H16.512V22.512ZM6.744 9H11.256C11.464 9 11.644 8.928 11.796 8.784C11.948 8.64 12.024 8.46 12.024 8.244C12.024 8.028 11.948 7.848 11.796 7.704C11.644 7.56 11.464 7.488 11.256 7.488H6.744C6.536 7.488 6.356 7.56 6.204 7.704C6.052 7.848 5.976 8.028 5.976 8.244C5.976 8.46 6.052 8.64 6.204 8.784C6.356 8.928 6.536 9 6.744 9Z" fill="#18191A"/>
</svg>

            <span className="absolute -right-1.5 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#bc9661] text-[10px] font-medium text-white">
              0
            </span>
          </button>

          <button className="text-[#1a1a1a] transition-opacity hover:opacity-70">
            <Search size={26} strokeWidth={1.8} />
          </button>
        </div>
      </div>
    </header>
  );
}