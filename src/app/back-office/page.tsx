'use client';
import React from 'react';
import Link from 'next/link';
import { Card } from 'antd';

import useStore from '@/_store';

import { getImageUrl } from '@/_utils';

import ClosestEventPreview from './_components/ClosestEventPreview';
import EventsTable from './_components/EventsTable';

import styles from './_styles/styles.module.sass';

export default function BackOffice() {
  const { closestEvent } = useStore(store => store);

  const content: {
    title: string;
    path?: string;
    component: React.ReactNode;
  }[] = [
    {
      title: 'Closest Event',
      path: '/back-office/closestEvent',
      component: ClosestEventPreview({
        data: closestEvent
          ? { ...closestEvent, image: getImageUrl(closestEvent?.image || '') }
          : null }),
    },
    {
      title: 'Events Table',
      component: EventsTable(),
    }
  ];

  const cards = content.map((item) => (
    <Card
      key={item.title}
      title={item.title}
      style={{
        flex: '1 1 auto',
        height: 'fit-content',
      }}
      actions={item.path
        ? [
          <Link href={item.path} key={item.path}>
            Edit
          </Link>
        ]
        : undefined}
    >
      {item.component}
    </Card>
  ));

  return (
    <div className={styles.dashboard}>
      {cards}
    </div>
  );
}
