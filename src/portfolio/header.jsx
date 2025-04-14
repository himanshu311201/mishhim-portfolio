import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const tabs = [
  "About",
  "Scholarly & Creative Works",
  "Research",
  "Service & Leadership",
  "Teaching",
];

export default function HeaderNav() {
  const [activeTab, setActiveTab] = useState("About");

  return (
    <div className="border-t border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center">
        <button className="flex items-center text-sm text-blue-900 hover:underline mr-8">
          <ArrowLeft className="w-4 h-4 mr-1" />
          all experts
        </button>

        <nav className="flex space-x-6 text-sm font-medium text-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative pb-1 ${
                activeTab === tab
                  ? "text-black font-semibold"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-600 rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
