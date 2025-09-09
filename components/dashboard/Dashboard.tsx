"use client";

import { useState } from "react";
import { subDays } from "date-fns";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { KPIWidget } from "./KPIWidget";
import { RevenueChart } from "./RevenueChart";
import { UserStatsChart } from "./UserStatsChart";
import { TrafficSourceChart } from "./TrafficSourceChart";
import { UserActivityAreaChart } from "./AreaChart";
import { PerformanceScatterChart } from "./ScatterChart";
import { ConversionDonutChart } from "./DonutChart";
import { mockDashboardData, salesByCategory } from "@/lib/data/mockData";
import { DateRange } from "@/types/dashboard";

export function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [dateRange, setDateRange] = useState<DateRange>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockDashboardData.kpis.map((kpi) => (
                <KPIWidget key={kpi.id} data={kpi} />
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RevenueChart data={mockDashboardData.revenueData} />
              <UserStatsChart data={mockDashboardData.userStats} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TrafficSourceChart data={mockDashboardData.trafficSources} />
              <ConversionDonutChart 
                data={mockDashboardData.conversionFunnel} 
                title="Conversion Funnel" 
              />
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <UserActivityAreaChart 
                data={mockDashboardData.userStats} 
                title="User Activity Trends" 
              />
              <PerformanceScatterChart 
                data={mockDashboardData.performanceMetrics} 
                title="Performance vs Target" 
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ConversionDonutChart 
                data={salesByCategory} 
                title="Sales by Category" 
              />
              <RevenueChart data={mockDashboardData.revenueData} />
            </div>
          </div>
        );

      case "revenue":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <KPIWidget data={mockDashboardData.kpis[0]} />
              <KPIWidget data={mockDashboardData.kpis[3]} />
              <KPIWidget data={mockDashboardData.kpis[5]} />
            </div>
            <RevenueChart data={mockDashboardData.revenueData} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ConversionDonutChart 
                data={salesByCategory} 
                title="Revenue by Category" 
              />
              <UserActivityAreaChart 
                data={mockDashboardData.userStats} 
                title="Revenue Trends" 
              />
            </div>
          </div>
        );

      case "users":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <KPIWidget data={mockDashboardData.kpis[1]} />
              <KPIWidget data={mockDashboardData.kpis[2]} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <UserStatsChart data={mockDashboardData.userStats} />
              <TrafficSourceChart data={mockDashboardData.trafficSources} />
            </div>
            <UserActivityAreaChart 
              data={mockDashboardData.userStats} 
              title="User Engagement Over Time" 
            />
          </div>
        );

      case "performance":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <KPIWidget data={mockDashboardData.kpis[4]} />
              <KPIWidget data={mockDashboardData.kpis[5]} />
            </div>
            <PerformanceScatterChart 
              data={mockDashboardData.performanceMetrics} 
              title="Performance Metrics Analysis" 
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ConversionDonutChart 
                data={mockDashboardData.conversionFunnel} 
                title="Conversion Performance" 
              />
              <UserActivityAreaChart 
                data={mockDashboardData.userStats} 
                title="Performance Trends" 
              />
            </div>
          </div>
        );

      case "goals":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <KPIWidget data={mockDashboardData.kpis[2]} />
              <KPIWidget data={mockDashboardData.kpis[4]} />
              <KPIWidget data={mockDashboardData.kpis[5]} />
            </div>
            <PerformanceScatterChart 
              data={mockDashboardData.performanceMetrics} 
              title="Goals vs Current Performance" 
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ConversionDonutChart 
                data={mockDashboardData.conversionFunnel} 
                title="Goal Achievement" 
              />
              <RevenueChart data={mockDashboardData.revenueData} />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 bg-[#343A40] border-r border-[#4F4FFF]">
          <Sidebar 
            activeTab={activeTab} 
            onTabChange={setActiveTab}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header 
          dateRange={dateRange}
          onDateRangeChange={setDateRange}
          dashboardData={mockDashboardData}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div id="dashboard-content" className="container mx-auto px-6 py-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}
