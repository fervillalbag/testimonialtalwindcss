import Head from 'next/head'

export default function Home() {
   return (
      <>
         <Head>
            <title>Tailwind Workshop</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&display=swap" rel="stylesheet" />
         </Head>

         <main className="min-h-screen flex flex-col justify-center px-4 lg:px-8 xl:px-32 py-6 bg-gray-300">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
               <article className="lg:col-start-1 lg:col-end-3 bg-purple-800 px-5 py-6 text-white">
                  <div className="flex items-center">
                     <img src="/image-daniel.jpg" alt="" className="rounded-full" />
                     <div className="ml-3">
                        <p className="font-semibold text-lg">Daniel Clifford</p>
                        <span className="text-purple-400">Verified Graduate</span>
                     </div>
                  </div>
                  <div className="mt-4">
                     <p className="text-2xl font-semibold">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</p>
                     <p className="text-purple-400 mt-4 text-lg">“I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
                     The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup.”</p>
                  </div>
               </article>
               <article className="bg-gray-700 px-5 py-6 text-white">
                  <div className="flex items-center">
                     <img src="/image-jonathan.jpg" alt="" className="rounded-full" />
                     <div className="ml-3">
                        <p className="font-semibold text-lg">Jonathan Walters</p>
                        <span className="text-gray-400">Verified Graduate</span>
                     </div>
                  </div>
                  <div className="mt-4">
                     <p className="text-2xl font-semibold">The team was very supportive and kept me motivated</p>
                     <p className="text-gray-500 mt-4 text-lg">“I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself.”</p>
                  </div>
               </article>
               <article className="bg-white px-5 py-6 text-white">
                  <div className="flex items-center">
                     <img src="/image-jeanette.jpg" alt="" className="rounded-full" />
                     <div className="ml-3">
                        <p className="font-semibold text-gray-600 text-lg">Jeanette Harmon</p>
                        <span className="text-gray-400">Verified Graduate</span>
                     </div>
                  </div>
                  <div className="mt-4">
                     <p className="text-2xl text-gray-600 font-semibold">An overall wonderful and rewarding experience</p>
                     <p className="text-gray-500 mt-4 text-lg">“Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love.”</p>
                  </div>
               </article>
               <article className="lg:col-start-2 lg:col-end-4 bg-gray-900 px-5 py-6 text-white">
                  <div className="flex items-center">
                     <img src="/image-patrick.jpg" alt="" className="rounded-full" />
                     <div className="ml-3">
                        <p className="font-semibold text-gray-600 text-lg">Patrick Abrams</p>
                        <span className="text-gray-400">Verified Graduate</span>
                     </div>
                  </div>
                  <div className="mt-4">
                     <p className="text-2xl text-gray-600 font-semibold">Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</p>
                     <p className="text-gray-500 mt-4 text-lg">“The staff seem genuinely concerned about my progress which I find really refreshing. The program
                     gave me the confidence necessary to be able to go out in the world and present myself as a capable
                     junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people.”</p>
                  </div>
               </article>
               <article className="lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3 bg-white px-5 py-6 text-white">
                  <div className="flex items-center">
                     <img src="/image-kira.jpg" alt="" className="rounded-full" />
                     <div className="ml-3">
                        <p className="font-semibold text-gray-600 text-lg">Kira Whittle</p>
                        <span className="text-gray-400">Verified Graduate</span>
                     </div>
                  </div>
                  <div className="mt-4">
                     <p className="text-2xl text-gray-600 font-semibold">Such a life-changing experience. Highly recommended!</p>
                     <p className="text-gray-500 mt-4 text-lg">“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
                     professionals who can help me learn programming step by step. I was encouraged to enroll by a former
                     student of theirs who can only say wonderful things about the program. The entire curriculum and staff
                     did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
                     project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
                     could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
                     experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend! ”</p>
                  </div>
               </article>
            </div>
         </main>
      </>
   )
}