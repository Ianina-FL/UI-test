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
  PricingDesigns,
  FaqDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

import FaqSection from '../../components/WebPageComponents/FaqComponent';

export default function WebSite() {
  const cardsStyle = useAppSelector((state) => state.style.cardsStyle);
  const bgColor = useAppSelector((state) => state.style.bgLayoutColor);
  const projectName = 'UI test 1';

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

  const pricing_features = {
    standard: {
      features: [
        'Venue Selection',
        'Vendor Management',
        'Schedule Coordination',
      ],
      limited_features: ['Budget Tracking', 'Guest Management'],
    },
    premium: {
      features: [
        'Venue Selection',
        'Vendor Management',
        'Schedule Coordination',
        'Guest Management',
      ],
      also_included: ['Budget Tracking', 'Comprehensive Dashboard'],
    },
    business: {
      features: [
        'Venue Selection',
        'Vendor Management',
        'Schedule Coordination',
        'Guest Management',
        'Budget Tracking',
        'Comprehensive Dashboard',
      ],
    },
  };

  const description = {
    standard:
      'The Standard plan is perfect for individuals or small gatherings looking to manage basic event details efficiently.',
    premium:
      'The Premium plan is ideal for small businesses or agencies that require more comprehensive event management, including guest tracking and budget management.',
    business:
      'The Business plan is designed for enterprises needing full-scale event management capabilities, with all features included for seamless coordination.',
  };

  const faqs = [
    {
      question: 'What is included in the Standard plan?',
      answer:
        "The Standard plan includes essential features like Venue Selection, Vendor Management, and Schedule Coordination. It's perfect for individuals managing small events.",
    },
    {
      question: 'Can I upgrade my plan later?',
      answer:
        'Yes, you can upgrade your plan at any time. Simply contact our support team, and they will assist you in transitioning to a higher plan.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, ${projectName} offers a 14-day free trial for new users. This allows you to explore the features and determine which plan suits your needs best.',
    },
    {
      question: 'How does billing work for the Premium plan?',
      answer:
        'The Premium plan is billed monthly or annually, depending on your preference. Annual billing offers a discount compared to monthly payments.',
    },
    {
      question: 'What support is available for Business plan users?',
      answer:
        'Business plan users receive priority support, including dedicated account management and access to advanced features for seamless event management.',
    },
    {
      question: 'Are there any hidden fees?',
      answer:
        'No, ${projectName} is transparent with its pricing. All costs are outlined in the plan details, and there are no hidden fees.',
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer:
        'Yes, you can cancel your subscription at any time. Your access to features will continue until the end of the billing cycle.',
    },
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Pricing Plans | Choose Your ${projectName} Plan`}</title>
        <meta
          name='description'
          content={`Explore the flexible pricing plans offered by ${projectName}. Find the perfect plan that suits your event management needs and budget.`}
        />
      </Head>
      <WebSiteHeader projectName={'UI test 1'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'UI test 1'}
          image={['Pricing plans comparison chart']}
          mainText={`Flexible Pricing for ${projectName} Plans`}
          subTitle={`Discover the perfect plan for your event management needs with ${projectName}. Choose from our flexible pricing options to find the best fit for your budget and requirements.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`View Plans`}
        />

        <PricingSection
          projectName={'UI test 1'}
          withBg={1}
          features={pricing_features}
          description={description}
        />

        <FaqSection
          projectName={'UI test 1'}
          design={FaqDesigns.TWO_COLUMN || ''}
          faqs={faqs}
          mainText={`Common Questions About ${projectName} Pricing `}
        />
      </main>
      <WebSiteFooter projectName={'UI test 1'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
