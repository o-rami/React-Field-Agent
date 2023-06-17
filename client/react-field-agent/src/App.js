import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AgentList from "./Components/AgentList";
import AgentForm from "./Components/AgentForm";
import ConfirmDeleteAgent from "./Components/ConfirmDeleteAgent";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={<Home />} />
        <Route
          path="/agents"
          element={<AgentList />} />
        <Route
          path="/add"
          element={<AgentForm />} />
        <Route
          path="/agents/edit/:id"
          element={<AgentForm />} />
        <Route
          path="/agents/delete/:id"
          element={<ConfirmDeleteAgent />} />
          <Route
          path="/*"
          element={<NotFound />} />
      </Routes>
        <Footer />
      <Footer />
    </Router>
  );
}

export default App;
