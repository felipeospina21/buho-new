import React from "react"
import NavLinks from './NavLinks'
import { HStack } from "@chakra-ui/react"

const FixedNav = () => {
  return (
    <HStack w="100%" spacing="5rem" justifyContent="center">
      <NavLinks/>
    </HStack>
  )
}

export default FixedNav
