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
        <p className="hero__subtitle">Programmer & Technical Writer</p>
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
              I wrote "hello world" when I was thirteen years old.
              I like to work with computer science related stuff. I started CodeZri
              to build open-source tools and write high-quality technical content for developers around the world.

              <br/><br/>
              Find me on,
              <br/><br/>
              <li>
                <Link
                  href="https://github.com/shalithasuranga">
                  Github
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
                  href="https://blog.logrocket.com/author/shalithasuranga">
                  LogRocket
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
                  href="https://www.linkedin.com/in/shalithasuranga">
                  LinkedIn
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
                  href="https://www.patreon.com/shalithasuranga">
                  Patreon
                </Link>
              </li>
              <br/>

              If you would like to know more about me,
              click <Link href="https://www.google.com/search?q=Shalitha+Suranga">here!</Link>
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
