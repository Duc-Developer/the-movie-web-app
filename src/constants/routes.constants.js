
export const movieRoutes = {
    path: '/movies',
    children: {
        popular: {
            path: '/popular'
        },
        now_playing: {
            path: '/now-playing'
        },
        upcoming: {
            path: '/upcoming'
        },
        top_rated: {
            path: '/top-rated'
        }
    }
}

export const tvRoutes = {
    path: '/tv',
    children: {
        popular: {
            path: '/popular'
        },
        airing_today: {
            path: '/airing-today'
        },
        on_tv: {
            path: '/on-tv'
        },
        top_rated: {
            path: '/top-rated'
        }
    }
}

export const peopleRoutes = {
    path: '/peoples',
    children: {
        popular_peoples: {
            path: '/popular-peoples'
        },
        person: {
            path: '/person'
        }
    }
}