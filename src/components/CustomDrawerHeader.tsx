import {
  Center,
  CloseButton,
  DrawerHeader,
  Image,
  Text
} from "@chakra-ui/react";
import React from "react";

type CustomHeaderProps = {
  imageUrl: string;
  description: string;
  onClick: () => void;
};

const CustomDrawerHeader: React.FC<CustomHeaderProps> = ({
  imageUrl,
  description,
  onClick
}) => {
  return (
    <DrawerHeader>
      <CloseButton onClick={onClick} />
      <Center flexDirection="column">
        <Image
          boxSize="150px"
          src={imageUrl}
          borderRadius="full"
          style={{ alignItems: "center" }}
        />
        <Text textAlign="center">{description}</Text>
      </Center>
    </DrawerHeader>
  );
};

export default CustomDrawerHeader;
