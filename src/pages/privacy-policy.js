import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title} Privacy Policy`}
      description="Privacy policy of the CodeZri website">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Privacy Policy</h1>
          <p className="hero__subtitle">Privacy policy of the CodeZri website</p>
        </div>
      </header>
      <div className={styles.intro}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
              <p>
                  We use Google Analytics in our website to understand our audience. Therefore,
                  Google Analytics may place cookies inside your browser via the Codezri website. If you need to avoid those cookies,
                  please disable cookies for the CodeZri website. We don't collect any personal information via
                  web forms or any hidden mechanism. But, we ask for your email address in our contact to reply you back, and
                  we never expose your email to third party entities.
                  <br/><br/>
                  We use Google Analytics data to identify frequently visited pages and traffic sources and
                  often make tutorials and content based on those frequently visited page details and traffic sources.
                  <br/><br/>
                  Last updated date: 2021-12-21
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
