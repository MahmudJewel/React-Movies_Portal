// import FontAwesome from 'react-fontawesome'


const Footer = () => {
  return (
    <footer className="footerHeader">
      <br />
      <br />
      <div className="container">
        <div className="row text-center textColor">
          <p>Copyright &copy: Juwel Mahmud</p>
        </div>
        <br />

        <div className="row text-center">
          <div className="col">
            <a
              className="m-3"
              target="_blank"
              href="http://mahmudjewel.herokuapp.com"
            >
              <i className="fas fa-user-circle fa-2x"></i>
            </a>

            <a
              className="m-3"
              target="_blank"
              href="https://www.facebook.com/TechVillain.007"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>

            <a
              className="m-3"
              target="_blank"
              href="https://www.youtube.com/channel/UCJCdq7lWqB7M5b16UatoTEw"
            >
              <i className="fab fa-youtube fa-2x"></i>
            </a>

            <a
              className="m-3"
              target="_blank"
              href="https://www.linkedin.com/in/mahmudjewel"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              className="m-3"
              target="_blank"
              href="https://github.com/MahmudJewel"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              className="m-3"
              target="_blank"
              href="https://www.hackerrank.com/DJ_cse"
            >
              <i className="fab fa-hackerrank fa-2x"></i>
            </a>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </footer>
  );
};

export default Footer;
