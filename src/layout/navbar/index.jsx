import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Links from '../../components/navbar components/links';
import NavLogo from "./../../assets/img/image.png";
import style from "./index.module.scss";
import MobileNavbar from './mobile';

function Navbar() {
  const navigate = useNavigate();

  const [search, setSearch] = React.useState("");
  const [scrolled, setScrolled] = React.useState(false);

  function handleSearch() {
    if (search) {
      navigate(`/axtar/${search}`);
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{ color: scrolled ? "white" : "black" }}
        className={`${style.navbar} ${scrolled ? style.scrolled : ""}`}
      >
        <div className={style.triangle}>
          <img alt="Logo" src={NavLogo} />
        </div>
        <Links />
        <div className={style.navbar_search}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown} // Handle "Enter" key press
            type="text"
            placeholder="Axtar..."
          />
          <button onClick={handleSearch}>
            <SearchIcon />
          </button>
        </div>
      </div>
      <MobileNavbar />
    </>
  );
}

export default Navbar;
