import React, { useState } from 'react';
import { testimonialData as defaultTestimonial } from '../data/websiteData';
import SectionBadge from './common/SectionBadge';
import TestimonialBadgeIcon from './icons/TestimonialBadgeIcon';

function Testimonials({ data = defaultTestimonial }) {
  const [hasError, setHasError] = useState(false);

  return (
    <section id="testimonials" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          <SectionBadge
            icon={<TestimonialBadgeIcon />}
            text={data.badgeText || 'Testimonials'}
          />

          <h2 className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight">
            {data.heading}
          </h2>

          <p className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
            Our customers achieve more each day
            <br className="hidden sm:block" />
            because their tools are simple, powerful, and clear.
          </p>
        </div>
      </div>

      <div className="self-stretch px-2 overflow-hidden flex justify-start items-center border-b border-[rgba(55,50,47,0.12)]">
        <div className="flex-1 py-12 md:py-16 flex flex-col md:flex-row justify-center items-end gap-6">
          <div className="self-stretch px-3 md:px-12 justify-center items-start gap-4 flex flex-col md:flex-row">
            {hasError ? (
              <div className="w-48 h-50 rounded-lg bg-[#EAE7E3] border border-[rgba(55,50,47,0.12)] flex flex-col items-center justify-center text-[#49423D] shrink-0 p-4">
                <div className="w-16 h-16 rounded-full bg-[#37322F] text-white flex items-center justify-center text-xl font-serif mb-2">
                  JM
                </div>
                <span className="text-xs font-medium text-center">{data.author}</span>
              </div>
            ) : (
              <img
                src={data.imageSrc}
                alt={data.author}
                onError={() => setHasError(true)}
                className="w-48 h-50 rounded-lg object-cover shrink-0 shadow-xs"
                loading="lazy"
              />
            )}

            <div className="flex-1 px-6 py-6 shadow-[0px_0px_0px_0.75px_rgba(50,45,43,0.12)] overflow-hidden flex flex-col justify-start items-start gap-6 bg-white/40 rounded-lg">
              <blockquote className="self-stretch justify-start flex flex-col text-[#49423D] text-2xl md:text-[32px] font-medium leading-10 md:leading-[42px] h-auto tracking-tight font-serif italic">
                {data.quote}
              </blockquote>
              <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.90)] text-lg font-medium leading-[26px]">
                  {data.author}
                </div>
                <div className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.70)] text-sm sm:text-base font-medium leading-[26px]">
                  {data.role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
