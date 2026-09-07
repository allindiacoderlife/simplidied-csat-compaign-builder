import React from "react";
import { MessageSquarePlus } from "lucide-react";

const InitialFeedbackForm = ({ data, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm pb-1 border-b border-slate-800">
        <MessageSquarePlus className="w-4 h-4" />
        <span>Step 1: Initial Prompt Configuration</span>
      </div>

      {/* Title */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Initial Title <span className="text-rose-400">*</span>
        </label>
        <input
          type="text"
          value={data.title}
          onChange={(e) => onChange({ ...data, title: e.target.value })}
          placeholder="e.g. How was your experience?"
          className="w-full bg-slate-800/90 text-slate-100 text-sm px-3 py-2.5 rounded-xl border border-slate-700/80 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
        />
        <p className="text-[11px] text-slate-400 mt-1">
          The main headline greeting shown to customers on the first prompt.
        </p>
      </div>

      {/* Subtitle */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Initial Subtitle
        </label>
        <textarea
          rows={2}
          value={data.subtitle}
          onChange={(e) => onChange({ ...data, subtitle: e.target.value })}
          placeholder="e.g. Help us improve by sharing your thoughts."
          className="w-full bg-slate-800/90 text-slate-100 text-sm px-3 py-2 rounded-xl border border-slate-700/80 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500 resize-none"
        />
        <p className="text-[11px] text-slate-400 mt-1">
          Supporting copy explaining the purpose or value of their feedback.
        </p>
      </div>

      {/* Button Text */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Call-To-Action Button Text
        </label>
        <input
          type="text"
          value={data.buttonText || "Give Feedback"}
          onChange={(e) => onChange({ ...data, buttonText: e.target.value })}
          placeholder="e.g. Give Feedback"
          className="w-full bg-slate-800/90 text-slate-100 text-sm px-3 py-2.5 rounded-xl border border-slate-700/80 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
        />
      </div>
    </div>
  );
};

export default InitialFeedbackForm;
