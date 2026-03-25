import styled from 'styled-components';

export const Container = styled.div`
    .carousel-item{
        padding-right: 40px;
    }

    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }

    .react-multiple-carousel__arrow--left{
        left: 15px;
        top: 10px
    }

    .react-multiple-carousel__arrow--right{
        top: 10px
    }

    padding-left: 40px ;
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme.purple};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 20px;

    &::after{
        content: '';
        border-bottom: 4px solid ${(props) => props.theme.purple};
        width: 60px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

    }
`;

export const ContainerItems = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'imageUrl',
})`
    background: url(${props => props.imageUrl});
    background-size: cover;
    background-position: center;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 200px;
    border-radius: 20px;
    cursor: grab;

`;

export const CategoryButton = styled.button`
        color: #ffffff;
        background-color: rgba(0, 0, 0, 0.45);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 21px;
        font-weight: bold;
        margin-top: 100px;
        text-decoration: none;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: ${(props) => props.theme.purple};
            transition: background-color 0.3s ease;
        }
`;