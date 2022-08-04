import React from "react";
import { Link as RouterLink } from "react-router-dom";
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

const Education = React.forwardRef<null | HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <SectionContainer>
        <SectionTitle>Educations</SectionTitle>
        <SubsectionContainer>
          <SubsectionTitle>National University of Singapore </SubsectionTitle>
          <SubsectionDesc>
            Computer Science degree with a second major in Mathematics
          </SubsectionDesc>
          <SubsectionDate>August 2021 - Present</SubsectionDate>
          <UnorderedList>
            <SubsectionList>
              ASEAN Undergraduate Scholarship Holder
            </SubsectionList>
            <SubsectionList>Current CAP: 5.0/5.0</SubsectionList>
            <SubsectionList>
              {"See the list of modules taken "}
              <Link
                as={RouterLink}
                to="/modules"
                color="#005A9C"
                textDecorationLine="underline"
              >
                here
              </Link>
            </SubsectionList>
          </UnorderedList>
        </SubsectionContainer>
        <SubsectionContainer>
          <SubsectionTitle>Kharisma Bangsa Senior High School</SubsectionTitle>
          <SubsectionDesc>High School Diploma, Natural Sciences</SubsectionDesc>
          <UnorderedList>
            <SubsectionList>
              Awarded full scholarship for achievements in mathematics olympiad
            </SubsectionList>
          </UnorderedList>
        </SubsectionContainer>
      </SectionContainer>
    </div>
  );
});

export default Education;
