import React from "react";
import { UnorderedList } from "@chakra-ui/react";
import {
  SectionContainer,
  SectionTitle,
  SubsectionContainer,
  SubsectionTitle,
  SubsectionDate,
  SubsectionDesc,
  SubsectionList
} from "../styles/GeneralStyles";

const Experiences = React.forwardRef<null | HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <SectionContainer>
        <SectionTitle>Experiences</SectionTitle>
        <SubsectionContainer>
          <SubsectionTitle>Applied Cryptography Intern</SubsectionTitle>
          <SubsectionDesc>Huawei</SubsectionDesc>
          <SubsectionDate>May - July 2023</SubsectionDate>
          <UnorderedList>
            <SubsectionList>
              Analyzed multiple attacks against RSA cryptosystem with their application to the security of E2EE online storage provider, and researched on remaining vulnerability of the cloud service.
            </SubsectionList>
            <SubsectionList>
              Examined the hybrid key exchange proposal of IKEv2 & TLS 1.3 protocols, and investigated the pros & cons of various key combiner algorithms.
            </SubsectionList>
          </UnorderedList>
        </SubsectionContainer>
        <SubsectionContainer>
          <SubsectionTitle>Undergraduate Teaching Assistant</SubsectionTitle>
          <SubsectionDesc>National University of Singapore</SubsectionDesc>
          <SubsectionDate>August - November 2022</SubsectionDate>
          <UnorderedList>
            <SubsectionList>
              Conducted weekly tutorial and graded students' assignment.
            </SubsectionList>
            <SubsectionList>
              Past Teaching: CS1101S (Programming Methodology)
            </SubsectionList>
          </UnorderedList>
        </SubsectionContainer>
      </SectionContainer>
    </div>
  );
});

export default Experiences;
