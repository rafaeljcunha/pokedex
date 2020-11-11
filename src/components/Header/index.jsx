import React from "react";
import { Header, Image } from "./styles";
import logo from "../../assets/logo_branco.png";

export default function HeaderComponent() {
  return (
    <Header>
      <Image src={logo} />
    </Header>
  );
}
