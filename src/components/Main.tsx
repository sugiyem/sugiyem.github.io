import React from "react";
import { Box, Image, Heading, Text} from "@chakra-ui/react";

type MainProps = {
    title: string,
    description: string
}

const Main: React.FC<MainProps> = ({ title, description}) => (
    <Box>
        <Image src="/background.jpg" width="100%"/>
        <Heading textAlign="center" margin="15px" fontFamily="inherit" color="#00356B" >{title}</Heading>
        <Text textAlign="center" fontSize="20px" fontFamily="sans-serif" color="#5072A7">{description}</Text>
    </Box>
)

export default Main;