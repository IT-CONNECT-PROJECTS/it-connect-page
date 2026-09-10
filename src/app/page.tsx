import React from 'react';

import HeaderSection from '@/_sections/headerSection';
import NavigationSection from '@/_sections/navigationSection';
import ContactSection from '@/_sections/contactsSection';
import TeamSection from '@/_sections/teamSection';
import FooterSection from '@/_sections/footerSection';
import FormatsSection from '@/_sections/formatsSection';
import PartnersSection from '@/_sections/partnersSection';
import EventsSection from '@/_sections/eventsSection';
// import ClosestEventSection from '@/_sections/closestEventSection';
// import StandupFestSection from '@/_sections/standupFestSection';
import ImpactSection from '@/_sections/impactSection';
import HistorySignSection from '@/_sections/historySignSection';
import SponsorsSection from '@/_sections/sponsorsSection';
// import HighlightsSection from '@/_sections/highlightsSection';
import MobileNavigation from '@/_sections/_mobileNavigation';
import TedxSection from '@/_sections/_tedxSection';

import { contactsArray } from '@/_sections/contactsSection';
import { imagePrefix } from '@/_consts';

import styles from './page.module.css';

const SITE_URL = 'https://www.itconnect.community';

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'IT Connect',
      alternateName: 'IT Connect Belgrade',
      url: `${SITE_URL}/`,
      logo: `${imagePrefix}itConnectLogoLarge`,
      description: 'IT Connect is a community of IT professionals in Belgrade: meetups, networking and conferences.',
      foundingDate: '2022',
      email: 'itconnectsocialnetworks@gmail.com',
      areaServed: 'Beograd, Srbija',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Beograd',
        addressCountry: 'RS',
      },
      sameAs: contactsArray
        .filter((contact) => !contact.url.startsWith('mailto:'))
        .map((contact) => contact.url),
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'IT Connect Belgrade',
      inLanguage: 'en',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ],
};

export default function Home() {

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <script
        src="https://widget.oblakkarte.rs/widget.js"
        async
        data-organizer-public-token="Iqi7CCFo"
      />
      <div className={styles.page}>
        <NavigationSection/>
        <HeaderSection/>
        {/*<HighlightsSection />*/}
        <div id="tedx" />
        <TedxSection />
        <div id="events" />
        <EventsSection />

        <div className={styles.centered}>
          <div id="closest-event" />
          {/* <ClosestEventSection /> — summer pause */}
          {/* <StandupFestSection /> — event ended */}
          <ImpactSection />
          <div id="formats" />
          <FormatsSection />
          <HistorySignSection />
          <div id="sponsorship" />
          <SponsorsSection />
        </div>

        <PartnersSection />

        <div className={styles.centered}>
          <div id="team"/>
          <TeamSection/>
          <div id="contacts" />
          <ContactSection/>
        </div>

        <FooterSection/>
        <MobileNavigation />
      </div>
    </div>
  );
}
