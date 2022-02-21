import "../assets/customPaginations.css";

// import { Pagination } from "react-bootstrap";
import Pagination from "@material-ui/lab/Pagination";

const CustomPaginations = ({ setPage, numOfPages = 10 }) => {
  const handlechange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div className="bg-white d-flex justify-content-center mt-4 pagination-round">
      <Pagination
        className="p-2"
        onChange={(e) => handlechange(e.target.textContent)}
        count={numOfPages}
        color="primary"
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};

export default CustomPaginations;
