import { useState } from "react";
import StarRating from "../Star/StarRating";

// This is for testing purpose only!

export const MovieRatingTestProps = () => {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="#ffafcc" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars!</p>
    </div>
  );
};
