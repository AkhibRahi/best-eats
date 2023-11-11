import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadingCards from "./components/HeadingCards"
import Food from "./components/Food"
import Category from './components/Category'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadingCards/>
      <Food/>
      <Category/>
    </div>
  );
}

export default App;
