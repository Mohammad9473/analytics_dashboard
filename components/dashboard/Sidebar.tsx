import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  Settings, 
  Home,
  Activity,
  Target
} from "lucide-react";

interface SidebarProps {
  className?: string;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const navigation = [
  {
    name: "Overview",
    id: "overview",
    icon: Home,
  },
  {
    name: "Analytics",
    id: "analytics", 
    icon: BarChart3,
  },
  {
    name: "Revenue",
    id: "revenue",
    icon: DollarSign,
  },
  {
    name: "Users",
    id: "users",
    icon: Users,
  },
  {
    name: "Performance",
    id: "performance",
    icon: Activity,
  },
  {
    name: "Goals",
    id: "goals",
    icon: Target,
  },
];

export function Sidebar({ className, activeTab, onTabChange }: SidebarProps) {
  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-slate-900 text-white">Analytics Pro</h2>
          </div>
          <div className="space-y-1">
            {navigation.map((item) => (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  activeTab === item.id 
                    ? "bg-blue-50 text-blue-700 hover:bg-blue-50" 
                    : "text-white hover:text-slate-900 hover:bg-slate-50"
                )}
                onClick={() => onTabChange(item.id)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start text-white hover:text-slate-900 hover:bg-slate-50"
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
