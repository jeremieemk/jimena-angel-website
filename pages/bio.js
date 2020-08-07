import React from "react";
import styled from "styled-components";
import Layout from "./components/Layout";

function Bio(props) {
  return (
    <Layout title={"About"}>
      <BioContainer>
        <img src="/img/jimena-camera.jpg" alt="jimena" />
        <p>
          Jimena Angel’s tropical pop, invariably imbued with soulful electronic
          and Afro-Latin rhythms, shows she is as versatile as inventive. No
          wonder that, with a musical career spanning over two decades as a pop
          rock singer in her native Colombia, Mexico and the USA, the vocalist,
          guitar player and songwriter from Bogota didn’t flinch when, a few
          years ago, she picked up the call of the caribbean wild. Indeed she
          readily decided to leave the city behind, slow down and settle in
          blissful Magdalena, Colombia. There she reconnected with the serenity
          and the simplicity of a lush and pristine nature, opening the way for
          her untamed authentic self to shine, unleashing her creativity once
          more.
        </p>
        <p>
          It all started in 1995 when she formed the band “Pepa Fresa” which
          quickly found success with the release of a one-off album on Sony
          Music Colombia. The short-lived act split in 1998 but those memorable
          three years were enough to establish Jimena as one of the pioneers of
          the “rock nacional” scene. Yet, drawn to Colombian rhythms and
          electronic beats, she became part of the iconic "Sidestepper" with
          which she toured extensively around Europe, sharing the stage with the
          likes of Morcheeba or Celia Cruz. In 2009 she released a first solo
          album “Dia Azul” and was nominated for a Latin Grammy in the "Best
          Female Vocal Album of the Year" category. Experimenting more and more
          with genres and styles she released a second album “Todo Reverdece” in
          2014 and took part in Lulacruza and Vincent Moon’s experimental visual
          album “Esperando el Tsunami”. In 2018 she collaborated with Brain
          Damage, adding a latin flavor to the French dub wizard's productions
          on “Ya no mas”. Soon after, she put out “Mani” and “Ciruela”, two
          singles produced by Grammy-award winning musician Christian Castagno,
          and toured Europe as a solo act including a performance at the
          Glastonbury festival in 2019.{" "}
        </p>
        <p>
          On her forthcoming EP “Aire” (september 2020), Jimena takes a further
          step into her musical exploration. In collaboration with French
          producer iZem, she was able to flirt with new sound inflections
          bringing on board jazz remarkable beatmaker Nikitch and luminous sax
          player Ben Abarbanel-Wolff who brilliantly produced albums of Ebo
          Taylor, Pat Thomas or Guts. Additionally she entrusted gifted
          Ecuadorian DJ Joaquin Cornejo to bring an Andean twist to the EP with
          an hypnotic edit of Llamameya.
        </p>
      </BioContainer>
    </Layout>
  );
}

const BioContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  font-family: apercu;
  line-height: 1.5;
  padding-bottom: 2rem;
  img {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export default Bio;
