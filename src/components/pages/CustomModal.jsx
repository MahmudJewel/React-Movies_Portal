import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import "../../assets/customModal.css";
import axios from "axios";
import { img_500, unavailable, unavailableLandscape } from "../config/config";

export default function Example({ children, media_type, id }) {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState([]);
  const [video, setVideo] = useState();

  // console.log('media and id: ', media_type, id)

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=dd42c026397aa0add4d7021e1499eb1a&language=en-US`
      // `https://api.themoviedb.org/3/find/${id}?api_key=dd42c026397aa0add4d7021e1499eb1a&language=en-US&external_source=imdb_id`
      // 'https://api.themoviedb.org/3/movie/${id}?api_key=dd42c026397aa0add4d7021e1499eb1a&language=en-US'
    );

    setContent(data);
    console.log("findbyid: ", content);
  };
  const fetchVideo = async () => {
    const { data } = await axios.get(
      // `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=dd42c026397aa0add4d7021e1499eb1a&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // console.log("findbyid from useeffect: ", content);
  }, []);

  return (
    <>
      <div className="media" onClick={() => setShow(true)}>
        {children}
      </div>

      <Modal show={show} onHide={() => setShow(false)} dialogClassName="popup">
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Under Developing
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
