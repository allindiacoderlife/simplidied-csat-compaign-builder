import React, { useState } from "react";
import InitialFeedbackForm from "./content/InitialFeedbackForm";
import FeedbackPageForm from "./content/FeedbackPageForm";
import ThankYouPageForm from "./content/ThankYouPageForm";
import { MessageSquarePlus, Sliders, CheckCircle2, Eye } from "lucide-react";

const Content = ({ content, setContent, activePreviewStep, setActivePreviewStep }) => {
  const [activeSubTab, setActiveSubTab] = useState("initial");

  const handleSubTabChange = (stepKey) => {
    setActiveSubTab(stepKey);
    // Also auto-switch preview step for maximum UX convenience
    setActivePreviewStep(stepKey);
  };

  const tabs = [
    {
      id: "initial",
      label: "Initial Step",
      icon: MessageSquarePlus,
      badge: "Prompt",
    },
    {
      id: "feedback",
      label: "Feedback Step",
      icon: Sliders,
      badge: "Rating & Tags",
    },
    {
      id: "thankYou",
      label: "Thank You Step",
      icon: CheckCircle2,
      badge: "Celebration",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* Sub-navigation tabs */}
      <div className="flex items-center gap-1.5 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleSubTabChange(tab.id)}
              className={`flex-1 flex flex-col items-center sm:flex-row sm:justify-center gap-1.5 py-2.5 px-3 rounded-xl font-medium text-xs transition-all cursor-pointer ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <div className="flex flex-col text-left">
                <span>{tab.label}</span>
                <span className={`text-[10px] hidden md:inline ${isActive ? "text-indigo-200" : "text-slate-500"}`}>
                  {tab.badge}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Form Content Cards */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 shadow-lg backdrop-blur-sm">
        {activeSubTab === "initial" && (
          <InitialFeedbackForm
            data={content.initial}
            onChange={(updated) =>
              setContent((prev) => ({ ...prev, initial: updated }))
            }
          />
        )}

        {activeSubTab === "feedback" && (
          <FeedbackPageForm
            data={content.feedback}
            onChange={(updated) =>
              setContent((prev) => ({ ...prev, feedback: updated }))
            }
          />
        )}

        {activeSubTab === "thankYou" && (
          <ThankYouPageForm
            data={content.thankYou}
            onChange={(updated) =>
              setContent((prev) => ({ ...prev, thankYou: updated }))
            }
          />
        )}
      </div>

      {/* Helper notice */}
      <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-indigo-950/20 border border-indigo-900/30 text-indigo-300 text-xs">
        <Eye className="w-4 h-4 shrink-0 text-indigo-400" />
        <span>
          Editing this tab automatically updates the mobile preview on the right instantly in real time.
        </span>
      </div>
    </div>
  );
};

export default Content;
