import React from "react"
import { Grid, GridItem, Text, Heading, Box, Center } from "@chakra-ui/react"

const HowItWorks = () => {
  return (
    <Box w="100%" bg="brand.orange" pb="1rem">
      <Center
        m={["1rem 0.5rem", "1rem auto"]}
        maxW="800px"
        flexDir="column"
        color="white"
      >
        <Center m="2rem 0">
          <Heading as="h1" size="xl">
            ¿Cómo Funciona?
          </Heading>
        </Center>

        <Grid templateColumns={["0.2fr 2fr", "0.3fr 2fr"]} gap={4}>
          <NumberGridItem number={1} />
          <TextGridItem>Reserva tu kiosco</TextGridItem>

          <NumberGridItem number={2} />
          <TextGridItem>
            Puedes contratar servicio de parrillero especializado o preparar tu
            propio asado
          </TextGridItem>

          <NumberGridItem number={3} />
          <TextGridItem>
            Escoge los combos que deseas para tu asado
          </TextGridItem>

          <NumberGridItem number={4} />
          <TextGridItem>Disfruta con tu familia y amigos !</TextGridItem>

          <GridItem
            colSpan={2}
            ml="2rem"
            mt="0.5rem"
            borderTop="1px solid black"
          >
            <Text fontSize="xs">* Costo parrillero $ 30mil x hora</Text>
            <Text fontSize="xs">
              * Carbón y utencilios para el asado incluidos
            </Text>
            <Text fontSize="xs">
              * No está permitido el ingreso de comida ni bebidas
            </Text>
          </GridItem>
        </Grid>
      </Center>
    </Box>
  )
}

export default HowItWorks

export const NumberGridItem = ({ number }) => (
  <GridItem
    border="1px solid white"
    borderRadius="50%"
    w="50px"
    h="50px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    m="auto"
  >
    <Text margin="auto" fontSize="2xl">
      {number}
    </Text>
  </GridItem>
)

export const TextGridItem = ({ children }) => (
  <GridItem
    display="flex"
    alignItems="center"
    p=" 2px 1px"
    borderTop="1px solid black"
  >
    <Text fontSize={["xl", "2xl"]}>{children}</Text>
  </GridItem>
)
