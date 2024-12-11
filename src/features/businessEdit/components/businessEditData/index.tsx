import { Card, Input } from "features/base";
import { useGetBusinessDetail } from "features/businessDetail";
import {
  BusinessEditBusinessType,
  BusinessEditButton,
} from "features/businessEdit";
import { BusinessEditRequest } from "features/businessEdit/api";
import { BusinessEditRequestProps } from "features/businessEdit/types";
import { FormEvent } from "react";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

export function BusinessEditData() {
  const { data, isLoading, isError } = useGetBusinessDetail();

  const { id } = useParams();

  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationKey: ["businessEdit"],
    mutationFn: (payload: BusinessEditRequestProps) =>
      BusinessEditRequest(payload, String(id)),
    onSuccess: () => {
      navigate(`/businesses-detail/${data.business_id}`);
      // navigate(`/businesses`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const businessEditHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const business_types = formData.get("business_types");
    const business_name = formData.get("business_name");
    const description = formData.get("description");

    const payload = {
      business_types: business_types?.toString(),
      business_name: business_name?.toString(),
      description: description?.toString(),
    };

    mutate(payload);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error fetching data</div>;
  }
  return (
    <Card className="my-3">
      <form onSubmit={businessEditHandler}>
        <table className="w-full">
          <tr className="py-3">
            <th className="text-left">Business Type</th>
            <td>
              <BusinessEditBusinessType />
            </td>
          </tr>

          <tr className="py-3">
            <th className="text-left">Business Name</th>
            <td>
              <Input
                name="business_name"
                placeholder="Business name"
                defaultValue={data.business_name}
              />
            </td>
          </tr>

          <tr className="py-3">
            <th className="text-left">Description</th>
            <td>
              <textarea
                rows={5}
                className="w-full border-slate-400 border rounded-md focus:outline-none"
                name="description"
                defaultValue={data.description}
                placeholder="Description"
              />
            </td>
          </tr>
        </table>
        <BusinessEditButton />
      </form>
    </Card>
  );
}
