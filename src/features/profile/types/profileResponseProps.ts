export type profileResponseProps = {
  phone_number: string;
  address: string;
  occupation: string;
  description: string;
  username: string;
  email: string;
  create_at: Date;
  update_at: Date;
  user_type: string;
  profile_url: string;
  images: Image[];
  product_amount: number;
  business_amount: number;
  business: Business[];
  product: Business[];
  _links: null;
};

export interface Business {
  business_types?: string;
  business_name?: string;
  profile_url: string;
  id: string;
  create_at: Date;
  update_at: Date;
  description: string;
  is_delete: boolean;
  product_name?: string;
  product_price?: number;
}

export interface Image {
  id: string;
  public_id: string;
  secure_url: string;
  create_at: Date;
}
