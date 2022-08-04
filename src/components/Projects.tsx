import React from "react"
import { Box, Heading, Image, ListItem, Link, Text, UnorderedList, Divider } from "@chakra-ui/react";
import { SectionContainer, SectionTitle, SubsectionContainer, SubsectionDate, SubsectionDesc, SubsectionList, SubsectionTitle } from "../styles/GeneralStyles";

const Projects = React.forwardRef<null | HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref}>
            <SectionContainer>
                <SectionTitle> Projects</SectionTitle>
                <SubsectionContainer>
                    <SubsectionTitle>Chattoku</SubsectionTitle>
                    <SubsectionDesc>
                        Mobile application built for NUS CP2106 module,
                        Independent Software Development Project
                    </SubsectionDesc>
                    <SubsectionDate>May - July 2022</SubsectionDate>
                    <UnorderedList>
                        <SubsectionList>
                            Functionalities: Anime Database & Recommendation System,
                            Friend System, Forum System,
                            Private & Group Messaging
                        </SubsectionList>
                        <SubsectionList>
                            Tech Stack: JavaScript, Python, ReactNative, Firebase, Jest
                        </SubsectionList>
                        <SubsectionList>
                            {"View the repository "}
                            <Link 
                                href="https://github.com/sugiyem/Chattoku" 
                                isExternal 
                                color="#005A9C"
                                textDecorationLine="underline">
                                here
                            </Link>
                        </SubsectionList>
                    </UnorderedList>
                </SubsectionContainer>
            </SectionContainer>
        </div>
    )
});

export default Projects;