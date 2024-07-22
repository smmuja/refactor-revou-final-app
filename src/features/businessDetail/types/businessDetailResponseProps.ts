export type businessDetailResponseProps = {
  business_types: string;
  business_name: string;
  profile_url: string;
  id: string;
  create_at: Date;
  update_at: Date;
  description: string;
  is_delete: boolean;
  user_phone_number: string;
  user_email: string;
  username: string;
  product: Product[];
  business_images: BusinessImage[];
  _links: null;
};

export interface BusinessImage {
  id: string;
  public_id: string;
  secure_url: string;
  create_at: Date;
}

export interface Product {
  product_name: string;
  product_price: number;
  profile_url: string;
  id: string;
  is_delete: boolean;
  description: string;
  create_at: Date;
  update_at: Date;
}
