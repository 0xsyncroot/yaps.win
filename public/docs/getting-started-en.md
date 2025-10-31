# Yaps Extension

Chrome Extension for AI-powered automation on X (Twitter).

## Features

### Core Features
- **Batch Reply** - Add multiple URLs and automatically reply sequentially
- **KOL Auto-Reply** - Automatically reply to KOL posts in newsfeed
- **KOL Monitoring** - Monitor and auto-reply to specific KOL posts
- **Writing Style Personalization** - Analyze writing style to create replies similar to yours
- **Multi AI Provider** - OpenAI, Grok, DeepSeek
- **Smart Checking** - Automatically check if posts are commentable
- **Quota Management** - Real-time quota tracking

### Advanced Features
- **Account Management** - Manage multiple X accounts
- **Dashboard** - Statistics on replies, success rate
- **Error Monitoring** - Track and retry errors
- **Settings** - Configure delay, retries, notifications
- **KOL Management** - Add, remove, filter KOLs

## Quick Start

### Step 1: Install Extension
1. Download extension from Chrome Web Store
2. Or install from source code (see [Installation Guide](./installation-en.md))
3. Extension will appear in Chrome toolbar

### Step 2: Open Extension on X.com
1. Open Chrome browser and go to **X.com** (or Twitter.com)
2. Click on Yaps extension icon in toolbar
3. Extension will open in side panel

> **Note**: Extension only works when you're on X.com or Twitter.com

### Step 3: Login
1. In extension, click "**Login with Telegram**" button
2. A new Telegram tab will automatically open bot `@reply_guys_bot`
3. Two scenarios:

#### If you don't have an account yet:
- Bot displays: "⚠️ You don't have an account yet"
- Click "**💳 Buy License**" button
- Select suitable plan:
  - **Trial**: 7 days, 100 replies (trial)
  - **Basic**: 30 days, 1,000 replies
  - **Pro**: 30 days, 10,000 replies
  - **Enterprise**: Custom, unlimited
- Complete payment as instructed
- Account will be created automatically after successful payment
- Close Telegram tab and return to extension
- Click "Login with Telegram" again to complete

#### If you already have an account:
- Bot displays: "✅ Login Successful!"
- Return to extension, login completes automatically
- Start using immediately

### Step 4: Use Features

#### Batch Reply
1. Open **Tasks** tab in extension
2. Paste X post URLs (one URL per line)
3. Click "Add Tasks"
4. Click "Start Processing"
5. Extension will automatically reply to each post

#### Newsfeed Auto-Reply
1. Open **Newsfeed** tab
2. Select KOLs you want to auto-reply to
3. Configure settings (delay, filters)
4. Click "Start Auto-Reply"
5. Extension will automatically reply to KOL posts in your newsfeed

#### KOL Monitoring
1. Open **KOLs** tab
2. Add KOLs (username or profile URL)
3. Click "Start Monitoring"
4. Extension will monitor and auto-reply to new posts

#### Personalize Writing Style
1. Open **Account** tab
2. Click "Rerun Onboarding"
3. Select your posts to analyze
4. Extension will learn your writing style
5. Future replies will match your writing style

## Pricing Plans

| Plan | Duration | Quota | Best For |
|------|----------|-------|----------|
| **Trial** | 7 days | 100 replies | Testing features |
| **Basic** | 30 days | 1,000 replies | Personal users |
| **Pro** | 30 days | 10,000 replies | Commercial users |
| **Enterprise** | Custom | Unlimited | Businesses, teams |

*See detailed pricing in Telegram bot when purchasing license*

## Settings

- **AI Provider**: OpenAI / Grok / DeepSeek
- **Delay**: 1-60 seconds between replies
- **Max Retries**: 1-5 times on failure
- **Auto-check**: Automatically check if post is commentable
- **Notifications**: Notify on completion or errors

## Troubleshooting

**Extension won't open**: Make sure you're on X.com or Twitter.com

**Can't see extension icon**: Check extension is installed and enabled in Chrome

**Cannot login**: Ensure Telegram is installed, try logging in again

**No account yet**: Purchase license in Telegram bot (`@reply_guys_bot`), account will be created automatically

**Tasks not processing**: Check if logged in, have quota, on X.com tab

**Reply not posting**: Check if post is commentable, URL is valid

## Support

- Telegram Bot: `@reply_guys_bot` - Send message for support
- GitHub: [github.com/yapswin](https://github.com/yapswin)
- Email: support@yaps.win

---

**Made with ❤️ for the Yaps community**
