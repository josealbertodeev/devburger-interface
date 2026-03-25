import { ContainerButton } from "./styles";
import Cart from "../../assets/cart.png";

export function CardButton({ ...props }) {
    return (
        <ContainerButton {...props}>
            <img src={Cart} alt="carrinho de compras" />
        </ContainerButton>
    );
}