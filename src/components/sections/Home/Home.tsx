import { BaseCarousel } from "../../ui/BaseCarousel/BaseCarousel"
import { useNewRelease } from "../../../hooks/useNewRelease"
import { MediaCard } from "../../ui/MediaCard/MediaCard"
import type { AlbumItem } from "../../../types/spotify/albums"
import type { Artist } from "../../../types/spotify/artists"
import { useMyArtists } from "../../../hooks/useMyArtists"


export const Home = () => {

  return (
    <>
        <div className="w-full h-full max-h-full bg-background-base rounded-[7px] overflow-y-scroll overflow-x-hidden scroll-hidden">
          <section>
            <BaseCarousel 
            title="New Release" 
            subtitle="Latest"
            useDataHook={useNewRelease}
            renderItem={(album: AlbumItem) => {
              return  <MediaCard
                        type="album"
                        id={album.id}
                        title={album.name}
                        artist={album.artists[0].name}
                        image={album.images[0].url}
                      />
            }} />
          </section>
          <section>
            <BaseCarousel 
            title="Top Artist"
            useDataHook={useMyArtists}
            renderItem={(artist: Artist) => {
              return  <MediaCard
                        type="artist"
                        id={artist.id}
                        title={artist.name}
                        artist={artist.name}
                        image={artist.images[0].url}
                      />
            }} />
          </section>
        </div>
    </>
  )
}
