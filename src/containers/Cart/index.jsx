import Logo from "../../assets/logo.svg"
import { Container, Banner, Title, Content } from "./styles"
import { CartItems } from "../../components/CartItems"
import { CartResume } from "../../components/CartResume"


export function Cart() {
    return (
        <Container>
            <Banner>
                <img src={Logo} alt="Logo" ></img>
            </Banner>
            <Title>Checkout - Pedido</Title>
            <Content>
                <CartItems></CartItems>
                <CartResume></CartResume>
            </Content>
        </Container>
    )
}