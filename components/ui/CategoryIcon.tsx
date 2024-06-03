import { Category } from "@prisma/client"
import Image from "next/image";
import Link from "next/link";

type CategoryIconProps = {
    category: Category;
}

export const CategoryIcon = ({ category }: CategoryIconProps) => {
    return (
        <div
            className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
        >
            <div className="w-16 h-16 relative">
                <Image
                    src={`/icon_${category.slug}.svg`}
                    alt={`Icono de ${category.name}`}
                    fill
                />
            </div>

            <Link
                href={`/order/${category.slug}`}
                className="text-xl font-bold"
            >
                {category.name}
            </Link>

        </div>
    )
}