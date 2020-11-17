import Head from 'next/head'

export default function Home() {
   return (
      <>
         <Head>
            <title>Tailwind Workshop</title>
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300;400;600&display=swap" rel="stylesheet" />
         </Head>

         <main className="p-10 bg-blue-200">
            hola
         </main>
      </>
   )
}