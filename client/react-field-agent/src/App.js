import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AgentList from "./Components/AgentList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<AgentList />} />
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
