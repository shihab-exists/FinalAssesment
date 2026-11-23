import React from 'react';
import { footerData as defaultFooter } from '../data/websiteData';
import TwitterIcon from './icons/TwitterIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import LogoIcon from './icons/LogoIcon';

function Footer({
  brand = defaultFooter.brand,
  columns = defaultFooter.columns,
}) {
  return (
    <footer className="w-full pt-10 flex flex-col justify-start items-start border-t border-[rgba(55,50,47,0.12)]">
      <div className="self-stretch h-auto flex flex-col md:flex-row justify-between items-stretch pr-0 pb-8 pt-0">
        <div className="h-auto p-4 md:p-8 flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex justify-start items-center gap-3">
            <LogoIcon className="w-6 h-6" />
            <span className="text-center text-[#49423D] text-xl font-semibold leading-4">
              {brand.name}
            </span>
          </div>

          <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px]">
            {brand.tagline}
          </div>

          <div className="flex justify-start items-start gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 relative overflow-hidden flex items-center justify-center hover:opacity-75 transition-opacity"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 relative overflow-hidden flex items-center justify-center hover:opacity-75 transition-opacity"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 relative overflow-hidden flex items-center justify-center hover:opacity-75 transition-opacity"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="self-stretch p-4 md:p-8 flex flex-col sm:flex-row flex-wrap justify-start sm:justify-between items-start gap-6 md:gap-8">
          {columns.map((col, cIdx) => (
            <div
              key={cIdx}
              className="flex flex-col justify-start items-start gap-3 flex-1 min-w-[120px]"
            >
              <span className="self-stretch text-[rgba(73,66,61,0.50)] text-sm font-medium leading-5">
                {col.title}
              </span>
              <div className="flex flex-col justify-start items-start gap-2">
                {col.links.map((link, lIdx) => (
                  <a
                    key={lIdx}
                    href={link.href}
                    className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="self-stretch py-4 px-4 sm:px-8 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)] flex flex-col sm:flex-row justify-between items-center text-xs text-[#7B746F] gap-2">
        <span>
          &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
        </span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#37322F] transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#37322F] transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
