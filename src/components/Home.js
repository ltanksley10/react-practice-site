import React from 'react';
import Navbar from './Navbar';
import Overview from './Overview';
import Footer from './Footer';

const Home = (props) => {
    return (
      <div>
         <Navbar />
          <div className="cards">
            <Overview 
              src="https://images.unsplash.com/photo-1531511628710-79f9f48335c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80"
              alt="A girl sitting in front of several paintings in a gallery."
              title="Original Artwork"
              description="All available series of my original paintings - oil on canvas - various sizes."
              to="/originalartwork"
            />
            <Overview 
              src="https://images.unsplash.com/photo-1503694978374-8a2fa686963a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="A commercial sized printer printing artwork."
              title="Available Prints"
              description="Various sizes of prints available for completing your series collections."
              to="/availableprints"
            />
            <Overview 
              src="https://images.unsplash.com/photo-1592492135673-55966d3b541a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1356&q=80"
              alt="A happy dog painted onto a t-shirt."
              title="T-Shirts"
              description="All original artwork is available on a t-shirt of your choice. Represent!"
              to="/t-shirts"
            />
            <Overview 
              src="https://images.unsplash.com/photo-1599603780100-9a9e42b0489f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
              alt="A beautiful white and black bathroom."
              title="Shower Curtains"
              description="Brighten up your bathroom with a shower curtain from our collection."
              to="/showercurtains"
            />
            <Overview
              src="https://images.unsplash.com/photo-1610220940726-8ce698a585ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              alt="An array of candy skull coffee mugs."
              title="Mugs"
              description="Enjoy your favorite piece of art while you sip your tea or coffee."
              to="/mugs"
            />
            <Overview 
              src="https://images.unsplash.com/photo-1433162653888-a571db5ccccf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
              alt="A small dog wrapped in a flannel blanket sitting outside."
              title="Blankets"
              description="Snuggle up with your favorite painting or simply adorn your couch."
              to="/blankets"
            />      
          </div>
          <Footer />
      </div>
    );
};

export default Home;