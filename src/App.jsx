import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import "./mediaQueries.css";

function App() {
  return (
    <>
      <Header />
      <Profile />
      <AboutMe />
      <Experience />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
