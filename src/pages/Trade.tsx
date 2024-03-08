import TradeFilter from "../components/TableFilter/TradeFilter";
import { data } from "../components/data";

interface DataItem {
  icon: string;
  investmentType: string;
  subCategoryName: string;
  fundName: string;
  rating: string;
  reInvestmentPlan: string;
  category: string;
  oneYrReturn: string;
  threeYrReturn: string;
  fiveYrReturn: string;
  currentNav: string;
  minSipInvestment: string;
}

const Trade: React.FC = () => {
  return (
      <div>
          <TradeFilter data={data} />
      </div>
  );
};

export default Trade;
