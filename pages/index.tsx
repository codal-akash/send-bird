import Image from 'next/image'
import Child from '@/components/Child'
import dynamic from 'next/dynamic'
// import styles from '../styles/Home.module.css'
import Head from 'next/head'
import '@sendbird/uikit-react/dist/index.css';



const ChatNoSSR = dynamic(() => import('@/components/Chat') , { ssr: false })

export default function Home() {
  return (
    <>
    
    <Head>
    <title>UIKit with NextJS 13</title>
         <meta name="description" content="" />
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <link rel="icon" href="/favicon.ico" />
    </Head>
    <main
      // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      // className={styles.main}
    >
      <ChatNoSSR />
    </main>
    </>
  )
}
