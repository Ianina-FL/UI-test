import React, { useEffect, useState } from 'react';
import type { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAppSelector } from '../../stores/hooks';
import LayoutGuest from '../../layouts/Guest';
import WebSiteHeader from '../../components/WebPageComponents/Header';
import WebSiteFooter from '../../components/WebPageComponents/Footer';
import {
  HeroDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'UI test';

  useEffect(() => {
    const darkElement = document.querySelector('body .dark');
    if (darkElement) {
      darkElement.classList.remove('dark');
    }
  }, []);
  const pages = [
    {
      href: '/home',
      label: 'home',
    },

    {
      href: '/services',
      label: 'services',
    },

    {
      href: '/contact',
      label: 'contact',
    },

    {
      href: '/faq',
      label: 'FAQ',
    },

    {
      href: '/pricing',
      label: 'pricing',
    },
  ];

  const faqs = [
    {
      question: 'What features does ${projectName} offer?',
      answer:
        '${projectName} offers a range of features including venue selection, vendor management, schedule coordination, guest tracking, and budget management. These tools are designed to streamline your event planning process.',
    },
    {
      question: 'How does ${projectName} help with budget management?',
      answer:
        '${projectName} provides a comprehensive budget tracking tool that allows you to monitor expenses, track payments, and ensure you stay within your budget. This feature helps prevent overspending and keeps your finances organized.',
    },
    {
      question:
        'Can I manage multiple events simultaneously with ${projectName}?',
      answer:
        'Yes, ${projectName} allows you to manage multiple events at once. You can easily switch between events and keep track of all details, ensuring each event is planned efficiently.',
    },
    {
      question: 'Is there a mobile version of ${projectName}?',
      answer:
        'Yes, ${projectName} is accessible on both desktop and mobile devices. This ensures you can manage your events on-the-go, providing flexibility and convenience.',
    },
    {
      question: 'What support options are available for ${projectName} users?',
      answer:
        '${projectName} offers a dedicated support team available via email and chat. Our team is ready to assist you with any questions or issues you may encounter while using the application.',
    },
    {
      question: 'How secure is my data with ${projectName}?',
      answer:
        '${projectName} prioritizes data security. We use advanced encryption and security protocols to ensure your information is protected at all times.',
    },
    {
      question: 'Can I customize the features in ${projectName}?',
      answer:
        'Yes, ${projectName} offers customizable features to suit your specific event needs. You can tailor the application to match your event requirements and preferences.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Frequently Asked Questions | ${projectName}`}</title>
        <meta
          name='description'
          content={`Find answers to common questions about ${projectName}. Learn more about our features, pricing, and how we can help streamline your event management.`}
        />
      </Head>
      <WebSiteHeader projectName={'UI test'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'UI test'}
          image={['FAQ section with question marks']}
          mainText={`Your Questions Answered with ${projectName}`}
          subTitle={`Explore our comprehensive FAQ section to find answers to your questions about ${projectName}. Learn how our features can simplify your event management.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Learn More`}
        />

        <FaqSection
          projectName={'UI test'}
          design={FaqDesigns.ACCORDION || ''}
          faqs={faqs}
          mainText={`Frequently Asked Questions About ${projectName} `}
        />
      </main>
      <WebSiteFooter projectName={'UI test'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
