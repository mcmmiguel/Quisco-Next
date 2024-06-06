import EditProductForm from "@/components/products/EditProductForm";
import ProductForm from "@/components/products/ProductForm";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma"
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

async function getProductById(id: number) {
    const product = await prisma.product.findUnique({
        where: {
            id
        }
    });

    return product;
}

const EditProductsPage = async ({ params }: { params: { id: string } }) => {

    const product = await getProductById(+params.id);

    console.log(product);

    if (!product) {
        notFound();
    }

    return (
        <>
            <Heading>Editar producto: {product.name}</Heading>

            <GoBackButton />

            <EditProductForm>
                <ProductForm product={product} />
            </EditProductForm>
        </ >
    )
}
export default EditProductsPage