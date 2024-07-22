import { Badge, BusinessImage, Card } from "features/base";
import { BusinessesDetailButton, useGetBusiness } from "features/businesses";

export function BusinessesData() {
  const { data, isLoading, isError } = useGetBusiness();

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (isError) {
    return <span>Error fetching data</span>;
  }

  console.log(data);

  return data?.map((item) => (
    <Card key={item.id}>
      <p>{item.username}</p>
      <Badge className="mb-10">{item.user_email}</Badge>
      <BusinessImage className="mt-3" src={item.profile_url} />
      <div className="flex justify-between my-2">
        <h3 className="font-medium">{item.business_name}</h3>
        <Badge>{item.business_types}</Badge>
      </div>
      <span>{item.created_at.toLocaleDateString()}</span>
      <p className="text-gray-400 ml-3 mt-2 truncate ...">{item.description}</p>
      <BusinessesDetailButton id={item.id} />
    </Card>
  ));
}
