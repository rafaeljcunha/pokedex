import React, { useContext } from "react";
import { PokeProfileContext } from "../../pages/Info/context";
import {
  StatsBaseContainer,
  StatsContainer,
  StatsName,
  StatsValue,
  StatsValueContainer,
  Title,
  Stats,
} from "./styles";

export default function StatsInfo() {
  const { stats } = useContext(PokeProfileContext);
  return (
    <StatsBaseContainer>
      <Title>Base Stats</Title>
      {stats &&
        stats.map(({ base_stat, stat }) => (
          <StatsContainer key={`${Math.random(100, 10000)}-${base_stat}`}>
            <StatsName>{stat.name.toUpperCase()}</StatsName>
            <StatsValueContainer>
              <StatsValue width={base_stat}>
                <Stats>{base_stat}/300</Stats>
              </StatsValue>
            </StatsValueContainer>
          </StatsContainer>
        ))}
    </StatsBaseContainer>
  );
}
