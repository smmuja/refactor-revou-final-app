export interface BusinessesPublic {
  page: number;
  limit: number;
  search: string;
  data: BusinessesResponse[];
  total_page: number;
  total_data: number;
}

export interface BusinessesResponse {
  name: string;
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
}
