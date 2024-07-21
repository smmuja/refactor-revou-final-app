import { Badge, BusinessImage, Card } from "features/base";
import { businessesResponse } from "features/businesses/api";
import { useQuery } from "react-query";

import businessImg from "assets/business.png";
import { BusinessesDetailButton } from "features/businesses";

export function BusinessesData() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [""],
    queryFn: businessesResponse,
  });

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (isError) {
    return <span>Error: unknown error </span>;
  }

  return (
    <>
      {data?.map((business) => {
        const businessImgUrl =
          business.profile_url.length > 0 ? business.profile_url : businessImg;

        const create_at = new Date(business.create_at);

        return (
          <Card key={business?.id}>
            <p>{business.username}</p>
            <Badge className="mb-10">{business.user_email}</Badge>
            <BusinessImage className="mt-3" src={businessImgUrl} />
            <div className="flex justify-between my-2">
              <h3 className="font-medium">{business.business_name}</h3>
              <Badge>{business.business_types}</Badge>
            </div>
            <span>{create_at.toLocaleDateString()}</span>
            <p className="text-gray-400 ml-3 mt-2 truncate ...">
              {business.description}
            </p>
            <BusinessesDetailButton />
          </Card>
        );
      })}
    </>
  );
}
