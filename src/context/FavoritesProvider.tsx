import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FavoritesContextType {
    favorites: Array<{ id: number; title: string; thumbnailUrl: string }>;
    addToFavorites: (item: { id: number; title: string; thumbnailUrl: string }) => void;
    removeFromFavorites: (id: number) => void;
    isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavoritesContext = () => {

    const context = useContext(FavoritesContext);

    if (!context) {
        throw new Error('useFavoritesContext must be used within a FavoritesProvider');
    }
    return context;
};

interface FavoritesProviderProps {
    children: ReactNode;
}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {

    const [favorites, setFavorites] = useState<Array<{ id: number; title: string; thumbnailUrl: string }>>([]);

    const addToFavorites = (item: { id: number; title: string; thumbnailUrl: string }) => {
        setFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const removeFromFavorites = (id: number) => {
        setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== id));
    };

    const isFavorite = (id: number) => {
        return favorites.some((item) => item.id === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
            {children}
        </FavoritesContext.Provider >
    );
};
