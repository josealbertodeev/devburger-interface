import styled from "styled-components";

export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        color: #fff;
        border-radius: 4px;
        background-color: ${(props) => props.theme.purple};
        border: none;
        transition: all 0.2s ease-in-out;
        cursor: pointer;

        &:hover {
            background-color: #7a3e7c;
        }
    }
`;

export const EmptyCart = styled.div`
    font-size: 20px;
    font-weight: bold;
    text-align: center;
   
`;

export const TotalPrice = styled.div`
    font-weight: bold;
`;

export const TrashImage = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        opacity: 0.7;
    }
`;
