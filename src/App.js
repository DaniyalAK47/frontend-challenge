import { useState } from "react";
import Trending from "./Components/Trending/Trending";
import SearchBar from "./Components/SearchBar/SearchBar";
import { Container } from "@material-ui/core";
import Header from "./Components/Header/Header";

function App() {
  const [openFav, setOpenFav] = useState(false);
  return (
    <>
      <Header setOpenfav={setOpenFav} />
      <Container maxWidth="md">
        <SearchBar />
        <Trending openFav={openFav} setOpenFav={setOpenFav} />
      </Container>
    </>
  );
}

export default App;
