import React from "react";
import { Link, UnorderedList } from "@chakra-ui/react";
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
            Teaching Assistant at National University of Singapore
          </SubsectionTitle>
          <SubsectionDesc>
            Conduct tutorial and grade students' assignment for some modules
            offered by NUS
          </SubsectionDesc>
          <SubsectionDate>August 2022 - Present</SubsectionDate>
          <UnorderedList>
            <SubsectionList>
              {"Tutor for "}
              <Link>CS1101S</Link>
              {", Programming Methodology"}
            </SubsectionList>
          </UnorderedList>
        </SubsectionContainer>
      </SectionContainer>
    </div>
  );
});

export default Experiences;
