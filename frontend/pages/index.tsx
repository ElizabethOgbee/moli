import { Inter } from 'next/font/google'
import Link from 'next/link'
import Lottie from 'lottie-react'
import wallet from '../public/wallet.json'
import Auth from '@/comps/Auth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  //   <div className="flex flex-col items-center justify-center py-2">
  //   <PageHeading>My Exchange</PageHeading>
  // </div>
  <section  className="relative bg-[url(../pages/asset/bbbg.avif)] bg-no-repeat bg-center bg-cover w-full h-full px-4 py-5 flex lg:py-10 lg:px-1  md:h-screen">
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>
{/**Left-Item **/}
    <div className="mt-20 grid  items-center justify-items-center z-[1] gap-32 lg:grid-cols-2">
      <div className="">
      <h2 className='text-center text-3xl mb-6 md:text-5xl mt-9 bg-gradient-to-tr from-purple-400 to-green-300 block text-transparent bg-clip-text text-bold'>MoliSwap</h2>
      <p className='text-gray-300 text-center text-xl px- md:text-2xl'>Swap tokens with 0 STX <br />
      Transfer any token with 0 STX <br />
      Zero loss of funds for failed transactions
         </p>
      {/**Buttton */}
      <div className="flex mt-4 justify-center ">
      <Link href='' className='text-gray-300  text-bolder px-4 py-2 m-auto text-md  font-sm md:font-lg   md:m-0'>
        <Auth />
      </Link>
      </div>
</div>
  <div className="">
  <Lottie animationData={wallet} loop={true} className="mt-5 h-80 w-80 object-cover lg:w-[500px] lg:h-[400px] z-20 rounded-3xl items-center" />
  </div>
  </div>
  </section>    
  )
}

/**
 * So you can build your landing page here, 
the connect wallet button would be on this page 
and it would appear on the navbar too
 */

 