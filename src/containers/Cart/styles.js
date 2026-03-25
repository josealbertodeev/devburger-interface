import styled from 'styled-components';
import Texture from '../../assets/bg.svg';
import Background from '../../assets/background-login.svg';

export const Container = styled.div`
    width: 100%;
    background: url(${Background});
    min-height: 100vh;
`;

export const Banner = styled.div`
    background: url(${Texture});
    background-color: #1f1f1f;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 200px;

    img{
        width: 180px;
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: #61a120;
    text-align: center;
    position: relative;

    &::after{
        content: '';    
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: #61a120;
        left: 50%;
        transform: translateX(-50%);

    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    gap: 40px;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
`;