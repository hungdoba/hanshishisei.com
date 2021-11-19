import styled from "styled-components";

export const Background = styled.div`
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6);

    display: flex;
    align-items: center;
    justify-content: space-around;

    visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export const Nav = styled.div`
    max-width: 5vw;
    height: 5vh;
`;

export const NavSymbol = styled.div`
    font-size: 3rem;
    color: blue;
    &:hover {
        cursor: pointer;
        color: darkblue;
        transform: scale(2);
    }
`;

export const Container = styled.div`
    max-width: 80vw;
    max-height: 80vh;
    margin-top: auto;
    margin-bottom: auto;
    overflow: hidden;
    border-radius: 1vw;
    background: rgba(255, 255, 255, 1);

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export const CloseButton = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    max-width: 5vw;
    height: 5vh;
`;

export const CloseSymbol = styled.div`
    font-size: 1.3rem;
    color: blue;
    &:hover {
        cursor: pointer;
        color: darkblue;
        transform: scale(2);
    }
`;
