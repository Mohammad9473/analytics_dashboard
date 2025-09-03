import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Bell, Search, User, LogOut, Settings } from "lucide-react";
import { DateRangePicker } from "./DateRangePicker";
import { ExportButton } from "./ExportButton";
import { DateRange, DashboardData } from "@/types/dashboard";

interface HeaderProps {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
  dashboardData: DashboardData;
}

export function Header({ dateRange, onDateRangeChange, dashboardData }: HeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <Badge variant="secondary" className="bg-blue-50 text-blue-700">
            Live Data
          </Badge>
        </div>
        
        <div className="flex items-center space-x-4">
          <DateRangePicker 
            dateRange={dateRange}
            onDateRangeChange={onDateRangeChange}
          />
          
          <ExportButton 
            data={dashboardData}
            filename="analytics-dashboard"
          />
          
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
      </div>
    </header>
  );
}
