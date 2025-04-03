import { Box, Image, Heading, Text, HStack, Button, Dialog, Portal,  VStack, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from '../store/product';
import { Toaster, toaster } from "@/components/ui/toaster"

const ProductCard = ({product}) => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [ updatedProduct, setUpdatedProduct ] = useState(product);
    const { deleteProduct, updateProduct } = useProductStore();
    const handleDeleteProduct = async(pid) => {
        const { success, message } = await deleteProduct(pid)
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
    };

    const handleUpdateProduct = async(pid, updatedProduct) => {
        const { success, message } = await updateProduct(pid, updatedProduct);
        setIsDialogOpen(false);
        if(!success) {
            toaster.create({
                title: "Error",
                description: message,
                type: "error",
            })
        } else {
            toaster.create({
                title: "Success",
                description: "Product updated successfully",
                type: "success",
            })
        }
    }

  return (
    <Box
        shadow='lg'
        rounded='lg'
        overflow='hidden'
        transition='all 0.3s'
        _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
        m={2}
    >
        <Toaster />
        <Image src={ product.image } alt={ product.name } h={48} w='full' objectFit='cover' />
        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                { product.name }
            </Heading>

            <Text fontWeight='bold' fontStyle='xl' mb={4} >
                ${ product.price }
            </Text>

            <HStack spacing={2}>
                <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen} size="cover" motionPreset="slide-in-bottom">
                    <Dialog.Trigger asChild>
                        <Button bgColor='blue' color='white' onClick={() => setIsDialogOpen(true)}><FaEdit /></Button>
                    </Dialog.Trigger>
                    <Portal>
                        <Dialog.Positioner>
                            <Dialog.Content>
                                <Dialog.Header>
                                    <Dialog.Title>Update product</Dialog.Title>
                                </Dialog.Header>
                                <Dialog.Body>
                                    <VStack spacing={4}>
                                        <Input
                                            placeholder='Product Name'
                                            name='name'
                                            value={updatedProduct.name}
                                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                                        />
                                        <Input
                                            placeholder='Price'
                                            name='price'
                                            type='number'
                                            value={updatedProduct.price}
                                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                                        />
                                        <Input
                                            placeholder='Image URL'
                                            name='image'
                                            value={updatedProduct.image}
                                            onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
                                        />
                                    </VStack>
                                </Dialog.Body>
                                <Dialog.Footer>
                                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                                    <Button bgColor='blue' color='white' onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</Button>
                                </Dialog.Footer>
                            </Dialog.Content>
                        </Dialog.Positioner>
                    </Portal>
                </Dialog.Root>
                <Button bgColor='red' color='white' onClick={() => handleDeleteProduct(product._id)}><MdDelete /></Button>
            </HStack>
        </Box>
    </Box>

  )
}

export default ProductCard