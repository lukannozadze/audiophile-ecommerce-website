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
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import ScrollToTop from "./Pages/ScrollToTop";

function App() {
  return (
    <React.Fragment>
      <Route path="/" exact>
        <ScrollToTop />
        <MainPage />
      </Route>
      <Route path="/headphones">
        <ScrollToTop />
        <HeadphonesPage />
      </Route>
      <Route path="/speakers">
        <ScrollToTop />
        <SpeakersPage />
      </Route>
      <Route path="/earphones">
        <ScrollToTop />
        <EarphonesPage />
      </Route>
      <Route path="/xx9-mark-two-headphones">
        <ScrollToTop />
        <FirstModelHeadphone />
      </Route>
      <Route path="/xx9-mark-one-headphones">
        <ScrollToTop />
        <SecondModelHeadphone />
      </Route>
      <Route path="/xx59-headphones">
        <ScrollToTop />
        <ThirdModelHeadphone />
      </Route>
      <Route path="/zx9-speaker">
        <ScrollToTop />
        <FirstModelSpeaker />
      </Route>
      <Route path="/zx7-speaker">
        <ScrollToTop />
        <SecondModelSpeaker />
      </Route>
      <Route path="/yx1-wireless-earphones">
        <ScrollToTop />
        <FirstModelEarphone />
      </Route>
      <Route path="/checkout">
        <ScrollToTop />
        <CheckoutPage />
      </Route>
    </React.Fragment>
  );
}

export default App;
