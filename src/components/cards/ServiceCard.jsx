import React, { useState } from 'react';

function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  isLast = false,
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80 ${
        isLast ? 'last:border-b-0' : ''
      } transition-colors duration-200 hover:bg-white/40`}
    >
      <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6">
        {title}
      </div>
      <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
        {description}
      </div>
      {hasError ? (
        <div className="w-full h-40 bg-[#EDEBE8] rounded-md mt-3 flex items-center justify-center text-xs text-[#7B746F]">
          {title} Preview
        </div>
      ) : (
        <img
          src={imageSrc}
          alt={imageAlt || title}
          onError={() => setHasError(true)}
          className="w-full h-40 object-cover rounded-md mt-3 shadow-xs"
          loading="lazy"
        />
      )}
    </div>
  );
}

export default ServiceCard;
