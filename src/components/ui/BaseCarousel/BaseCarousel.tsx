

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from "swiper";
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useRef, useState } from "react";
import Arrow from '../../../assets/svg/arrow.svg?react'

type DataHook<T> = () => {
    data: T[] | null
    loading: boolean
    error: string | null
}

interface BaseCarouselProps<T> {
  title: string
  subtitle?: string
  useDataHook: DataHook<T>
  renderItem: (item: T) => React.ReactNode
}

export const BaseCarousel = <T,>({ title, subtitle, useDataHook, renderItem }: BaseCarouselProps<T>) => {

    const {data,loading,error} = useDataHook()

    const prevRef = useRef<HTMLDivElement | null>(null)
    const nextRef = useRef<HTMLDivElement | null>(null)

    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)


  return (
    <>
        <div className="w-full my-10">
            <div className="px-13">
              {subtitle && (<span className="text-text-subdued">{subtitle}</span>)}
              <h3 className="text-3xl font-bold">{title}</h3>
            </div>
            <div className="w-full relative">
              <div className="w-full h-full absolute top-1/2 -translate-y-1/2 z-10 pointer-events-none px-2 flex justify-between items-center">
                <div ref={prevRef} className="pointer-events-auto cursor-pointer w-10 h-10 bg-background-elevated-base rounded-full hover:bg-background-elevated-highlight duration-300 flex items-center justify-center" style={{opacity: isBeginning ? '0' : '1'}}><Arrow className='rotate-180' /></div>
                <div ref={nextRef} className="pointer-events-auto cursor-pointer w-10 h-10 bg-background-elevated-base rounded-full hover:bg-background-elevated-highlight duration-300 flex items-center justify-center" style={{opacity: isEnd ? '0' : '1'}}><Arrow /></div>
                <div className="pointer-events-none absolute w-20 h-full left-0 bg-[linear-gradient(90deg,rgba(18,_18,_18,_100%),rgba(18,_18,_18,_0%))]"></div>
                <div className="pointer-events-none absolute w-20 h-full right-0 bg-[linear-gradient(-90deg,rgba(18,_18,_18,_100%),rgba(18,_18,_18,_0%))]"></div>
              </div>
              <div className="">
                <Swiper
                  className="!px-10"
                  modules={[Navigation]}
                  spaceBetween={10}
                  slidesPerView="auto"
                  pagination={{ clickable: true }}
                  onBeforeInit={(swiper) => {
                    // @ts-expect-error: Swiper typings uncompletes
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-expect-error: Swiper typings uncompletes
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  onSwiper={(swiper: SwiperClass) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                  }}
                  onSlideChange={(swiper: SwiperClass) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                  }}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current
                  }}>
                    {data?.map((item,i) => {
                        return  <SwiperSlide className="!w-min" key={i}>
                                    {renderItem(item)}
                                </SwiperSlide>
                    })}
                </Swiper>
              </div>
            </div>
        </div>
    </>
  )
}