import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Project } from "../Project/Project";

export function Main() {
  return (
    <Container>
      <Hero></Hero>
      <Project></Project>
      <About></About>
    </Container>
  );
}
