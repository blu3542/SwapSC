import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
/// <Services></Services> <AboutUs> </AboutUs> <Contact></Contact>

function App() {
  return (
    <div> 
      <Landing></Landing>
      
      <Products></Products>  

      <AboutUs> </AboutUs>
    </div> 
  );
}

export default App;
