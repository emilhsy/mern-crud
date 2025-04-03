import { Box, Image, Heading, Text, HStack, Button } from '@chakra-ui/react'
import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ProductCard = ({product}) => {
  return (
    <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
        m={2}
    >
        <Image src={ product.image } alt={ product.name } h={48} w='full' objectFit='cover' />
        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                { product.name }
            </Heading>

            <Text fontWeight='bold' fontStyle='xl' mb={4} >
                ${ product.price }
            </Text>

            <HStack spacing={2}>
                <Button bgColor='blue'><FaEdit /></Button>
                <Button bgColor='red'><MdDelete /></Button>
            </HStack>
        </Box>
    </Box>
  )
}

export default ProductCard