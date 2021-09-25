import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { useState } from 'react'
import Content from '../components/Content';


export default function Home(props) {
  const [reading, setReading] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>NewsStop.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {reading
        ? <div className='mt-40 lg:mt-16 '>
          {props.data?.map((item, index) => {
            return <Content data={item} key={index} />
          })}
        </div>
        : <div className='mt-10 lg:mt-4 '>
          <Hero setReading={setReading} />
        </div>
} 
      
    </div>
  )
}


export async function getStaticProps(context) {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&pageSize=8&apiKey=${process.env.API_KEY}`)
  const data = await response.json()

  return {
    props: {
      data: data.articles,
    }
    ,
    revalidate: 3600
  }
}