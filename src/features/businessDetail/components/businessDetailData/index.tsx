import { Button } from "features/base";

export function BusinessDetailData() {
  return (
    <>
      <div className="flex justify-between my-2">
        <h3 className="font-medium">Business name</h3>
        <Button
          disabled
          className="w-fit px-3 py-0 rounded-md bg-orange-500 hover:bg-opacity-100"
        >
          Business type
        </Button>
      </div>
      <span>Joined at</span> <span className="text-gray-400">00-00-0000</span>
      <span>Owner</span> <span className="text-gray-400">00-00-0000</span>
      <p className="mt-3">Description</p>
      <p className="ml-3 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ad sint
        repudiandae ducimus iusto ipsa animi officiis dolorum! Iste distinctio
        tempora deleniti assumenda ipsam, quam quibusdam laboriosam ratione?
        Culpa, rerum.
      </p>
    </>
  );
}
