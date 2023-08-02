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
                  Google Analytics may place cookies inside your browser via the CodeZri website. Also, we display a few ads via Google Adsense which may 
                  also place cookies inside your browser to improve their ad experience for users. 
                  If you wish not to allow those cookies, please kindly disable cookies for the CodeZri website. 
                  If you need to avoid those cookies, please disable cookies for the CodeZri website. We don't collect any personal information via
                  web forms or any hidden mechanism. We only ask for your email address in our contact form to reply you back, and
                  we never expose your email to third party entities.
                  <br/><br/>
                  We use Google Analytics data to identify frequently visited pages and traffic sources and
                  often make tutorials and content based on those frequently visited page details and traffic sources.
                  <br/><br/>
                  Please note that this privacy policy statement is valid only for the official website domain `codezri.org`. 
                  Make sure that you are browsing the right official domain name which adheres to this privacy policy statement.
                  <br/><br/>
                  Last updated date: 2023-08-02
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
