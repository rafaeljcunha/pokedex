import React from "react";
import { Container, Message, Description } from "./styles";

export default function ErrorComponent({
  errorMessage: { message, description },
}) {
  return (
    <Container>
      <Message>{message}</Message>
      <Description>{description}</Description>
    </Container>
  );
}
