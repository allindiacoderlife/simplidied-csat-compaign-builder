import React, { useState } from "react";
import {
  Sparkles,
  RotateCcw,
  Copy,
  Check,
  Download,
  Layers,
} from "lucide-react";
import {
  THEME_PRESETS,
  INITIAL_CONTENT,
  INITIAL_STYLING,
} from "../constants/defaultState";

const Header = ({
  campaignName,
  setCampaignName,
  content,
  styling,
  setContent,
  setStyling,
  onReset,
}) => {
  const [copied, setCopied] = useState(false);

  const handleApplyTheme = (themeId) => {
    const found = THEME_PRESETS.find((t) => t.id === themeId);
    if (found) {
      setStyling((prev) => ({
        ...prev,
        ...found.styling,
      }));
    }
  };

  const handleCopyConfig = () => {
    const config = {
      campaignName,
      content,
      styling,
    };
    navigator.clipboard.writeText(JSON.stringify(config, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-6 py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Logo & Campaign Title */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-tr from-indigo-600 via-purple-600 to-pink-500 shadow-md shadow-indigo-500/20 text-white font-black text-lg">
            AS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="text-base lg:text-lg font-bold text-white bg-transparent hover:bg-slate-800/60 focus:bg-slate-800 px-2 py-0.5 rounded-lg border border-transparent hover:border-slate-700 focus:border-indigo-500 focus:outline-none transition-all"
                title="Click to rename campaign"
              />
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-sm font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Sync
              </span>
            </div>
            <p className="text-xs text-slate-400 px-2">
              Simplified CSAT Campaign Builder • AppStorys
            </p>
          </div>
        </div>

        {/* Action Controls & Presets */}
        <div className="flex items-center flex-wrap gap-2 w-full md:w-auto justify-end">
          {/* Quick Theme Presets */}
          <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-xl p-1 text-xs">
            <span className="text-slate-400 text-[11px] px-2 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Theme:
            </span>
            <select
              onChange={(e) => handleApplyTheme(e.target.value)}
              defaultValue="indigo"
              className="bg-slate-800 text-slate-200 text-xs py-1 px-2.5 rounded-lg border border-slate-700/60 focus:outline-none focus:border-indigo-500 cursor-pointer"
            >
              {THEME_PRESETS.map((theme) => (
                <option key={theme.id} value={theme.id}>
                  {theme.name}
                </option>
              ))}
            </select>
          </div>

          {/* Copy Config JSON */}
          <button
            onClick={handleCopyConfig}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-medium border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer"
            title="Copy campaign configuration as JSON"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Export JSON</span>
              </>
            )}
          </button>

          {/* Reset Button */}
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-rose-950/40 text-slate-300 hover:text-rose-300 text-xs font-medium border border-slate-800 hover:border-rose-900/50 transition-colors cursor-pointer"
            title="Reset to default settings"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
