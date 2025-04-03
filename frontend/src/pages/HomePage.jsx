import React, { useEffect } from 'react'
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard'

const HomePage = () => {

  const { fetchProducts, products } = useProductStore();
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("Products:", products);

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text textStyle='xl' fontWeight='bold' textAlign='center'>
          Current products
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w='full'>
          {products.map((product) => {
            return <ProductCard key={product._id} product={product} />
          })}
        </SimpleGrid>

        <Text textStyle='md' textAlign='center' color='gray.500'>
          No products found {':( '}
          <Link to={"/create"}>
            <Text as='span' color='blue.500' _hover={{ textDecoration: 'underline' }} fontWeight='bold'>
              Create one
            </Text>
          </Link>
        </Text>

      </VStack>
    </Container>
  )
}

export default HomePage