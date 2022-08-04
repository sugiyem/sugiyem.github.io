import { Center, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { SectionContainer, SectionTitle } from "../styles/GeneralStyles";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Contact = React.forwardRef<null | HTMLDivElement>((props, ref) => {
    return (
        <div ref={ref}>
            <SectionContainer>
                <SectionTitle>Contact Me</SectionTitle>
                <Center justifyContent="space-evenly">
                    <Link href="mailto:farrelds2003@gmail.com">
                        <Icon as={GoMail} width="50px" height="50px"/>
                    </Link>
                    <Link href="https://github.com/sugiyem">
                        <Icon as={FaGithub} width="50px" height="50px"/>
                    </Link>
                    <Link href="https://id.linkedin.com/in/farrel-salim">
                        <Icon as={FaLinkedin} width="50px" height="50px"/>
                    </Link>
                </Center>
            </SectionContainer>
        </div>
    )
})

export default Contact;