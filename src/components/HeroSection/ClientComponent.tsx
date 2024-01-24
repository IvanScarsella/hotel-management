'use client'

import { btn_primary, font_heading, scale_animation } from '@/app/(web)/globals'
import CountUpNumber from '../CountUpNumber/CountUpNumber'
import { FC } from 'react'

type Props = {
  heading1: React.ReactNode
  section2: React.ReactNode
}

const ClientComponent: FC<Props> = (props) => {
  const { heading1, section2 } = props

  return (
    <section className="flex px-4 items-center gap-12 container mx-auto">
      <div className="py-10 h-full">
        <h1 className={`${font_heading} mb-6`}>Explore Our Exquisite Hotel</h1>
        <p className=" text-[rgb(74,74,74)] dark:text-[#ffffffea] mb-12 max-w-lg">
          Experience an Exquisite Hotel Immersed in Rich History and Timeless
        </p>
        <button className={`${btn_primary}`}>Get Started</button>

        <div className="flex justify-between mt-12">
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Basic Room</p>
            <CountUpNumber duration={5000} endValue={50} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Luxury Room</p>
            <CountUpNumber duration={5000} endValue={120} />
          </div>
          <div className="flex gap-3 flex-col items-center justify-center">
            <p className="text-xs lg:text-xl text-center">Suite</p>
            <CountUpNumber duration={5000} endValue={60} />
          </div>
        </div>
      </div>

      {section2}
    </section>
  )
}

export default ClientComponent
