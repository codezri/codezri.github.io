import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './Sponsors.module.css';

const SponsorList = [
  {
    name: 'MacStadium',
    image: 'macstadium.png',
    description: (
      <>
      MacStadium is the only provider of enterprise-class cloud solutions for Mac and iOS app development.
      They offered us a free remotely-accessed physical mac-mini for Neutralinojs-mac development.
      </>
    ),
    link: 'https://www.macstadium.com'
  },
  {
    name: 'Harald Schneider Software',
    image: 'marketmix.png',
    description: (
      <>
        Harald Schneider Software & Mediadesign is a software product development company that offers desktop, 
        mobile, and web app engineering services. They offered us a free Windows VM for Neutralinojs Windows development.
      </>
    ),
    link: 'https://marketmix.com'
  },
  {
    name: 'Ct.js Game Engine',
    image: 'comigo.png',
    description: (
      <>
          Ct.js is an open-source game engine based on Neutralinojs framework. It allows its developers to make 2D games 
          of any genre — with desktop builds using Neutralinojs, too! Ct.js' maintainer CoMiGo supports Neutralinojs development 
          directly with code contributions/ideas and monetary donations.
      </>
    ),
    link: 'https://ctjs.rocks'
  },
  {
    name: 'BayLanka',
    image: 'baylanka.png',
    description: (
      <>
         BayLanka, a software engineering company in Sri Lanka, offers software development, mobile app development, UX design, 
        staff augmentation services. BayLanka provides volunteer Neutralinojs project mentors for GSoC (Google Summer of Code) and makes 
        monetary donations to Neutralinojs.
      </>
    ),
    link: 'https://baylanka.net'
  },
  {
    name: 'The Alpha Nova',
    image: 'thealphanova.png',
    description: (
      <>
         The Alpha Nova (also known as TAN), a Canadian technology company, offers AI, software and IoT engineering services 
        for intelligent products and industrial systems. TAN supports Neutralinojs development with monetary donations.
      </>
    ),
    link: 'https://thealphanova.com'
  },
];

const currentDonators = ['Just Epic',
        'Brian McGonagill',
        'Nchinda',
        'Tom S',
        'LiamGaudy',
        'CrystalMoon',
        'Vi Hongg',
        'FrostIce482'];

const pastDonators = [
        'Jeremiah',
        'Louis Couture',
        'BenStigsen',
        'Jarred',
        'Varun Suryawanshi',
        'Satya Sinha',
        'Zizaco Zizuini',
        'CoMiGo Games',
        'Paweł Kołataj'];

const oneTimeDonators = [
        'Paolo Caminiti',
        'Pasindu Kavinda',
        'Anthony'];

function Sponsor({sponsor}) {
  return (
    <div className={clsx('col col--4', styles.sponsor, 'padding-vert--md')}>
      <div className="text--center">
        <img src={useBaseUrl('/img/sponsors/' + sponsor.image)} alt={sponsor.name} />
      </div>
      <div className="text--center padding-horiz--md padding-vert--sm">
        <h3>{sponsor.name}</h3>
        <p>{sponsor.description}</p>
        <Link
          className="button button--secondary"
          href={sponsor.link}>
          Go to website
        </Link>
      </div>
    </div>
  );
}

function Donator({info}) {
  return (
    Array.isArray(info) ? 
    <li><Link href={info[1]}>{info[0]}</Link></li> : 
    <li>{info}</li>
  );
}

export default function Sponsors() {
  return (
    <section className={styles.sponsors}>
      <div className="container">
        <h1>Sponsors</h1>
        <div className="row">
          {SponsorList.map((props, idx) => (
            <Sponsor key={idx} sponsor={props} />
          ))}
        </div>
        <h1 className="margin-top--lg">Monthly Donators</h1>
        <p>The following sponsors financially support the founder of the CodeZri 
          organization via <Link href="https://www.patreon.com/shalithasuranga">Patreon
            </Link> and <Link href="https://github.com/sponsors/shalithasuranga">GitHub Sponsors
            </Link> platforms.</p>
        <h2>Current</h2>
        <div className="row">
          <ul>
            {currentDonators.map((props, idx) => (
              <Donator key={idx} info={props} />
            ))}
          </ul>
        </div>
        <h2>Past</h2>
        <div className="row">
          <ul>
            {pastDonators.map((props, idx) => (
              <Donator key={idx} info={props} />
            ))}
          </ul>
        </div>
       <h1 className="margin-top--lg">One-Time Donators</h1>
        <p>The following sponsors financially supported the founder of the CodeZri 
          organization via Patreon, Github Sponsors, or another donation/payment channel with a one-time monetary donation.</p>
        <div className="row">
          <ul>
            {oneTimeDonators.map((props, idx) => (
              <Donator key={idx} info={props} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
