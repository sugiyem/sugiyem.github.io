import React from "react";
import { Text, UnorderedList } from "@chakra-ui/react";
import {
  SectionContainer,
  SectionTitle,
  SubsectionContainer,
  SubsectionList,
  SubsectionTitle
} from "../styles/GeneralStyles";

const Skills = React.forwardRef<null | HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <SectionContainer>
        <SectionTitle>Skills</SectionTitle>
        <SubsectionContainer>
          <SubsectionTitle> Programming Languages</SubsectionTitle>
          <Text> Java, C++, Python, JavaScript, TypeScript, SQL</Text>
        </SubsectionContainer>
        <SubsectionContainer>
          <SubsectionTitle> Software & Frameworks </SubsectionTitle>
          <Text>
            {" "}
            Git, GitHub, ReactJS, ReactNative, Jest, PostgreSQL, Flask, Firebase, JUnit
          </Text>
        </SubsectionContainer>
      </SectionContainer>
    </div>
  );
});

export default Skills;
