export interface KPIData {
  id: string;
  title: string;
  value: string | number;
  change: number;
  changeType: 'increase' | 'decrease';
  icon: string;
  color: string;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  date?: string;
  [key: string]: any;
}

export interface RevenueData {
  month: string;
  revenue: number;
  profit: number;
  expenses: number;
}

export interface UserStatsData {
  date: string;
  newUsers: number;
  activeUsers: number;
  returningUsers: number;
}

export interface TrafficData {
  source: string;
  visitors: number;
  percentage: number;
  color: string;
}

export interface ConversionData {
  stage: string;
  users: number;
  conversionRate: number;
}

export interface SalesData {
  name: string;
  value: number;
  color: string;
}

export interface PerformanceData {
  metric: string;
  current: number;
  target: number;
  category: string;
}

export interface DateRange {
  from: Date;
  to: Date;
}

export interface DashboardData {
  kpis: KPIData[];
  revenueData: RevenueData[];
  userStats: UserStatsData[];
  trafficSources: TrafficData[];
  conversionFunnel: ConversionData[];
  performanceMetrics: PerformanceData[];
}
