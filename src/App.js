import { useState } from "react";
import Trending from "./Components/Trending/Trending";
import SearchBar from "./Components/SearchBar/SearchBar";
import { Container } from "@material-ui/core";
import Header from "./Components/Header/Header";

function App() {
  //Would have implemented redux to store data to avoid props drilling like this
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
