import styled from "styled-components";
import BackgroundLogin from "../../assets/bg.svg";
import Background from "../../assets/background-login.svg";
import { Link as ReactLink } from "react-router-dom";


export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url(${BackgroundLogin});
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 65%; 
    }
`;

export const RightContainer = styled.div`
    background: url(${Background});
    background-size: cover;
    background-color: #1e1e1e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 50%;

    p {
        color: #fff;
        font-size: 16px;
        font-weight: 800;

        a {
            text-decoration: underline;
            color: #fff;
        }
    }
`;

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: #fff;

    span {
        color: ${(props) => props.theme.purple};
        font-family: "Road Rage", sans-serif;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;

    label {
        font-size: 18px;
        font-weight: 600;
        color: #fff;
    }

    p {
        font-size: 14px;
        color: #ff4d4d;
        line-height: 80%;
        font-weight: 600;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;

    input {
        width: 100%;
        height: 52px;
        border: none;
        border-radius: 8px;
        padding: 0 16px;
    }
`;

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: #fff;
`;

