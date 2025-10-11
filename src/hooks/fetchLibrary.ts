// hooks/useUserLibrary.ts
import { useState, useEffect } from 'react';

interface Playlist {
  id: string;
  name: string;
  description: string;
  images: Array<{ url: string }>;
  owner: { display_name: string };
  tracks: { total: number };
}

interface Album {
  id: string;
  name: string;
  artists: Array<{ name: string }>;
  images: Array<{ url: string }>;
  release_date: string;
  total_tracks: number;
}

interface UserLibrary {
  playlists: Playlist[];
  albums: Album[];
}

interface UseUserLibraryReturn {
  data: UserLibrary | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export const useUserLibrary = (): UseUserLibraryReturn => {
  const [data, setData] = useState<UserLibrary | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLibrary = async (): Promise<void> => {
    try {
      setLoading(true);
      setError(null);

      // Aquí va tu lógica de fetch - ejemplo con API real:
      const token = localStorage.getItem('spotify_token');
      
      const [playlistsResponse, albumsResponse] = await Promise.all([
        fetch('https://api.spotify.com/v1/me/playlists?limit=50', {
          headers: { 'Authorization': `Bearer ${token}` }
        }),
        fetch('https://api.spotify.com/v1/me/albums?limit=50', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      ]);

      if (!playlistsResponse.ok || !albumsResponse.ok) {
        throw new Error('Error fetching library data');
      }

      const playlistsData = await playlistsResponse.json();
      const albumsData = await albumsResponse.json();

      setData({
        playlists: playlistsData.items,
        albums: albumsData.items.map((item: any) => item.album) // Spotify devuelve wrapped albums
      });

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const refetch = (): void => {
    fetchLibrary();
  };

  useEffect(() => {
    fetchLibrary();
  }, []);

  return { data, loading, error, refetch };
};