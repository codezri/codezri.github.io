import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Sponsors from '../components/Sponsors';

function SponsorsHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title} Sponsors</h1>
        <p className="hero__subtitle">Organizations and individuals who support our works</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Sponsors`}
      description={`Organizations and individuals around the world support ${siteConfig.title}. 
      Get your name added here by sponsoring or making a recurring donation.`}>
      <SponsorsHeader />
      <main>
        <Sponsors />
      </main>
      <div className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{`Support ${siteConfig.title}`}</h1>
          <p className="hero__subtitle">
            Would you like to support our works and get listed above?
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              href="https://forms.gle/mTxB9gdKsdWPkwBQA">
              Sponsor
            </Link>
            <Link
              className={clsx(
                'button button--secondary button--lg margin-left--sm',
                styles.getStarted,
              )}
              href="https://www.patreon.com/shalithasuranga">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
