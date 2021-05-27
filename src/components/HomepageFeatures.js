import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Open Source Software',
    Svg: require('../../static/img/undraw_open_source_1qxw.svg').default,
    description: (
      <>
        CodeZri turns innovative ideas to open source products. Our goal is to make open source tools to make 
        every developer's life easier. Neutralinojs and Jerverless are our popular innovations.
      </>
    ),
  },
  {
    title: 'Articles For Developers',
    Svg: require('../../static/img/undraw_online_reading_np7n.svg').default,
    description: (
      <>
        CodeZri often publish articles about computer science, programming, and technology. Follow us on social media
        for latest technical articles and news.
      </>
    ),
  },
  {
    title: 'Tutorials For Developers',
    Svg: require('../../static/img/undraw_youtube_tutorial_2gn3.svg').default,
    description: (
      <>
        CodeZri loves to share knowledge with the developer community. Follow us on YouTube for latest videos about 
        programming, open source projects, and tips &amp; tricks.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
