import React from "react";
import { Box, Icon, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

type Clickable = {
  onClick: () => void;
};

const Header: React.FC<Clickable> = ({ onClick }) => {
  return (
    <Box
      position="sticky"
      top="0"
      display="flex"
      width="100%"
      height="40px"
      flexDirection="row"
      borderBottomWidth="2px"
      borderBottomColor="#1E2952"
    >
      <Box
        display="flex"
        flex="9"
        backgroundColor="#6082B6"
        borderRightWidth="2px"
        borderRightColor="#1E2952"
        alignItems="center"
      >
        <Text color="whitesmoke" marginLeft="10px">
          Farrel Salim's Portofolio
        </Text>
      </Box>
      <Box
        display="flex"
        flex="1"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#008080"
      >
        <Icon
          as={BsThreeDots}
          onClick={onClick}
          size="20px"
          marginRight="10p"
          color="whitesmoke"
        />
      </Box>
    </Box>
  );
};

export default Header;
