import { Code, Link, Text, VStack } from "@chakra-ui/react";
import { Logo } from "../Logo";

export default function Home(){
    return (
        <>
        <Text>Ini dari home</Text>
        <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </>
    )
}