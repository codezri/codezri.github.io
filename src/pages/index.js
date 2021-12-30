import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [isInitialized, setIsInitialized] = useState(false);
  const [isEthABlocked, setIsEthABlocked] = useState(false)
  useEffect(() => {
    if(isInitialized) {
      return;
    }
    setIsInitialized(true);
    try {
      setIsEthABlocked(typeof ethicalads === 'undefined');
      ethicalads.load_placements();
    }
    catch (error) {
      setIsEthABlocked(false);
    }
  });
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
            <div
                data-ea-publisher="neutralino"
                data-ea-type="image"
                id="codezri-front"
                >
            </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/projects">
             Projects
          </Link>
          <Link
            className="button button--secondary button--lg margin-left--sm"
            href="https://forms.gle/mTxB9gdKsdWPkwBQA">
            Say Hello
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomePageIntro() {
  return (
     <div className={styles.intro}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1>High-Quality Tools and Content</h1>
            <p>For developers, from developers - for free!</p>
          </div>
          <div className="col col--6">
            <p>
              CodeZri (a non-profit organization) is making open-source products and high-quality content for developers around the world.
              We built popular free and open-source products including Neutralinojs and Jerverless.
              We often publish coding tutorials and technical articles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.tagline}`}
      description="CodeZri (a non-profit organization) is making open-source products and
      high-quality content for developers around the world">
      <HomepageHeader />
      <HomePageIntro />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
