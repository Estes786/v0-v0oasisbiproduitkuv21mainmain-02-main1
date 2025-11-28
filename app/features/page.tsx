import Link from "next/link";
import { 
  BarChart3, Brain, Zap, Shield, Users, TrendingUp, Database, 
  Eye, Clock, Award, Target, Layers, GitBranch, Filter,
  Cpu, Cloud, Lock, RefreshCw, Bell, FileText, Settings,
  CheckCircle, Activity, DollarSign, PieChart, LineChart
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Fitur Lengkap Business Intelligence
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Platform BI paling komprehensif dengan 50+ fitur untuk akselerasi revenue dan transformasi data Anda
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Real-time Analytics */}
          <FeatureSection
            icon={<BarChart3 className="w-12 h-12" />}
            title="Real-time Analytics & Visualization"
            description="Monitor seluruh aspek bisnis Anda dalam satu dashboard yang powerful dan real-time"
            features={[
              {
                icon: <Activity />,
                title: "Live Data Streaming",
                description: "Data processing dengan latency <2 detik menggunakan Apache Kafka dan WebSocket untuk real-time updates tanpa refresh"
              },
              {
                icon: <LineChart />,
                title: "Interactive Charts",
                description: "15+ jenis chart interaktif: Line, Bar, Area, Pie, Doughnut, Radar, Scatter, Heatmap dengan drill-down capabilities"
              },
              {
                icon: <Target />,
                title: "Custom Metrics Builder",
                description: "Buat custom metrics dengan formula builder (SUM, AVG, COUNT, RATIO) dan conditional logic tanpa coding"
              },
              {
                icon: <Filter />,
                title: "Advanced Filtering",
                description: "Multi-dimensional filtering: by date range, customer segment, product category, channel, geography dengan saved filter presets"
              }
            ]}
          />

          {/* AI-Powered Insights */}
          <FeatureSection
            icon={<Brain className="w-12 h-12" />}
            title="AI-Powered Insights & Predictions"
            description="Machine Learning dan AI untuk insights otomatis dan prediksi akurat"
            features={[
              {
                icon: <Cpu />,
                title: "Anomaly Detection",
                description: "Algoritma Isolation Forest dan LSTM Neural Networks untuk detect anomali (sudden spikes, unusual patterns) dalam real-time dengan confidence score"
              },
              {
                icon: <TrendingUp />,
                title: "Revenue Forecasting",
                description: "Facebook Prophet + ARIMA models untuk prediksi revenue next 7/30/90 days dengan 85-95% accuracy dan confidence intervals"
              },
              {
                icon: <Users />,
                title: "Customer Segmentation",
                description: "K-Means clustering dan RFM analysis untuk identify high-value segments, churn prediction (Logistic Regression), dan personalization opportunities"
              },
              {
                icon: <Award />,
                title: "Automated Recommendations",
                description: "Recommendation engine berbasis Collaborative Filtering untuk product recommendations, marketing optimization, dan operational improvements"
              }
            ]}
          />

          {/* Multi-Touch Attribution */}
          <FeatureSection
            icon={<Zap className="w-12 h-12" />}
            title="Multi-Touch Attribution & Journey Mapping"
            description="Track complete customer journey dari first touch hingga conversion"
            features={[
              {
                icon: <GitBranch />,
                title: "5 Attribution Models",
                description: "First-touch, Last-touch, Linear, Time-decay, dan Markov Chain attribution models dengan custom weighting options"
              },
              {
                icon: <Target />,
                title: "Journey Visualization",
                description: "Sankey diagrams dan funnel visualization untuk visualize customer journey across 10+ touchpoints dengan conversion rates per stage"
              },
              {
                icon: <DollarSign />,
                title: "ROI Calculation",
                description: "Automatic ROAS (Return on Ad Spend) dan LTV/CAC ratio calculation per channel, campaign, dan customer segment"
              },
              {
                icon: <PieChart />,
                title: "Channel Performance",
                description: "Compare performance across Organic, Paid Ads, Social, Email, Referral dengan contribution analysis dan budget optimization recommendations"
              }
            ]}
          />

          {/* Enterprise Security */}
          <FeatureSection
            icon={<Shield className="w-12 h-12" />}
            title="Enterprise-Grade Security & Compliance"
            description="Keamanan tingkat enterprise dengan compliance penuh"
            features={[
              {
                icon: <Lock />,
                title: "Data Encryption",
                description: "AES-256 encryption at rest, TLS 1.3 in transit, dan end-to-end encryption untuk sensitive data dengan key rotation policy"
              },
              {
                icon: <Users />,
                title: "Row-Level Security",
                description: "Granular access control: User dapat melihat data sesuai role (Admin, Manager, Analyst) dengan custom permission matrix"
              },
              {
                icon: <CheckCircle />,
                title: "Compliance Ready",
                description: "GDPR compliant dengan data residency options, SOC2 Type II audit ready, ISO 27001 certified infrastructure, dan Indonesian Law No. 27/2022 compliant"
              },
              {
                icon: <Activity />,
                title: "Audit Logging",
                description: "Complete audit trail: Track semua data access, changes, exports dengan tamper-proof logs untuk compliance reporting"
              }
            ]}
          />

          {/* Team Collaboration */}
          <FeatureSection
            icon={<Users className="w-12 h-12" />}
            title="Team Collaboration & Workflow"
            description="Kolaborasi tim yang seamless dengan sharing dan commenting"
            features={[
              {
                icon: <Layers />,
                title: "Shared Dashboards",
                description: "Share dashboards dengan custom access levels (View, Comment, Edit), embed links, dan scheduled snapshots via email"
              },
              {
                icon: <FileText />,
                title: "Annotations & Comments",
                description: "Add context ke charts dengan annotations, thread-based comments, dan @mentions untuk team discussions"
              },
              {
                icon: <Settings />,
                title: "Role-Based Access",
                description: "Define custom roles: Admin (full access), Manager (edit dashboards), Analyst (view + comment), Viewer (view only) dengan granular permissions"
              },
              {
                icon: <Bell />,
                title: "Team Notifications",
                description: "Real-time notifications untuk dashboard changes, comments, anomalies via email, Slack, Teams, atau WhatsApp"
              }
            ]}
          />

          {/* Revenue Analytics */}
          <FeatureSection
            icon={<TrendingUp className="w-12 h-12" />}
            title="Revenue Analytics & Growth Tracking"
            description: "Track revenue dari setiap aspek bisnis dengan detail mendalam"
            features={[
              {
                icon: <DollarSign />,
                title: "Revenue Breakdown",
                description: "Analyze revenue by: Product/SKU, Channel (Organic, Paid, Social), Customer segment, Geography, Time period dengan cohort analysis"
              },
              {
                icon: <LineChart />,
                title: "MRR & ARR Tracking",
                description: "Monthly Recurring Revenue (MRR) dan Annual Recurring Revenue (ARR) tracking dengan new MRR, expansion, churn, dan reactivation metrics"
              },
              {
                icon: <TrendingUp />,
                title: "Growth Metrics",
                description: "Track key SaaS metrics: Customer Acquisition Cost (CAC), Customer Lifetime Value (LTV), Churn Rate, Net Revenue Retention (NRR)"
              },
              {
                icon: <Target />,
                title: "Revenue Forecasting",
                description: "AI-powered revenue predictions dengan scenario analysis (Best/Expected/Worst case) dan what-if modeling"
              }
            ]}
          />

          {/* Data Integrations */}
          <FeatureSection
            icon={<Database className="w-12 h-12" />}
            title="Unlimited Data Integrations"
            description="Connect ke 50+ data sources untuk unified view"
            features={[
              {
                icon: <Cloud />,
                title="No-Code Connectors",
                description:"Pre-built connectors: Google Analytics, Facebook Ads, Instagram, TikTok Ads, Shopee, Tokopedia, Lazada, Bukalapak dengan one-click setup"
              },
              {
                icon:<Database />,
                title:"Database Connections",
                description:"Direct connection ke: PostgreSQL, MySQL, MongoDB, BigQuery, Redshift, Snowflake dengan incremental sync"
              },
              {
                icon:<RefreshCw />,
                title:"Real-time Sync",
                description:"Automatic data sync every 15 minutes (Pro), 5 minutes (Business), or real-time (Enterprise) dengan failure retry logic"
              },
              {
                icon:<Zap />,
                title:"Custom API Integration",
                description:"REST API + Webhooks untuk custom integrations dengan rate limiting, authentication, dan error handling"
              }
            ]}
          />

          {/* Custom Reports */}
          <FeatureSection
            icon:<Eye className="w-12 h-12" />,
            title="Custom Reports & Exports"
            description="Generate laporan sesuai kebutuhan dan schedule delivery"
            features={[
              {
                icon:<FileText />,
                title:"Report Builder",
                description:"Drag-and-drop report builder dengan 20+ chart types, tables, text blocks, dan images. Save as templates untuk reuse"
              },
              {
                icon:<Clock />,
                title:"Scheduled Delivery",
                description:"Auto-generate dan kirim reports: Daily, Weekly, Monthly via Email, Slack, atau download link dengan custom recipients"
              },
              {
                icon:<Download />,
                title:"Export Formats",
                description:"Export ke: PDF (with branding), Excel (with pivot tables), CSV (raw data), PowerPoint (with charts), JSON (API)"
              },
              {
                icon:<Eye />,
                title:"Executive Summaries",
                description:"Auto-generate executive summaries dengan key insights, trends, dan recommendations berbasis AI"
              }
            ]}
          />

          {/* Real-time Alerts */}
          <FeatureSection
            icon:<Bell className="w-12 h-12" />,
            title:"Real-time Alerts & Monitoring"
            description:"Notifikasi instan untuk events penting dan anomalies"
            features={[
              {
                icon:<Activity />,
                title:"Smart Alerts",
                description:"Create alerts based on: Threshold (revenue > X), Percentage change (conversion drop > 10%), Anomalies (unexpected spikes)"
              },
              {
                icon:<Target />,
                title:"Multi-Channel Delivery",
                description:"Receive alerts via: Email, SMS, WhatsApp, Slack, Microsoft Teams, Discord, PagerDuty dengan priority levels"
              },
              {
                icon:<Filter />,
                title:"Alert Rules Engine",
                description:"Complex alert logic: IF revenue < target AND conversion drops > 5% THEN notify with AND/OR/NOT operators"
              },
              {
                icon:<Bell />,
                title:"Alert History",
                description:"Track all alerts with: Trigger conditions, Timestamp, Resolution status, Impact assessment untuk postmortem analysis"
              }
            ]}
          />

        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-primary-600" />
                Performance
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Query response &lt;2s (P95)</li>
                <li>• Dashboard load &lt;1s</li>
                <li>• Real-time updates &lt;500ms</li>
                <li>• 10M+ events/day processing</li>
                <li>• 99.9% uptime SLA</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-primary-600" />
                Data Handling
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Unlimited events storage</li>
                <li>• 13-month data retention</li>
                <li>• Columnar data storage</li>
                <li>• Automatic data archival</li>
                <li>• GDPR-compliant deletion</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary-600" />
                Security
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• SOC2 Type II compliant</li>
                <li>• ISO 27001 certified</li>
                <li>• GDPR & CCPA compliant</li>
                <li>• Indonesian Law No. 27/2022</li>
                <li>• Penetration tested quarterly</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Siap Transform Data Anda?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Mulai free trial 7 hari tanpa credit card
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/pricing"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors"
            >
              Mulai Gratis Sekarang
            </Link>
            <Link 
              href="/dashboard"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Lihat Demo Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureSection({ 
  icon, 
  title, 
  description, 
  features 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}) {
  return (
    <div className="mb-20">
      <div className="flex items-start gap-4 mb-8">
        <div className="bg-primary-100 p-4 rounded-xl text-primary-600">
          {icon}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div className="flex items-start gap-3">
              <div className="bg-primary-50 p-2 rounded-lg text-primary-600 flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Download = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);
