import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ConversionData, SalesData } from "@/types/dashboard";

interface DonutChartProps {
  data: ConversionData[] | SalesData[];
  title: string;
}

const COLORS = ['#91B3FF', '#4FFF6F', '#f59e0b', '#FF0A0A', '#D5A1FF'];

export function ConversionDonutChart({ data, title }: DonutChartProps) {
  // Determine if data is ConversionData or SalesData
  const isConversionData = (item: ConversionData | SalesData): item is ConversionData => {
    return 'stage' in item && 'users' in item;
  };

  const chartData = data.map((item, index) => {
    if (isConversionData(item)) {
      return {
        name: item.stage,
        value: item.users,
        conversionRate: item.conversionRate,
        color: COLORS[index % COLORS.length]
      };
    } else {
      return {
        name: item.name,
        value: item.value,
        color: item.color || COLORS[index % COLORS.length]
      };
    }
  });

  const dataKey = 'value';

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              innerRadius={40}
              fill="#8884d8"
              dataKey={dataKey}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [value.toLocaleString(), isConversionData(data[0]) ? 'Users' : 'Value']}
              labelFormatter={(label) => `${isConversionData(data[0]) ? 'Stage' : 'Category'}: ${label}`}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
