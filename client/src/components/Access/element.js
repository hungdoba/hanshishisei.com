import styled from "styled-components";

export const Background = styled.div`
    padding-top: 2vh;
    padding-bottom: 2vh;
    background-image: linear-gradient(to right, lightblue, rgba(255, 0, 0, 0));
`;

export const Container = styled.div`
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
`;

export const ContentLeft = styled.div`
    width: 38.2%;
`;

export const ContentRight = styled.div`
    width: 61.8%;
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 20px;
`;

export const Title = styled.div`
    width: 100%;
    height: 10vh;
    line-height: 10vh;
    vertical-align: middle;
`;

export const Content = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 10px;
`;

export const Paragraph = styled.p`
    font-size: 24px;
    margin-top: 5vh;
`;

export const Map = styled.div`
    width: 98%;
    height: 98%;
    margin: 1%;
    overflow: hidden;
`;

export const Iframe = styled.iframe`
    width: 100%;
    height: 97%;
`;