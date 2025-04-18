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
  FeaturesDesigns,
  TestimonialsDesigns,
  PricingDesigns,
  ContactFormDesigns,
} from '../../components/WebPageComponents/designs';

import HeroSection from '../../components/WebPageComponents/HeroComponent';

import FeaturesSection from '../../components/WebPageComponents/FeaturesComponent';

import TestimonialsSection from '../../components/WebPageComponents/TestimonialsComponent';

import PricingSection from '../../components/WebPageComponents/PricingComponent';

import ContactFormSection from '../../components/WebPageComponents/ContactFormComponent';

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

  const features_points = [
    {
      name: 'Venue Management',
      description:
        'Easily track and manage all available event spaces, including size, features, and booking status. Simplify venue selection and ensure availability.',
      icon: 'mdiMapMarker',
    },
    {
      name: 'Vendor Coordination',
      description:
        'Organize and access a list of trusted caterers, decorators, and entertainers. Keep contact info and ratings at your fingertips for seamless coordination.',
      icon: 'mdiAccountGroup',
    },
    {
      name: 'Schedule Planning',
      description:
        'Plan every detail of your event schedule, from vendor arrivals to the final dance. Ensure a smooth flow and timely execution of all activities.',
      icon: 'mdiCalendarClock',
    },
    {
      name: 'Guest Tracking',
      description:
        'Monitor RSVPs, dietary preferences, and special requests. Keep track of guest attendance and ensure personalized experiences for everyone.',
      icon: 'mdiAccountCheck',
    },
    {
      name: 'Budget Management',
      description:
        'Manage all event-related finances in one place. Track deposits, payments, and expenses to stay within budget and avoid surprises.',
      icon: 'mdiCurrencyUsd',
    },
    {
      name: 'Comprehensive Dashboard',
      description:
        'Access all event details from a single, user-friendly dashboard. Stay organized and in control with real-time updates and insights.',
      icon: 'mdiViewDashboardOutline',
    },
  ];

  const testimonials = [
    {
      text: '${projectName} transformed our event planning process. Everything was organized and seamless, making our corporate event a huge success!',
      company: 'Tech Innovators Inc.',
      user_name: 'Alex Johnson, Event Coordinator',
    },
    {
      text: 'Thanks to ${projectName}, managing vendors and schedules has never been easier. Our annual gala went off without a hitch!',
      company: 'Elegant Affairs',
      user_name: 'Samantha Lee, Event Manager',
    },
    {
      text: 'The intuitive dashboard and comprehensive features of ${projectName} made planning our wedding stress-free and enjoyable.',
      company: 'Dream Weddings Co.',
      user_name: 'Michael Brown, Groom',
    },
    {
      text: 'With ${projectName}, we could easily track guest preferences and manage our budget efficiently. Highly recommend it!',
      company: 'Celebrations Unlimited',
      user_name: 'Emily Davis, Event Planner',
    },
    {
      text: 'Our team loved using ${projectName} for our product launch. It kept everything organized and on track, ensuring a successful event.',
      company: 'LaunchPad Enterprises',
      user_name: 'David Wilson, Marketing Director',
    },
    {
      text: 'From venue selection to final payments, ${projectName} handled it all. Our conference was a hit, thanks to this amazing tool!',
      company: 'Global Conferences Ltd.',
      user_name: 'Rachel Green, Conference Organizer',
    },
  ];

  const pricing_features = {
    standard: {
      features: [
        'Venue Management',
        'Vendor Coordination',
        'Schedule Planning',
      ],
      limited_features: ['Guest Tracking', 'Budget Management'],
    },
    premium: {
      features: [
        'Venue Management',
        'Vendor Coordination',
        'Schedule Planning',
        'Guest Tracking',
      ],
      also_included: ['Budget Management', 'Comprehensive Dashboard'],
    },
    business: {
      features: [
        'Venue Management',
        'Vendor Coordination',
        'Schedule Planning',
        'Guest Tracking',
        'Budget Management',
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
        <title>{`Effortless Event Management | Your All-in-One Solution`}</title>
        <meta
          name='description'
          content={`Discover our comprehensive event management app designed to streamline your planning process. From venues to vendors, schedules to budgets, manage every aspect of your event effortlessly.`}
        />
      </Head>
      <WebSiteHeader projectName={'UI test'} pages={pages} />
      <main className={`flex-grow    bg-white  rounded-none  `}>
        <HeroSection
          projectName={'UI test'}
          image={['Event planning dashboard overview']}
          mainText={`Effortless Event Management with ${projectName}`}
          subTitle={`Streamline your event planning with ${projectName}. Manage venues, vendors, schedules, and budgets all in one place for a seamless experience.`}
          design={HeroDesigns.IMAGE_BG || ''}
          buttonText={`Get Started Now`}
        />

        <FeaturesSection
          projectName={'UI test'}
          image={['Event management tools overview']}
          withBg={1}
          features={features_points}
          mainText={`Discover ${projectName}'s Key Features`}
          subTitle={`Explore how ${projectName} simplifies event management with its powerful features, ensuring a seamless planning experience.`}
          design={FeaturesDesigns.CARDS_GRID_WITH_ICONS || ''}
        />

        <TestimonialsSection
          projectName={'UI test'}
          design={TestimonialsDesigns.MULTI_CARD_DISPLAY || ''}
          testimonials={testimonials}
          mainText={`What Our Users Say About ${projectName} `}
        />

        <PricingSection
          projectName={'UI test'}
          withBg={1}
          features={pricing_features}
          description={description}
        />

        <ContactFormSection
          projectName={'UI test'}
          design={ContactFormDesigns.WITH_IMAGE || ''}
          image={['Contact form with email icon']}
          mainText={`Get in Touch with ${projectName} `}
          subTitle={`Reach out to us anytime for inquiries or support. Our team at ${projectName} is here to assist you promptly.`}
        />
      </main>
      <WebSiteFooter projectName={'UI test'} pages={pages} />
    </div>
  );
}

WebSite.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>;
};
