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

import styles from './page.module.css';

export default function Home() {

  return (
    <div>
      <script
        src="https://widget.oblakkarte.rs/widget.js"
        async
        data-organizer-public-token="Iqi7CCFo"
      />
      <div className={styles.page}>
        <NavigationSection/>
        <HeaderSection/>
        {/*<HighlightsSection />*/}
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
