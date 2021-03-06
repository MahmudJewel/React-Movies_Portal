import "../assets/singleContent.css";
import CustomModal from "./pages/CustomModal";

import { img_300, unavailable } from "./config/config";
import { Container, Badge } from "react-bootstrap";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <CustomModal media_type={media_type} id={id} >
      {/* <Container> */}
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />

      {/* badge  */}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary ">
        {vote_average}
        <span className="visually-hidden">unread messages</span>
      </span>

      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>

      {/* <CustomModal /> */}
      {/* </Container> */}
    </CustomModal>
  );
};

export default SingleContent;
