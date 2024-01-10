import api from "../../services/api";
import { Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from "react-icons/fa";
import { DeleteButton, Container, Form, SubmitButton, List } from "./styles";

const DEDUP_REPO = "These repository already exists";
const INVALID_REPO = "This repo does not exists in Github";
const VOID_REPO = "You need to identify a valid Github repo, not an empty one";

export default function Main() {
  const [newRepo, setNewRepo] = useState("");
  const [loading, setLoading] = useState(false);
  const [repositories, setRepositories] = useState([]);
  const [alertErr, setAlert] = useState(null);

  useEffect(() => {
    const repoStorage = localStorage.getItem("repos");
    if (repoStorage && JSON.parse(repoStorage)?.length > 0) {
      setRepositories(JSON.parse(repoStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("repos", JSON.stringify(repositories));
  }, [repositories]);

  function handleInputChange(e) {
    setAlert(null);
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
        setAlert(null);
        try {
          if (!!newRepo === false) {
            throw new Error(VOID_REPO);
          }
          const response = await api.get(`repos/${newRepo}`);
          const hasRepo = repositories.find((repo) => repo.name === newRepo);
          if (hasRepo) {
            setAlert(true);
            throw Error(DEDUP_REPO);
          }
          const data = {
            name: response.data.full_name,
          };
          setRepositories([...repositories, data]);
          setNewRepo("");
        } catch (error) {
          alert(error?.response?.status === 404 ? INVALID_REPO : error.message);
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
      <Form onSubmit={handleSubmit} error={alertErr ? 1 : 0}>
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
            <Link to={`/repositories/${encodeURIComponent(repo.name)}`}>
              <FaBars size={20} />
            </Link>
          </li>
        ))}
      </List>
    </Container>
  );
}
