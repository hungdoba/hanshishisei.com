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
import photo04 from "../Images/photo04.jpg";

const Price = () => {
    return (
        <Background id="price">
            <Container>
                <ContentLeft>
                    <Image src={photo04} alt="board" />
                </ContentLeft>
                <ContentRight>
                    <Title>
                        <h1>サービス</h1>
                    </Title>
                    <Content>
                        <Paragraph>(内容が欲しい)</Paragraph>
                    </Content>
                    <Content>
                        <Paragraph>
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                        </Paragraph>
                    </Content>
                    <Content>
                        <Paragraph>
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                        </Paragraph>
                    </Content>
                    <Content>
                        <Paragraph>
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                            HanshiShiseiにあるサービスについて内容
                        </Paragraph>
                    </Content>
                </ContentRight>
            </Container>
        </Background>
    );
};

export default Price;
