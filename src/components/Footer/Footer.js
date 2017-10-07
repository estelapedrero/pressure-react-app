import React from 'react';
import Icon from '../Icon';
import Link from '../Link';
import styles from './styles.scss';

const rrss = [
  { name: 'github', link: 'https://github.com/estelapedrero' },
  { name: 'twitter', link: 'https://twitter.com/sala_de_star' },
  { name: 'instagram', link: 'https://instagram.com/sala_de_star' },
];

const Footer = () => (
  <footer className={styles.footer}>
    <p>made with <Icon name="zap" /> by estelapedrero</p>
    <ul>
      {rrss.map((link, index) => <li key={index}> <Link name={link.name} link={link.link} /></li>) }
    </ul>
  </footer>
);

export default Footer;
