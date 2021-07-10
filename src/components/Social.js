import React from "react"
import { Center, Icon, Link, GridItem } from "@chakra-ui/react"
import { FaInstagram, FaFacebook } from "react-icons/fa"

const Social = () => {
  return (
    <GridItem>
      <Center h="100%">
        <Link href="https://www.instagram.com/buhoentrepinos/" isExternal>
          <Icon as={FaInstagram} boxSize="2rem" mx="1rem" />
        </Link>
        <Link href="https://www.facebook.com/buhoentrepinos/" isExternal>
          <Icon as={FaFacebook} boxSize="2rem" mx="1rem" />
        </Link>
      </Center>
    </GridItem>
  )
}

export default Social
