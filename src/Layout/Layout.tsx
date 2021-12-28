import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "src/Layout/components/NavBar";
import GithubAccountResultCard from "src/Layout/components/GithubAccountResultCard";
import Searcher from "src/Layout/components/Searcher";
import Footer from "src/Layout/components/Footer";

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <div
        className="container flex-grow-1"
        style={{
          maxWidth: "800px",
        }}
      >
        <Searcher />
        <GithubAccountResultCard
          login="jakubjereczek"
          avatarUrl="https://avatars.githubusercontent.com/u/58139870?s=400&v=4"
          accountUrl="github.com/jakubjereczek"
          name="Jakub Jereczek"
          bio="Computer Science and Econometrics student at University of Gdańsk."
        />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
