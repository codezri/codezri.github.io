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
    title: <span>Jerverless <span className="badge badge--secondary">Archived</span></span>,
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
    title: 'ReleaseZri',
    image: 'script.png',
    description: (
      <>
        Meaningful and minimalist release notes for developers. Automate your releases with meaningful
        release notes with a simple changelog format. Used by Neutralinojs and many.
      </>
    ),
    link: 'https://github.com/codezri/releasezri'
  },
  {
    title: 'BuildZri',
    image: 'script.png',
    description: (
      <>
      BuildZri is a minimal cross-platform C++ build automation tool written in Python. It comes with a simple
      JSON-based configuration file with the features you need.
      </>
    ),
    link: 'https://github.com/codezri/buildzri'
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
  {
    title: 'PhotoZri',
    image: 'photozri.png',
    description: (
      <>
        PhotoZri is a minimal image editor app that offers basic image editing features.
      </>
    ),
    link: 'https://codezri.org/photozri'
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
