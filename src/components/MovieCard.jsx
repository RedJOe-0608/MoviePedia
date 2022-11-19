const MovieCard = ({movie}) => {
  return (
    <div className="flex flex-col items-center">
        <img src={movie.Poster === 'N/A' ? 'https://via.placeholder.com/400' : movie.Poster} className="w-[20rem] h-[20rem]" alt="" />
        <h1 className="text-2xl text-white max-w-[20rem] mt-[2rem]">{movie.Title}</h1>
        <p className="text-xl text-gray-400 max-w-[20rem] mt-[1rem]">{movie.Year}</p>
        </div>
  )
}

export default MovieCard