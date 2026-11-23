import React from 'react';
import { featuresHeaderData as defaultHeader, featuresData as defaultFeatures } from '../data/websiteData';
import FeatureCard from './cards/FeatureCard';
import SectionBadge from './common/SectionBadge';
import ServicesBadgeIcon from './icons/ServicesBadgeIcon';
import DiagonalHatchPattern from './common/DiagonalHatchPattern';

function Features({
  header = defaultHeader,
  features = defaultFeatures,
}) {
  return (
    <section id="features" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          <SectionBadge
            icon={<ServicesBadgeIcon />}
            text={header.badgeText || 'Services'}
          />

          <h2 className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight">
            {header.heading}
          </h2>

          <p className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
            {header.subheading}
          </p>
        </div>
      </div>

      <div className="self-stretch flex justify-center items-start">
        <DiagonalHatchPattern className="w-12 hidden md:block" />

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {features.map((feature, idx) => (
            <FeatureCard
              key={feature.id || idx}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              imageClass={feature.imageClass}
              borderClasses={feature.borderClasses}
            />
          ))}
        </div>

        <DiagonalHatchPattern className="w-12 hidden md:block" />
      </div>
    </section>
  );
}

export default Features;
