import React from "react"
import { AspectRatio, Heading, Center } from "@chakra-ui/react"

const GoogleMap = () => {
  return (
    <>
      <Center m="1rem auto">
        <Heading as="h1" size="xl">
          ¿Cómo Llegar?
        </Heading>
      </Center>
      <AspectRatio
        ratio={[9 / 16, 21 / 9]}
        maxW="1100px"
        maxH="620px"
        m="2rem auto"
        border="4px double lightgray"
        borderRadius="5px"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8539608344795!2d-75.5608571849606!3d6.150306595547045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46831133b1a6af%3A0x609bdb8adec4655d!2sBuho%20Parrilla%20Entre%20Pinos!5e0!3m2!1ses-419!2sco!4v1613179909934!5m2!1ses-419!2sco"
          alt="mapa de cómo llegar a búho"
          title="Mapa"
        />
      </AspectRatio>
    </>
  )
}

export default GoogleMap
