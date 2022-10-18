import Head from 'next/head';

export default function Home() {
  return (
  
      <div >
      <Head>
        <title> Home Page </title>
        <meta name='keywords' content='web developmenet,Programming' />
      </Head>
        Welcome to Next
      </div>
    
  )
}
export const getStaticProps = async()=>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
}