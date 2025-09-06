import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { UserStatsData } from "@/types/dashboard";
import { format, parseISO } from 'date-fns';

interface UserStatsChartProps {
  data: UserStatsData[];
}

export function UserStatsChart({ data }: UserStatsChartProps) {
  // Take last 7 days for better visualization
  const recentData = data.slice(-7).map(item => ({
    ...item,
    date: format(parseISO(item.date), 'MMM dd')
  }));

  return (
    <Card className="bg-[#4F4FFF]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white">User Statistics (Last 7 Days)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={recentData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="date" 
              stroke="#FFF"
              fontSize={12}
            />
            <YAxis 
              stroke="#FFF"
              fontSize={12}
            />
            <Tooltip 
              formatter={(value: number, name: string) => [value.toLocaleString(), name]}
              labelStyle={{ color: '#1e293b' }}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Bar 
              dataKey="newUsers" 
              fill="#91B3FF" 
              name="New Users"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="activeUsers" 
              fill="#4FFF6F" 
              name="Active Users"
              radius={[2, 2, 0, 0]}
            />
            <Bar 
              dataKey="returningUsers" 
              fill="#f59e0b" 
              name="Returning Users"
              radius={[2, 2, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
