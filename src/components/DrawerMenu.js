import React from "react"
import NavLinks from "./NavLinks"

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react"

const DrawerMenu = ({ placement, onClose, isOpen }) => {
  return (
    <Drawer placement={placement} onClose={onClose} isOpen={isOpen} size="sm">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">BÚHO</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <NavLinks onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

export default DrawerMenu
