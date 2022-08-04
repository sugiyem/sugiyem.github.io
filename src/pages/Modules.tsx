import React from "react";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  UnorderedList,
  Stack
} from "@chakra-ui/react";
import CustomDrawerHeader from "../components/CustomDrawerHeader";
import Header from "../components/Header";
import Main from "../components/Main";
import {
  SectionContainer,
  SectionTitle,
  SubsectionContainer,
  SubsectionDate,
  SubsectionList
} from "../styles/GeneralStyles";

const Modules: React.FC = () => {
  const firstSemRef = React.useRef<null | HTMLDivElement>(null);
  const secondSemRef = React.useRef<null | HTMLDivElement>(null);
  const thirdSemRef = React.useRef<null | HTMLDivElement>(null);

  const [isDrawerOpen, setIsDrawerOpen] = React.useState<boolean>(false);

  function goToSelectedRef(
    selectedRef: React.MutableRefObject<null | HTMLDivElement>
  ): void {
    selectedRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  function openDrawer(): void {
    setIsDrawerOpen(true);
  }

  function closeDrawer(): void {
    setIsDrawerOpen(false);
  }

  const Content: React.FC = () => (
    <Stack>
      <Button onClick={() => goToSelectedRef(firstSemRef)}>
        First Semester
      </Button>
      <Button onClick={() => goToSelectedRef(secondSemRef)}>
        Second Semester
      </Button>
      <Button onClick={() => goToSelectedRef(thirdSemRef)}>
        Third Semester
      </Button>
    </Stack>
  );

  const CustomDrawer: React.FC = () => (
    <Drawer isOpen={isDrawerOpen} placement="right" onClose={closeDrawer}>
      <DrawerOverlay>
        <DrawerContent>
          <CustomDrawerHeader
            imageUrl="/study.jpg"
            description="NUS Modules"
            onClick={closeDrawer}
          />
          <DrawerBody>
            <Content />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );

  return (
    <div>
      <Header onClick={openDrawer} />
      <CustomDrawer />

      <Main
        title="NUS Modules"
        description="This is the lists of all modules that I've taken, 
                    or currently taking at the National University of Singapore (NUS)"
      />

      <div ref={firstSemRef}>
        <SectionContainer>
          <SectionTitle>First Semester Modules</SectionTitle>
          <SubsectionContainer>
            <SubsectionDate>August - Dec 2021</SubsectionDate>
            <UnorderedList>
              <SubsectionList>
                CS1101S, Programming Methodology (A+)
              </SubsectionList>
              <SubsectionList>CS1231S, Discrete Structures (A+)</SubsectionList>
              <SubsectionList>
                MA1521, Calculus for Computing (A+)
              </SubsectionList>
              <SubsectionList>
                GEC1030, Metropolis: The City in World History (S, originally
                B+)
              </SubsectionList>
              <SubsectionList>
                IS1103, Ethics in Computing (S, originally B)
              </SubsectionList>
              <SubsectionList>CFG1002, Career Catalyst (S)</SubsectionList>
            </UnorderedList>
          </SubsectionContainer>
        </SectionContainer>
      </div>

      <div ref={secondSemRef}>
        <SectionContainer>
          <SectionTitle>Second Semester Modules</SectionTitle>
          <SubsectionContainer>
            <SubsectionDate>January - May 2022</SubsectionDate>
            <UnorderedList>
              <SubsectionList>
                CS2030S, Programming Methodology II (A+)
              </SubsectionList>
              <SubsectionList>
                CS2040S, Data Structures and Algorithms (A+)
              </SubsectionList>
              <SubsectionList>MA2001, Linear Algebra I (A+)</SubsectionList>
              <SubsectionList>
                MA2108, Mathematical Analysis I (A+)
              </SubsectionList>
              <SubsectionList>
                GESS1005, South Asia in Singapore (A)
              </SubsectionList>
              <SubsectionList>
                GEA1000, Quantitative Reasoning (S, originally B+)
              </SubsectionList>
              <SubsectionList>
                ES1103, English for Academic Purposes (S, originally B+)
              </SubsectionList>
            </UnorderedList>
          </SubsectionContainer>
        </SectionContainer>
      </div>

      <div ref={thirdSemRef}>
        <SectionContainer>
          <SectionTitle>Third Semester Modules (Ongoing)</SectionTitle>
          <SubsectionContainer>
            <SubsectionDate>August 2022 - Present</SubsectionDate>
            <UnorderedList>
              <SubsectionList>CS2100, Computer Organization</SubsectionList>
              <SubsectionList>
                CS2101, Effective Communication for Computing Professionals
              </SubsectionList>
              <SubsectionList>CS2102, Database System</SubsectionList>
              <SubsectionList>CS2103T, Software Engineering</SubsectionList>
              <SubsectionList>MA3205, Set Theory</SubsectionList>
              <SubsectionList>ST2131, Probability</SubsectionList>
            </UnorderedList>
          </SubsectionContainer>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Modules;
