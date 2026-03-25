import styled from "styled-components";
import BannerBurger from "../../assets/banner-burger.png";
import background from "../../assets/background-login.svg";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
    background: url(${background});
`;

export const Banner = styled.div`
    background: url(${BannerBurger}) no-repeat center;
    background-size: cover;
    background-color: #1f1f1f;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    h1{
        font-family: 'Road Rage', sans-serif;
        color: #ffffff;
        font-size: 80px;
        line-height: 70px;
        position: absolute;
        right: 20%;
        top: 25%;
    }

    span{
        display: block;
        font-size: 20px;
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${(props) => props.$isActiveCategory ? (props)=> props.theme.purple : '#696969'};
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${(props) => props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}`};
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto;
`;
