import Header from './Header';
import Nain from './Nain';
import Aside from './Aside';
import Gallery from './Gallery';
import Footer from './Footer';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-wrapper">
        <Aside />
        <div className="main-content">
          <Nain />
          <Gallery />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
