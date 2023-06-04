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
          <SubsectionTitle>
            Applied Cryptography Intern at Huawei
          </SubsectionTitle>
          <SubsectionDesc>
          Analyze and improve on attacks against the RSA Cryptosystem, along with their application to the security of end-to-end encrypted cloud storage service. 
          </SubsectionDesc>
          <SubsectionDate>May 2023 - Now</SubsectionDate>
        </SubsectionContainer>
        <SubsectionContainer>
          <SubsectionTitle>
            Teaching Assistant at National University of Singapore
          </SubsectionTitle>
          <SubsectionDesc>
            Conduct weekly tutorial and mark students' assignment
          </SubsectionDesc>
          <SubsectionDate>August - November 2022</SubsectionDate>
          <UnorderedList>
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
