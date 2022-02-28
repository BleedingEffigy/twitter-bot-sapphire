import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <nav className="w-full border-b-2 py-1">
            <div className="mx-auto text-center">
                <button className="px-2 mx-1 rounded-md font-semibold text-black/40">
                Explore
                </button> 
                <button className="px-2 mx-1 rounded-md font-semibold text-black/40 ">
                Search
                </button> 
                <button className="px-2 mx-1 bg-gray-300/50 rounded-md font-semibold text-black/90 ">
                Campaigns
                </button>
                <button className="px-2 mx-1 rounded-md font-semibold text-black/40 ">
                Profile
                </button> 
            </div>      
        </nav>
        <section className="text-gray-400 bg-gray-50 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-12">
              <div className="p-12 lg:w-1/2 md:w-3/4 md:mx-auto flex flex-col items-start  bg-white/80 shadow-xl ring-1 ring-gray-900/5">
                <div className="flex flex-row">
                  <span className="inline-block mx-0.5 py-1 px-2 rounded bg-red-300 text-red-800 text-bold text-opacity-75 text-xs font-medium tracking-widest">ACTIVE</span>
                  <span className="inline-block mx-0.5 py-1 px-2 rounded bg-emerald-300 text-emerald-800 text-bold text-opacity-75 text-xs font-medium tracking-widest">CAMPAIGN</span>
                </div>
                <h2 className="sm:text-3xl text-2xl title-font font-medium w-full text-center text-black text-opacity-90 mt-4">buildspace—web3 builders</h2>
                <p className="w-full text-center text-opacity-90 mb-4">
                   Created by - @caulfield
                </p>
                <p className="leading-relaxed mb-4 w-full text-center text-black text-opacity-60">
                A list of the people building the Web3 future. https://buildspace.so/
                </p>
                <p className="leading-relaxed mb-1 text-base w-full text-center font-bold text-black text-opacity-80">
                  30 Members | 756 Followers
                </p>
                {/* Actions */}
                <div className="flex items-center justify-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75  w-full">
                  <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm mr-3 pr-3">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm ml-auto">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>Time
                  </span>
                </div>
                {/* Accounts list */}
                <div className="flex flex-col divide-y-2">
                  {/* An Account */}
                  <a className="inline-flex items-center w-full my-0.5" href='/'>
                    <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-black/90">Holden Caulfield
                        <span className="text-gray-500/90 text-xs tracking-widest ml-0.5">@UIDEVELOPER</span>
                      </span>
                      <span className="text-black/80">NFT creator, NFT & Crypto investment Crypto lottery FOLLOW me I will FOLLOW You</span>
                    </span>
                  </a>
                  {/* An Account */}
                  <a className="inline-flex items-center w-full my-0.5" href='/'>
                    <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-black/90">Holden Caulfield
                        <span className="text-gray-500/90 text-xs tracking-widest ml-0.5">@UIDEVELOPER</span>
                      </span>
                      <span className="text-black/80">NFT creator, NFT & Crypto investment Crypto lottery FOLLOW me I will FOLLOW You</span>
                    </span>
                  </a>
                  {/* An Account */}
                  <a className="inline-flex items-center w-full my-0.5" href='/'>
                    <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-black/90">Holden Caulfield
                        <span className="text-gray-500/90 text-xs tracking-widest ml-0.5">@UIDEVELOPER</span>
                      </span>
                      <span className="text-black/80">NFT creator, NFT & Crypto investment Crypto lottery FOLLOW me I will FOLLOW You</span>
                    </span>
                  </a>
                </div>

              </div>
              <div className="p-12 md:w-1/2 flex flex-col items-start  bg-white/80 shadow-xl ring-1 ring-gray-900/5">
                <div className="flex flex-row">
                  <span className="inline-block mx-0.5 py-1 px-2 rounded bg-red-300 text-red-800 text-bold text-opacity-75 text-xs font-medium tracking-widest">ACTIVE</span>
                  <span className="inline-block mx-0.5 py-1 px-2 rounded bg-purple-300 text-purple-800 text-bold text-opacity-75 text-xs font-medium tracking-widest">LIST</span>
                </div>
                <h2 className="sm:text-3xl text-2xl title-font font-medium w-full text-center text-black text-opacity-90 mt-4">buildspace—web3 builders</h2>
                <p className="w-full text-center text-opacity-90 mb-4">
                   Created by - @caulfield
                </p>
                <p className="leading-relaxed mb-4 w-full text-center text-black text-opacity-60">
                A list of the people building the Web3 future. https://buildspace.so/
                </p>
                <p className="leading-relaxed mb-1 text-base w-full text-center font-bold text-black text-opacity-80">
                  30 Members | 756 Followers
                </p>
                {/* Actions */}
                <div className="flex items-center justify-center flex-wrap pb-4 mb-4 border-b-2 border-gray-800 border-opacity-75  w-full">
                  <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm mr-3 pr-3">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                  </span>
                  <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>Add
                  </span>
                </div>
                {/* Accounts list */}
                <div className="flex flex-col divide-y-2">
                  {/* An Account */}
                  <a className="inline-flex items-center w-full my-0.5" href='/'>
                    <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-black/90">Holden Caulfield
                        <span className="text-gray-500/90 text-xs tracking-widest ml-0.5">@UIDEVELOPER</span>
                      </span>
                      <span className="text-black/80">NFT creator, NFT & Crypto investment Crypto lottery FOLLOW me I will FOLLOW You</span>
                    </span>
                  </a>
                  {/* An Account */}
                  <a className="inline-flex items-center w-full my-0.5" href='/'>
                    <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-black/90">Holden Caulfield
                        <span className="text-gray-500/90 text-xs tracking-widest ml-0.5">@UIDEVELOPER</span>
                      </span>
                      <span className="text-black/80">NFT creator, NFT & Crypto investment Crypto lottery FOLLOW me I will FOLLOW You</span>
                    </span>
                  </a>
                  {/* An Account */}
                  <a className="inline-flex items-center w-full my-0.5" href='/'>
                    <img alt="blog" src="https://dummyimage.com/104x104" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-black/90">Holden Caulfield
                        <span className="text-gray-500/90 text-xs tracking-widest ml-0.5">@UIDEVELOPER</span>
                      </span>
                      <span className="text-black/80">NFT creator, NFT & Crypto investment Crypto lottery FOLLOW me I will FOLLOW You</span>
                    </span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>
    </div>
    )
}

export default Home