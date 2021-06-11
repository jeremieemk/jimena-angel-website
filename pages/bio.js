import React from "react";
import styled from "styled-components";
import Layout from "./components/Layout";

function Bio(props) {
  return (
    <Layout title={"About"}>
      <BioContainer>
        <img src="/img/jimena-camera.jpg" alt="jimena" />
        <p>
          After a musical career spanning over two decades as a pop singer in
          her native Colombia, Mexico and the USA, Jimena picked up the call of
          the Caribbean wild. She left the big city behind and settled in
          blissful Magdalena, Colombia. There she built a makeshift studio with
          an aged laptop, a microphone, an electric guitar and the jungle for a
          recording booth. The slow pace and luxuriant natural surroundings
          renewed her creativity and inspired her last EP, Aire.
        </p>
        <p>
          Showcasing the cultural hybridization of afro-latino rhythms, imbued
          with electronic sounds and soulful chords, this EP marks the start of
          the Colombian artist’s collaboration with French label, Elis Records.
          Jimena Angel's seasoned experience as a vocalist, guitarist, DJ and
          producer brings depth to this collection of songs celebrating the
          smaller things in life and the enchanting beauty of nature.
        </p>
        <p>
          Recorded during the lockdown between Colombia, Lisboa, Quito, Paris,
          Berlin and Amsterdam, Jimena called on the talented Berlin-based
          saxophonist and producer, Ben Abarbanel-Wolff (Pat Thomas, Ebo Taylor,
          Guts), the French keys wizard and broken beat producer, Nikitch, the
          Lisbon-based Dutch musician, Collignon (ex Skip & Die) as well as the
          Ecuadorian producer, Joaquin Cornejo. This collaboration was
          orchestrated under the artistic direction and electronic touch of
          French producer, iZem.
        </p>
        <p>
          Jimena has been active since 1995, when she formed the band “Pepa
          Fresa”, which quickly found success with the release of a one-off
          album on Sony Music Colombia. The short-lived act split in 1998 but
          those memorable three years were enough to establish Jimena as one of
          the first female vocalists of the “rock nacional” scene.
        </p>
        <p>
          Shortly after, drawn to Colombian rhythms and electronic beats, she
          became part of the iconic "Sidestepper" band with which she toured
          extensively around Europe, sharing the stage with the likes of
          Morcheeba or Celia Cruz.
        </p>
        <p>
          In 2009 she released a first solo album “Dia Azul” and was nominated
          for a Latin Grammy in the "Best Female Vocal Album of the Year"
          category. Experimenting more and more with electronic / organic
          tropical sounds, she released a second album “Todo Reverdece” in 2014
          and took part in Lulacruza and Vincent Moon’s experimental visual
          album “Esperando el Tsunami”.
        </p>
        <p>
          In 2018 she collaborated with Brain Damage, adding a latin flavour to
          the French dub wizard's productions on “Ya no mas”. Soon after, she
          put out “Mani” and “Ciruela”, two singles produced by Grammy-award
          winning musician Christian Castagno, and toured Europe as a solo act
          including a performance at the Glastonbury festival in 2019.
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
