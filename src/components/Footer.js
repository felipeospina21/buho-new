import React from "react"
import ContactInfo from "./ContactInfo"
import OpenHours from "./OpenHours"
import Social from "./Social"
import { Grid, Box, Center } from "@chakra-ui/react"

const Footer = () => {
  return (
    <>
      <Box
        as="footer"
        background="brand.green"
        fontSize="sm"
        p={["0.5rem", "1rem"]}
      >
        <Box maxW="500px" m="auto">
          <Grid templateColumns="1fr 0.5fr" gap={1}>
            <OpenHours />
            <Social />
          </Grid>
          <ContactInfo />
        </Box>
      </Box>
      <Center fontSize="xs" m="0.5rem" >
      Creado por Felipe Ospina
      </Center>
    </>
  )
}

export default Footer
