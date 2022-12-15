import MainPage from "./Pages/Main Page/MainPage";
import HeadphonesPage from "./Pages/Headphones/HeadphonesPage";
import SpeakersPage from "./Pages/Speakers/SpeakersPage";
import EarphonesPage from "./Pages/Earphones/EarphonesPage";
import FirstModelHeadphone from "./Pages/Product Detail Headphones/FirstModelHeadphone";
import SecondModelHeadphone from "./Pages/Product Detail Headphones/SecondModelHeadphone";
import { Route } from "react-router-dom";
import React from "react";
import ThirdModelHeadphone from "./Pages/Product Detail Headphones/ThirdModelHeadphone";
import FirstModelSpeaker from "./Pages/Product Detail Speakers/FirstModelSpeaker";
import SecondModelSpeaker from "./Pages/Product Detail Speakers/SecondModelSpeaker";
import FirstModelEarphone from "./Pages/Product Detail Earphones/FirstModelEarphone";

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact>
        <MainPage />
      </Route>
      <Route path="/headphones">
        <HeadphonesPage />
      </Route>
      <Route path="/speakers">
        <SpeakersPage />
      </Route>
      <Route path="/earphones">
        <EarphonesPage />
      </Route>
      <Route path="/xx9-mark-two-headphones">
        <FirstModelHeadphone />
      </Route>
      <Route path="/xx9-mark-one-headphones">
        <SecondModelHeadphone />
      </Route>
      <Route path="/xx59-headphones">
        <ThirdModelHeadphone />
      </Route>
      <Route path="/zx9-speaker">
        <FirstModelSpeaker />
      </Route>
      <Route path="/zx7-speaker">
        <SecondModelSpeaker />
      </Route>
      <Route path="/yx1-wireless-earphones">
        <FirstModelEarphone />
      </Route>
    </React.Fragment>
  );
}

export default App;
