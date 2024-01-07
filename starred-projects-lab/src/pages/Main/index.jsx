import api from "../../services/api";
import { useState, useCallback } from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import { DeleteButton, Container, Form, SubmitButton, List } from "./styles";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);

  function handleInputChange(e) {
    setNewRepo(e.target.value);
  }

  const handleDelete = useCallback(
    (repo) => {
      const find = repositories.filter((r) => r.name !== repo);
      setRepositories(find);
    },
    [repositories]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      async function triggerGithubGetRepo() {
        setLoading(true);
        try {
          const response = await api.get(`repos/${newRepo}`);
          const data = {
            name: response.data.full_name,
          };
          setRepositories([...repositories, data]);
          setNewRepo("");
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
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
        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="white" size={14} />
          ) : (
            <FaPlus color="white" size={14} />
          )}
        </SubmitButton>
      </Form>
      <List>
        {repositories.map((repo) => (
          <li key={repo.name}>
            <span>
              <DeleteButton onClick={() => handleDelete(repo.name)}>
                <FaTrash size={14} />
              </DeleteButton>
              {repo.name}
            </span>
            <a href="">
              <FaBars size={20} />
            </a>
          </li>
        ))}
      </List>
    </Container>
  );
}
