import { DashboardData } from '@/types/dashboard';
import { subDays, format } from 'date-fns';

// Generate dates for the last 30 days
const generateDates = (days: number) => {
  return Array.from({ length: days }, (_, i) => {
    const date = subDays(new Date(), days - 1 - i);
    return format(date, 'yyyy-MM-dd');
  });
};

// Generate mock revenue data for the last 12 months
const generateRevenueData = () => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  return months.map((month) => ({
    month,
    revenue: Math.floor(Math.random() * 50000) + 30000,
    profit: Math.floor(Math.random() * 20000) + 10000,
    expenses: Math.floor(Math.random() * 15000) + 8000,
  }));
};

// Generate user stats for the last 30 days
const generateUserStats = () => {
  const dates = generateDates(30);
  return dates.map(date => ({
    date,
    newUsers: Math.floor(Math.random() * 500) + 100,
    activeUsers: Math.floor(Math.random() * 2000) + 1000,
    returningUsers: Math.floor(Math.random() * 800) + 200,
  }));
};

export const mockDashboardData: DashboardData = {
  kpis: [
    {
      id: '1',
      title: 'Total Revenue',
      value: '$2,847,392',
      change: 12.5,
      changeType: 'increase',
      icon: 'DollarSign',
      color: 'bg-blue-500',
    },
    {
      id: '2',
      title: 'Active Users',
      value: '24,847',
      change: 8.2,
      changeType: 'increase',
      icon: 'Users',
      color: 'bg-green-500',
    },
    {
      id: '3',
      title: 'Conversion Rate',
      value: '3.24%',
      change: -2.1,
      changeType: 'decrease',
      icon: 'TrendingUp',
      color: 'bg-orange-500',
    },
    {
      id: '4',
      title: 'Total Orders',
      value: '12,847',
      change: 15.3,
      changeType: 'increase',
      icon: 'ShoppingCart',
      color: 'bg-purple-500',
    },
    {
      id: '5',
      title: 'Customer Satisfaction',
      value: '4.8/5',
      change: 0.3,
      changeType: 'increase',
      icon: 'Star',
      color: 'bg-yellow-500',
    },
    {
      id: '6',
      title: 'Growth Rate',
      value: '23.1%',
      change: 5.7,
      changeType: 'increase',
      icon: 'BarChart3',
      color: 'bg-indigo-500',
    },
  ],
  
  revenueData: generateRevenueData(),
  
  userStats: generateUserStats(),
  
  trafficSources: [
    { source: 'Organic Search', visitors: 45230, percentage: 42.3, color: '#3b82f6' },
    { source: 'Direct', visitors: 28450, percentage: 26.6, color: '#10b981' },
    { source: 'Social Media', visitors: 18920, percentage: 17.7, color: '#f59e0b' },
    { source: 'Email', visitors: 9840, percentage: 9.2, color: '#8b5cf6' },
    { source: 'Referral', visitors: 4560, percentage: 4.2, color: '#ef4444' },
  ],
  
  conversionFunnel: [
    { stage: 'Visitors', users: 100000, conversionRate: 100 },
    { stage: 'Product Views', users: 45000, conversionRate: 45 },
    { stage: 'Add to Cart', users: 18000, conversionRate: 18 },
    { stage: 'Checkout', users: 8500, conversionRate: 8.5 },
    { stage: 'Purchase', users: 3240, conversionRate: 3.24 },
  ],
  
  performanceMetrics: [
    { metric: 'Page Load Speed', current: 2.3, target: 2.0, category: 'Performance' },
    { metric: 'Bounce Rate', current: 35, target: 30, category: 'Engagement' },
    { metric: 'Session Duration', current: 4.2, target: 5.0, category: 'Engagement' },
    { metric: 'Error Rate', current: 0.8, target: 0.5, category: 'Reliability' },
    { metric: 'Uptime', current: 99.9, target: 99.95, category: 'Reliability' },
    { metric: 'Customer Support Response', current: 2.1, target: 1.5, category: 'Support' },
  ],
};

// Additional data for different chart types
export const salesByCategory = [
  { name: 'Electronics', value: 35, color: '#3b82f6' },
  { name: 'Clothing', value: 25, color: '#10b981' },
  { name: 'Home & Garden', value: 20, color: '#f59e0b' },
  { name: 'Sports', value: 12, color: '#8b5cf6' },
  { name: 'Books', value: 8, color: '#ef4444' },
];

export const monthlyGrowth = [
  { month: 'Jan', growth: 12, target: 15 },
  { month: 'Feb', growth: 18, target: 15 },
  { month: 'Mar', growth: 8, target: 15 },
  { month: 'Apr', growth: 22, target: 15 },
  { month: 'May', growth: 16, target: 15 },
  { month: 'Jun', growth: 28, target: 15 },
  { month: 'Jul', growth: 24, target: 15 },
  { month: 'Aug', growth: 19, target: 15 },
  { month: 'Sep', growth: 31, target: 15 },
  { month: 'Oct', growth: 26, target: 15 },
  { month: 'Nov', growth: 33, target: 15 },
  { month: 'Dec', growth: 29, target: 15 },
];

export const customerSegments = [
  { segment: 'New Customers', count: 1250, value: 45000, retention: 65 },
  { segment: 'Returning Customers', count: 3200, value: 128000, retention: 85 },
  { segment: 'VIP Customers', count: 450, value: 89000, retention: 95 },
  { segment: 'At-Risk Customers', count: 680, value: 23000, retention: 25 },
];
