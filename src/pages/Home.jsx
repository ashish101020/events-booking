import "./Home.css";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import EventList from "../components/EventList";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home-hero">
        <div className="search-wrapper">
          <SearchBar />
        </div>
      </div>
      <div>
        <EventList/>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
