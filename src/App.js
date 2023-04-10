import logo from './images/logo.png';
import './App.css';

import { BsChevronRight } from 'react-icons/bs'

function App() {
  return (
    <div className="App">
      <section className='intro'>
        <div className="overlay"></div>
        <div className="header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <button className= 'btn'>
            Sign In
          </button>
        </div>
        <div className="content">
          <h1 className="heading-text">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="sub-text">
            Watch anywhere. Cancel anytime.
          </p>
          <p className="sub-text sub-text-2">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="enter-email">
            <input type="text" placeholder='Email address'/>
          </div>

          <button className="btn">
            Get Started <BsChevronRight></BsChevronRight>
          </button>      
        </div>
      </section>
      
      <section>
        <h1>Enjoy on your TV</h1>
      </section>
    </div>
  );
} 



export default App;
