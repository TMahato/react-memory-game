import React from 'react'
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Copyright © 2022 TMahato
        <a href="https://github.com/TMahato" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </p>
    </footer>
  )
}

export default Footer