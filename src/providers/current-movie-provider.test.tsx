import {renderHook} from "@testing-library/react-hooks";
import {useCurrentMovie} from "./current-movie-provider";
import React from "react";
import {render, screen} from "@testing-library/react";
import {MovieSection} from "../components/movie-section/movie-section";

describe('current movie provider', () => {
    it('should return context', () => {
        const { result } = renderHook(useCurrentMovie);
        expect(result.current.currentMovieIndex).toBe(0);
    });
    it('should render component with context', () => {
        render(<MovieSection/>);
        const component = screen.getByTestId('movie-section');
        expect(component).toBeInTheDocument();
    });
})