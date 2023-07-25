import Home from "./component/Home";
import Navbar from "./component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from "react";
import SocialLink from "./component/SocialLink";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
// import BarChat from "./component/BarChat";
import ApexChart from "./component/ApexChart";



function App() {
  return (
    <div className="App">
<Navbar/>
<Home/>
<About/>
<Portfolio/>
<Experience/>
<Contact/>
{/* <BarChat/> */}
<ApexChart/>
<SocialLink/>
    </div>
  );
}

export default App;
