import React from 'react';
import { servicesData as defaultServices } from '../data/websiteData';
import ServiceCard from './cards/ServiceCard';
import DiagonalHatchPattern from './common/DiagonalHatchPattern';

function Services({ services = defaultServices }) {
  return (
    <section id="services" className="w-full self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start mt-24 sm:mt-36 md:mt-48 lg:mt-60">
      <DiagonalHatchPattern />

      <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id || index}
            title={service.title}
            description={service.description}
            imageSrc={service.imageSrc}
            imageAlt={service.imageAlt}
            isLast={index === services.length - 1}
          />
        ))}
      </div>

      <DiagonalHatchPattern />
    </section>
  );
}

export default Services;
