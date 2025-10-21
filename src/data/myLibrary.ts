


export type LibraryItem = {
    type: 'album' | 'playlist'
    id: string
    title: string
    artist: string
    image: string
}

export const MY_LIBRARY: LibraryItem[] = [
    { type:'album', id:'47JohERDAJVAzmfCgOfG5w', title: 'Apocalipsis', artist: 'Cris MJ', image: "https://i.scdn.co/image/ab67616d0000b273a4d6981a161ff118d46b7af9"},
    { type:'album', id: '1pnm9zBlblhTRlE46ItLzU', title: "CANT'T RUSH GREATNESS", artist: 'Central Cee', image: "https://i.scdn.co/image/ab67616d0000b273d531f45a2948d22e5c5ff66f"},
    { type:'playlist', id: '3cEYpjA9oz9GiPac4AsH4n', title: 'Spotify Web API Testing playlist', artist: 'JMPerez²', image: "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da848d0ce13d55f634e290f744ba"}
]

