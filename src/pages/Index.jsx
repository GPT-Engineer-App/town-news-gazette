import { Container, VStack, Heading, Text, Box, Image, HStack, IconButton, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const articles = [
  {
    id: 1,
    title: "Local Community Garden Flourishes",
    summary: "The community garden in downtown has seen a surge in participation and produce this year.",
    image: "https://images.unsplash.com/photo-1631195414013-85b70ff2c180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBnYXJkZW58ZW58MHx8fHwxNzE1ODI2OTY0fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "New Library Opens in Town",
    summary: "A state-of-the-art library has opened, offering a wide range of books and digital resources.",
    image: "https://images.unsplash.com/photo-1564910443496-5fd2d76b47fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaWJyYXJ5fGVufDB8fHx8MTcxNTgyNjk2NXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "High School Football Team Wins Championship",
    summary: "The local high school football team clinched the state championship in a thrilling game.",
    image: "https://images.unsplash.com/photo-1598881034666-6d3443d4b1bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRlYW18ZW58MHx8fHwxNzE1ODI2OTY1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Local News
        </Heading>
        {articles.map((article) => (
          <Box key={article.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={article.image} alt={article.title} />
            <Box p={6}>
              <Heading as="h2" size="lg" mb={2}>
                {article.title}
              </Heading>
              <Text mb={4}>{article.summary}</Text>
              <Link color="teal.500" href={`/articles/${article.id}`}>
                Read more
              </Link>
            </Box>
          </Box>
        ))}
        <HStack spacing={4} justify="center" mt={8}>
          <IconButton aria-label="Facebook" icon={<FaFacebook />} size="lg" />
          <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
          <IconButton aria-label="Instagram" icon={<FaInstagram />} size="lg" />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
