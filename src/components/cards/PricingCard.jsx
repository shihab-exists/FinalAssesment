import React from 'react';
import CheckIcon from '../icons/CheckIcon';

function PricingCard({
  name,
  price,
  period,
  description,
  features = [],
  isPopular = false,
  buttonText = 'Get started',
}) {
  return (
    <div
      className={`w-full flex-1 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
        isPopular
          ? 'bg-white shadow-[0px_4px_24px_rgba(55,50,47,0.10)] border-2 border-[#37322F]'
          : 'bg-[#F7F5F3] hover:bg-white border border-[#E0DEDB] shadow-xs'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#37322F] text-white text-[11px] font-medium tracking-wide uppercase rounded-full shadow-xs">
          Most Popular
        </div>
      )}

      <div>
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="text-[#37322F] text-lg font-semibold">{name}</h3>
        </div>

        <div className="flex items-baseline gap-1 my-4">
          <span className="text-[#37322F] text-4xl sm:text-5xl font-serif font-normal tracking-tight">
            {price}
          </span>
          {period && (
            <span className="text-[#605A57] text-xs sm:text-sm font-normal">
              /{period}
            </span>
          )}
        </div>

        <p className="text-[#605A57] text-xs sm:text-sm leading-relaxed mb-6">
          {description}
        </p>

        <div className="w-full h-px bg-[#E0DEDB] my-4" />

        <ul className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#49423D]">
              <CheckIcon className="w-4 h-4 mt-0.5 shrink-0 text-[#00D991]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className={`w-full py-2.5 px-4 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
          isPopular
            ? 'bg-[#37322F] text-white hover:bg-[#252220] shadow-sm'
            : 'bg-white text-[#37322F] border border-[#E0DEDB] hover:bg-[#F2EFEB]'
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default PricingCard;
