import React, {createContext, useContext, useState} from "react";

type CurrentMovieContextProps = {
    currentMovieIndex: number
    setCurrentMovieIndex: React.Dispatch<React.SetStateAction<number>>
}

type CurrentMovieProviderProps = {
    children: React.ReactNode;
}

const defaultContextValues = {
    currentMovieIndex: 0,
    setCurrentMovieIndex: () => {},
}

export const CurrentMovieContext = createContext<CurrentMovieContextProps>(defaultContextValues);

export const CurrentMovieProvider = ({ children }: CurrentMovieProviderProps) => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);

    return (
        <CurrentMovieContext.Provider value={{currentMovieIndex, setCurrentMovieIndex}}>
            {children}
        </CurrentMovieContext.Provider>
    );
};

export const useCurrentMovie = () => {
    return useContext(CurrentMovieContext)
};

