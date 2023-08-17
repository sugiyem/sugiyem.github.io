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

const Extracurriculars = React.forwardRef<null | HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <SectionContainer>
        <SectionTitle>Extracurriculars</SectionTitle>
        <SubsectionContainer>
          <SubsectionTitle> Backend Developer</SubsectionTitle>
          <SubsectionDesc>NUS Indonesian Students' Association (PINUS)</SubsectionDesc>
          <SubsectionDate>August 2022 - May 2023</SubsectionDate>
          <UnorderedList>
            <SubsectionList> 
              Assisted the backend development of the organization's project using Gin (Golang's HTTP web framework) and PostgreSQL.
            </SubsectionList>
          </UnorderedList>
        </SubsectionContainer>
        <SubsectionContainer>
          <SubsectionTitle>Problem Proposer</SubsectionTitle>
          <SubsectionDesc>Kontes Terbuka Olimpiade Matematika (KTOM)</SubsectionDesc>
          <SubsectionDate>September 2019 - August 2021</SubsectionDate>
          <UnorderedList>
            <SubsectionList>
              Collaborated with other medalists of the Indonesia National Mathematics Olympiad to conduct an open monthly mathematics competition.
            </SubsectionList>
          </UnorderedList>
        </SubsectionContainer>
      </SectionContainer>
    </div>
  );
});

export default Extracurriculars
