import React from "react";
import Achievements from "../components/Achievements";
import Education from "../components/Education";
import Experiences from "../components/Experiences";
import Extracurriculars from "../components/Extracurriculars";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Main from "../components/Main";
import {
  Button,
  Divider,
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerOverlay,
  Stack
} from "@chakra-ui/react";
import CustomDrawerHeader from "../components/CustomDrawerHeader";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  const educationRef = React.useRef<null | HTMLDivElement>(null);
  const experienceRef = React.useRef<null | HTMLDivElement>(null);
  const projectRef = React.useRef<null | HTMLDivElement>(null);
  const skillRef = React.useRef<null | HTMLDivElement>(null);
  const achievementRef = React.useRef<null | HTMLDivElement>(null);
  const extracurricularRef = React.useRef<null | HTMLDivElement>(null);
  const contactRef = React.useRef<null | HTMLDivElement>(null);

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

  const HeaderButtons: React.FC = () => (
    <Stack>
      <Button onClick={() => goToSelectedRef(educationRef)}>Education</Button>
      <Button onClick={() => goToSelectedRef(experienceRef)}>
        Experiences
      </Button>
      <Button onClick={() => goToSelectedRef(projectRef)}>Projects</Button>
      <Button onClick={() => goToSelectedRef(skillRef)}>Skills</Button>
      <Button onClick={() => goToSelectedRef(achievementRef)}>
        Achievements
      </Button>
      <Button onClick={() => goToSelectedRef(extracurricularRef)}>
        Extracurriculars
      </Button>
      <Button onClick={() => goToSelectedRef(contactRef)}>Contact</Button>
    </Stack>
  );

  const CustomDrawer: React.FC = () => (
    <Drawer isOpen={isDrawerOpen} placement="right" onClose={closeDrawer}>
      <DrawerOverlay>
        <DrawerContent>
          <CustomDrawerHeader
            imageUrl="/personal.jpg"
            description="Farrel Salim"
            onClick={closeDrawer}
          />
          <DrawerBody>
            <HeaderButtons />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );

  return (
    <div>
      <Header onClick={openDrawer} />
      <CustomDrawer />

      <Divider />
      <Main
        title="Farrel Dwireswara Salim's Portfolio"
        description="Year 3 National University of Singapore undergraduate, 
              studying Computer Science along with a second major in Mathematics"
      />
      <Education ref={educationRef} />
      <Experiences ref={experienceRef} />
      <Projects ref={projectRef} />
      <Skills ref={skillRef} />
      <Achievements ref={achievementRef} />
      <Extracurriculars ref={extracurricularRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default Home;
