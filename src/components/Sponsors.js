import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './Sponsors.module.css';

const ProjectsList = [
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
];

const currentDonators = ['Just Epic',
        'Brian McGonagill',
        'Satya Sinha',
        'Zizaco Zizuini',
        'Nchinda',
        'Tom S',
        'LiamGaudy'];

const pastDonators = [
        'Jeremiah',
        'Louis Couture',
        'BenStigsen',
        'Jarred',
        'Varun Suryawanshi'];

const oneTimeDonators = [
        'Paolo Caminiti',
        ['BayLanka', 'https://baylanka.net']];

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
          {ProjectsList.map((props, idx) => (
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
          organization via Patreon or another payment channel with a one-time donation.</p>
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
