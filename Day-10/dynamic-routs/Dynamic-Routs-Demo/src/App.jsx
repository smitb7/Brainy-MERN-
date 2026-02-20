import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Nopage from "./pages/Nopage";
import Contacts from "./pages/Contacts";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="nopage" element={<Nopage />} />
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
  );
};

export default App;