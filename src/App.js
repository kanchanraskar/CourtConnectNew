import React from 'react';
import './index.css';
import courtConnectLogo from './Images/courtConnectLogo.png' ;
import Logo from './Images/Logo.png' ;
import Event2 from './Images/Event2.jpg' ;
import Event3 from './Images/Event3.jpg' ;
import Event4 from './Images/Event4.jpg' ;
import Event1 from './Images/Event1.jpg' ;

import Turf1 from './Images/Turf1.jpg';
import Turf2 from './Images/Turf2.jpg';
import Turf3 from './Images/Turf3.jpg';
import Turf4 from './Images/Turf4.jpg';

import carasouel1 from './Images/carasouel1.jpg';
import gameAccessories2 from './Images/gameAccessories2.jpg';
import carasouel2 from './Images/carasouel2.jpg';
import ban2 from './Images/ban2.jpg'
import ban3 from './Images/ban3.jpg';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="logo" >
            <img src={Logo} alt="courtConnect Logo" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Pune" />
          </div>
          <nav>
            <ul>
              <li><a href="#play">Play</a></li>
              <li><a href="#book">Book</a></li>
              <li><a href="#learn">Learn</a></li>
            </ul>
          </nav>
          <div className="auth">
            <a href="#login">Login / Signup</a>
          </div>
        </div>
      </header>
      <main>
        
      <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={ban2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={gameAccessories2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={ban3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>

        <section className="venues-nearby">
          <h2>Events Nearby</h2>
          <p>Seamlessly explore sports venues and play with sports enthusiasts just like you!</p>
          <div className="venue-carousel">
          <section className="card-container">
        <div className="card">
            <img src={Event2} alt="Card Image 1"/>
            <div className="card-content">
                <h3>Card Title 1</h3>
                <p>This is some example text for Card 1.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
        
        <div className="card">
            <img src={Event3} alt="Card Image 2"/>
            <div className="card-content">
                <h3>Card Title 2</h3>
                <p>This is some example text for Card 2.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src={Event4} alt="Card Image 2"/>
            <div className="card-content">
                <h3>Card Title 2</h3>
                <p>This is some example text for Card 2.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src={Event1} alt="Card Image 2"/>
            <div className="card-content">
                <h3>Card Title 2</h3>
                <p>This is some example text for Card 2.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
       
    </section>
          </div>
        </section>
        <section className="book-venues">
          <h2>Book Turfs</h2>
          <div className="venue-list">
          <div className="card">
            <img src={Turf1} alt="Card Image 2"/>
            <div className="card-content">
                <h3>Card Title 2</h3>
                <p>This is some example text for Card 2.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src={Turf2} alt="Card Image 2"/>
            <div className="card-content">
                <h3>Card Title 2</h3>
                <p>This is some example text for Card 2.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src={Turf3} alt="Card Image 2"/>
            <div className="card-content">
                <h3>Card Title 2</h3>
                <p>This is some example text for Card 2.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src={Turf4} alt="Card Image 2"/>
            <div className="card-content">
                <h3>Card Title 2</h3>
                <p>This is some example text for Card 2.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
          </div>
          <a href="#all-venues" className="see-all">See All Venues</a>
        </section>
        <section className="discover-games">
          <h2>Discover Games</h2>
          <div className="venue-list">
          <div className="card">
            <img src={Turf1} alt="Card Image 2"/>
            <div className="card-content">
                <h3>Card Title 2</h3>
                <p>This is some example text for Card 2.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src={Turf2} alt="Card Image 2"/>
            <div className="card-content">
                <h3>Card Title 2</h3>
                <p>This is some example text for Card 2.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src={Turf3} alt="Card Image 2"/>
            <div className="card-content">
                <h3>Card Title 2</h3>
                <p>This is some example text for Card 2.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
        <div className="card">
            <img src={Turf4} alt="Card Image 2"/>
            <div className="card-content">
                <h3>Card Title 2</h3>
                <p>This is some example text for Card 2.</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
          </div>
          
        
          <a href="#all-games" className="see-all">See All Games</a>
        </section>

        
        <section className="app-download">
          <p>Coming Soon CourtConnect app for a seamless experience!</p>
          <div className="app-links">
            {/* Add app store and play store links here */}
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="footer-logo">
              <img src="logo.png" alt="CourtConnect Logo" />
            </div>
            <div className="footer-info">
              <p>© 2024 CourtConnect Pvt. Ltd.</p>
              <p>All Rights Reserved.</p>
            </div>
            <div className="footer-links">
              <div className="company">
                <h3>Company</h3>
                <ul>
                  <li><a href="#about-us">About Us</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#partner-with-us">Partner With Us</a></li>
                </ul>
              </div>
              <div className="social">
                <h3>Social</h3>
                <ul>
                  <li><a href="#instagram">Instagram</a></li>
                  <li><a href="#facebook">Facebook</a></li>
                  <li><a href="#linkedin">LinkedIn</a></li>
                  <li><a href="#twitter">Twitter</a></li>
                </ul>
              </div>
              <div className="privacy">
                <h3>Privacy & Terms</h3>
                <ul>
                  <li><a href="#faqs">FAQs</a></li>
                  <li><a href="#privacy-policy">Privacy Policy</a></li>
                  <li><a href="#terms-of-service">Terms of Service</a></li>
                  <li><a href="#cancellation-policy">Cancellation Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div className="app-download-footer">
          {/* Add app download button here */}
        </div>
      </main>
    </div>
  );
}

export default App;