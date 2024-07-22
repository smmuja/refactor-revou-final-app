import { Button, Card } from "features/base";
import { useNavigate } from "react-router-dom";
import { businessAddUrl } from "config";
import { useGetUser } from "features/profile/hooks/useGetUser";
import { NotFoundComponent } from "features/base/notFoundComponent";

export function UserBusiness() {
  const navigate = useNavigate();

  const { UserBusiness, isLoading, isError } = useGetUser();

  if (isLoading) {
    return <span>Loading ...</span>;
  }
  if (isError) {
    return <span>Error: Unknown error </span>;
  }

  console.log(UserBusiness);

  // const { id } = useParams();

  // const handleBusinessViewMore = (id: string) => {
  //   navigate(`${businessDetailUrl}/${id}`);
  // };

  const handleBusinessAdd = () => {
    navigate(businessAddUrl);
  };

  return (
    <>
      <Card className="mt-10 bg-gray-100 border-slate-50 w-full">
        <h3 className="font-semibold"> User Business</h3>
        {UserBusiness?.length !== 0 ? (
          <>
            {UserBusiness?.map((item) => {
              return (
                <Card className="mt-3 border-none" key={item?.id}>
                  <div className="flex gap-3 justify-between items-end  mb-3">
                    <img
                      src={item?.business_img_url}
                      alt="Business image"
                      className="size-16"
                    />
                    <h4 className="text-lg font-light content-end tracking-wide">
                      {item?.business_name}
                    </h4>
                    <Button
                      // onClick={handleBusinessViewMore}
                      onClick={() => navigate(`/businesses-detail/${item.id}`)}
                      className="bg-transparent w-fit h-fit p-0 content-end text-2xl"
                    >
                      {`>`}
                    </Button>
                  </div>
                  <hr className="border border-stone-700" />
                  <div>
                    <div className="flex gap-3">
                      <span>Created at</span>
                      <span className="text-gray-500">{item.created_at}</span>
                    </div>
                    <p className="truncate ">{item.business_description}</p>
                  </div>
                </Card>
              );
            })}
          </>
        ) : (
          <NotFoundComponent message="No business yet" />
        )}
      </Card>

      <Button onClick={handleBusinessAdd} className="bg-green-500 mt-3">
        Add New Business
      </Button>
    </>
  );
}
