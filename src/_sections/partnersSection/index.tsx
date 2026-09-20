'use client';
import React from 'react';
import Image from 'next/image';

import { useViewPort } from '@/_hooks';

import styles from './styles.module.sass';

const BASE_URL = 'https://res.cloudinary.com/dtecpsig5/image/upload/c_scale,w_300/v1738704171/it-connect-parthners/';

const logos = [
  { id: 'kzrt6aklsqohtzgv0cyi', src: 'kzrt6aklsqohtzgv0cyi.svg', name: 'Foursquare' },
  { id: 'mercury_ulhapd', src: 'mercury_ulhapd.png', name: 'Mercury' },
  { id: 'dvaMedveda_nuyzvw', src: 'dvaMedveda_nuyzvw.png', name: 'Dva Medveda' },
  { id: 'iaej0xnmmhwcemqaepy2', src: 'iaej0xnmmhwcemqaepy2.svg', name: 'pmclub' },
  { id: 'Blize_rv6rbu', src: 'Blize_rv6rbu.png', name: 'Blize' },
  { id: 'peredelano_raqnst', src: 'peredelano_raqnst.png', name: 'Peredelano' },
  { id: 'fgqhgssduergkjh3nrof', src: 'fgqhgssduergkjh3nrof.svg', name: 'Hub Terazije' },
  { id: 'opyatEti_gqipkx', src: 'opyatEti_gqipkx.png', name: 'Opyat Eti' },
  { id: 'Omnipet-logo_i4w90m.svg', src: 'Omnipet-logo_i4w90m.svg', name: 'Omnipet' },
  { id: 'm9ak51effaiqbgalodsz', src: 'm9ak51effaiqbgalodsz.svg', name: 'HAOS Community Space' },
  { id: 'ciderrs_q24v8s', src: 'ciderrs_q24v8s.png', name: 'Cider.rs' },
  { id: 'CDT_HUB_2_hoaxj8', src: 'CDT_HUB_2_hoaxj8', name: 'CDT Hub' },
  { id: 'Лого_KO-KO_без_фона_agt7ed', src: 'kokologo', name: 'KO-KO' },
  { id: 'Yandex_logo_2021_Russian_io4snr.svg', src: 'Yandex_logo_2021_Russian_io4snr.svg', name: 'Yandex' },
  { id: 'startit_logo-vertikalni-crni_RGB_yhewer', src: 'startit_logo-vertikalni-crni_RGB_yhewer', name: 'Startit' },
  { id: 'icthub-logo_2x_wvatml', src: 'icthub-logo_2x_wvatml', name: 'ICT Hub' },
  { id: 'Logo_i_text_transparent_pka3gq', src: 'Logo_i_text_transparent_pka3gq', name: 'Petlja' },
];

export default function PartnersSection() {
  const logosDoubled = [...logos, ...logos.map(item => ({
    ...item,
    id: item.id + 'second'
  }))];

  const { isMobile } = useViewPort();

  const images = (
    isMobile
      ? logos
      : logosDoubled
  ).map((logo) => (
    <div
      key={logo.id}
      className={styles.imageWrapper}
    >
      <Image
        className={styles.logo}
        src={BASE_URL + logo.src}
        alt={`${logo.name} — IT Connect partner`}
        fill
        style={{ objectFit: 'contain' }}
      />
    </div>
  ));

  return (
    <section className={styles.partnersSection}>
      <h2 className={styles.title}>PARTNERS</h2>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {images}
        </div>
      </div>
    </section>
  );
};
