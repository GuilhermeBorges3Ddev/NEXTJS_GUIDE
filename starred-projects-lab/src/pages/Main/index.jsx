import api from "../../services/api";
import { useState, useCallback } from "react";
import { FaGithub, FaPlus } from "react-icons/fa";
import { Container, Form, SubmitButton } from "./styles";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [repositories, setRepositories] = useState([]);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      async function triggerGithubGetRepo() {
        const response = await api.get(`repos/${newRepo}`);
        const data = {
          name: response.data.full_name,
        };
        setRepositories([...repositories, data]);
        setNewRepo("");
      }
      triggerGithubGetRepo();
    },
    [newRepo, repositories]
  );

  return (
    <Container>
      <h1>
        <FaGithub />
        My repositories:
      </h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newRepo}
          onChange={handleInputChange}
          placeholder="Add your gisted repos..."
        />
        <SubmitButton>
          <FaPlus color="white" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
