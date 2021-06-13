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
  }
];

const DonatorsList = ['Just Epic',
        'Brian McGonagill',
        'Brian',
        'Mortarwork Studios'];

function Sponsor({sponsor}) {
  const imgPath = useBaseUrl('/img/sponsors/');
  return (
    <div className={clsx('col col--4', styles.sponsor, 'padding-vert--md')}>
      <div className="text--center">
        <img src={imgPath + sponsor.image} alt={sponsor.name} />
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

function Donator(props) {
  return (
    <li>{props.name}</li>
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
        <div className="row">
          <ul>
            {DonatorsList.map((props, idx) => (
              <Donator key={idx} name={props} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
