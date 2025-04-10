import ImageOfAutor from "../../assets/IMG_4282.jpg";
import "./about.style.css";
import IconLogo from "../../assets/megaphonewhite.png";

const About = () => {
  return (
    <div className="main-about">
      <div className="container-about-page">
        <div className="author-info">
          <h2>App creator</h2>
          <img src={ImageOfAutor} width="250px" />
          <div className="author">
            <h3>Milos Klepic</h3>
            <p>- Frontend Developer -</p>
          </div>
        </div>
        <hr />
        <div className="app-info">
          <h2>Todo App</h2>
          <img src={IconLogo} width="100px" />
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>REACT</li>
          </ul>
          <p>
            The Todo app is an intuitive and functional web application that
            allows users to easily add, edit and delete their tasks. It was
            created using HTML, CSS, JavaScript and React technologies, with the
            use of the MUI library for quickly creating a modern user interface.
            For global application state management, I used the Zustand store
            which enables efficient data management without the need for complex
            configurations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
