import React from "react";
import { Wifi, Battery, Signal } from "lucide-react";
import CsatPopup from "./CsatPopup";

const PhoneMockup = ({
  content,
  styling,
  currentStep,
  setCurrentStep,
  selectedRating,
  setSelectedRating,
  selectedOptions,
  setSelectedOptions,
  comment,
  setComment,
  onSubmitFeedback,
  onResetTest,
  appBackdrop = "modern",
}) => {
  return (
    <div className="relative w-[320px] h-[650px] mx-auto select-none drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]">
      {/* 1. SCREEN CONTAINER (Sits inside the iPhone 15 frame) */}
      <div className="absolute top-[12px] bottom-[12px] left-[12px] right-[12px] rounded-[42px] overflow-hidden bg-slate-900 z-10 flex flex-col justify-between">
        
        {/* Simulated Mobile App Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {appBackdrop === "modern" ? (
            <div className="w-full h-full bg-gradient-to-b from-slate-100 via-slate-50 to-slate-200 p-4 text-slate-800 flex flex-col">
              {/* App Fake Nav */}
              <div className="flex items-center justify-between pt-10 pb-3 border-b border-slate-200/80">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 text-[10px] text-white font-bold flex items-center justify-center">
                    JD
                  </div>
                  <div>
                    <p className="text-[11px] font-bold leading-tight">Welcome back</p>
                    <p className="text-[9px] text-slate-500">Alex Morgan</p>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 text-xs">
                  🔔
                </div>
              </div>

              {/* Fake App Cards */}
              <div className="space-y-2.5 mt-3">
                <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-200/60">
                  <div className="h-2.5 w-20 bg-slate-200 rounded-full mb-2" />
                  <div className="h-4 w-32 bg-indigo-500/20 rounded-full mb-1" />
                  <div className="h-2 w-full bg-slate-100 rounded-full mt-2" />
                </div>

                <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white shadow-sm">
                  <p className="text-[10px] opacity-80">Active Subscription</p>
                  <p className="text-xs font-bold mt-0.5">Pro Enterprise Tier</p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200/60">
                    <div className="w-5 h-5 rounded-lg bg-emerald-100 mb-1" />
                    <div className="h-2 w-12 bg-slate-200 rounded-full" />
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200/60">
                    <div className="w-5 h-5 rounded-lg bg-amber-100 mb-1" />
                    <div className="h-2 w-12 bg-slate-200 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full h-full bg-slate-950 p-4 text-slate-100 flex flex-col">
              <div className="pt-10 flex items-center justify-between pb-3 border-b border-slate-800">
                <p className="text-xs font-bold">AppStorys Demo</p>
                <span className="text-[10px] text-indigo-400">Live View</span>
              </div>
            </div>
          )}

          {/* Dimmed Overlay when popup is open */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        {/* Status Bar */}
        <div className="relative z-10 pt-3 px-6 flex items-center justify-between text-slate-800 text-[11px] font-semibold select-none pointer-events-none">
          <span className="font-semibold tracking-tight text-[12px]">9:41</span>
          <div className="flex items-center gap-1.5 text-slate-800">
            <Signal className="w-3.5 h-3.5" />
            <Wifi className="w-3.5 h-3.5" />
            <Battery className="w-4 h-4" />
          </div>
        </div>

        {/* CSAT Campaign Popup (Interactive) */}
        <div
          className={`relative z-20 w-full flex flex-col ${
            styling.position === "bottom" ? "justify-end mt-auto" : "justify-center my-auto px-2"
          }`}
        >
          <CsatPopup
            content={content}
            styling={styling}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            selectedOptions={selectedOptions}
            setSelectedOptions={setSelectedOptions}
            comment={comment}
            setComment={setComment}
            onSubmitFeedback={onSubmitFeedback}
            onResetTest={onResetTest}
          />
        </div>

        {/* Home Indicator Bar */}
        <div className="relative z-30 pb-2 flex justify-center pointer-events-none">
          <div className="w-28 h-1 bg-slate-900/50 rounded-full" />
        </div>
      </div>

      {/* 2. IPHONE 15 FRAME OVERLAY (using public/Iphone 15.png) */}
      <img
        src="/Iphone 15.png"
        alt="iPhone 15 Frame Mockup"
        className="absolute inset-0 w-full h-full object-fill pointer-events-none z-30 select-none drop-shadow-xl"
      />
    </div>
  );
};

export default PhoneMockup;
