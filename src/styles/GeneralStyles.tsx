import React from "react";
import { Box, Heading, ListItem, Text } from "@chakra-ui/react";

type CustomContainerProps = {
  children: React.ReactNode;
};

export const SectionContainer: React.FC<CustomContainerProps> = ({
  children
}) => {
  return (
    <Box
      borderRadius="md"
      backgroundColor="#B9D9EB"
      alignItems="center"
      padding="20"
      marginY="50px"
    >
      {children}
    </Box>
  );
};

export const SectionTitle: React.FC<CustomContainerProps> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        borderBottomWidth: "2px",
        borderBottomColor: "#0E3386",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "20px"
      }}
    >
      <Heading
        textAlign="center"
        fontFamily="unset"
        fontSize="4xl"
        paddingBottom="15px"
        color="#1F305E"
      >
        {children}
      </Heading>
    </div>
  );
};

export const SubsectionContainer: React.FC<CustomContainerProps> = ({
  children
}) => {
  return (
    <Box marginLeft="20px" marginBottom="20px">
      {children}
    </Box>
  );
};

export const SubsectionTitle: React.FC<CustomContainerProps> = ({
  children
}) => {
  return (
    <Text
      fontSize="2xl"
      fontFamily="heading"
      color="#13274F"
    >{`- ${children}`}</Text>
  );
};

export const SubsectionDesc: React.FC<CustomContainerProps> = ({
  children
}) => {
  return (
    <Text
      fontSize="l"
      fontFamily="inherit"
      color="#012169"
      marginLeft="10px"
      marginY="10px"
    >
      {children}
    </Text>
  );
};

export const SubsectionDate: React.FC<CustomContainerProps> = ({
  children
}) => {
  return (
    <Text
      fontSize="l"
      fontFamily="monospace"
      color="GrayText"
      marginLeft="10px"
      marginY="10px"
    >
      {children}
    </Text>
  );
};

export const SubsectionList: React.FC<CustomContainerProps> = ({
  children
}) => {
  return <ListItem marginLeft="20px">{children}</ListItem>;
};
