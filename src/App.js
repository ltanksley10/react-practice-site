import './styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';
import OriginalArtwork from './components/OriginalArtwork';
import AvailablePrints from './components/AvailablePrints';
import Tshirts from './components/Tshirts';
import ShowerCurtains from './components/ShowerCurtains';
import Mugs from './components/Mugs';
import Blankets from './components/Blankets';

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <div className="app">
              <Route component={Home} exact path="/" />
              <Route component={ContactPage} path="/contactpage" />
              <Route component={PrivacyPolicy} path="/privacypolicy" />
              <Route component={Terms} path="/terms" />
              <Route component={OriginalArtwork} path="/originalartwork" />
              <Route component={AvailablePrints} path="/availableprints" />
              <Route component={Tshirts} path="/t-shirts" />
              <Route component={ShowerCurtains} path="/showercurtains" />
              <Route component={Mugs} path="/mugs" />
              <Route component={Blankets} path="/blankets" />
          </div>
      </BrowserRouter>
  </div>
  );
};

export default App;

