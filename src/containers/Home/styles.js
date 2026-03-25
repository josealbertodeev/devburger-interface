import styled from "styled-components";
import BannerHome from "../../assets/banner-home.png";
import background from "../../assets/background-login.svg";


export const Banner = styled.div`
    background: url(${BannerHome}) no-repeat;
    background-size: cover;
    background-position: center;
    height: 480px;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        color: #f4f4f4;
        position: absolute;
        left: 20%;
        top: 18%;
    }
`;

export const Container = styled.section`
    background: url(${background});
    background-size: cover;
    background-position: center;
    /* height: 500px; */
`;
