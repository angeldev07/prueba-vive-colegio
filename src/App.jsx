import {BrowserRouter, Routes, Route} from 'react-router-dom';
import OpenSection from './components/OpenSection';
import Layout from './layout/Layout';
import Algo from './paginas/Algo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="estudiante" element={<OpenSection/>}>
            <Route path='algo' element={<Algo/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
