interface Template {
    image?: {
        url: string,
        alt: string,
    },
    isSelected: boolean,
    name: string,
    slug: string,
    description: string,
    downloadUrl: string
    price: number
}