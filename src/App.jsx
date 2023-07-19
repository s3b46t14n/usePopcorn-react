import { useState } from "react";
import { tempMovieData, tempWatchedData } from "../db/movieData";
import SearchMovie from "./components/SearchMovie";
import NavBar from "./components/NavBar";
import MainLayouts from "./layouts";
import Box from "./components/Box";
import MovieList from "./components/Movie/MovieList";
import WatchedMovieSummary from "./components/Client/WatchedMovieSummary";
import WatchedMoviesList from "./components/Client/WatchedMoviesList";
import Logo from "./components/Logo";
import SearchResults from "./components/SearchResults";
import StarRating from "./components/Star/StarRating";
import { MovieRatingTestProps } from "./components/Client/TestPropsForRating";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <NavBar>
        <Logo />
        <SearchMovie />
        <SearchResults movies={movies} />
      </NavBar>

      <MainLayouts>
        <Box>
          <MovieList movies={movies} />
        </Box>

        <Box>
          <WatchedMovieSummary watched={watched} />
          <WatchedMoviesList watched={watched} />
          <StarRating
            maxRating={5}
            messages={["Terrible", "Bad", "Okay", "Good", "Excellent"]}
            defaultRating={3}
          />
        </Box>
      </MainLayouts>
    </>
  );
}
