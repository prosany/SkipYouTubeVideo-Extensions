var overlayAds = document.querySelectorAll(".ytp-ad-overlay-slot");
var skipButton = document.querySelectorAll(".ytp-ad-skip-button");

if (overlayAds) {
  overlayAds.forEach((overlayAd) => {
    overlayAd.remove();
  });
}
if (skipButton !== undefined && skipButton.length > 0) {
  skipButton.forEach((skipButton) => {
    console.log("Ads Skipped");
    skipButton.click();
  });
}

setInterval(() => {
  if (overlayAds) {
    overlayAds.forEach((overlayAd) => {
      overlayAd.remove();
    });
  }
  if (skipButton !== undefined && skipButton.length > 0) {
    skipButton.forEach((skipButton) => {
      console.log("Ads Skipped");
      skipButton.click();
    });
  }
}, 3000);
