"use client";

import { useState } from "react";
import { 
  BarChart3, TrendingUp, Users, DollarSign, 
  Activity, AlertCircle, Clock, Download,
  ArrowUp, ArrowDown, Plus, Settings, Database,
  RefreshCw, CheckCircle, XCircle, Loader,
  Target, Zap, Brain, Filter, Calendar
} from "lucide-react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, Area, AreaChart, RadarChart,
  Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from "recharts";

// ===== DATA SECTION =====
const revenueData = [
  { name: "Jan", revenue: 45200, target: 50000, forecast: 48000 },
  { name: "Feb", revenue: 52800, target: 55000, forecast: 54200 },
  { name: "Mar", revenue: 48900, target: 52000, forecast: 51500 },
  { name: "Apr", revenue: 61500, target: 60000, forecast: 63000 },
  { name: "May", revenue: 72100, target: 70000, forecast: 74500 },
  { name: "Jun", revenue: 68900, target: 75000, forecast: 71200 },
];

const trafficData = [
  { name: "Mon", visits: 2400, conversions: 240, bounceRate: 45 },
  { name: "Tue", visits: 2800, conversions: 290, bounceRate: 42 },
  { name: "Wed", visits: 2200, conversions: 210, bounceRate: 48 },
  { name: "Thu", visits: 3100, conversions: 340, bounceRate: 38 },
  { name: "Fri", visits: 2900, conversions: 310, bounceRate: 40 },
  { name: "Sat", visits: 2600, conversions: 270, bounceRate: 44 },
  { name: "Sun", visits: 2400, conversions: 250, bounceRate: 46 },
];

const sourceData = [
  { name: "Organic", value: 42, color: "#3b82f6", revenue: "Rp 30.2M" },
  { name: "Paid Ads", value: 28, color: "#f59e0b", revenue: "Rp 20.1M" },
  { name: "Social", value: 18, color: "#10b981", revenue: "Rp 12.9M" },
  { name: "Direct", value: 12, color: "#8b5cf6", revenue: "Rp 8.9M" },
];

const hourlyActivity = [
  { hour: "00:00", events: 45, revenue: 1200 },
  { hour: "04:00", events: 12, revenue: 300 },
  { hour: "08:00", events: 89, revenue: 2400 },
  { hour: "12:00", events: 156, revenue: 4200 },
  { hour: "16:00", events: 203, revenue: 5800 },
  { hour: "20:00", events: 178, revenue: 4900 },
  { hour: "23:00", events: 92, revenue: 2600 },
];

const customerSegments = [
  { segment: "VIP", value: 85, color: "#ef4444" },
  { segment: "Loyal", value: 68, color: "#f59e0b" },
  { segment: "New", value: 45, color: "#10b981" },
  { segment: "Inactive", value: 22, color: "#6b7280" },
];

const performanceMetrics = [
  { subject: "Revenue", A: 85, fullMark: 100 },
  { subject: "Traffic", A: 72, fullMark: 100 },
  { subject: "Conversion", A: 68, fullMark: 100 },
  { subject: "Retention", A: 90, fullMark: 100 },
  { subject: "Engagement", A: 78, fullMark: 100 },
  { subject: "Satisfaction", A: 92, fullMark: 100 },
];

const dataSources = [
  { id: 1, name: "Google Analytics", status: "connected", lastSync: "2 min ago", events: "12,456" },
  { id: 2, name: "Facebook Ads", status: "connected", lastSync: "5 min ago", events: "8,923" },
  { id: 3, name: "Shopee", status: "syncing", lastSync: "Syncing...", events: "4,201" },
  { id: 4, name: "Tokopedia", status: "connected", lastSync: "1 hour ago", events: "5,678" },
  { id: 5, name: "TikTok Ads", status: "error", lastSync: "Failed", events: "0" },
  { id: 6, name: "Instagram", status: "connected", lastSync: "10 min ago", events: "3,890" },
];

const aiInsights = [
  {
    id: 1,
    type: "opportunity",
    title: "Revenue Spike Detected",
    description: "Your revenue increased by 18.2% in the last 7 days. Primary driver: Organic traffic (+31%).",
    recommendation: "Increase content production by 20% to capitalize on SEO momentum.",
    impact: "High",
    confidence: 94
  },
  {
    id: 2,
    type: "warning",
    title: "Conversion Rate Declining",
    description: "Conversion rate dropped from 4.1% to 3.8% over the past 3 days.",
    recommendation: "Review checkout flow and A/B test new CTA buttons.",
    impact: "Medium",
    confidence: 87
  },
  {
    id: 3,
    type: "success",
    title: "Customer Retention Improved",
    description: "90-day retention rate increased to 78% (up from 72%).",
    recommendation: "Launch referral program to leverage satisfied customers.",
    impact: "High",
    confidence: 91
  },
];

export default function DashboardPage() {
  const [timeRange, setTimeRange] = useState("7d");
  const [activeTab, setActiveTab] = useState("overview");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "analytics", label: "Analytics", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "integrations", label: "Data Sources", icon: <Database className="w-4 h-4" /> },
    { id: "ai-insights", label: "AI Insights", icon: <Brain className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Real-time Dashboard</h1>
              <p className="mt-2 text-gray-600 flex items-center gap-2">
                <span className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Live Data
                </span>
                • Last updated: {isRefreshing ? "Updating..." : "Just now"}
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-3">
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>
              <button 
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 flex items-center gap-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? "border-b-2 border-primary-600 text-primary-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "overview" && <OverviewTab timeRange={timeRange} />}
        {activeTab === "analytics" && <AnalyticsTab />}
        {activeTab === "integrations" && <IntegrationsTab />}
        {activeTab === "ai-insights" && <AIInsightsTab />}
      </div>
    </div>
  );
}

// ===== OVERVIEW TAB =====
function OverviewTab({ timeRange }: { timeRange: string }) {
  return (
    <>
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard
          title="Total Revenue"
          value="Rp 72.1M"
          change="+18.2%"
          trend="up"
          icon={<DollarSign className="w-6 h-6" />}
          color="green"
          subtitle="vs last period"
        />
        <KPICard
          title="Active Users"
          value="2,847"
          change="+12.5%"
          trend="up"
          icon={<Users className="w-6 h-6" />}
          color="blue"
          subtitle="engaged users"
        />
        <KPICard
          title="Conversion Rate"
          value="3.8%"
          change="-0.3%"
          trend="down"
          icon={<TrendingUp className="w-6 h-6" />}
          color="purple"
          subtitle="needs attention"
        />
        <KPICard
          title="Total Events"
          value="156,892"
          change="+24.1%"
          trend="up"
          icon={<Activity className="w-6 h-6" />}
          color="orange"
          subtitle="tracked events"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue Trend */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Revenue Trend & Forecast</h2>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Brain className="w-4 h-4" />
              AI Forecast
            </span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `Rp ${(value as number / 1000).toFixed(1)}K`} />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#3b82f6" 
                fill="url(#colorRevenue)"
                name="Actual Revenue"
              />
              <Area 
                type="monotone" 
                dataKey="forecast" 
                stroke="#10b981" 
                fill="url(#colorForecast)"
                strokeDasharray="5 5"
                name="AI Forecast"
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#f59e0b" 
                strokeDasharray="5 5"
                dot={false}
                name="Target"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic & Conversions */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Traffic & Conversions</h2>
            <span className="text-sm text-gray-500">Last 7 days</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="visits" fill="#3b82f6" name="Visits" />
              <Bar dataKey="conversions" fill="#10b981" name="Conversions" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <ActivityItem
              type="success"
              title="Revenue milestone reached"
              description="Monthly revenue exceeded Rp 70M"
              time="2 hours ago"
            />
            <ActivityItem
              type="info"
              title="New user signed up"
              description="Premium plan subscription from Jakarta"
              time="4 hours ago"
            />
            <ActivityItem
              type="warning"
              title="Conversion rate dropped"
              description="Down 0.3% from yesterday"
              time="6 hours ago"
            />
            <ActivityItem
              type="success"
              title="AI insight generated"
              description="New optimization recommendations available"
              time="8 hours ago"
            />
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Traffic Sources</h2>
            <span className="text-sm text-gray-500">Revenue breakdown</span>
          </div>
          <div className="flex items-center justify-between">
            <ResponsiveContainer width="50%" height={200}>
              <PieChart>
                <Pie
                  data={sourceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sourceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-3 flex-1">
              {sourceData.map((source) => (
                <div key={source.name}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <div 
                        className="w-3 h-3 rounded-full mr-2"
                        style={{ backgroundColor: source.color }}
                      />
                      <span className="text-sm text-gray-700">{source.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-900">{source.value}%</span>
                  </div>
                  <div className="text-xs text-gray-500">{source.revenue}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ===== ANALYTICS TAB =====
function AnalyticsTab() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hourly Activity */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Hourly Activity & Revenue</h2>
            <span className="text-sm text-gray-500">Today</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={hourlyActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="events" 
                stroke="#8b5cf6" 
                strokeWidth={2}
                name="Events"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="revenue" 
                stroke="#10b981" 
                strokeWidth={2}
                name="Revenue (K)"
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span>Peak: 16:00 - 20:00 (203 events, Rp 5.8M revenue)</span>
          </div>
        </div>

        {/* Customer Segments */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Customer Segments</h2>
            <span className="text-sm text-gray-500 flex items-center gap-1">
              <Target className="w-4 h-4" />
              AI Clustering
            </span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={customerSegments} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="segment" type="category" />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8">
                {customerSegments.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Overall Performance Score</h2>
            <span className="text-sm text-gray-500">Multi-dimensional analysis</span>
          </div>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={performanceMetrics}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Performance" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">78%</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">92%</div>
              <div className="text-sm text-gray-600">Best: Satisfaction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">68%</div>
              <div className="text-sm text-gray-600">Focus: Conversion</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== INTEGRATIONS TAB =====
function IntegrationsTab() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-blue-900">6 of 50 Data Sources Connected</h3>
            <p className="mt-1 text-blue-800">Connect more sources to unlock deeper insights</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Plus className="w-4 h-4 mr-2" />
            Add Source
          </button>
        </div>
      </div>

      {/* Data Sources List */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Source</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Sync</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Events Today</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dataSources.map((source) => (
              <tr key={source.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <Database className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-sm font-medium text-gray-900">{source.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={source.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {source.lastSync}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                  {source.events}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-700 font-medium mr-3">
                    <Settings className="w-4 h-4 inline mr-1" />
                    Configure
                  </button>
                  <button className="text-gray-600 hover:text-gray-700 font-medium">
                    <RefreshCw className="w-4 h-4 inline mr-1" />
                    Sync
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Available Sources */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Integrations (44 more)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Lazada", "Bukalapak", "Google Ads", "LinkedIn", "Twitter", "YouTube", "WhatsApp", "Telegram"].map((source) => (
            <button
              key={source}
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-center"
            >
              <Plus className="w-5 h-5 mx-auto mb-2 text-gray-400" />
              <span className="text-sm text-gray-700">{source}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ===== AI INSIGHTS TAB =====
function AIInsightsTab() {
  return (
    <div className="space-y-6">
      {aiInsights.map((insight) => (
        <div key={insight.id} className={`bg-white rounded-xl shadow-md p-6 border-l-4 ${
          insight.type === 'opportunity' ? 'border-green-500' :
          insight.type === 'warning' ? 'border-yellow-500' :
          'border-blue-500'
        }`}>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <Brain className={`w-5 h-5 ${
                  insight.type === 'opportunity' ? 'text-green-600' :
                  insight.type === 'warning' ? 'text-yellow-600' :
                  'text-blue-600'
                }`} />
                <h3 className="text-lg font-semibold text-gray-900">{insight.title}</h3>
                <span className={`px-2 py-1 text-xs font-medium rounded ${
                  insight.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {insight.impact} Impact
                </span>
              </div>
              <p className="text-gray-700 mb-3">{insight.description}</p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-sm font-medium text-blue-900">💡 AI Recommendation:</p>
                <p className="text-sm text-blue-800 mt-1">{insight.recommendation}</p>
              </div>
            </div>
            <div className="ml-4 text-center">
              <div className="text-2xl font-bold text-gray-900">{insight.confidence}%</div>
              <div className="text-xs text-gray-500">Confidence</div>
            </div>
          </div>
        </div>
      ))}

      {/* AI Settings */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-purple-900 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              AI Analysis Running
            </h3>
            <p className="mt-1 text-purple-800">Next analysis in 4 hours • Analyzing 156,892 events</p>
          </div>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Configure AI
          </button>
        </div>
      </div>
    </div>
  );
}

// ===== HELPER COMPONENTS =====
function KPICard({ 
  title, 
  value, 
  change, 
  trend, 
  icon, 
  color,
  subtitle
}: { 
  title: string; 
  value: string; 
  change: string; 
  trend: "up" | "down"; 
  icon: React.ReactNode; 
  color: "green" | "blue" | "purple" | "orange";
  subtitle: string;
}) {
  const colorClasses = {
    green: "bg-green-50 text-green-600",
    blue: "bg-blue-50 text-blue-600",
    purple: "bg-purple-50 text-purple-600",
    orange: "bg-orange-50 text-orange-600",
  };

  const trendColor = trend === "up" ? "text-green-600" : "text-red-600";

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-600 text-sm font-medium">{title}</span>
        <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <div>
          <div className="text-3xl font-bold text-gray-900">{value}</div>
          <div className={`flex items-center mt-2 text-sm font-semibold ${trendColor}`}>
            {trend === "up" ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
            {change}
          </div>
          <div className="text-xs text-gray-500 mt-1">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

function ActivityItem({ 
  type, 
  title, 
  description, 
  time 
}: { 
  type: "success" | "info" | "warning"; 
  title: string; 
  description: string; 
  time: string;
}) {
  const typeStyles = {
    success: "bg-green-100 text-green-600",
    info: "bg-blue-100 text-blue-600",
    warning: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
      <div className={`p-2 rounded-full ${typeStyles[type]}`}>
        <Activity className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles = {
    connected: "bg-green-100 text-green-700",
    syncing: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700",
  };

  const icons = {
    connected: <CheckCircle className="w-4 h-4" />,
    syncing: <Loader className="w-4 h-4 animate-spin" />,
    error: <XCircle className="w-4 h-4" />,
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 ${styles[status as keyof typeof styles]}`}>
      {icons[status as keyof typeof icons]}
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}
