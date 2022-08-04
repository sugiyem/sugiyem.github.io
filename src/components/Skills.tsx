import React from "react"
import { Box, Heading, ListItem, UnorderedList, Text, Divider } from "@chakra-ui/react";
import { SectionContainer, SectionTitle, SubsectionContainer, SubsectionList, SubsectionTitle } from "../styles/GeneralStyles";

const Skills = React.forwardRef<null | HTMLDivElement>(( props, ref) => {
    return (
        <div ref={ref}>
            <SectionContainer>
                <SectionTitle>Skills</SectionTitle>
                <SubsectionContainer>
                    <SubsectionTitle> Programming Languages</SubsectionTitle>
                    <UnorderedList>
                        <SubsectionList>Java</SubsectionList>
                        <SubsectionList>JavaScript</SubsectionList>
                        <SubsectionList>TypeScript</SubsectionList>
                        <SubsectionList>Python</SubsectionList>
                        <SubsectionList>C++</SubsectionList>
                    </UnorderedList>
                </SubsectionContainer>
                <SubsectionContainer>
                    <SubsectionTitle> Frameworks </SubsectionTitle>
                    <UnorderedList>
                        <SubsectionList>ReactJS</SubsectionList>
                        <SubsectionList>ReactNative</SubsectionList>
                        <SubsectionList>Jest</SubsectionList>
                    </UnorderedList>
                </SubsectionContainer>
                <SubsectionContainer>
                    <SubsectionTitle> Softwares </SubsectionTitle>
                    <UnorderedList>
                        <SubsectionList> Git & GitHub</SubsectionList>
                        <SubsectionList> Firebase </SubsectionList>
                        <SubsectionList> Heroku </SubsectionList>
                    </UnorderedList>
                </SubsectionContainer>
            </SectionContainer>
        </div>
    )
});

export default Skills;