'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { FlatIcon } from '../Flaticon';
import nav from '@/lib/data/navigation.json';

const Footer: React.FC = () => {
  const pathname = usePathname();

  const socialLinks = [
    { src: '/images/linkedin-footer-icon.svg', alt: 'LinkedIn', href: '#' },
    { src: '/images/instagram-footer-icon.svg', alt: 'Instagram', href: '#' },
    { src: '/images/facebook-footer-icon.svg', alt: 'Facebook', href: '#' },
    { src: '/images/youtube-footer-icon.svg', alt: 'YouTube', href: '#' },
    { src: '/images/whatsapp-footer-icon.svg', alt: 'WhatsApp', href: '#' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <footer className="pb-10 pt-16 lg:pt-20 bg-[#231F20]">
      <div className="main-container">
        <div className="grid grid-col-1 gap-10 lg:grid-cols-4 lg:gap-6">
          <div className="flex flex-col gap-4 lg:gap-8">
            <div className="w-full max-w-[226px]">
              <img src="/images/acutaas-website-logo-white.svg" alt="" />
            </div>
            <p className="text-sm text-[#8C8C8C]">
              ACUTAAS is a global chemical enterprise with 21 years of experience, serving
              industries in 55 countries with products, services, and solutions driven by research,
              innovation, and sustainability.{'   '}
              <br />
              <span className="text-[#AEBDE5] hover:underline">Read More</span>
            </p>
            <div className="flex lg:hidden flex-wrap gap-y-2 gap-x-3">
              {nav.footer.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive(link.href)
                      ? 'text-header font-bold'
                      : 'text-footer-light hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex gap-4 lg:gap-5 mt-auto">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="w-6 h-6" aria-label={social.alt}>
                  <img src={social.src} alt={social.alt} />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-wrap justify-between md:flex-col gap-6">
                <h3 className="footer-title">Contact Us</h3>
                <div className="flex items-center gap-3">
                  <FlatIcon icon="phone-call" className="!text-xl text-[#8C8C8C]" />
                  <div>
                    <span className="text-[#8C8C8C] text-xs !leading-none mb-1 inline-block">
                      Have a question?
                    </span>
                    <div className="text-base text-white !leading-none">
                      <a href="tel:+917573015366">+91 75730 15366</a> /{' '}
                      <a href="tel:+917227977744">+91 72279 77744</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6">
                    <img src="/images/footer-mail-icon.svg" alt="Mail Icon" />
                  </div>
                  <div>
                    <span className="text-[#8C8C8C] text-xs !leading-none mb-1 inline-block">
                      Contact us at
                    </span>
                    <div className="text-base text-white !leading-none">
                      <a href="mailto:info@acutaas.com">info@acutaas.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d299048.94331688527!2d72.84145148579967!3d21.362801465494847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAcutaas%20Chemicals%20L!5e1!3m2!1sen!2sin!4v1755061978215!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[146px]"
                ></iframe>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-3 md:gap-6">
                <h3 className="footer-title">Address: Unit-I</h3>
                <a
                  href="https://maps.app.goo.gl/TTbtcjuyq2RdERwu6"
                  target="_blank"
                  className="text-sm text-[#8C8C8C]"
                >
                  440/4, 5, 6, 8206-B, <br />
                  478, 479 & 494, 495, <br />
                  Road No : 82/A & 82/C, G.I.D.C, <br />
                  Sachin, Surat - 394230, <br />
                  Gujarat - INDIA
                </a>
              </div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h3 className="footer-title">Address: Unit-II</h3>
                <a
                  href="https://maps.app.goo.gl/X7Cv1G8E39j6QS1P7"
                  target="_blank"
                  className="text-sm text-[#8C8C8C]"
                >
                  Plot No. 127/1 G.I.D.C. Industrial Estate, <br />
                  Ankleshwar - 393 002, <br />
                  Gujarat State, INDIA
                </a>
              </div>
              <div className="flex flex-col gap-3 md:gap-6">
                <h3 className="footer-title">Address: Unit-III</h3>
                <a
                  href="https://maps.app.goo.gl/WWUsJR8tL6pdTYtFA"
                  target="_blank"
                  className="text-sm text-[#8C8C8C]"
                >
                  Plot No. 910/1/B, <br />
                  G.I.D.C. Jhagadia - 393 110, <br />
                  Gujarat State, INDIA
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mt-12 lg:gap-10 lg:mt-16">
          <div className="hidden lg:flex flex-wrap justify-between items-center gap-6">
            {nav.footer.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  isActive(link.href)
                    ? 'text-header font-bold'
                    : 'text-footer-light hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <div className="h-[1px] w-full bg-secondary-light"></div>
            <div className="flex justify-center px-4 sm:px-14">
              <p className="text-sm lg:text-base text-footer text-center">
                © {new Date().getFullYear()}, All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
