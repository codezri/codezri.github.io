import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './shalithasuranga.module.css';

function ProfileHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          Shalitha Suranga
        </h1>
        <p className="hero__subtitle">Programmer | Technical Writer | Apache PMC member</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://www.linkedin.com/in/shalithasuranga/">
            LinkedIn
          </Link>
          <Link
            className="button button--secondary button--lg margin-left--sm"
            href="https://www.patreon.com/shalithasuranga">
            Become a Patron
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProfileIntro() {
  return (
     <div className={styles.intro}>
      <div className="container">
        <div className="row">
          <div className="col col--3">
            <img src="https://avatars3.githubusercontent.com/u/18402702?s=4000&v=4" alt="Shalitha Suranga" className={styles.picture}/>
          </div>
          <div className="col col--9">
            <p>
              I wrote <code>hello world</code> when I was 13 years old. I like to work with computer science related things. I started CodeZri
              to develop open-source tools for developers around the world. I write technical content for developers in Medium and LogRocket blog.
              
              <br/><br/>
              Find me on, 
              <br/><br/>
              
              <li>
                <Link
                  href="https://www.linkedin.com/in/shalithasuranga">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/shalithasuranga">
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.twitter.com/ShalithaSuranga">
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://shalithasuranga.medium.com/">
                  Medium
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/shalithasuranga">
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="http://people.apache.org/phonebook.html?uid=shalithasuranga">
                  Apache
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.hackerrank.com/shalithasuranga">
                  HackerRank
                </Link>
              </li>
              <li>
                <Link
                  href="https://stackoverflow.com/users/3565513/shalitha-suranga">
                  StackOverflow
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.quora.com/profile/Shalitha-Suranga">
                  Quora
                </Link>
              </li>
              <li>
                <Link
                  href="https://blog.logrocket.com/author/shalithasuranga">
                  LogRocket
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.patreon.com/shalithasuranga">
                  Patreon
                </Link>
              </li>
              
              
              <br/>
              
              Checkout my <Link href="https://docs.google.com/document/d/1RAjX8A5GqD-gGy0oKf-AktngxPZB6GK4Y7DnoQgbYUs/edit?usp=sharing">resume</Link> if 
              you would like to know more about me.
              Still curious? Click <Link href="https://www.google.com/search?q=Shalitha+Suranga">here!</Link>
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
      title={`Shalitha Suranga`}
      description="Shalitha Suranga is a programmer and technical writer. He founded CodeZri 
                    non-profit organization to develop tools for developers.">
      <ProfileHeader />
      <main>
          <ProfileIntro />
      </main>
    </Layout>
  );
}
