import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import AgentList from "./Components/AgentList";
import AgentForm from "./Components/AgentForm";







function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/about"
          element={<About />} />
        <Route
          path="/"
          element={<Home />} />
        <Route
          path="/agents"
          element={<AgentList />} />
        <Route
          path="/agents/edit/:id"
          element={<AgentForm />} />
        <Route
          path="/agents/delete/:id"
          element={<DeleteAgent />} />
          <Route
          path="/*"
          element={<NotFound />} />
        <Footer />
      </Routes>
    </Router>
  );
}

export default App;
