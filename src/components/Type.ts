export interface DataItem {
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
export interface InvestData {
  id: number;
  fundAge: string;
  fundSize: string;
  lockInPeriod: string;
  expenseRatio: string;
}
export interface SimilarFundData {
  icon: string;
  fundName: string;
  threeYrReturn: string;
}
