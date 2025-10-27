import type { Image, ExternalUrls } from "./common"

export interface AlbumsRoot {
  albums: Albums
}

export interface Albums {
  href: string
  items: AlbumItem[]
  limit: number
  next: string
  offset: number
  previous: string | null
  total: number
}

export interface AlbumItem {
  album_type: string
  artists: ArtistSummary[]
  available_markets: string[]
  external_urls: ExternalUrls
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}

export interface ArtistSummary {
  external_urls: ExternalUrls
  href: string
  id: string
  name: string
  type: string
  uri: string
}
