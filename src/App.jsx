import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Styling from "./components/Styling";
import Preview from "./components/Preview";
import { INITIAL_CONTENT, INITIAL_STYLING } from "./constants/defaultState";
import { FileText, Palette, Smartphone, Sparkles } from "lucide-react";

const App = () => {
  const [campaignName, setCampaignName] = useState("Customer Onboarding CSAT");
  const [activeTab, setActiveTab] = useState("content"); // "content" | "styling"
  const [activePreviewStep, setActivePreviewStep] = useState("initial"); // "initial" | "feedback" | "thankYou"
  const [content, setContent] = useState(INITIAL_CONTENT);
  const [styling, setStyling] = useState(INITIAL_STYLING);

  const handleReset = () => {
    if (
      window.confirm("Reset campaign configuration and styling to defaults?")
    ) {
      setContent(INITIAL_CONTENT);
      setStyling(INITIAL_STYLING);
      setActivePreviewStep("initial");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Inter',sans-serif] selection:bg-indigo-500 selection:text-white">
      {/* Top Navbar */}
      <Header
        campaignName={campaignName}
        setCampaignName={setCampaignName}
        content={content}
        styling={styling}
        setContent={setContent}
        setStyling={setStyling}
        onReset={handleReset}
      />

      {/* Main Workspace Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column: Configuration Controls (7 cols on lg) */}
        <section className="lg:col-span-7 flex flex-col gap-5 order-2 lg:order-1">
          {/* Main Tabs: Content vs Styling */}
          <div className="flex items-center p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("content")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                activeTab === "content"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Content Configuration</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("styling")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                activeTab === "styling"
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <Palette className="w-4 h-4" />
              <span>Styling & Design</span>
            </button>
          </div>

          {/* Active Panel View */}
          <div>
            {activeTab === "content" ? (
              <Content
                content={content}
                setContent={setContent}
                activePreviewStep={activePreviewStep}
                setActivePreviewStep={setActivePreviewStep}
              />
            ) : (
              <Styling styling={styling} setStyling={setStyling} />
            )}
          </div>
        </section>

        {/* Right Column: Sticky Live Mobile Preview (5 cols on lg) */}
        <aside className="lg:col-span-5 flex flex-col items-center top-20 order-1 lg:order-2">
          <div className="w-full bg-slate-900/50 border border-slate-800/80 rounded-3xl p-4 backdrop-blur-md shadow-2xl flex flex-col items-center">
            <Preview
              content={content}
              styling={styling}
              activePreviewStep={activePreviewStep}
              setActivePreviewStep={setActivePreviewStep}
            />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default App;
