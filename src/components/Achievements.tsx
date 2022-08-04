import React from "react"
import { Box, Divider, Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { SectionContainer, SectionTitle, SubsectionContainer, SubsectionList, SubsectionTitle } from "../styles/GeneralStyles";

const Achievements = React.forwardRef<null | HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref}>
            <SectionContainer>
                <SectionTitle>Achievements</SectionTitle>
                <SubsectionContainer>
                    <SubsectionTitle>2022</SubsectionTitle>
                    <UnorderedList>
                        <SubsectionList>Dean's List (AY 21/22 Semester 2)</SubsectionList>
                        <SubsectionList>
                            Top Students for CS2040S (Data Structures and Algorithms)
                        </SubsectionList>
                    </UnorderedList>
                </SubsectionContainer>
                <SubsectionContainer>
                    <SubsectionTitle>2021</SubsectionTitle>
                    <UnorderedList>
                        <SubsectionList>
                            Bronze Medal at the 62nd International Mathematical Olympiad (IMO) 
                            2021, St Petersburg, Russia
                        </SubsectionList>
                        <SubsectionList>
                            Bronze Medal at the Asia Pacific Mathematics Olympiad (APMO) 2021
                        </SubsectionList>
                    </UnorderedList>
                </SubsectionContainer>
                <SubsectionContainer>
                    <SubsectionTitle>2020</SubsectionTitle>
                    <UnorderedList>
                        <SubsectionList>
                            Bronze Medal at the 61st International Mathematical Olympiad (IMO)
                            2020, St Petersburg, Russia
                        </SubsectionList>
                        <SubsectionList>
                            Bronze Medal at the Romanian Master of Mathematics (RMM) 2020,
                            Bucharest, Romania
                        </SubsectionList>
                        <SubsectionList>
                            Bronze Medal at the Asia Pacific Mathematics Olympiad (APMO) 2020
                        </SubsectionList>
                    </UnorderedList>
                </SubsectionContainer>
                <SubsectionContainer>
                    <SubsectionTitle>2019</SubsectionTitle>
                    <UnorderedList>
                        <SubsectionList>
                            Bronze Medal at the 60th International Mathematical Olympiad (IMO)
                            2019, Bath, United Kingdom
                        </SubsectionList>
                        <SubsectionList>
                            Bronze Medal at the Asia Pacific Mathematics Olympiad (APMO) 2019
                        </SubsectionList>
                    </UnorderedList>
                </SubsectionContainer>
            </SectionContainer>
        </div>
    )
});

export default Achievements;