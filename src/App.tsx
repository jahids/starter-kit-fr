import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import UserTable from './Pages/Table/UserTable';
import AddUser from './Pages/AddUser/AddUser';
import EditUser from './Pages/Edituser/EditUser';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/edit/:id" element={<EditUser />} />
        <Route path="/table" element={<UserTable />} />
        <Route path="/adduser" element={<AddUser />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
