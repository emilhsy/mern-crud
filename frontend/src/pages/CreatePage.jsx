import React, { useState } from 'react'
import { Container, Button, VStack, Input, Box, Heading } from "@chakra-ui/react"

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  const handleAddProduct = () => {
    console.log(newProduct);
  };

  return (
    <Container maxW='container.sm' w='full'>
        <VStack spacing={8}>
            <Heading as='h1' size='2xl' textAlign='center' mb={8}>
                Create new product
            </Heading>

            <Box w='full' p={6} rounded='lg' shadow='md'>
                <VStack spacing={4}>
                    <Input 
                        placeholder='Product name'
                        name='name'
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    />
                    <Input 
                        placeholder='Price'
                        name='price'
                        type='number'
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    />
                    <Input 
                        placeholder='Image URL'
                        name='image'
                        value={newProduct.image}
                        onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                    />
                    <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
                        Add product
                    </Button>
                </VStack>
            </Box>
        </VStack>
    </Container>
  )
}

export default CreatePage
