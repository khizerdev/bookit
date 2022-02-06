import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Home from '../components/Home'
import Layout from '../components/Layout/Layout'

export default function Index() {


  return (
    <div className={styles.container}>
     
      <Layout>

        <Home/>
      </Layout>

    </div>
  )
}
