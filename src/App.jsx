import SearchMovie from "./components/SearchMovie";
import Related from "./components/Related";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovie />
      {/* <Related /> */}
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// // import ReactDOM from "react-dom";
// // import "./styles.scss";

// import Movies from "./components/Movies";
// import axios from "axios";

// const App = () => {
//   const API_KEY = "d62996ed41cbe01792dd1637f92e64bd";

//   const [recipes, setRecipes] = useState([]);
//   const [search, setSearch] = useState("");
//   const [query, setQuery] = useState("");

//   const searching = () => {
//     useEffect(() => {
//       console.log("initiail");
//       const getRecipes = async () => {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
//         );
//         setRecipes(response.data.results);
//       };
//       getRecipes();
//     }, [query]);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setQuery(search);
//     setSearch("");
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSearch}>
//         <h2>Search Item by Name like 'Chicken', 'Peanuts', 'Banana'!</h2>
//         <div className="search-item">
//           <input
//             type="text"
//             value={search}
//             onChange={(e) => {
//               setSearch(e.target.value);
//             }}
//           />
//           <button tpye="submit">Search</button>
//         </div>
//       </form>
//       <hr />
//       <div className="recipes">
//         {recipes.map((recipe) => (
//           <Movies
//             key={Math.random(Date.now())}
//             poster_path={recipe.recipe.poster_path}
//             overview={recipe.recipe.overview}
//             original_title={recipe.recipe.original_title}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
