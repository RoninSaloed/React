import './App.css';
import { FaGithub } from 'react-icons/fa';
import { BiMessageRounded } from 'react-icons/bi';
import { GiNewspaper } from 'react-icons/gi';
import { MdLibraryMusic, MdOutlinePhotoLibrary } from 'react-icons/md';
import { RiVideoLine } from 'react-icons/ri';





const App = () => {

  return (
    <div className="wrapper">
      <div className="container">
        <div className="sideBar">
          <div className="sideBar__logo">
            <FaGithub className="sideBar__git" />
            <div className="sideBar__name">Fander</div>
          </div>
          <div className="sideBar__btn">
            <span></span>
          </div>
          <ul>
            <li>
              <a href="#">
                <BiMessageRounded className="sideBar__icon"></BiMessageRounded>
                <span className="sideBar__massage">massages</span>
              </a>
              <span className="tooltip">massages</span>

            </li>
            <li>
              <a href="#">
                <GiNewspaper className="sideBar__icon"></GiNewspaper>
                <span className="sideBar__news">news</span>
              </a>
              <span className="tooltip">massages</span>

            </li>
            <li>
              <a href="#">
                <MdLibraryMusic className="sideBar__icon"></MdLibraryMusic>
                <span className="sideBar__music">music</span>
              </a>
              <span className="tooltip">massages</span>

            </li>
            <li>
              <a href="#">
                <MdOutlinePhotoLibrary className="sideBar__icon"></MdOutlinePhotoLibrary>
                <span className="sideBar__photo">photo</span>
              </a>
              <span className="tooltip">massages</span>

            </li>
            <li>
              <a href="#">
                <RiVideoLine className="sideBar__icon"></RiVideoLine>
                <span className="sideBar__video">video</span>
              </a>
              <span className="tooltip">massages</span>

            </li>
          </ul>
        </div>
      </div>
      <div className="Content">
        <div className="Text">Content</div>
      </div>
    </div>


  );

}


export default App;
