import {
    Menu,
    Text,
    Title,
    Navbar,
    Content,
    MenuLink,
    Container,
    Background,
    BottomMenu,
    BottomNavbar,
    NavbarBackground,
} from "./element";

import photo0 from "../Images/photo01.jpg";

const Hero = () => {
    return (
        <Background>
            <Container image={photo0}>
                <NavbarBackground>
                    <Navbar>
                        <Menu>
                            <MenuLink
                                to="aboutus"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                            >
                                絆支至誠について
                            </MenuLink>
                        </Menu>
                        <Menu>
                            <MenuLink
                                to="gallery"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                            >
                                ギャラリー
                            </MenuLink>
                        </Menu>
                        <Menu></Menu>
                        <Menu>
                            <MenuLink
                                to="price"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                            >
                                サービス
                            </MenuLink>
                        </Menu>
                        <Menu>
                            <MenuLink
                                to="access"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                            >
                                アクセス
                            </MenuLink>
                        </Menu>
                    </Navbar>
                </NavbarBackground>
                <Content>
                    <Title>絆支至誠</Title>
                    <Text> Activity Space The continuation of the dream </Text>
                    <Text> 日本語が入れたい。 </Text>
                </Content>
                <BottomNavbar>
                    <BottomMenu>電話で連絡</BottomMenu>
                    <BottomMenu>メールで連絡</BottomMenu>
                    <BottomMenu backgroundColor="coral" color="white">
                        <MenuLink
                            to="aboutus"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                        >
                            探索
                        </MenuLink>
                    </BottomMenu>
                </BottomNavbar>
            </Container>
        </Background>
    );
};

export default Hero;
