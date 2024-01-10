import api from "../../services/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaArrowLeft, FaSpinner } from "react-icons/fa";
import { BackButton, Container, Owner, Loading } from "./styles";

export default function Repos() {
  const { repo } = useParams();
  const [loading, setLoading] = useState(true);
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);

  const delay = (time) => {
    return new Promise((res) => {
      setTimeout(res, time);
    });
  };

  useEffect(() => {
    async function load() {
      await delay(2000);
      const repoName = decodeURIComponent(repo);
      const [repoData, issuesData] = await Promise.all([
        api.get(`repos/${repoName}`),
        api.get(`repos/${repoName}/issues`, {
          params: {
            state: "open",
            per_page: 5,
          },
        }),
      ]);
      setRepository(repoData?.data);
      setIssues(issuesData?.data);
      setLoading(false);
    }
    load();
  }, [repo]);

  console.log("issues", issues);

  if (loading)
    return (
      <Loading>
        <FaSpinner color="#fff" size={20} />
        Fetching data about repository...
      </Loading>
    );
  else
    return (
      <Container>
        <BackButton to="/">
          <FaArrowLeft color="#000" size={30} />
        </BackButton>
        <Owner>
          <img
            src={repository?.owner?.avatar_url}
            alt={repository?.owner?.login}
          />
          <h1>{repository?.name}</h1>
          <p>{repository?.description}</p>
        </Owner>
      </Container>
    );
}
