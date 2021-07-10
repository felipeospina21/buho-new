import React, { useState } from "react"
import { HStack, Heading, Center } from "@chakra-ui/react"
import Combo from "./Combo"

const CombosContainer = () => {
  const [combosInfo] = useState([
    {
      id: 1,
      content: [
        {
          product: "Chata 130gr",
          quantity: 4,
        },
        {
          product: "Solomito de cerdo 130gr",
          quantity: 4,
        },
        {
          product: "Chorizo Criollo",
          quantity: 4,
        },
        {
          product: "Morcilla",
          quantity: 4,
        },
        {
          product: "Paquete de arepas",
          quantity: 1,
        },
        {
          product: "Chimichurri en aceite",
          quantity: 1,
        },
      ],
    },
    {
      id: 2,
      content: [
        {
          product: "Chata 130gr",
          quantity: 4,
        },
        {
          product: "Solomito de cerdo 130gr",
          quantity: 4,
        },
        {
          product: "Chorizo Criollo",
          quantity: 4,
        },
        {
          product: "Morcilla",
          quantity: 4,
        },
        {
          product: "Paquete de arepas",
          quantity: 1,
        },
        {
          product: "Chimichurri en aceite",
          quantity: 1,
        },
      ],
    },
  ])

  return (
    <>
      <Center m="2rem">
        <Heading as="h2" size="xl">
          Combos Parrilleros
        </Heading>
      </Center>
      <HStack>
        {combosInfo.map(combo => {
          return <Combo key={combo.id} info={combo} />
        })}
      </HStack>
    </>
  )
}

export default CombosContainer
