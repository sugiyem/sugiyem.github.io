import React from "react";
import { Link, UnorderedList } from "@chakra-ui/react";
import {
  SectionContainer,
  SectionTitle,
  SubsectionContainer,
  SubsectionDate,
  SubsectionDesc,
  SubsectionList,
  SubsectionTitle
} from "../styles/GeneralStyles";

const Projects = React.forwardRef<null | HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <SectionContainer>
        <SectionTitle> Projects</SectionTitle>
        <SubsectionContainer>
          <SubsectionTitle>PleaseHireUs</SubsectionTitle>
          <SubsectionDesc>
            Desktop application to help School of Computing students at NUS manage their internship applications, built as a part of Team Project for NUS CS2103T (Software Engineering) module
          </SubsectionDesc>
          <SubsectionDate>September - November 2022</SubsectionDate>
          <UnorderedList>
            <SubsectionList>
              Tech Stack: Java, JavaFX, JUnit, TestFX
            </SubsectionList>
            <SubsectionList>
              {"View the repository "}
              <Link
                href="https://github.com/AY2223S1-CS2103T-W17-4/tp"
                isExternal
                color="#005A9C"
                textDecorationLine="underline"
              >
                here
              </Link>
            </SubsectionList>
          </UnorderedList>
        </SubsectionContainer>
        <SubsectionContainer>
          <SubsectionTitle>Yem Chatbot</SubsectionTitle>
          <SubsectionDesc>
          Desktop chatbot application for managing tasks, built as a part of Individual Project for NUS CS2103T (Software Engineering) module</SubsectionDesc>
          <SubsectionDate>August - September 2022</SubsectionDate>
          <UnorderedList>
            <SubsectionList>
              Tech Stack: Java, JavaFX, JUnit
            </SubsectionList>
            <SubsectionList>
              {"View the repository "}
              <Link
                href="https://github.com/sugiyem/ip"
                isExternal
                color="#005A9C"
                textDecorationLine="underline"
              >
                here
              </Link>
            </SubsectionList>
          </UnorderedList>
        </SubsectionContainer>
        <SubsectionContainer>
          <SubsectionTitle>Chattoku</SubsectionTitle>
          <SubsectionDesc>
            Mobile forum application with a built-in recommendation system, created for NUS CP2106 (Independent Software Development Project) module
          </SubsectionDesc>
          <SubsectionDate>May - July 2022</SubsectionDate>
          <UnorderedList>
            <SubsectionList>
              Tech Stack: JavaScript, Python, ReactNative, Firebase, Jest, Flask
            </SubsectionList>
            <SubsectionList>
              {"View the repository "}
              <Link
                href="https://github.com/sugiyem/Chattoku"
                isExternal
                color="#005A9C"
                textDecorationLine="underline"
              >
                here
              </Link>
            </SubsectionList>
          </UnorderedList>
        </SubsectionContainer>
      </SectionContainer>
    </div>
  );
});

export default Projects;
