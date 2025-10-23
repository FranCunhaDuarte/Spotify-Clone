import type { LibraryItem } from "../../../data/myLibrary"
import { useNewRelease } from "../../../hooks/useNewRelease"
import { MediaCard } from "../../ui/MediaCard/MediaCard"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export const Home = () => {

  const {data,loading,error} = useNewRelease()

  return (
    <>
        <div className="w-full h-full max-h-full bg-background-base rounded-[7px] py-6 overflow-y-scroll overflow-x-hidden scroll-hidden">
          <div className="w-full">
            <div className="px-10">
              <h3>Made for you</h3>
            </div>
            <div className="w-full grid px-7 justify-between [grid-template-columns:repeat(auto-fill,minmax(190px,_1fr))]">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                onSlideChange={(swiper) => console.log('slide changed to: ', swiper.realIndex)}
                onSwiper={(swiper) => console.log('swiper instance: ', swiper)}
              >
                {data?.items.map((item) => {
                  
                  const albumMappedItem: LibraryItem = {
                    type: 'album' as const,
                    id: item.id,
                    title: item.name,
                    artist: item.artists[0].name,
                    image: item.images[0].url,
                  };

                  return <MediaCard {...albumMappedItem} />
                })}
              </Swiper>
            </div>
          </div>
        </div>
    </>
  )
}
