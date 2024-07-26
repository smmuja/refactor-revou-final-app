export interface productAddRequestProps {
  product_name: string;
  product_price: number;
  business_id: string;
  description: string;
}

export interface ProductAddResponseProps {
  product_name: string;
  product_price: number | string;
  id: string;
  create_at: Date;
  update_at: Date;
  profile_url: string;
  business_name: string;
  username: string;
  business_id: string;
  user_id: string;
  description: string;
  product_images: ProductImage[];
  _links: null;
}

export interface ProductImage {
  id: string;
  public_id: string;
  secure_url: string;
  create_at: Date;
}
