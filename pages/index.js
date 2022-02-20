import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Home from '../components/Home'
import Layout from '../components/Layout/Layout'
import { getRooms } from '../redux/actions/roomActions';
import { wrapper } from '../redux/store';

export default function Index() {


  return (
    <div className={styles.container}>
     
      <Layout>

        <Home/>
      </Layout>

    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => async ({ req , query }) => {
  await store.dispatch(getRooms(req , query.page))
})
