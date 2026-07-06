# Installation Guide

Get Reply Guys up and running in about 2 minutes.

## Step 1: Install the Chrome Extension

Reply Guys is a Chrome / Edge extension that adds a side panel to X (Twitter) and Farcaster.

👉 **[Install Reply Guys from the Chrome Web Store](https://chromewebstore.google.com/detail/reply-guys/agcghmpffaaokcgmnikdgocfakgnalbd)**

1. Open the link above (or search "Reply Guys" in the Chrome Web Store)
2. Click **"Add to Chrome"**
3. Confirm with **"Add extension"** in the popup
4. The Reply Guys icon appears in your browser toolbar

> **Tip:** Click the puzzle-piece icon in Chrome and pin **Reply Guys** so its icon is always visible.

### Loading an unpacked build (developers)

If you were handed a build instead of the store version:

1. Go to `chrome://extensions/`
2. Turn on **Developer mode** (top-right)
3. Click **"Load unpacked"** and select the extension's `dist/` folder

## Step 2: Open the Side Panel

Reply Guys only runs on supported sites, so open one first:

- **X:** [x.com](https://x.com) (or twitter.com)
- **Farcaster:** [farcaster.xyz](https://farcaster.xyz)

Then open the panel in either of two ways:

- Click the **Reply Guys icon** in your browser toolbar, **or**
- Click the slim **Reply Guys tab** pinned to the right edge of the page

The **side panel** opens on the right. It automatically shows the correct panel for the site you're on — the X panel on X, the Farcaster panel on Farcaster.

> If you click the toolbar icon on any other website, Reply Guys reminds you to open X or Farcaster first.

## Step 3: Sign In

The panel opens on a **"Sign in to Reply Guys"** screen with two options:

- **Continue with Telegram** — opens the `@reply_guys_bot` Telegram bot. Press **Start**, and the extension logs you in automatically once the bot confirms.
- **Continue with Discord** — opens Discord's authorization page. Approve access, and the extension logs you in automatically.

You can leave the panel open while you finish signing in on the other tab — it completes on its own. (A pending login expires after about 30 minutes; if it times out, just click the button again.)

## Step 4: Get Your Quota

Reply Guys runs on **quota** — a balance of AI replies. You buy and manage quota inside the Telegram bot:

1. Open **[@reply_guys_bot](https://t.me/reply_guys_bot)** on Telegram
2. Press **Start**, then choose **Buy License**
3. Pick a plan (a free **Trial** plan is available to test the features)
4. Follow the steps the bot shows — your account and quota are set up automatically

Back in the extension, your remaining quota is shown on the panel's stat card and on the **Account** view.

---

## System Requirements

- ✅ Google Chrome 114+ or Microsoft Edge 114+ (for side-panel support)
- ✅ A Telegram **or** Discord account (for sign-in)
- ✅ An X (Twitter) and/or Farcaster account
- ✅ A stable internet connection

---

## Troubleshooting

### The panel won't open
- Make sure you're on **x.com**, **twitter.com**, or **farcaster.xyz**
- Refresh the page, then click the toolbar icon or the edge tab again
- Confirm the extension is enabled in `chrome://extensions/`

### Login won't complete
- Finish the **Start** step in the Telegram bot (or approve access in Discord)
- If it says "Login timed out", click **Continue with Telegram / Discord** again
- Check your internet connection

### "Quota exceeded"
- You're out of replies — top up your plan in **[@reply_guys_bot](https://t.me/reply_guys_bot)**
- Check your remaining balance on the **Account** view

### Need help?
- 📚 Read [Getting Started](/docs?doc=getting-started&lang=en) and the [Usage Guide](/docs?doc=usage-guide&lang=en)
- 💬 Support: **[@yapssupport](https://t.me/yapssupport)** on Telegram

---

**Next:** [Getting Started](/docs?doc=getting-started&lang=en) | [Back to Home](/)
