import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {
  signIn,
  signOut,
  useSession,
  getProviders,
  ClientSafeProvider,
} from 'next-auth/react'
import { useState } from 'react'

interface IHome {
  providers: Record<string, ClientSafeProvider>
}

// for form results
interface ISubmitResult {
  [index: string]: string | number;
}

interface ISubmitResults extends Array<ISubmitResult>{}

export const getServerSideProps: GetServerSideProps = async () => {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

const Home = ({providers}: IHome ) => {
  const session = useSession();

  const [statuses, setStatuses] = useState<ISubmitResults | undefined>(undefined);

  async function handleOnSearchSubmit(e: any) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const query = formData.get('query');

    const results = await fetch('/api/twitter/search', {
      method: 'POST',
      body: JSON.stringify({
        query
      })
    }).then(res => res.json());

    setStatuses(results.data);
    console.log(results)
  }


  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <nav className="w-full border-b-2 pb-1 flex flex-row">

      <div className="justify-start">
      
      </div>

      <div className="justify-center w-full text-center">
        <button className="px-2 mx-1 rounded-md font-semibold text-black/40 hover:cursor-not-allowed">
          Explore
        </button> 
        <button className="px-2 mx-1 bg-gray-300/50 rounded-md font-semibold text-black/90 ">
          Search
        </button>
        <a href="/campaign">
          <button className="px-2 mx-1 rounded-md font-semibold text-black/40">
              Campaigns
          </button> 
        </a>
        <button className="px-2 mx-1 rounded-md font-semibold text-black/40 hover:cursor-not-allowed">
          Profile
        </button>
      </div> 

      <div className="justify-end">
      {
            // TODO simplify this boolean
            ( session && session.data && session.data.user && session.data.user.image)
              ?
              <>
                <div className="flex flex-row">
                  <img className="w-10 h-10 rounded-full" src={session?.data?.user?.image}/>
                  <button className="bg-red-400 p-1 rounded-lg" 
                    onClick={() => signOut()}>Logout</button>
                </div>
              </>
              :
              <>
                {Object.values(providers).map((provider) => (
                  <button className="justify-end" key={provider.name} onClick={() => signIn(provider.id)}>
                    Login 👥
                  </button>
                  ))}
              </>
          }
      </div>

    </nav>

      {/* <!-- Card Section --> */}
      <section className="text-white/90 bg-gray-50 body-font w-full relative justify-center overflow-hidden sm:py-12">
        <img src="/img/beams.jpg" alt="" className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none" />
        <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container px-5 md:px-0 mx-auto relative">
          <div className="flex flex-wrap -m-4">

            {/* Searchbar */}
            <div className="bg-white w-full h-16 rounded-xl mb-3 shadow-lg p-2">
              <form onSubmit={handleOnSearchSubmit}>
              <input type="search" name="query"  placeholder="Type in a @username" className="w-full h-full text-2xl rounded-lg focus:outline-none focus:ring focus:border-blue-300" />
              <button type="submit">Search</button>
              </form>

            </div>


            {/* Card */}
            {statuses && (
              <>
                { statuses.map(({ id, description, name, screen_name }) => {
                  return (
                    <div className="p-4 md:-m-1 w-full">
                      <div className="relative h-full overflow-hidden bg-white shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg md:w-10/12 lg:w-8/12 xl:w-1/2">
                      {/* Top-half Profile Card */}
                        <div className="relative">
                          {/* <!-- Background image --> */}
                          <img className="lg:h-[40vh] md:h-[40vh] w-full object-cover object-center" src="https://pbs.twimg.com/profile_banners/1031293757759610880/1585926693/web" alt="blog" />
                          {/* <!-- Card Substance --> */}
                          <div className="absolute inset-0 flex justify-center items-center m-auto text-center">
                            <div className="" id="Card">
                              <img className="mx-auto mt-2 rounded-full ring-2 ring-white" src="https://pbs.twimg.com/profile_images/1246094561698615298/ML6dCmxV_bigger.jpg" />
                              <h2 className="text-2xl font-bold pb-2">Jermaine Jupiter | The Jobfather</h2>
                              <h3 className="text-xl">@JermaineJupiter</h3>
                              <h4 className="text-base">Technical Recruiter @Wealthsimple | Rootin' For Everybody Black | Opinions are my own. Book a consultation for your career with me: calendly.com/jupiterhr.</h4>
                              <h4 className="mb-2">Toronto, Ontario · JupiterHR.ca</h4>
                              <span className=""> Joined Aug 2018 </span>
                            </div>
                          </div>
                        </div>
                        <div className="p-6 text-black/80">
                          {/* <!-- Stats --> */}
                          <div className="flex flex-row mb-3 divide-x divide-gray-500/30">
                            <span className="text-sm text-gray-500/90 px-3">
                              Tweets
                              <br />
                              <span className="text-base font-extrabold text-gray-800/90"> 44,000 </span>
                            </span>
                            <span className="text-sm text-gray-500/90 px-3">
                              Following
                              <br />
                              <span className="text-base font-extrabold text-gray-800/90"> 4,024 </span>
                            </span>
                            <span className="text-sm text-gray-500/90 px-3">
                              Followers
                              <br />
                              <span className="text-base font-extrabold text-gray-800/90"> 31,040 </span>
                            </span>
                            <span className="text-sm text-gray-500/90 px-3">
                              Listed
                              <br />
                              <span className="text-base font-extrabold text-gray-800/90"> 1,320 </span>
                            </span>
                            <button className="ml-auto inline-flex bg-sky-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">
                              <svg className="w-4 h-4 my-auto mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle></svg
                              >
                              Follow
                            </button>
                            {/* <!-- Ellipse --> */}
                            <button className="inline-flex text-sky-500 ring-2  ring-sky-500 rounded-full font-bold px-4  transition duration-300 ease-in-out hover:ring-blue-600 hover:text-blue-600">
                              <svg className="w-4 h-4 my-auto " stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle></svg
                              >
                            </button>
                          </div>
                          {/* <!-- Actions --> */}
                          <div className="flex items-center flex-wrap">
                            <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                              >
                              <button className="text-gray-500 hover:text-gray-400 mr-3 flex-col items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm p-4">
                                <svg className="w-8 h-8 mx-auto" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                  <circle cx="12" cy="12" r="3"></circle></svg
                                >
                                <span className="text-center w-full">
                                  Add
                                </span>
                              </button>
                            </a>
                            <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                              >
                              <button type="button" className="text-gray-500 hover:text-gray-400 mr-3 flex-col items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm p-4">
                                <svg className="w-8 h-8 mx-auto" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                  <circle cx="12" cy="12" r="3"></circle></svg
                                >
                                <span className="text-center w-full">
                                  Like
                                </span>
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
            {/* <!-- toast --> */}
            <div className="mx-auto transition text-white bg-green-500 hover:bg-green-600 rounded-md px-5 py-4 cursor-pointer z-50 ">

                <div className="flex items-center space-x-2">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>

                    <p className="font-bold ">
                      Account Added to Default Campaign!
                      <a href="/campaign" className="ml-2 underline">
                        View
                      </a>
                    </p>
                </div>
            </div>
          </div>
        </div>
      </section>


      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home
