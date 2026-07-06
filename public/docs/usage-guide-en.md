# Usage Guide

This guide covers every mode in the Reply Guys side panel, with the exact labels you'll see in the UI. Open the panel on [x.com](https://x.com) or [farcaster.xyz](https://farcaster.xyz), sign in, then tap a tile on the home hub.

> **Availability:** most modes are X-only or shared. Farcaster has its own set — see each section's platform note.

## Post List

**Reply to a list of post URLs you already have.** (Home hub → **Automate → Post List**. On Farcaster this tile is **Reply From Cast List**.)

1. Open **Post List**. It has two tabs: **Activity Log** and **Settings**.
2. In **Post Links**, paste X/Twitter post URLs — one per line. Duplicates are removed automatically.
3. In the **Settings** tab, set your writing-style profile, custom prompt, and **delay** between replies. Optional toggles include **stop on error** and **auto-retry failed**.
4. Click **Start**. Reply Guys opens/uses an X tab and replies to each post in turn (auto-liking as it goes).
5. Watch progress and the **Activity Log** table (Post Link, Like, Reply, Generated Reply, Status). Stats show **Replied / Skipped / Errors**.
6. Use the status filter (All / Success / Failed / Skipped), **Retry failed**, **Export**, or **Clear History** as needed. **Stop** halts a run.

**Platform:** X and Farcaster (Farcaster adds auto-recast alongside auto-like).

## List Reply

**Auto-reply to posts inside X Lists.** (Home hub → **Automate → List Reply**.)

1. Open **List Reply** (tabs: **Activity Log**, **Settings**).
2. In **List URLs**, paste one or more X List URLs — one per line (for example `https://x.com/i/lists/1916897389660537163`).
3. In **Settings → Filter Settings**, optionally enable **Infofi Filters** (Ethos, Wallchain, Kaito Yap, Moni) and choose **AND** (all enabled filters must pass) or **OR** (any one passes).
4. In **Behavior Settings**, tune **Skip replied**, **Skip reply posts**, **Max Posts to Scan/List**, **Max Replies/List**, **Read Time (s)**, and **Reply Delay (s)**.
5. Click **Start**. It scans each List timeline and replies to posts that match your filters. Stats show **Scanned / Replied / Skipped / Errors**.

**Platform:** X only.

## Newfeed

**Reply to posts from your home feed or from a search — hands-free.** (Home hub → **Automate → Newfeed**.)

1. Open **Newfeed** (tabs: **Activity Log**, **Settings**).
2. In **Settings → Mode Selection**, choose:
   - **Timeline Mode** — reply to posts in your home feed.
   - **Search Mode** — reply to posts matching a search query.
3. **Timeline filters:** **Keywords** (comma-separated) and an optional **KOL Filter** (only reply to posts from selected KOLs).
4. **Search filters** (Search Mode): build a **Search Query**, optionally set **From User**, **Min Replies / Likes / Retweets**, a **Since/Until** date range, and **Exclude replies**.
5. **Infofi Filters** (both modes): enable any of **Ethos**, **Wallchain**, **Kaito Yaps**, **Moni**, each with a minimum score, and pick **AND** or **OR**.
6. **Behavior Settings:** **Auto-like posts**, **Skip replied**, **Max Posts to Scan**, **Max Posts to Reply**, **Read Time (s)**, **Reply Delay (s)**.
7. Click **Start**. Track **Scanned / Replied / Skipped / Errors** and the Activity Log. **Save** stores your configuration.

**Platform:** X. Farcaster has its own **Farcaster Newfeed** — same idea, but its InfoFi filters are **Ethos**, **Neymar**, and **Farcaster Pro** (there's no Wallchain / Kaito / Moni on Farcaster), and it has no Search mode.

## Reply Repliers

**Reply to the people who replied to your own posts.** (Home hub → **Automate → Reply Repliers**.)

1. Open **Reply Repliers**.
2. Under **Post management → Post URLs**, paste your own X post URLs (one per line). Use **Validate** to check them.
3. Optionally enable **InfoFi filters** (Ethos, Wallchain, Kaito Yap) with an **AND / OR** condition, and set the **Delay** between replies.
4. Click **Start**. Reply Guys scans the replies on each of your posts and replies back to those repliers. Stats show **Total / Scanned / Replied / Errors**, with expandable per-post logs.

**Platform:** X only.

## KOL Monitor

**Watch specific KOLs and auto-reply to their new posts as they appear.** (Home hub → **Monitor → KOL Monitor**.)

1. Open **KOL Monitor**. Your KOL list loads (search and filter by label at the top).
2. Tick the KOLs you want to monitor. **Select All** / **Clear All** are available.
3. Click **Start Monitoring (N KOLs)**. Reply Guys keeps an eye on those accounts and replies to their new posts live; the view switches to the monitor with a live activity log.
4. Stop monitoring from the same view when you're done.

> Add or curate the accounts you can monitor in **Manage KOLs** first.

**Platform:** X and Farcaster (Farcaster monitors new casts).

## Manage KOLs

**Build and maintain your list of tracked accounts.** (Home hub → **Monitor → Manage KOLs**.)

1. Open **Manage KOLs**. The **My KOLs** list supports search, a label filter, and pagination.
2. Use the **Add KOLs** tab to paste usernames or profile URLs (one per line) and import them.
3. For any KOL you can **analyze its writing style**, view the analysis, or delete it. **Delete All** clears the list.
4. On X, the **Leaders** tab helps you discover accounts from sources like Wallchain and add them to your list.
5. Each KOL row has a **Monitor** button that jumps straight into KOL Monitor for that account.

**Platform:** X and Farcaster.

## Dashboard

**See how your replies are performing.** (Home hub → **Monitor → Dashboard**.)

The Dashboard shows **Reply Statistics** (Total / Success / Pending / Failed and your success rate), **AI Provider Usage** (OpenAI / Grok / DeepSeek), **Recent Activity** (last 7 and 30 days), and a **Recent Replies** list. Use **Refresh** to reload.

**Platform:** X and Farcaster.

---

For AI options, the InfoFi score filters explained, and account/quota management, see **[Settings](/docs?doc=settings&lang=en)**.

**Previous:** [Getting Started](/docs?doc=getting-started&lang=en) | **Next:** [Settings](/docs?doc=settings&lang=en)
