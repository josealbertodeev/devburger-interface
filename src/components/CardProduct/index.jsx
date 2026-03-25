import { CardButton } from '../CardButton';
import { Container, CardImage } from './styles';
import { formatPrice } from '../../utils/formatPrice';
import {useCart} from '../../hooks/CartContext';

export function CardProduct({ product }) {
    const { putProductInCart } = useCart();

    return (
        <Container>
            <CardImage src={product.url} alt={product.name} />
            <div>
                <p>{product.name}</p>
                <strong>{formatPrice(product.price)}</strong>
            </div>
            <CardButton onClick={() => putProductInCart(product)}></CardButton>
        </Container>
    );
}