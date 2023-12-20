
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Operations from './Components/Operations/Operations';


function App() {
  return (
    <div className="App">
      
        <Navbar/>
        
        <div className="containers">
          <Operations/>
          <Footer/>
      </div>
      
    </div>
  );
}

export default App;
