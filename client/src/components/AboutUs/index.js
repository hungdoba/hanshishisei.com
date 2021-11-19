import React from "react";
import {
    Background,
    Container,
    Content,
    ContentLeft,
    ContentRight,
    Image,
    Paragraph,
    Title,
} from "./element";
import boardImage from "../Images/photo03.jpg";

const AboutUs = () => {
    return (
        <Background id="aboutus">
            <Container>
                <ContentLeft>
                    <Title>
                        <h1>絆支至誠について</h1>
                    </Title>
                    <Content>
                        <Paragraph>(内容が欲しい)</Paragraph>
                    </Content>
                    <Content>
                        <Paragraph>
                            HanshiShiseiについて内容が欲しい
                            HanshiShiseiについて内容が欲しい
                            HanshiShiseiについて内容が欲しい
                        </Paragraph>
                    </Content>
                    <Content>
                        <Paragraph>
                            HanshiShiseiについて内容が欲しい
                            HanshiShiseiについて内容が欲しい
                            HanshiShiseiについて内容が欲しい
                        </Paragraph>
                    </Content>
                    <Content>
                        <Paragraph>
                            HanshiShiseiについて内容が欲しい
                            HanshiShiseiについて内容が欲しい
                            HanshiShiseiについて内容が欲しい
                        </Paragraph>
                    </Content>
                </ContentLeft>
                <ContentRight>
                    <Image src={boardImage} alt="board" />
                </ContentRight>
            </Container>
        </Background>
    );
};

export default AboutUs;
