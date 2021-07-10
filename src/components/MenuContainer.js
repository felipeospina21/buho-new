import React from "react"
import CombosContainer from "./CombosContainer"
import { Box } from "@chakra-ui/react"
import MenuIcons from "./MenuIcons"

const MenuContainer = () => {
  return (
    <Box>
      <MenuIcons/>
      <CombosContainer />
    </Box>
  )
}

export default MenuContainer
