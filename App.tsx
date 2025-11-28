import React from 'react';
import TopologyMap from './components/TopologyMap';
import Legend from './components/Legend';
import { Settings, ExternalLink } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-slate-50">
      {/* Header */}
      <header className="flex-none h-16 bg-white border-b border-gray-200 shadow-sm px-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Settings className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">江北研创园人工智能平台网路拓扑</h1>
            <p className="text-xs text-slate-500">Datacenter Topology Visualization</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
           <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <ExternalLink size={16} />
              Export Config
           </button>
           <div className="h-8 w-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs">
              AD
           </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden">
        <Legend />
        <TopologyMap />
      </main>
    </div>
  );
};

export default App;