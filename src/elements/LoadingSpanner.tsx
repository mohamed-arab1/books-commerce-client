import { BounceLoader } from "react-spinners";

export default function LoadingSpanner() {
  return (
    <div className="size-full flex items-center justify-center p-20">
      <BounceLoader size={100} color={"#FFC444"} />
    </div>
  );
}
