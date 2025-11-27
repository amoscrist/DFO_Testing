// frontend/components/Sidebar.tsx
// Updated ABD Platform Sidebar with Pipeline Builder

import { GitBranch, Plus, LayoutDashboard, Code, Rocket, BarChart3, Shield, Settings } from 'lucide-react'

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-800 border-r border-slate-700 p-4">
      {/* Logo/Title */}
      <div className="mb-8">
        <h1 className="text-xl font-bold">ABD Platform</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {/* Dashboard */}
        <a href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </a>
        
        {/* Pipeline Section with Create Pipeline button */}
        <div className="pt-2">
          <a href="/pipelines" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors">
            <GitBranch size={20} />
            <span>Pipelines</span>
          </a>
          
          {/* CREATE PIPELINE - Highlighted button */}
          <a href="/pipeline-builder" className="flex items-center gap-3 px-4 py-3 ml-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
            <Plus size={20} />
            <span className="font-medium">Create Pipeline</span>
          </a>
        </div>
        
        {/* Code Review */}
        <a href="/code-review" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors">
          <Code size={20} />
          <span>Code Review</span>
        </a>

        {/* Deployments */}
        <a href="/deployments" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors">
          <Rocket size={20} />
          <span>Deployments</span>
        </a>

        {/* Insights */}
        <a href="/insights" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors">
          <BarChart3 size={20} />
          <span>Insights</span>
        </a>

        {/* Admin */}
        <a href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors">
          <Shield size={20} />
          <span>Admin</span>
        </a>

        {/* Settings */}
        <a href="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </a>
      </nav>
    </div>
  )
}

// ============================================
// FEATURES:
// ============================================
// ✅ All menu items with icons (lucide-react)
// ✅ "Create Pipeline" as highlighted blue button
// ✅ Indented under Pipelines section
// ✅ Smooth hover transitions
// ✅ Clean, modern design
// ✅ Responsive icons

// ============================================
// USAGE:
// ============================================
// This file goes in: frontend/components/Sidebar.tsx
// Already using lucide-react (included in your package.json)
// Click "Create Pipeline" to open /pipeline-builder

// ============================================
// STYLING NOTES:
// ============================================
// - bg-slate-800: Dark background
// - bg-blue-600: Blue highlight for Create button
// - hover:bg-slate-700: Hover effect for menu items
// - hover:bg-blue-700: Hover effect for Create button
// - ml-4: Indent Create Pipeline button
// - transition-colors: Smooth color transitions
