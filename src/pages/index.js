import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/projects">
            Browse Projects
          </Link>
        </div>
      </div>
    </header>
     <div className={styles.intro}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1>High-quality tools and content</h1>
            <p>For everyone... For free...</p>
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
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
