src/
├── components/           # Componentes reutilizables
│   ├── ui/              # Componentes base (Button, Card, Input)
│   ├── layout/          # Componentes de layout
│   │   ├── Navbar/
│   │   ├── Sidebar/
│   │   └── Player/
│   ├── sections/        # Secciones específicas
│   │   ├── Dashboard/
│   │   ├── Search/
│   │   ├── Library/
│   │   └── Playlist/
│   └── shared/          # Componentes compartidos
│       ├── AlbumCard/
│       ├── TrackList/
│       └── PlaylistCard/
├── pages/               # Páginas/rutas
│   ├── Home/
│   ├── Search/
│   ├── Library/
│   ├── Playlist/
│   └── Album/
├── hooks/               # Custom hooks
│   ├── useSpotifyAPI.js
│   ├── usePlayer.js
│   └── useAuth.js
├── context/             # Context API
│   ├── AuthContext.js
│   ├── PlayerContext.js
│   └── ThemeContext.js
├── services/            # Servicios y APIs
│   ├── spotifyAPI.js
│   └── auth.js
├── utils/               # Utilidades
│   ├── constants.js
│   └── helpers.js
├── styles/              # Estilos globales
│   └── globals.css
└── assets/              # Imágenes, íconos
    ├── images/
    └── icons/
