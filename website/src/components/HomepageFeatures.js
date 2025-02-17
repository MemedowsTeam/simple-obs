import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Code-First Scene Collections',
    description: (
      <>
        Simple OBS allows you to declare all of your scenes, sources, scene items,
        and filters in code.
      </>
    ),
  },
  {
    title: 'Performant on Restarts',
    description: (
      <>
        Simple OBS keeps track of everything in OBS, allowing it to know what to
        skip creating each time you run your code
      </>
    ),
  },
  {
    title: 'Incremental Migration',
    description: (
      <>
        Simple OBS allows you to link existing OBS items to objects in code,
        and will not modify anything you don't give it access to.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
