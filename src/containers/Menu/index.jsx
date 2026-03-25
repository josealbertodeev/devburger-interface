import { use, useEffect, useState } from "react";
import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton } from "./styles";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export function Menu() {

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);

    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParams.get('categoria');
        if (categoryId){
            return categoryId;
        }
        return 0;
    });

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("/categories");
            console.log("Categorias do Menu:", data);
            const newCategories = [{ id: 0, name: 'Todas' }, ...data];
            setCategories(newCategories);
        }

        async function loadProducts() {
            const { data } = await api.get("/products");
            const newProducts = data.map((product) => {
                let correctedCategoryId = 1; // Por padrão, considera entrada

                const entriesKeywords = ['salada', 'bruschetta', 'carpaccio', 'ceviche', 'queijo', 'croquete', 'pastéis', 'pastel', 'tartine', 'bacalhau'];
                if (entriesKeywords.some(keyword => product.name.toLowerCase().includes(keyword))) {
                    correctedCategoryId = 1;
                }

                if (product.name.toLowerCase().startsWith('x-') ||
                    product.name.toLowerCase().includes('burger') ||
                    product.name.toLowerCase().includes('hamburguer')) {
                    correctedCategoryId = 2;
                }

                const drinkKeywords = ['refrigerante', 'água', 'suco', 'café', 'chá', 'energético'];
                const isAlcoholic = product.name.toLowerCase().includes('alcoólica');
                const isLactea = product.name.toLowerCase().includes('láctea');

                if (drinkKeywords.some(keyword => product.name.toLowerCase().includes(keyword)) ||
                    isAlcoholic || isLactea) {
                    correctedCategoryId = 3;
                }

                const dessertKeywords = ['bolo', 'torta', 'sorvete', 'pudim', 'mousse', 'brownie', 'cheesecake', 'pavê', 'açaí', 'milk shake', 'sobremesa'];
                if (dessertKeywords.some(keyword => product.name.toLowerCase().includes(keyword))) {
                    correctedCategoryId = 4;
                }

                return {
                    currencyValue: formatPrice(product.price),
                    ...product,
                    category_id: correctedCategoryId
                };
            });

            setProducts(newProducts);
        }

        loadCategories();
        loadProducts();
    }, []);

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter((product) => {
                return Number(product.category_id) === Number(activeCategory);
            });
            setFilteredProducts(newFilteredProducts);
        }
    }, [products, activeCategory]);

    return (
        <Container>
            <Banner>
                <h1>O MELHOR
                    <br />
                    HAMBURGER
                    <br />
                    ESTÁ AQUI!
                    <br />
                    <span>Esse cardápio está irresistível!</span>
                </h1>
            </Banner>

            <CategoryMenu>
                {categories.map((category) => (
                    <CategoryButton key={category.id} $isActiveCategory={category.id === activeCategory} onClick={() => {
                        navigate({
                            pathname: '/cardapio',
                            search: `?categoria=${category.id}`,
                        },
                            {
                                replace: true
                            }
                        );
                        setActiveCategory(category.id);
                    }}>
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredProducts.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </ProductsContainer>
        </Container>
    );
}