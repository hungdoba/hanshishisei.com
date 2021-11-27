import React from "react";
import {
    Background,
    Container,
    Content,
    ContentLeft,
    ContentRight,
    Map,
    Paragraph,
    Iframe,
    Title,
} from "./element";

const Access = () => {
    return (
        <Background id="access">
            <Container>
                <ContentLeft>
                    <Title>
                        <h1>アクセス</h1>
                    </Title>
                    <Content>
                        <Paragraph>
                            住所：茨城県日立市入四間町１５６６－９
                        </Paragraph>
                        <Paragraph>電話番号：08010807396</Paragraph>
                        <Paragraph>メール：chiba.hanshi@gmai.com</Paragraph>
                    </Content>
                </ContentLeft>
                <ContentRight>
                    <Map>
                        <Iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1684.105045236614!2d140.58694781490064!3d36.648884932937065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sjp!4v1637981295006!5m2!1sen!2sjp"
                            width="600"
                            height="450"
                            loading="lazy"
                        ></Iframe>
                    </Map>
                </ContentRight>
            </Container>
        </Background>
    );
};

export default Access;
