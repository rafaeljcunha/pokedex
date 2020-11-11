import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AppContext } from "../../pages/Home/context";
import { pokeImage } from "../../utils/requestApi";
import { Column, Row } from "../Grid";
import Button from "../Button";
import Error from "../Error";

import { AlignCenter, CardContainer, Image, Name } from "./styles";
import { useHistory } from "react-router-dom";

export default function CardComponent() {
  const [loading, setLoading] = useState(false);
  const { apiData, setLimit, errorMessage } = useContext(AppContext);

  const history = useHistory();

  const getMoreData = () => {
    setLoading(true);
    setLimit((prev) => prev + 12);
  };

  const changeLoading = useCallback(() => setLoading(false), [setLoading]);

  const getPoke = ({ name }) => {
    history.push(`/poke_info/${name}`);
  };

  useEffect(() => {
    changeLoading();
  }, [apiData, changeLoading]);

  return !errorMessage.error ? (
    <Fragment>
      <Row marginTop="40px">
        {apiData.map(({ name, url }) => {
          const splitId = url
            .split("https://pokeapi.co/api/v2/pokemon/")[1]
            .split("/")[0];
          return (
            <Column lg={2} md={4} sm={6} key={`key-${name}`}>
              <CardContainer onClick={() => getPoke({ name })}>
                <Image src={`${pokeImage(splitId)}.png`} />
                <Name>{name.toUpperCase()}</Name>
              </CardContainer>
            </Column>
          );
        })}
      </Row>
      <Row>
        <AlignCenter>
          <Button disabled={loading} onClick={getMoreData}>
            {loading
              ? "Estamos buscando mais pokémons..."
              : "Quero ver mais pokémons"}
          </Button>
        </AlignCenter>
      </Row>
    </Fragment>
  ) : (
    <Error errorMessage={errorMessage} />
  );
}
