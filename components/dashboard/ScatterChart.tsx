import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PerformanceData } from "@/types/dashboard";

interface ScatterChartProps {
  data: PerformanceData[];
  title: string;
}

export function PerformanceScatterChart({ data, title }: ScatterChartProps) {
  const chartData = data.map((item, index) => ({
    x: item.current,
    y: item.target,
    metric: item.metric,
    category: item.category,
    z: index + 1
  }));

  const categoryColors = {
    Performance: '#91B3FF',
    Engagement: '#4FFF6F',
    Reliability: '#f59e0b',
    Support: '#D5A1FF'
  };

  return (
    <Card className="bg-[#4F4FFF]">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <ScatterChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              type="number" 
              dataKey="x" 
              name="Current"
              stroke="#FFF"
              fontSize={12}
            />
            <YAxis 
              type="number" 
              dataKey="y" 
              name="Target"
              stroke="#FFF"
              fontSize={12}
            />
            <Tooltip 
              cursor={{ strokeDasharray: '3 3' }}
              formatter={(value: number, name: string) => [value, name]}
              labelFormatter={(label, payload) => {
                if (payload && payload[0]) {
                  return `${payload[0].payload.metric} (${payload[0].payload.category})`;
                }
                return label;
              }}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            {Object.entries(categoryColors).map(([category, color]) => (
              <Scatter
                key={category}
                name={category}
                data={chartData.filter(d => d.category === category)}
                fill={color}
              />
            ))}
            <Legend />
          </ScatterChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
