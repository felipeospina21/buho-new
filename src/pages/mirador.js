import React, { useState } from "react"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { Box, Text, Heading } from "@chakra-ui/react"
import ImgGrid from "../components/ImgGrid"

const MiradorPage = () => {
  const [miradorImagesList] = useState([
    { src: "s3.jpg", alt: "imagen" },
    { src: "s6.jpg", alt: "imagen" },
    { src: "s5.jpg", alt: "imagen" },
    { src: "s7.jpg", alt: "imagen" },
    { src: "s4.jpg", alt: "imagen" },
    { src: "s9.jpg", alt: "imagen" },
  ])
  return (
    <>
      <SEO title="mirador búho" />
      <Hero text="Mirador Búho" src="s7.jpg" alt="foto del mirador de búho" />
      <Box m="2rem auto" maxW="1000px">
        <Box m={["1.5rem 0.8rem 0 0.8rem"]} flexDir="column">
          <Heading as="h3" size="lg" mb="1rem">
            ¡Estamos al lado de Búho, pero somos otro parche!
          </Heading>

          <Text fontSize={[null, "2xl"]}>
            Cerveza, amigos, cocteles, buena música y la mejor vista de la
            ciudad.
          </Text>
          <Text fontSize={[null, "2xl"]}>
            Nuestro Mirador Búho, es un espacio increible para disfrutar con tus
            amigos y compartir momentos agradables, todo en un lugar mágico,
            inmerso en medio de un bosque.
          </Text>
        </Box>
      </Box>

      <ImgGrid imgList={miradorImagesList} />
    </>
  )
}

export default MiradorPage
