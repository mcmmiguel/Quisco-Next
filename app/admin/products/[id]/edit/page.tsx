import { prisma } from "@/src/lib/prisma"
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
        <div>

        </div>
    )
}
export default EditProductsPage