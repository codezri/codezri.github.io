import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Projects from '../components/Projects';

function ProjectsHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title} Projects</h1>
        <p className="hero__subtitle">Free and open-source products for developers.</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Open Source Projects`}
      description="CodeZri built popular free and open-source products including Neutralinojs and Jerverless.">
      <ProjectsHeader />
      <main>
        <Projects />
      </main>
    </Layout>
  );
}
