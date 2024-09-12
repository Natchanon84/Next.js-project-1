import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
function Home() {

  return (
    <>
      <Head>
        <title>หน้าแรก | Natchaaaa</title>
        <meta name="keyword" content="natchaaaa , ร้านค้า , ขายสินค้า"/> 
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรกของเว็บไซต์</h1>
        <Image src="/shopping.svg" width={400} height={400} alt="logo" />
        <p>ยินดีต้อนรับสู้ร้าน Natchaaaa</p>
        <Link href="/products" className={styles.btn}>ดูสินค้าทั้งหมด</Link>
      </div>
    </>
  )
}

export default Home