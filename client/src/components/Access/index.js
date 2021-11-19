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
                        <Paragraph>住所：茨城県日立市。。。。。</Paragraph>
                        <Paragraph>
                            車でアクセス方法：茨城県日立市。。。。。
                        </Paragraph>
                        <Paragraph>
                            電車でアクセス方法：茨城県日立市。。。。。
                        </Paragraph>
                        <Paragraph>電話番号：0123412341234</Paragraph>
                        <Paragraph>メール：huahdfasd@gmai.com</Paragraph>
                    </Content>
                </ContentLeft>
                <ContentRight>
                    <Map>
                        <Iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d801.6869572575197!2d140.6232490158691!3d36.5119488543496!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60222bd86f5bfff1%3A0x97ff0082cc238f1c!2z44K544Kr44Kk44Km44Kj44OD44K344Ol5Y2U5ZCM57WE5ZCI!5e0!3m2!1sja!2sjp!4v1630910748714!5m2!1sja!2sjp"
                            width="600"
                            height="450"
                            loading="lazy"
                        />
                    </Map>
                </ContentRight>
            </Container>
        </Background>
    );
};

export default Access;
