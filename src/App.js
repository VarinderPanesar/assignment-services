import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Aboutus from './components/Aboutus';
import OurServices from './components/OurServices';
import Contactus from './components/Contactus';
import Footerinfos from './components/Footerinfos';
import './components/assets/css/styles.css';
import './components/assets/css/styles1000.css';
import './components/assets/css/styles700.css';
import './components/assets/css/styles400.css';

function App() {
  return (
    <>
      <header>
        <Navbar/>
        <Slider/>
      </header>
      <main>
        <Aboutus/>
      <OurServices/>
      <Contactus/>
      </main>
      <footer>
      <Footerinfos/>
      </footer>
    </>
    
   
  );
}

export default App;
