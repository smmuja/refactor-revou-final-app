import { BusinessImage, Button, Card } from "features/base";
import { useGetBusinessDetail } from "features/businessDetail";

export function BusinessEditImage() {
  const { data, isLoading, isError } = useGetBusinessDetail();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <Card>
      <BusinessImage src={data.businessImgUrl} />
      <Button className="w-full mt-3 bg-yellow-500">Edit Image</Button>
    </Card>
  );
}
