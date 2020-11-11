import React, { useContext } from "react";
import { PokeProfileContext } from "../../pages/Info/context";
import { pokeImage } from "../../utils/requestApi";
import { CardProfileContainer, Image, Name, Ability } from "./styles";

export default function CardProfileComponent() {
  const { id, name, types } = useContext(PokeProfileContext);

  return (
    <CardProfileContainer>
      <Image src={`${pokeImage(id)}.png`} />
      <Name>{name.toUpperCase()}</Name>
      {types ? (
        types.map(({ type }) => (
          <Ability key={`${Math.random(100, 10000)}-${type.name}`}>
            {type.name.toUpperCase()}
          </Ability>
        ))
      ) : (
        <Ability />
      )}
    </CardProfileContainer>
  );
}
