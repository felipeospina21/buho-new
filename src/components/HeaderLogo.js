import React from "react"
import { Icon, Link } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import Logo from "../assets/buho-logo-1.svg"

const HeaderLogo = () => {
  return (
    <Link as={GatsbyLink} to="/" _focus={{ bg: "none" }}>
      <Icon as={Logo} w="70px" h="65px" mt="0.5rem" ml="0.5rem" />
    </Link>
  )
}

export default HeaderLogo
