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
  ContactFormDesigns,
  FeaturesDesigns,
  PricingDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

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

  const features_points = [
    {
      name: 'Venue Selection',
      description:
        'Effortlessly browse and select the perfect venue for your event. Filter by size, location, and amenities to find the ideal space.',
      icon: 'mdiMapMarkerRadius',
    },
    {
      name: 'Vendor Management',
      description:
        'Keep all your vendors organized in one place. Access contact details, ratings, and availability to ensure seamless coordination.',
      icon: 'mdiAccountMultiple',
    },
    {
      name: 'Budget Tracking',
      description:
        'Stay on top of your finances with our intuitive budget tracking tool. Monitor expenses and ensure you stay within your budget.',
      icon: 'mdiCurrencyUsd',
    },
    {
      name: 'Schedule Coordination',
      description:
        'Plan and manage your event schedule with ease. Ensure every detail is accounted for, from vendor arrivals to guest activities.',
      icon: 'mdiCalendarCheck',
    },
    {
      name: 'Guest Management',
      description:
        'Track RSVPs and manage guest preferences effortlessly. Ensure a personalized experience for each attendee.',
      icon: 'mdiAccountGroup',
    },
    {
      name: 'Comprehensive Dashboard',
      description:
        'Access all event details from a single, user-friendly dashboard. Stay organized and in control with real-time updates and insights.',
      icon: 'mdiViewDashboardOutline',
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

  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>{`Our Services | Comprehensive Event Management`}</title>
        <meta
          name='description'
          content={`Explore the range of services offered by our event management app. From venue selection to budget management, discover how we can make your event planning seamless and efficient.`}
        />
      </Head>
      <WebSiteHeader projectName={'UI test 1'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'UI test 1'}
          image={['Event planning tools and services']}
          mainText={`Transform Your Events with ${projectName}`}
          subTitle={`Discover the comprehensive services offered by ${projectName} to streamline your event planning. From venue selection to budget management, we provide everything you need for a successful event.`}
          design={HeroDesigns.IMAGE_RIGHT || ''}
          buttonText={`Explore Our Services`}
        />

        <FeaturesSection
          projectName={'UI test 1'}
          image={['Event management service features']}
          withBg={1}
          features={features_points}
          mainText={`Explore ${projectName}'s Core Services`}
          subTitle={`Uncover the essential features of ${projectName} that make event planning a breeze. From managing venues to tracking budgets, we've got you covered.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <PricingSection
          projectName={'UI test 1'}
          withBg={1}
          features={pricing_features}
          description={description}
        />

        <ContactFormSection
          projectName={'UI test 1'}
          design={ContactFormDesigns.HIGHLIGHTED || ''}
          image={['Contact form with email icon']}
          mainText={`Connect with ${projectName} Today `}
          subTitle={`Have questions or need assistance? Reach out to us anytime, and our team at ${projectName} will respond promptly to your inquiries.`}
        />
      </main>
      <WebSiteFooter projectName={'UI test 1'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
