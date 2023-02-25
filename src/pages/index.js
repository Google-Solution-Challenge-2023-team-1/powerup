import DefaultLayout from '@/components/layout/default-layout'
import HomeHeader from '@/components/molecule/home-header/home-header';
import HeadContent from '@/components/particles/head-content'


import Image from 'next/image'
export default function Home() {
  return (
    <>
      <HeadContent content={"home"}/>
      <DefaultLayout>
        <HomeHeader />
        <div>
          
        </div>
      </DefaultLayout>
    </>
  )
}
