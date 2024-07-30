import BestSellers from "./Dashboard/BestSellers";
import Graphec from "./Dashboard/Graphec";

export default function Statics() {
  return (
    <div className="lg:flex">
      <Graphec />
      <BestSellers/>
    </div>
  );
}
