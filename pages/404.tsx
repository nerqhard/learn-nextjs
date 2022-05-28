import { IconAnimations } from 'components/animations/IconAnimations'
import React from 'react'
import styles from '../styles/Home.module.css'

const Custom404 = () => {
  return (
      <div className={styles.notFound}>
          <IconAnimations path="/error-page.json" />
      </div>
  )
}
export default Custom404
