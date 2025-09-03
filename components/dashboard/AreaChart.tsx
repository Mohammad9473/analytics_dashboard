import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { UserStatsData } from "@/types/dashboard";
import { format, parseISO } from 'date-fns';

interface AreaChartProps {
  data: UserStatsData[];
  title: string;
}

export function UserActivityAreaChart({ data, title }: AreaChartProps) {
  // Take last 14 days for better visualization
  const recentData = data.slice(-14).map(item => ({
    ...item,
    date: format(parseISO(item.date), 'MMM dd'),
    totalActivity: item.newUsers + item.activeUsers + item.returningUsers
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={recentData}>
            <defs>
              <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="date" 
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis 
              stroke="#64748b"
              fontSize={12}
            />
            <Tooltip 
              formatter={(value: number) => [value.toLocaleString(), 'Total Activity']}
              labelStyle={{ color: '#1e293b' }}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="totalActivity" 
              stroke="#3b82f6" 
              fillOpacity={1} 
              fill="url(#colorActivity)" 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
