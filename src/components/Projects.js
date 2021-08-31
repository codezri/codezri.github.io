import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './Projects.module.css';

const ProjectsList = [
  {
    title: 'Neutralinojs',
    image: 'neutralinojs.png',
    description: (
      <>
        Neutralino is a lightweight and portable desktop application development framework.
        It lets you develop cross-platform applications using JavaScript, HTML and CSS.
      </>
    ),
    link: 'https://neutralino.js.org'
  },
  {
    title: 'Jerverless',
    image: 'jerverless.png',
    description: (
      <>
        Jerverless is a serverless runner which will execute anything (binaries, commands or your scripts) as a serverless function. 
        It simply pipes http POST data into STDIN of any executable vice versa.
      </>
    ),
    link: 'https://jerverless.github.io'
  },
  {
    title: 'GoogleZri',
    image: 'script.png',
    description: (
      <>
        A Python script which will open Google search with CTRL + F2 for a selected text from anywhere.
      </>
    ),
    link: 'https://github.com/codezri/googlezri'
  },
  {
    title: 'MovieZri',
    image: 'moviezri.png',
    description: (
      <>
        Find a movie to watch today based of what you feel right now. Very simple but very interactive 
        online movie recommendation system. No signup needed!
      </>
    ),
    link: 'https://codezri.org/movieszri'
  },
  {
    title: 'LAMGSTACK',
    image: 'concept.png',
    description: (
      <>
        World's cheapest but modern stack for lightweight web apps. LAMG (stands for Lambda Angular Mongodb Github)
         is a full-stack solution which helps you develop or prototype lightweight, 
         maintainable and less-complex web applications.
      </>
    ),
    link: 'https://github.com/codezri/lamgstack'
  },
  {
    title: 'FactsOverflow',
    image: 'factsoverflow.png',
    description: (
      <>
        FactsOverflow (also known as FO) is an educational non-commercial blog that publishes stories mostly about computer 
        science and programming. This website contains articles written by volunteers who need to show their findings, 
        experiments, and open-source-related activities to the right community.
      </>
    ),
    link: 'https://factsoverflow.com/'
  },
  {
    title: 'react-native-ecommerce',
    image: 'script.png',
    description: (
      <>
      A minimal React Native e-commerce app template. It has a products list, details page, 
      and shopping cart summary page.
      Easy-to-extend state management is done with React Context API.
      </>
    ),
    link: 'https://github.com/codezri/react-native-ecommerce'
  },
];

function Project({project}) {
  return (
    <div className={clsx('col col--4', styles.project, 'padding-vert--md')}>
      <div className="text--center">
        <img src={useBaseUrl('/img/projects/' + project.image)} alt={project.title} />
      </div>
      <div className="text--center padding-horiz--md padding-vert--sm">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <Link
          className="button button--secondary"
          href={project.link}>
          Go to project
        </Link>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className="row">
          {ProjectsList.map((props, idx) => (
            <Project key={idx} project={props} />
          ))}
        </div>
      </div>
    </section>
  );
}
