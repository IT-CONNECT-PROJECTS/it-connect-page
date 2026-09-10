import React from 'react';

import { Member, members } from '@/_sections/teamSection/data';
import MemberCard from '@/_sections/teamSection/components/memberCard';

import styles from './styles.module.sass';

export default function TeamSection() {
  const cards = members.map((member: Member, index) => (
    <MemberCard key={member.name} data={member} index={index} />
  ));
  return (
    <section className={styles.teamSection}>
      <h2 className={styles.teamSection__title}>
        We connect IT
      </h2>
      <div className={styles.cardsWrapper}>
        {cards}
      </div>
    </section>
  );
};
