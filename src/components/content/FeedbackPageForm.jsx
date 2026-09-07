import React from "react";
import {
  Star,
  Hash,
  Plus,
  Trash2,
  Sliders,
  CheckSquare,
  MessageSquare,
} from "lucide-react";

const FeedbackPageForm = ({ data, onChange }) => {
  const handleRatingTypeChange = (type) => {
    onChange({ ...data, ratingType: type });
  };

  const handleAddOption = () => {
    const newOption = {
      id: `opt-${Date.now()}`,
      label: `Option ${data.options.length + 1}`,
    };
    onChange({
      ...data,
      options: [...data.options, newOption],
    });
  };

  const handleUpdateOption = (id, newLabel) => {
    onChange({
      ...data,
      options: data.options.map((opt) =>
        opt.id === id ? { ...opt, label: newLabel } : opt,
      ),
    });
  };

  const handleDeleteOption = (id) => {
    if (data.options.length <= 1) return; // keep at least 1 option or allow empty with caution
    onChange({
      ...data,
      options: data.options.filter((opt) => opt.id !== id),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm pb-1 border-b border-slate-800">
        <Sliders className="w-4 h-4" />
        <span>Step 2: Rating & Dynamic Feedback Options</span>
      </div>

      {/* Rating Type Selection */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Rating Representation <span className="text-rose-400">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => handleRatingTypeChange("stars")}
            className={`flex items-center justify-center gap-2.5 p-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
              data.ratingType === "stars"
                ? "bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-sm"
                : "bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Star
              className={`w-4 h-4 ${data.ratingType === "stars" ? "fill-amber-400 text-amber-400" : "text-slate-400"}`}
            />
            <span>Star Rating (1–5)</span>
          </button>

          <button
            type="button"
            onClick={() => handleRatingTypeChange("numbers")}
            className={`flex items-center justify-center gap-2.5 p-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
              data.ratingType === "numbers"
                ? "bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-sm"
                : "bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800"
            }`}
          >
            <Hash className="w-4 h-4 text-indigo-400" />
            <span>Numbered Scale (1–5)</span>
          </button>
        </div>
      </div>

      {/* Dynamic Options Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <div>
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Feedback Categories / Options
            </label>
            <p className="text-[11px] text-slate-400">
              Users can select tags that influenced their score.
            </p>
          </div>
          <button
            type="button"
            onClick={handleAddOption}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Option</span>
          </button>
        </div>

        <div className="space-y-2 mt-2">
          {data.options.map((opt, index) => (
            <div
              key={opt.id}
              className="flex items-center gap-2 group bg-slate-800/60 p-1.5 pl-3 rounded-xl border border-slate-700/60 hover:border-slate-600 transition-colors"
            >
              <span className="text-xs font-mono text-slate-500 w-4">
                {index + 1}.
              </span>
              <input
                type="text"
                value={opt.label}
                onChange={(e) => handleUpdateOption(opt.id, e.target.value)}
                placeholder="Option label"
                className="flex-1 bg-transparent text-slate-100 text-sm focus:outline-none placeholder:text-slate-500"
              />
              <button
                type="button"
                onClick={() => handleDeleteOption(opt.id)}
                disabled={data.options.length <= 1}
                className="p-1.5 text-slate-400 hover:text-rose-400 disabled:opacity-30 disabled:hover:text-slate-400 rounded-lg hover:bg-rose-500/10 transition-colors cursor-pointer"
                title={
                  data.options.length <= 1
                    ? "Minimum 1 option required"
                    : "Delete option"
                }
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Comment Toggle */}
      <div className="pt-2 border-t border-slate-800/80">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-indigo-400" />
            <div>
              <span className="text-xs font-semibold text-slate-200">
                Additional Comment Field
              </span>
              <p className="text-[11px] text-slate-400">
                Allow customers to leave written feedback or explanations.
              </p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={data.showComment}
              onChange={(e) =>
                onChange({ ...data, showComment: e.target.checked })
              }
              className="sr-only peer"
            />
            <div className="w-10 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
          </label>
        </div>

        {data.showComment && (
          <div className="mt-3 pl-6 border-l-2 border-indigo-500/40">
            <label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Comment Box Placeholder Text
            </label>
            <input
              type="text"
              value={data.commentPlaceholder}
              onChange={(e) =>
                onChange({ ...data, commentPlaceholder: e.target.value })
              }
              placeholder="e.g. What made your experience good or bad? (Optional)"
              className="w-full bg-slate-800/90 text-slate-100 text-sm px-3 py-2 rounded-xl border border-slate-700/80 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
            />
          </div>
        )}
      </div>

      {/* Submit Button Text */}
      <div className="pt-2 border-t border-slate-800/80">
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Submit Button Label
        </label>
        <input
          type="text"
          value={data.submitButtonText}
          onChange={(e) =>
            onChange({ ...data, submitButtonText: e.target.value })
          }
          placeholder="e.g. Submit Feedback"
          className="w-full bg-slate-800/90 text-slate-100 text-sm px-3 py-2.5 rounded-xl border border-slate-700/80 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-500"
        />
      </div>
    </div>
  );
};

export default FeedbackPageForm;
