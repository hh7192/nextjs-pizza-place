import Head from 'next/head'
import Image from 'next/image'
import PizzaList from "../components/PizzaList";
import Slider from "../components/Slider";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Head tag is for SEO- next js feature */}
      <Head>
        <title>پیتزا دبل اچ</title>
        <meta name='description' content='خوشمزه، سریع، آسان!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Slider />
      <PizzaList />
    </div>
  );
}
