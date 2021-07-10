import React from "react"
import { Text, GridItem } from "@chakra-ui/react"

const OpenHours = () => {
  return (
    <GridItem>
      <Text fontWeight="bold">Horario</Text>
      <Text>Jueves a Sábados: 12pm - 12am</Text>
      <Text>Domingos: 12pm - 8pm</Text>
      <Text>Lunes Festivos: 12pm - 8pm</Text>
    </GridItem>
  )
}

export default OpenHours
