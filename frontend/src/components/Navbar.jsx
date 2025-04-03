import React from 'react'
import { Container, Flex, Text, Link, HStack, Button } from "@chakra-ui/react"
import { CiSquarePlus } from "react-icons/ci"
import { FaMoon, FaSun } from "react-icons/fa"
import { useColorMode } from "@/components/ui/color-mode"

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
      >

        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store</Link>

        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <CiSquarePlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>{colorMode === "light" ? <FaMoon /> : <FaSun />}</Button>
        </HStack>

      </Flex>
    </Container>
  )
}

export default Navbar