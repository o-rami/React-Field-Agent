import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AgentList from "./Components/AgentList";
import AgentForm from "./Components/AgentForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/agents"
          element={<AgentList />} />
          <Route
          path="/add"
          element={<AgentForm />} />
        {/* <Route
          path="/agents/edit/:id"
          element={<AgentForm />} />
        <Route
          path="/agents/delete/:id"
          element={<DeleteAgent />} />
          <Route
          path="/*"
          element={<NotFound />} />
        <Footer /> */}
      </Routes>
    </Router>
  );
}

export default App;
