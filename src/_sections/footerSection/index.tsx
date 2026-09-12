import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {  Flex } from 'antd';

import { contactsArray } from '@/_sections/contactsSection';

import { imagePrefix } from '@/_consts';

import styles from './styles.module.sass';

const logoImageUrl ='itConnectLogoLarge';
const MEDIA_KIT_URL = 'https://drive.google.com/drive/folders/1ZsNbV7p-Tw7PTSZQ2i-5cD06_UMut2yV';
const contactCards = contactsArray
  .map((contact) => (
    <Link
      href={contact.url}
      target="_blank"
      key={contact.title}
      style={{
        fontSize: '20px',
      }}
    >
      <Image
        src={contact.icon}
        alt={contact.title}
        width={26}
        height={26}
      />
    </Link>
  ));

const FooterSection = () => (
  <footer className={styles.footerSection}>
    <div className={styles.footerSection__content}>
      <Flex
        gap={10}
        vertical
        className={styles.firstBlock}
      >
        <Image
          src={imagePrefix + logoImageUrl}
          alt={'about image'}
          width={40}
          height={40}
        />
        <div>{new Date().getFullYear()}, IT Connect</div>
        <div>
          <div>Attributions:</div>
          <a
            href="https://www.vecteezy.com/free-vector/belgrade"
            rel="noreferrer"
            target="_blank"
          >
            Belgrade Vectors by Vecteezy
          </a>
        </div>
      </Flex>

      <Flex
        vertical
        className={styles.linksBlock}
        gap={10}
      >
        <div className={styles.linksBlockTitle}>
          Extra links
        </div>
        <Flex
          vertical
          gap={10}
        >
          <Link href="https://buymeacoffee.com/itconnect">Buy me a coffee</Link>
          <Link href="https://buymeacoffee.com/itconnect/extras">Shop</Link>
          {/*<Link href="/merch">OUR MERCH</Link>*/}
        </Flex>
      </Flex>

      <Flex
        vertical
        className={styles.linksBlock}
        gap={10}
        style={{
          marginLeft: '60px',
        }}
      >
        <div className={styles.linksBlockTitle}>
          Extra Info
        </div>
        <Flex
          vertical
          gap={10}
        >
          <Link
            href="https://it-conect.notion.site/Rules-and-Values-of-the-IT-Connect-Community-3cd92f4ea08247b7881535ee7e8b8372"
          >
            Rules and Values
          </Link>
          <Link
            href={MEDIA_KIT_URL}
            target="_blank"
            rel="noreferrer"
          >
            Media Kit
          </Link>
        </Flex>
      </Flex>

      <Flex
        gap={5}
        vertical
        className={styles.connectBlock}
      >
        Connect with us
        <Flex gap={10}>
          {contactCards}
        </Flex>
      </Flex>
    </div>
  </footer>
);

export default FooterSection;
