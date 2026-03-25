import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-color: ${props => props.theme.mainBlack};
    width: 100%;
    height: 72px;
    padding: 0 56px;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`;

export const Navigation = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 72px;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    hr{
        height: 24px;
        border: 1px solid #625e5e;
    }
`;

export const HeaderLink = styled(Link)`
    color: ${props => props.$isActive ? props.theme.orange : props.theme.white};
    border-bottom: 1px solid ${props => props.$isActive ? props.theme.orange : 'transparent'};
    font-size: 14px;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: #ff872c;
    }
`;

export const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 48px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;

    p{
        color: #fff;
        line-height: 90%;
        font-weight: 300;
        span {
            font-weight: 700;
            color: ${(props) => props.theme.purple};
        }
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Logout = styled.button`
    color: #ae3a1f;
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    border: none;

 &:hover {
        color: #ff4d4d;
    }
`;
