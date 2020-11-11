import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardProfile from "../../components/CardProfile";
import StatsInfo from "../../components/StatsInfo";
import { Column, Container, Row } from "../../components/Grid";
import { getPokeInfo } from "../../services";
import { PokeProfileContext } from "./context";
import ScrollView from "../../components/ScrollView";

export default function PokeInformations() {
  const [dataProfile, setDataProfile] = useState({});

  const { name } = useParams();

  const getProfile = useCallback(async () => {
    const { data } = await getPokeInfo(name);
    setDataProfile(data);
  }, [name]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <PokeProfileContext.Provider
      value={{
        id: dataProfile.id,
        name,
        types: dataProfile.types,
        stats: dataProfile.stats,
      }}
    >
        <ScrollView>
          <Container>
            <Row marginTop="40px">
              <Column lg={5} md={5} sm={12}>
                <CardProfile />
              </Column>
              <Column lg={7} md={7} sm={12}>
                <StatsInfo />
              </Column>
            </Row>
          </Container>
        </ScrollView>
    </PokeProfileContext.Provider>
  );
}
