import React, { useState } from 'react';

function FeatureCard({
  title,
  description,
  imageSrc,
  imageAlt,
  imageClass = "h-full object-cover",
  borderClasses = "",
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 transition-colors duration-200 hover:bg-white/30 ${borderClasses}`}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight">
          {title}
        </h3>
        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
          {description}
        </p>
      </div>
      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden relative bg-[#EFECE8]/50 border border-[rgba(55,50,47,0.06)]">
        {hasError ? (
          <div className="text-xs text-[#7B746F]">{title} Graphic</div>
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt || title}
            onError={() => setHasError(true)}
            className={`${imageClass} transition-transform duration-300 hover:scale-105`}
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

export default FeatureCard;
