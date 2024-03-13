import TradeFilter from "../components/TableFilter/TradeFilter";
import { data } from "../components/data/data";


const Trade: React.FC = () => {
  return (
      <div>
          <TradeFilter data={data} />
      </div>
  );
};

export default Trade;
