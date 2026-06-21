'use client';

import { useEffect, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { IconButton, Tooltip } from "@mui/material";
import { FiSettings } from "react-icons/fi";

export type ConsentState = "loading" | "accepted" | "rejected" | "prompt";

export const CONSENT_STORAGE_KEY = "analytics-consent";

interface AnalyticsConsentProps {
  readonly gaId: string;
}

function AnalyticsConsent({ gaId }: AnalyticsConsentProps) {
  const [consent, setConsent] = useState<ConsentState>("loading");

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    } catch {
      // localStorage unavailable (private mode / disabled) -> prompt
    }

    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
    } else {
      setConsent("prompt");
    }
  }, []);

  const persist = (value: Exclude<ConsentState, "loading" | "prompt">) => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, value);
    } catch {
      // ignore write failures; in-memory decision still applies for this session
    }
    setConsent(value);
  };

  const handleAccept = () => persist("accepted");
  const handleReject = () => persist("rejected");
  const handleReopen = () => setConsent("prompt");

  if (consent === "loading") {
    return null;
  }

  if (consent === "accepted") {
    return (
      <>
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics gaId={gaId} />
        <Tooltip title="Cookie settings" arrow>
          <IconButton
            onClick={handleReopen}
            data-testid="cookie-settings"
            aria-label="Reopen cookie consent settings"
            size="small"
            className="!fixed bottom-4 right-4 z-40 !bg-white dark:!bg-gray-900 !border !border-gray-200 dark:!border-gray-700 !text-gray-700 dark:!text-gray-300"
          >
            <FiSettings size={18} />
          </IconButton>
        </Tooltip>
      </>
    );
  }

  if (consent === "rejected") {
    return (
      <Tooltip title="Cookie settings" arrow>
        <IconButton
          onClick={handleReopen}
          data-testid="cookie-settings"
          aria-label="Reopen cookie consent settings"
          size="small"
          className="!fixed bottom-4 right-4 z-40 !bg-white dark:!bg-gray-900 !border !border-gray-200 dark:!border-gray-700 !text-gray-700 dark:!text-gray-300"
        >
          <FiSettings size={18} />
        </IconButton>
      </Tooltip>
    );
  }

  // consent === "prompt"
  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      data-testid="cookie-banner"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-4 md:p-5"
      style={{ animation: "fadeInUp 0.6s ease-out both" }}
    >
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
        This site uses anonymous analytics (Google Analytics, Vercel Analytics,
        and Vercel Speed Insights) to understand how pages are used. No personal
        data is sold. Accept to enable analytics, or reject to keep them off.
      </p>
      <div className="flex gap-3 justify-end">
        <button
          type="button"
          onClick={handleReject}
          data-testid="cookie-reject"
          aria-label="Reject analytics cookies"
          className="px-4 py-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
        >
          Reject
        </button>
        <button
          type="button"
          onClick={handleAccept}
          data-testid="cookie-accept"
          aria-label="Accept analytics cookies"
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200 text-sm font-medium"
        >
          Accept
        </button>
      </div>
    </div>
  );
}

export default AnalyticsConsent;