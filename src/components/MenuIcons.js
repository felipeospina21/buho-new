import React from "react"
import { Wrap, WrapItem, Center, Container, Icon } from "@chakra-ui/react"

import { GiSteak, GiCupcake } from "react-icons/gi"
import { BiDrink } from "react-icons/bi"
import { FaMugHot, FaHamburger } from "react-icons/fa"
import { BiBox } from "react-icons/bi"

const MenuIcons = () => {
  const icons = [BiBox, GiSteak, FaHamburger, GiCupcake, BiDrink, FaMugHot]

  return (
    <Center my="4rem" mx={["0", "1rem", "3rem", "auto"]} maxW="950px">
      <Wrap>
        {icons.map(icon => {
          return (
            <WrapItem key={icon} m="2rem">
              <Icon boxSize="5rem" as={icon} />
            </WrapItem>
          )
        })}
      </Wrap>
    </Center>
  )
}

export default MenuIcons
