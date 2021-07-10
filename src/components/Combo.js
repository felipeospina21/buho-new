import React from "react"
import { Box, VStack, Heading } from "@chakra-ui/react"

const Combo = ({ info: { content, id } }) => {
  return (
    <VStack w="300px" p="1rem" border="1px solid black">
      <Heading as="h3" size="lg">
        Combo {id}
      </Heading>
      <Box>
        {content.map((detail, index) => {
          return (
            <Box key={index}>
              [{detail.quantity}] {detail.product}
            </Box>
          )
        })}
      </Box>
    </VStack>
  )
}

export default Combo
