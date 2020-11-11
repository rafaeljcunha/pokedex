import React, { useCallback, useEffect, useState } from "react";
import CardComponent from "../../components/Card";
import { Container } from "../../components/Grid";
import { getListData } from "../../services";
import ScrollView from "../../components/ScrollView";
import { AppContext } from "./context";

function App() {
  const [apiData, setApiData] = useState([]);
  const [limit, setLimit] = useState(12);
  const [errorMessage, setErrorMessage] = useState({
    error: false,
    message: "",
    description: "",
  });

  const fetchData = useCallback(async () => {
    try {
      const {
        data: { results },
      } = await getListData({ offset: 0, limit });
      if (results && results.length > 0) {
        setApiData(results);
      } else {
        setApiData([]);
        setErrorMessage({
          error: true,
          message: "Ops... Não conseguimos buscar os pokemons :(",
          description: "Por favor, atualize a página novamente.",
        });
      }
    } catch (error) {
      setApiData([]);
      setErrorMessage({
        error: true,
        message: "Ops... Não conseguimos buscar os pokemons :(",
        description: "Por favor, atualize a página novamente.",
      });
    }
  }, [limit]);

  useEffect(() => {
    fetchData();
  }, [limit, fetchData]);

  return (
    <AppContext.Provider value={{ apiData, setLimit, errorMessage }}>
      <ScrollView>
        <Container>
          <CardComponent />
        </Container>
      </ScrollView>
    </AppContext.Provider>
  );
}

export default App;
