import { Controller, set, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Image } from '@phosphor-icons/react'
import { useEffect, useState } from "react"
import { api } from "../../../services/api"
import { toast } from "react-toastify"
import * as yup from "yup"
import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMessage, CheckboxContainer } from './styles'
import { useLocation, useNavigate } from "react-router-dom"

const schema = yup
    .object({
        name: yup.string().required('Digite o nome do produto'),
        price: yup.number().positive().required('Digite o preço do produto').typeError('Digite o preço do produto'),
        category: yup.object().required('Selecione uma categoria'),
        offer: yup.boolean(),
    });

export function EditProduct() {
    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    if (!product) {
        return <div>Produto não encontrado. Por favor, acesse via lista de produtos.</div>;
    }


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');
            setCategories(data);
        }
        loadCategories();
    }, [])

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        const productFormData = new FormData();
        productFormData.append('name', data.name);
        productFormData.append('price', data.price * 100);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);
        productFormData.append('offer', data.offer);


        if (data.file && data.file[0]) {
            productFormData.append('file', data.file[0]);
        }

        await toast.promise(api.put(`/products/${product.id}`, productFormData), {
            pending: 'Editando produto...',
            success: 'Produto editado com sucesso!',
            error: 'Falha ao editar o produto, tente novamente'
        })

        setTimeout(() => {
            navigate('/admin/produtos');
        }, 3000);

    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register("name")} defaultValue={product.name}></Input>
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register("price")} defaultValue={product.price / 100}></Input>
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <Image />
                        <input type="file" {...register("file")} accept="image/png, image/jpeg" onChange={(value) => {
                            setFileName(value.target.files[0]?.name);
                            register("file").onChange(value);
                        }} />
                        {fileName || "Selecione uma imagem"}
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Categoria</Label>
                    <Controller name="category"
                        control={control}
                        defaultValue={categories.find(cat => cat.id === product.category_id)}
                        render={({ field }) => (
                            <Select {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Selecione uma categoria"
                                menuPortalTarget={document.body}
                            />
                        )} />
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <CheckboxContainer>
                        <input type="checkbox" {...register("offer")} defaultChecked={product.offer} />
                        <Label>Produto em Oferta ?</Label>
                    </CheckboxContainer>
                </InputGroup>

                <SubmitButton>Editar Produto</SubmitButton>
            </Form>
        </Container>
    )
}