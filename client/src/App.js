import { Route } from 'react-router-dom';
import MainPage from './pages/Main.page.jsx';

function App() {
  return (
    <div className="App">
      <Route path='/' component={MainPage} exact />
    </div>
  );
}

export default App;
