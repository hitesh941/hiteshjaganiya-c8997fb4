import { useLayoutEffect } from "react";
import GoogleAdsVsMetaAdsAhmedabad from "./GoogleAdsVsMetaAdsAhmedabad";

const OLD_BUDGET_PARAGRAPH =
  "For Google Ads to generate meaningful data, I'd suggest a minimum of ₹15,000-20,000 a month in actual ad spend for most local service categories — below that, you're often getting too few clicks to draw real conclusions, especially in competitive niches.";

const NEW_BUDGET_PARAGRAPH =
  "For Google Ads, I'd generally recommend at least ₹30,000-50,000 a month in actual ad spend for most Ahmedabad businesses that want meaningful lead-generation data and enough room to optimize. That's roughly ₹1,000-1,700 a day. In highly competitive categories such as real estate, healthcare, legal, education, or high-ticket services, ₹50,000-1,00,000+ a month can be a more realistic starting point. A ₹15,000-20,000 monthly budget can still be useful as a small test, but I'd treat it as a limited experiment rather than a serious growth budget.";

const GoogleAdsVsMetaAdsAhmedabadBudgetFix = () => {
  useLayoutEffect(() => {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      if (paragraph.textContent?.trim() === OLD_BUDGET_PARAGRAPH) {
        paragraph.textContent = NEW_BUDGET_PARAGRAPH;
      }
    });
  });

  return <GoogleAdsVsMetaAdsAhmedabad />;
};

export default GoogleAdsVsMetaAdsAhmedabadBudgetFix;
