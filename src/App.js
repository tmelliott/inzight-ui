import './App.css';
import Header from './components/Header';
import SidePanel from './components/SidePanel';

import 'rsuite/dist/styles/rsuite-default.css';

// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="body__container">
        <SidePanel />
      </div>
      {/* Right panel (graph) */}
      {/* Footer (code, status, etc) */}
    </div>
  );
}

export default App;
