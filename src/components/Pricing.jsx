import React from 'react';
import {
  pricingHeaderData as defaultHeader,
  pricingPlansData as defaultPlans,
} from '../data/websiteData';
import PricingCard from './cards/PricingCard';
import SectionBadge from './common/SectionBadge';
import PricingBadgeIcon from './icons/PricingBadgeIcon';

function Pricing({
  header = defaultHeader,
  plans = defaultPlans,
}) {
  return (
    <section id="pricing" className="w-full flex flex-col justify-center items-center gap-2 border-b border-[rgba(55,50,47,0.12)]">
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4">
          <SectionBadge
            icon={<PricingBadgeIcon />}
            text={header.badgeText || 'Plans & Pricing'}
          />

          <h2 className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight">
            {header.heading}
          </h2>

          <p className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 whitespace-pre-line">
            {header.subheading}
          </p>
        </div>
      </div>

      <div className="self-stretch px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16">
        <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
