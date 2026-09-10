'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Flex } from 'antd';
import Link from 'next/link';
import Image from 'next/image';

import { contactsArray } from '@/_sections/contactsSection';
import Logo from '@/_assets/logo';

import { navigationLinks, NavigationLinkType } from '@/_consts';

import styles from './styles.module.sass';

export default function NavigationSection() {
  const [color, setColor] = useState<'white' | 'black'>('white');
  const navigationHeaderRef = useRef<HTMLDivElement>(null);
  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: NavigationLinkType,
  ) => {
    const homePageComponent = document.getElementById('homePage');
    const anchor = document.getElementById(link.id);

    if (!anchor || !homePageComponent) return;

    event.preventDefault();

    const top = anchor.offsetTop;

    homePageComponent.scrollTo({ top: top - 80, behavior: 'smooth' });
  };

  useEffect(() => {
    const homePageComponent = document.getElementById('homePage');
    if (!homePageComponent) return;

    const changeHeaderStyles = () => {
      if (!navigationHeaderRef.current) return;
      const isScrolled = !!homePageComponent.scrollTop;

      navigationHeaderRef.current.style.background = isScrolled ? 'white' : 'transparent';

      setColor(isScrolled ? 'black' : 'white');
    };

    homePageComponent.addEventListener('scroll', changeHeaderStyles);
  }, [navigationHeaderRef]);

  const navigationButtons = navigationLinks.map((link) => (
    <a
      key={link.title}
      href={`#${link.id}`}
      className={styles.navigationLink}
      onClick={(event) => handleLinkClick(event, link)}
    >
      {link.title}
    </a>
  ));

  const contactCards = contactsArray
    .map((contact) => (
      <Link
        href={contact.url}
        target="_blank"
        key={contact.title}
        style={{ filter: color === 'black' ? 'invert()' : 'none' }}
      >
        <Image src={contact.icon} alt="contact" width={32} height={32} />
      </Link>
    ));

  return (
    <nav
      className={styles.navigationSection}
      ref={navigationHeaderRef}
    >
      <div className={styles.content}>
        <Flex
          align="center"
          justify="space-between"
          style={{
            transition: 'background 0.3s ease-in-out',
            padding: '21px 89px',
            width: '100%',
            color: `${color}`
          }}
        >
          <Flex align="center" gap={318}>
            <Logo
              color={color}
              width={200}
              height={30}
            />
          </Flex>

          <Flex align="center" gap={43} className={styles.desktopMenu}>
            <Flex gap={32}>{navigationButtons}</Flex>
            <Flex align="center" gap={10}>
              {contactCards}
            </Flex>
          </Flex>
        </Flex>
      </div>
    </nav>
  );
}
