import styled from 'styled-components';

export const ContainerButton = styled.button`
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 5px;
    background-color: ${(props) => props.theme.purple};
    font-family: "Road Rage", sans-serif;
    font-size: 30px;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:hover {
        background-color: #6f3576;
    }
`;
