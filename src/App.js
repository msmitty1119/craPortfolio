import logo from './logo.svg';
import './App.css';
import DigiNav from './components/DigiNav';
import ContactMe from './components/ContactMe';
import About from './components/About';
import ProfessionalExperience from './components/ProfessionalExperience';
import Achievements from './components/Achievements';
import TechnicalSkils from './components/TechnicalSkills';
import Education from './components/Education';
import Certifications from './components/Certifications';


function App() {
  return (
    <div className="App" >
      <DigiNav/>
      <div className="container-fluid bg-warning-subtle">
      <ContactMe/>
      <hr></hr>
      <br></br>
      <About/>
      <br></br>
      <ProfessionalExperience/>
      <br></br>
      <Achievements/>
      <br></br>
      <TechnicalSkils/>
      <br></br>
      <Education/>
      <br></br>
      <Certifications/>
      <hr></hr>
      </div>
    </div>
  );
}

export default App;
