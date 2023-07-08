export const product = {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: "title",
            title: "product title",
            type: 'string'
        },
        {
            name: "description",
            title: "product descruption",
            type: 'string'
        },
        {
            name: "price",
            title: "product price",
            type: 'string'
        },
        {
            name: "image",
            title: "product image",
            type: 'image'
        },
        {
            name: "category",
            title: "Product Category",
            type: "reference",
            to: [
                {
                    type: 'category'
                }
            ]
        }
    ]
}