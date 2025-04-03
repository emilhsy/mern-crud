import React, { useState } from 'react'
import { Container, Button, VStack, Input, Box, Heading } from "@chakra-ui/react"
import { useProductStore } from '../store/product';
import { Toaster, toaster } from "@/components/ui/toaster"

const CreatePage = () => {
    
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: ""
  });

  const {createProduct} = useProductStore()

  const handleAddProduct = async() => {
    const { success, message } = await createProduct(newProduct)
    if(!success) {
        toaster.create({
            title: "Error",
            description: message,
            type: "error",
        })
    } else {
        toaster.create({
            title: "Success",
            description: message,
            type: "success",
        })
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxW='container.sm' w='full'>
        <Toaster />
        <VStack spacing={8}>
            <Heading as='h1' size='xl' textAlign='center' mt={8} fontWeight='bold'>
                Create new product
            </Heading>

            <Box maxW='xl' w='full' p={2} rounded='lg' shadow='md'>
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
                    <Button bgColor='blue.500' color='white' onClick={handleAddProduct} w='full'>
                        Add product
                    </Button>
                </VStack>
            </Box>
        </VStack>
    </Container>
  )
}

export default CreatePage
