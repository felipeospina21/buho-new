import React from "react"
import { Button, Center, GridItem, Heading } from "@chakra-ui/react"

const Kiosk = ({ kiosk, setBookingKiosk }) => {
  return (
    <GridItem
      key={kiosk.id}
      p={2}
      my={5}
      mx="auto"
      w="200px"
      border="1px solid black"
    >
      <Heading as="h3" size="lg">
        Kiosko # {kiosk.id}
      </Heading>
      <Heading as="h5" size="md" mt={2}>
        Capacidad:
      </Heading>
      <p>{kiosk.capacity} personas</p>
      <Center mt={10}>
        <Button onClick={() => setBookingKiosk(kiosk.id)}>seleccionar</Button>
      </Center>
    </GridItem>
  )
}

export default Kiosk
