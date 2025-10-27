export interface Image {
  height: number
  url: string
  width: number
}

export interface ExternalUrls {
  spotify: string
}

export interface Followers {
  href: string | null
  total: number
}
