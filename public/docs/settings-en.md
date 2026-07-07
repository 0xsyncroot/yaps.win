# Settings & Filters

The **Settings** view (home hub → **Configuration → Settings**) controls how AI writes your replies — and these choices apply everywhere, on X, Farcaster, and Binance Square. Per-run behavior like reply delay and score filters lives inside each automation mode, not here — those are covered in [Filters](#infofi-score-filters) below and in the [Usage Guide](/docs?doc=usage-guide&lang=en).

## AI Model & Response

- **AI Provider** — choose **OpenAI**, **Grok**, or **DeepSeek**. The exact model per provider is managed by Reply Guys for your plan.
- **Reply Language** — **Auto-detect**, English, Tiếng Việt, 한국어, or 中文.
- **Temperature** — 0.0 to 1.0. Lower is more focused and predictable; higher is more creative (default 0.7).
- **Min Length / Max Length** — the target reply length in characters.

## Custom Instructions

- **Custom Prompt** — free-text instructions added to every AI reply (for example, "always keep it casual" or "include a concrete detail"). Great for enforcing a consistent tone.

## Personalization

- **Writing Style Profile** — Reply Guys analyzes your X posts so AI replies sound like you. When a profile is active, you'll see a "Writing Style Profile Active" badge.
- **Re-analyze Writing Style** — rebuild the profile any time from your latest posts.

Click **Save** to apply, or **Reset** to restore defaults.

> **Note:** the old "delay between replies", "max retries", and "notifications" options are **not** in this view. Reply delay and retry behavior are set inside each automation mode (Post List, Newfeed, and so on).

## InfoFi Score Filters

Several automation modes can filter which authors you reply to by their reputation / mindshare scores. Enable the filters you want, set a minimum, and pick a **condition**:

- **AND** — every enabled filter must pass.
- **OR** — any one enabled filter passing is enough.

### On X

- **Ethos** — Ethos reputation/credibility score (set a minimum, e.g. 1200).
- **Wallchain** — Wallchain score (set a minimum).
- **Kaito Yaps** — Kaito "Yaps" mindshare score. Choose the window (**All Time / 7 Days / 30 Days**) and a minimum.
- **Moni** — Moni smart-followers level (**Smart 1 / 2 / 3**, i.e. basic / mid / top tier), an optional minimum followers score, and a **Verified only** toggle.

### On Farcaster

- **Ethos** — same as above.
- **Neymar** — Farcaster influence score from 0–100 (scaled from 0.0–1.0). Most users score 50–60; only a small group scores above 70.
- **Farcaster Pro** — only reply to users with the Farcaster Pro badge.

**Which modes use filters:** Newfeed, List Reply, and Reply Repliers on X (Reply Repliers uses Ethos / Wallchain / Kaito Yaps, without Moni); Farcaster Newfeed uses Ethos / Neymar / Farcaster Pro.

> **Binance Square** doesn't use InfoFi score filters — its modes have their own in-panel options instead. Your AI settings above still apply there.

## Account & Quota

Open the **Account** view (home hub → **Configuration → Account**) to see:

- Your **profile** (X and/or Telegram) and status.
- **API Quota** — Limit, Used, and Left, plus the current period.
- **Account Info** — email, plan, role, and member-since date.
- A summary of your **current settings** and your **writing-style analysis**.
- Actions: **Re-analyze**, **Export** your data, and **Logout**.

You buy and top up quota in the Telegram bot **[@reply_guys_bot](https://t.me/reply_guys_bot)** (**Buy License** → pick a plan). When you run out you'll see "Quota exceeded" until you top up.

---

**Previous:** [Usage Guide](/docs?doc=usage-guide&lang=en) | [Back to Home](/)
