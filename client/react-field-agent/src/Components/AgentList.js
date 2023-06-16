import { useState, useEffect } from "react";
import AgentApi from "../Services/AgentApi";

function AgentList() {

  const [agents, setAgents] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    AgentApi.findAllAgents()
      .then((data) => {
        if (response
      })
  })


  return (null



  );
}

export default AgentList;