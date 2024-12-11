export interface ProductsPublic {
  page: number;
  limit: number;
  search: string;
  data: ProductsResponse[];
  total_page: number;
  total_data: number;
}

export interface ProductsResponse {
  product_name: string;
  product_price: number;
  id: string;
  create_at: Date;
  update_at: Date;
  profile_url: string;
  business_name: string;
  username: string;
  business_id: string;
  user_id: string;
  description: string;
}
