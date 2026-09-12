export interface SponsorCardData {
  title: string;
  description: string;
  preferences: string[];
  price: string;
  highlighted?: boolean;
  variant?: 'tedx';
  decorateImage: 1 | 2
  link?: string;
}

export const sponsorsSectionData: SponsorCardData[] = [
  {
    title: 'Social Media Promotion',
    description: 'Want to promote your company in our IT community? We offer targeted exposure to a tech-savvy audience.',
    preferences: [
      'One post in IT Connect\'s main Telegram channel',
      'Series of posts and promotions on other social media platforms are available upon request'
    ],
    price: '€50 per post',
    decorateImage: 1,
    link: 'https://buymeacoffee.com/itconnect/extras',
  },
  {
    title: 'Meetup Partnership',
    description: 'Become a partner of an IT Connect meetup (60–100 attendees) and gain direct engagement with tech professionals.',
    preferences: [
      '30-minute speaker slot within the event theme',
      'Social media promotion',
      'Your logo on event creatives ',
      'Logo or QR code on attendee badges'
    ],
    price: '€1000 ',
    link: 'https://buymeacoffee.com/itconnect/extras',
    decorateImage: 1,
  },
  {
    title: 'Custom Event Partnership',
    description: 'Host a tailor-made event with IT Connect as your organizing partner. Get access to a curated tech audience and a professionally managed event.',
    preferences: [
      'Venue selection',
      'Photography',
      'Catering',
      'Audience engagement',
      'Event program development\nBronze, Silver, and Gold packages available.'
    ],
    price: 'Pricing upon request',
    link: 'https://buymeacoffee.com/itconnect/extras',
    decorateImage: 2
  },
  {
    title: 'TEDx Sponsorship',
    description: 'Sponsor TEDx Savski Venac — October 10, 2026 at Startit Center, Belgrade. 100 seats for leaders and innovators.',
    preferences: [
      'Exclusive audience of 100 decision-makers',
      'Logo and mentions on TEDx event',
      'TED + IT Connect brand association',
      'Bronze to Presenting Partner packages'
    ],
    price: 'From €500',
    variant: 'tedx',
    decorateImage: 1,
    link: 'https://www.tedxsavskivenac.com/sponsors',
  },
];
