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
  SubsectionDesc,
  SubsectionList
} from "../styles/GeneralStyles";

const Modules: React.FC = () => {
  const firstSemRef = React.useRef<null | HTMLDivElement>(null);
  const secondSemRef = React.useRef<null | HTMLDivElement>(null);
  const thirdSemRef = React.useRef<null | HTMLDivElement>(null);
  const fourthSemRef = React.useRef<null | HTMLDivElement>(null);
  const fifthSemRef = React.useRef<null | HTMLDivElement>(null);

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
      <Button onClick = {() => goToSelectedRef(fourthSemRef)}>
        Fourth Semester
      </Button>
      <Button onClick={() => goToSelectedRef(fifthSemRef)}>
        Fifth Semester
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
        title="NUS Courses"
        description="This is the lists of all courses that I've taken, 
                    or currently taking at the National University of Singapore (NUS)"
      />

      <div ref={firstSemRef}>
        <SectionContainer>
          <SectionTitle>First Semester Courses</SectionTitle>
          <SubsectionContainer>
            <SubsectionDesc>Semester GPA: 5.0/5.0</SubsectionDesc>
            <SubsectionDate>August - December 2021</SubsectionDate>
            <UnorderedList>
              <SubsectionList>
                CS1101S, Programming Methodology (A+)
              </SubsectionList>
              <SubsectionList>CS1231S, Discrete Structures (A+)</SubsectionList>
              <SubsectionList>
                MA1521, Calculus for Computing (A+)
              </SubsectionList>
              <SubsectionList>
                GEC1030, Metropolis: The City in World History (S)
              </SubsectionList>
              <SubsectionList>IS1103, Ethics in Computing (S)</SubsectionList>
              <SubsectionList>CFG1002, Career Catalyst (CS)</SubsectionList>
            </UnorderedList>
          </SubsectionContainer>
        </SectionContainer>
      </div>

      <div ref={secondSemRef}>
        <SectionContainer>
          <SectionTitle>Second Semester Courses</SectionTitle>
          <SubsectionContainer>
            <SubsectionDesc>Semester GPA: 5.0/5.0</SubsectionDesc>
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
                GEA1000, Quantitative Reasoning (S)
              </SubsectionList>
              <SubsectionList>
                ES1103, English for Academic Purposes (S)
              </SubsectionList>
            </UnorderedList>
          </SubsectionContainer>
        </SectionContainer>
      </div>

      <div ref={thirdSemRef}>
        <SectionContainer>
          <SectionTitle>Third Semester Courses</SectionTitle>
          <SubsectionContainer>
            <SubsectionDesc>Semester GPA: 4.9/5.0</SubsectionDesc>
            <SubsectionDate>August - December 2022</SubsectionDate>
            <UnorderedList>
              <SubsectionList>CS2100, Computer Organization (A)</SubsectionList>
              <SubsectionList>
                CS2101, Effective Communication for Computing Professionals (S)
              </SubsectionList>
              <SubsectionList>CS2102, Database System (A-)</SubsectionList>
              <SubsectionList>CS2103T, Software Engineering (A)</SubsectionList>
              <SubsectionList>MA3205, Set Theory (A)</SubsectionList>
              <SubsectionList>ST2131, Probability (A)</SubsectionList>
            </UnorderedList>
          </SubsectionContainer>
        </SectionContainer>
      </div>

      <div ref={fourthSemRef}>
        <SectionContainer>
          <SectionTitle>Fourth Semester Courses</SectionTitle>
          <SubsectionContainer>
            <SubsectionDesc>Semester GPA: 4.86/5.0</SubsectionDesc>
            <SubsectionDate>January - May 2023</SubsectionDate>
            <UnorderedList>
              <SubsectionList>CS2109S, Introduction to AI and Machine Learning (A-)</SubsectionList>
              <SubsectionList>CS3230, Design and Analysis of Algorithms (A+)</SubsectionList>
              <SubsectionList>CS3233, Competitive Programming (A)</SubsectionList>
              <SubsectionList>CS3236, Introduction to Information Theory (A)</SubsectionList>
              <SubsectionList>MA2202, Algebra I (A+)</SubsectionList>
              <SubsectionList>MA3252, Linear and Network Optimization (A-)</SubsectionList>
              <SubsectionList>DSA2102, Numerical Analysis (A+)</SubsectionList>
            </UnorderedList>
          </SubsectionContainer>
        </SectionContainer>
      </div>

      <div ref={fifthSemRef}>
        <SectionContainer>
          <SectionTitle>Fifth Semester Courses</SectionTitle>
          <SubsectionContainer>
            <SubsectionDesc>August 2023 - Now</SubsectionDesc>
            <UnorderedList>
              <SubsectionList>CS2106, Introduction to Operating Systems</SubsectionList>
              <SubsectionList>CS3210, Parallel Computing</SubsectionList>
              <SubsectionList>CS3264, Foundation of Machine Learning</SubsectionList>
              <SubsectionList>CS4261, Algorithmic Mechanism Design</SubsectionList>
              <SubsectionList>MA2104, Multivariable Calculus</SubsectionList>
              <SubsectionList>MA3238, Stochastic Processes I</SubsectionList>
              <SubsectionList>MA4268, Mathematics for Visual Data Processing</SubsectionList>
              <SubsectionList>ST2132, Mathematical Statistics</SubsectionList>
            </UnorderedList>
          </SubsectionContainer>
        </SectionContainer>
      </div>
    </div>
  );
};

export default Modules;
