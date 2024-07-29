import BestSellers from "./Dashboard/BestSellers";
import Graphec from "./Dashboard/Graphec";

export default function Statics() {
  return (
    <div className="flex">
      <Graphec />
      <BestSellers/>
    </div>
  );
}
