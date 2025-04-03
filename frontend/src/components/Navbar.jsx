import React from 'react'
import { Container, Flex, Text, HStack, Button } from "@chakra-ui/react"
import { CiSquarePlus } from "react-icons/ci"
import { FaMoon, FaSun } from "react-icons/fa"
import { useColorMode } from "@/components/ui/color-mode"
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW='x1' px={4}>
      <Flex
        h={16}
        alignItems='center'
        justifyContent='space-between'
      >

        <Text
          textStyle='lg'
          fontWeight='bold'
          textTransform='uppercase'
        >
          <Link to={"/"}>Product Store</Link>

        </Text>

        <HStack>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>{colorMode === "light" ? <FaMoon /> : <FaSun />}</Button>
        </HStack>

      </Flex>
    </Container>
  )
}

export default Navbar