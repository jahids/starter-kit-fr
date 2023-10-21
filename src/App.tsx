import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Home from './Pages/Home';
import UserTable from './Pages/Table/UserTable';
import AddUser from './Pages/AddUser/AddUser';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/table" element={<UserTable />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
