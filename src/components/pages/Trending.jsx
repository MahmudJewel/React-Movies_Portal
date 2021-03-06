import { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../SingleContent.jsx";
import "../../assets/trending.css"
import "../../assets/App.css"
// import { Badge } from "react-bootstrap";
import CustomPaginations from "../CustomPaginations.jsx";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  //   get trending movie list
  const fetchTrending = async () => {
    // const { data } = await axios.get(
    //   `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_API_KEY}&page=${page}`
    // );
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=dd42c026397aa0add4d7021e1499eb1a&page=${page}`
    );
    console.log("Trending data ", data);
    setContent(data.results);
    // console.log('total data num: ', data.results.length);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <div className=" mt-4">
      <span className="pageTitle">
        <h2> Trending Today </h2>
      </span>
      <div className="d-flexx">
        {content &&
          content.map((item) => (
            <SingleContent
              key={item.id}
              id={item.id}
              title={item.title || item.name}
              poster={item.poster_path}
              date={item.release_date || item.first_air_date}
              media_type={item.media_type}
              vote_average={item.vote_average}
            />
          ))}
      </div>
      <CustomPaginations setPage={setPage}/>
    </div>
  );
};

export default Trending;
