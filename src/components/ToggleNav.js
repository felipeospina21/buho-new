import React from "react"
import { RiMenu3Fill } from "react-icons/ri"
import { useDisclosure, Icon, Box } from "@chakra-ui/react"
import DrawerMenu from "./DrawerMenu"

const ToggleNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [placement] = React.useState("right")

  return (
    <>
      <Box w="80%" display="flex" justifyContent="right" alignItems="center">
        <Icon
          as={RiMenu3Fill}
          boxSize="2rem"
          ml="auto"
          mr="0.5rem"
          cursor="pointer"
          onClick={onOpen}
        />
      </Box>

      <DrawerMenu placement={placement} onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export default ToggleNav
