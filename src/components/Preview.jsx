import React, { useState } from "react";
import PhoneMockup from "./preview/PhoneMockup";
import confetti from "canvas-confetti";
import { RotateCcw, Smartphone, Sparkles, Layers } from "lucide-react";

const Preview = ({
  content,
  styling,
  activePreviewStep,
  setActivePreviewStep,
}) => {
  // Interactive test states inside the preview
  const [selectedRating, setSelectedRating] = useState(4);
  const [selectedOptions, setSelectedOptions] = useState(["opt-1", "opt-3"]);
  const [comment, setComment] = useState("");
  const [appBackdrop, setAppBackdrop] = useState("modern");

  const handleResetTest = () => {
    setSelectedRating(4);
    setSelectedOptions(["opt-1", "opt-3"]);
    setComment("");
    setActivePreviewStep("initial");
  };

  const handleSubmitFeedback = () => {
    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#4f46e5", "#f59e0b", "#10b981", "#ec4899", "#3b82f6"],
      });
    } catch (e) {
      console.log("Confetti trigger", e);
    }
    setActivePreviewStep("thankYou");
  };

  const steps = [
    { id: "initial", label: "1. Initial" },
    { id: "feedback", label: "2. Feedback" },
    { id: "thankYou", label: "3. Thank You" },
  ];

  return (
    <div className="flex flex-col items-center justify-start w-full h-full py-4 px-2">
      {/* Top Preview Controls Bar */}
      <div className="w-full max-w-85 flex flex-col gap-2.5 mb-4">
        <div className="flex items-center justify-between text-xs">
          <span className="flex items-center gap-1.5 font-semibold text-slate-300">
            <Smartphone className="w-4 h-4 text-indigo-400" />
            Live Mobile Preview
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() =>
                setAppBackdrop((prev) =>
                  prev === "modern" ? "dark" : "modern",
                )
              }
              className="text-[11px] px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              title="Toggle simulated background theme"
            >
              {appBackdrop === "modern" ? "Light App" : "Dark App"}
            </button>
            <button
              type="button"
              onClick={handleResetTest}
              className="flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
              title="Reset interactive user flow to step 1"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Flow</span>
            </button>
          </div>
        </div>

        {/* Step Preview Selector Tabs */}
        <div className="flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs">
          {steps.map((step) => (
            <button
              key={step.id}
              type="button"
              onClick={() => setActivePreviewStep(step.id)}
              className={`flex-1 py-1.5 px-2 rounded-lg text-center font-medium transition-all cursor-pointer ${
                activePreviewStep === step.id
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {step.label}
            </button>
          ))}
        </div>
      </div>

      {/* iPhone 15 Realistic Container */}
      <div className="relative flex items-center justify-center">
        <PhoneMockup
          content={content}
          styling={styling}
          currentStep={activePreviewStep}
          setCurrentStep={setActivePreviewStep}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          comment={comment}
          setComment={setComment}
          onSubmitFeedback={handleSubmitFeedback}
          onResetTest={handleResetTest}
          appBackdrop={appBackdrop}
        />
      </div>

      <p className="text-[11px] text-slate-500 mt-3 text-center max-w-70">
        Interactive simulator: click ratings, tags, or buttons inside the iPhone
        to test full campaign flow.
      </p>
    </div>
  );
};

export default Preview;
