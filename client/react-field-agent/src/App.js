import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import AgentList from "./Components/Agent/AgentList";
import AgentForm from "./Components/Agent/AgentForm";
import ConfirmDeleteAgent from "./Components/Agent/ConfirmDeleteAgent";
import AgencyList from "./Components/Agency/AgencyList";
import AgencyForm from "./Components/Agency/AgencyForm";
import ConfirmDeleteAgency from "./Components/Agency/ConfirmDeleteAgency";
import NotFound from "./NotFound";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />} />
        <Route
          path="/agents"
          element={<AgentList />} />
        <Route
          path="/agents/add"
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
        <Route
          path="/agencies"
          element={<AgencyList />} />
        <Route
          path="/agencies/add"
          element={<AgencyForm />} />
        <Route
          path="/agencies/edit/:id"
          element={<AgencyForm />} />
        <Route
          path="/agencies/delete/:id"
          element={<ConfirmDeleteAgency />} />
      </Routes>
        <Footer />
      <Footer />
    </Router>
  );
}

export default App;
