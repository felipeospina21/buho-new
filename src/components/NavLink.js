import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link, Text } from "@chakra-ui/react"

const NavLink = ({ url, text, onClose }) => {
  return (
    <Link
      as={GatsbyLink}
      to={url}
      onClick={onClose}
      color="black"
      m="0"
      _focus={{ bg: "none" }}
    >
      <Text fontSize="3xl" m="2rem auto">
        {text}
      </Text>
    </Link>
  )
}

export default NavLink
