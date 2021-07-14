import './styles/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import Terms from './components/Terms';

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <div className="app">
              <Route component={Home} exact path="/" />
              <Route component={ContactPage} path="/contactpage" />
              <Route component={PrivacyPolicy} path="/privacypolicy" />
              <Route component={Terms} path="/terms" />
          </div>
      </BrowserRouter>
  </div>
  );
};

export default App;

