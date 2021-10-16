// import  from './SearchMovie';
import MovieCard from './MovieCard';

const Related = ({movie}) => {
    {console.log(movie)}
    return (
        <div>
            <MovieCard movie={movie} key={movie.id}  />
        </div>
    )
}

export default Related;
