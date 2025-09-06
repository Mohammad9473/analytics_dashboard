import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Bell,
  LogOut,
  Menu,
  Search,
  Settings,
  User,
  Home,
  BarChart3,
  DollarSign,
  Activity,
  Target,
  Users,
} from "lucide-react";
import { DateRangePicker } from "./DateRangePicker";
import { ExportButton } from "./ExportButton";
import { DateRange, DashboardData } from "@/types/dashboard";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface HeaderProps {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
  dashboardData: DashboardData;
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

export function Header({
  dateRange,
  onDateRangeChange,
  dashboardData,
  activeTab,
  onTabChange,
}: HeaderProps) {
  const isMobile = useIsMobile();

  const renderDesktopNav = () => (
    <div className="flex items-center space-x-4">
      <DateRangePicker
        dateRange={dateRange}
        onDateRangeChange={onDateRangeChange}
      />
      <ExportButton data={dashboardData} filename="analytics-dashboard" />
      <Button variant="outline" size="icon">
        <Search className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="relative">
        <Bell className="h-4 w-4" />
        <Badge
          variant="destructive"
          className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
        >
          3
        </Badge>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="User" />
              <AvatarFallback>MA</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );

  const renderMobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-[#222831] px-4">
        <div className="flex flex-col space-y-4 mt-10">
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
          <DateRangePicker
            dateRange={dateRange}
            onDateRangeChange={onDateRangeChange}
          />
          <ExportButton data={dashboardData} filename="analytics-dashboard" />
          <Button variant="outline">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
          <Button variant="outline" className="relative justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
            <Badge
              variant="destructive"
              className="absolute top-2 right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              3
            </Badge>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="justify-start text-white">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/avatars/01.png" alt="User" />
                  <AvatarFallback className="text-[#000]">MA</AvatarFallback>
                </Avatar>
                My Account
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="border-b border-[#4F4FFF] bg-[#222831] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <Badge
            variant="secondary"
            className="bg-primary-foreground text-primary"
          >
            Live Data
          </Badge>
        </div>

        {isMobile ? renderMobileNav() : renderDesktopNav()}
      </div>
    </header>
  );
}