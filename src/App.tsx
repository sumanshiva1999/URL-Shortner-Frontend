
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddShortURL from './components/AddShortURL';
import OpenShortURL from './components/OpenShortURL';

function App() {

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Routes>
        <Route path="/" element={<AddShortURL />} />
        <Route path="/add-short-url" element={<AddShortURL />} />
        <Route path="/open-short-url" element={<OpenShortURL />} />
      </Routes>
    </div>
  )
}

export default App
