import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { KPIData } from "@/types/dashboard";
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  ShoppingCart, 
  Star, 
  BarChart3,
  ArrowUp,
  ArrowDown
} from "lucide-react";

const iconMap = {
  DollarSign,
  Users,
  TrendingUp,
  ShoppingCart,
  Star,
  BarChart3,
};

interface KPIWidgetProps {
  data: KPIData;
}

export function KPIWidget({ data }: KPIWidgetProps) {
  const IconComponent = iconMap[data.icon as keyof typeof iconMap] || BarChart3;
  const isPositive = data.changeType === 'increase';

  return (
    <Card className="relative overflow-hidden glass-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-white">
          {data.title}
        </CardTitle>
        <div className={`p-2 rounded-lg ${data.color}`}>
          <IconComponent className="h-4 w-4 text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-white mb-2">
          {data.value}
        </div>
        <div className="flex items-center space-x-2">
          <Badge 
            variant={isPositive ? "default" : "destructive"}
            className={`flex items-center space-x-1 ${
              isPositive 
                ? "bg-green-100 text-green-800 hover:bg-green-100" 
                : "bg-red-100 text-red-800 hover:bg-red-100"
            }`}
          >
            {isPositive ? (
              <ArrowUp className="h-3 w-3" />
            ) : (
              <ArrowDown className="h-3 w-3" />
            )}
            <span>{Math.abs(data.change)}%</span>
          </Badge>
          <span className="text-xs text-white">vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
}
