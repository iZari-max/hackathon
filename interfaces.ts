import { Image as IImage } from 'sanity'


export interface ProductT {
    title: string,
    _id: string,
    price: number,
    image: IImage,
    description: string,
    category: {
      title: string
    }
  }

export interface CartItem {
    product: ProductT,
    qty: number
}  