import DefaultLayout from '@/components/layout/default-layout'
import HeadContent from '@/components/particles/head-content'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <HeadContent content={"home"}/>
      <DefaultLayout>
        <div className='flex flex-col md:flex-row  mt-52 text-white text-3xl md:text-6xl gap-2 font-semibold justify-center items-center '>
           Powerup Energizer <span className="text-primary"> Coming Soon ...</span>
        </div>
      </DefaultLayout>
    </>
  )
}
