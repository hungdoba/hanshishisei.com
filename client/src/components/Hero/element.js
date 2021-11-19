import styled from "styled-components";
import forestLargeBlur from "../Images/photo02.jpg";
import whiteBackground from "../Images/photo01.png";
import { Link } from "react-scroll";

export const Background = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: url(${forestLargeBlur});
`;

export const NavPhotoBackground = styled.div`
    width: 10vh;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Arrow = styled.div`
    color: lightgrey;
    font-size: 30px;
    &:hover {
        color: white;
        font-size: 40px;
        cursor: pointer;
    }
`;

export const Container = styled.div`
    width: 80vw;
    height: 80vh;
    margin-top: auto;
    margin-bottom: auto;
    overflow: hidden;
    border-radius: 1vw;
    background-size: cover;
    background-image: url(${(props) => props.image});
`;

export const Img = styled.img`
    width: 100%;
    height: auto;
    top: 0;
    left: 0;
    position: relative;
`;

export const NavbarBackground = styled.div`
    width: 100%;
    height: 30%;
    background-image: url(${whiteBackground});
    background-size: 100%;
    background-repeat: no-repeat;
`;

export const Navbar = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
`;

export const Menu = styled.div`
    width: 15%;
    height: 50%;
    font-weight: bold;
    text-align: center;
`;

export const MenuLink = styled(Link)`
    text-decoration: none;
    &:hover {
        cursor: pointer;
        color: orange;
    }
`;

export const Content = styled.div`
    width: 30%;
    color: white;
    margin-left: 10%;
`;

export const Title = styled.div`
    font-size: 42px;
    font-weight: bold;
    margin: 10px;
`;

export const Text = styled.div`
    font-size: 24px;
    margin: 10px;
`;

export const BottomNavbar = styled.div`
    width: 70%;
    height: 5vh;
    margin-top: 12%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    overflow: hidden;
`;

export const BottomMenu = styled.div`
    width: 33%;
    height: 5vh;
    font-weight: bold;
    text-align: center;
    vertical-align: middle;
    line-height: 5vh;
    background-color: ${({ backgroundColor }) =>
        backgroundColor ? backgroundColor : "white"};
    color: ${({ color }) => color || "blue"};
`;
