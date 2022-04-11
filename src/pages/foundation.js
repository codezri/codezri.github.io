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
      title={`${siteConfig.title} Foundation`}
      description="Free educational sessions for the community">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Foundation</h1>
          <p className="hero__subtitle">Free educational sessions for the community</p>
        </div>
      </header>
      <div className={styles.intro}>
        <div className="container">
          <div className="row">
            <div className="col col--12">
                <p>
                Every software system's success depends on its foundation, so every programmer strives to
                put a stable foundation for software projects with various architectural patterns. Similarly,
                every developer's career success depends on their skill set's foundation, what they learn
                initially.
                <br/><br/>
                Self-learning is undoubtedly the best way to learn anything, but initial guidance is indeed
                needed. Therefore, experienced programmers need to mentor and guide beginner-level programmers
                with their experience.
                <br/><br/>
                CodeZri loves to guide and mentor beginner programmers via online technical sessions.
                Right now, we do free online technical sessions for Sri Lankan university students via the Google Meet platform.
                <br/><br/>
                We do technical sessions on the following topics:
                <br/><br/>
                <ul>
                    <li>Git and GitHub: 2h (1h theory and 1h hands-on)</li>
                    <li>Introduction to open source: 1h</li>
                    <li>How does your program work (software, compilers, assemblers, and machine language): 1h</li>
                    <li>Python programming: 2h (hands-on)</li>
                    <li>C programming: 2h (hands-on)</li>
                    <li>C++ programming: 2h (hands-on)</li>
                    <li>Bash scripting: 2h (hands-on)</li>
                    <li>How to write better code: 1h</li>
                    <li>Programming best practices (KISS, YAGNI, DRY-like concepts): 1h</li>
                    <li>Get started with DevOps: 2h (1h theory and 1h hands-on)</li> 
                </ul>
                Fill out the <Link href="https://forms.gle/mTxB9gdKsdWPkwBQA">contact form</Link> and request a
                time slot.
                <br/><br/>
                Please note that these sessions are free for any Sri Lankan educational institute &mdash; we do not
                accept any payment or donation as a reply for technical sessions.
                </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
