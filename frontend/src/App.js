import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';
import MailingList from './components/MailingList';
import RecommendationForm from './components/RecommendationForm';
/// <Services></Services> <AboutUs> </AboutUs> <Contact></Contact>


function App() {
  return (
    <div> 
      <Landing></Landing>
      
      <Products></Products>  

      <AboutUs> </AboutUs>

      <Services></Services>

      <MailingList></MailingList>

      <RecommendationForm></RecommendationForm>

      <Footer></Footer>
</div> 
    
  );
}

export default App;
