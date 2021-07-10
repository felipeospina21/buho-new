import React from "react"
import { Box, Flex } from "@chakra-ui/react"
import { useBreakpoint } from "gatsby-plugin-breakpoints"
import HeaderLogo from "./HeaderLogo"
import ToggleNav from "./ToggleNav"
import FixedNav from "./FixedNav"

const Header = () => {
  const breakpoints = useBreakpoint()
  return (
    <Box
      as="header"
      background="brand.green"
      h="5rem"
      position="sticky"
      top="0"
      zIndex="30"
      overflow="hidden"
    >
      <Flex as="div" m="0 auto" h="100%" maxW="1800px">
        <HeaderLogo />
        {breakpoints.md ? <ToggleNav /> : <FixedNav />}
      </Flex>
    </Box>
  )
}

export default Header
