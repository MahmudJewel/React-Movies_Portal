import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../SingleContent";
import CustomPaginations from "../CustomPaginations";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [numOfPages, setNumOfPages] = useState();

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [page]);

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=dd42c026397aa0add4d7021e1499eb1a&language=en-US&query=${searchText}&page=${page}&include_adult=false`
    );
    setContent(data.results);
    // console.log('data: ', data);
    setNumOfPages(data.total_pages);
  };
  return (
    <div>
      <div className="input-group mb-3 p-3">
        <input
          type="text"
          className="form-control p-3 text-center"
          placeholder="Enter text"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          className="input-group-text px-4"
          id="basic-addon2"
          onClick={fetchSearch}
        >
          Search
        </Button>
      </div>
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
        {numOfPages < 1 && <h2>No Content Found</h2>}
      </div>

      {numOfPages > 1 && (
        <CustomPaginations setPage={setPage} numOfPages={numOfPages} />
      )}
    </div>
  );
};

export default Search;
