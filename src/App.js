import { AiOutlineSearch } from "react-icons/ai";
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";

function App() {
  const [movie,setMovie] = useState([]);
  const [searchData, setSearchData] = useState('');
  const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=be356566'

  const fetchData = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`)
    const data = await res.json();
    // console.log(data.Search);
    setMovie(data.Search);

  }

  useEffect(() => {
    fetchData("the avengers")  
  }, [])
  return <div className="min-h-screen flex flex-col items-center  bg-[#252525]">
    <h1 className="text-[3rem] text-white mt-[4rem]">MoviePedia</h1>
    <div className="flex items-center mt-[3rem] ">
    <input
    onChange={(e) => {
      setSearchData(e.currentTarget.value);
    }}
    type="text" className="w-[42rem] p-2" placeholder="Search for movies..." />
    <AiOutlineSearch
    onClick={() => {
      fetchData(searchData)
    }}
    className="relative right-6 cursor-pointer" />
    </div>
    <main className="grid grid-cols-3 gap-[3rem] my-[5rem] mx-auto">
    {movie.map((item) => (

    <MovieCard movie={item}/>
    ))}

    </main>
    
  </div>;
}

export default App;
