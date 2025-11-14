# Reply Guys Extension - Documentation

## Giới thiệu

**Reply Guys** là một Chrome Extension mạnh mẽ giúp bạn tự động reply các bài post trên X (Twitter) bằng AI. Extension này sử dụng các AI model hàng đầu như OpenAI, Grok, và DeepSeek để tạo ra những reply tự nhiên, phù hợp với ngữ cảnh.

## Tính năng chính

### 🎯 Xử lý Batch
- Thêm nhiều post URLs và reply tự động tuần tự
- Quản lý hàng đợi tasks với status tracking chi tiết
- Tự động retry khi thất bại

### 🔍 Kiểm tra thông minh
- Tự động kiểm tra post có thể comment được không
- Xác thực quota trước khi reply
- Bỏ qua các post không thể reply

### 📊 Quản lý Quota
- Theo dõi usage quota real-time
- Hiển thị số lượng replies đã dùng và còn lại
- Cảnh báo khi quota sắp hết

### 🤖 Đa AI Provider
- Hỗ trợ OpenAI, Grok, DeepSeek
- Có thể chuyển đổi provider dễ dàng
- Mỗi provider có model riêng phù hợp

### ⚙️ Tùy chỉnh linh hoạt
- Cấu hình delay giữa các replies (1-60 giây)
- Thiết lập số lần retry (1-5 lần)
- Bật/tắt auto-check commentable
- Bật/tắt notifications

## Cài đặt

### Bước 1: Cài đặt Extension

1. Tải extension từ Chrome Web Store hoặc build từ source code
2. Mở Chrome và điều hướng đến `chrome://extensions/`
3. Bật "Developer mode" (góc trên bên phải)
4. Click "Load unpacked"
5. Chọn thư mục `dist/` của extension

### Bước 2: Đăng nhập

1. Click vào icon extension trên thanh công cụ Chrome
2. Click "Login with Telegram"
3. Telegram sẽ mở bot của chúng tôi
4. Gửi lệnh `/login` cho bot
5. Quay lại extension và refresh

### Bước 3: Cấu hình

1. Mở extension popup
2. Chuyển đến tab "Settings"
3. Chọn AI Provider (OpenAI, Grok, hoặc DeepSeek)
4. Thiết lập delay giữa các replies
5. Cấu hình số lần retry
6. Click "Save Settings"

## Hướng dẫn sử dụng

### Thêm Tasks

1. Mở extension popup
2. Chuyển đến tab "Tasks"
3. Paste các X/Twitter post URLs (mỗi URL một dòng)
4. Click "Add Tasks"
5. URLs sẽ được validate và thêm vào queue

**Ví dụ:**
```
https://x.com/user1/status/123456789
https://twitter.com/user2/status/987654321
https://x.com/user3/status/555555555
```

### Xử lý Tasks

1. Sau khi thêm tasks, bạn sẽ thấy danh sách các tasks trong queue
2. Mỗi task có status:
   - **⏳ Pending** - Đang chờ xử lý
   - **🔍 Checking** - Đang kiểm tra post có thể comment không
   - **🤖 Generating** - Đang tạo reply bằng AI
   - **📤 Posting** - Đang đăng reply lên X
   - **✅ Completed** - Đã hoàn thành
   - **❌ Failed** - Thất bại sau nhiều lần retry
   - **⏭️ Skipped** - Post không thể comment

3. Click "Start Processing" để bắt đầu
4. Extension sẽ tự động xử lý từng task theo thứ tự
5. Monitor tiến độ real-time

### Quản lý Tasks

- **Xóa task**: Click vào icon trash bên cạnh task
- **Xóa tất cả completed**: Click "Clear Completed"
- **Dừng processing**: Click "Stop Processing"

## Luồng xử lý

```
Add URL → Validate → Check Commentable → Check Quota → 
Generate Reply → Post Reply → Mark Complete
```

### Chi tiết từng bước:

1. **Validate URL**: Kiểm tra URL có hợp lệ không, có phải là X/Twitter post không
2. **Check Commentable**: Kiểm tra post có thể comment được không (không bị disable replies, không phải private account, etc.)
3. **Check Quota**: Kiểm tra bạn còn quota để reply không
4. **Generate Reply**: Gửi post content đến AI để tạo reply phù hợp
5. **Post Reply**: Tự động điền reply vào compose box và đăng lên X
6. **Mark Complete**: Cập nhật status và lưu vào history

## Quản lý Quota

Extension hiển thị quota real-time:

- **Used / Limit**: Số lượng replies đã dùng / tổng số replies được phép
- **Remaining**: Số lượng replies còn lại
- **Usage Percentage**: Phần trăm đã sử dụng
- **Progress Bar**: Thanh tiến trình trực quan

Extension sẽ tự động:
- Kiểm tra quota trước mỗi reply
- Dừng processing nếu hết quota
- Hiển thị cảnh báo khi quota sắp hết

## Settings

### AI Provider
- **OpenAI**: GPT-5, GPT-4.1 và các model khác
- **Grok**: Grok-4 và các model khác
- **DeepSeek**: DeepSeek Chat và các model khác

### Delay Between Replies
Thời gian chờ giữa các replies (1-60 giây). Khuyến nghị:
- **5-10 giây**: Cho mục đích cá nhân
- **10-30 giây**: Cho mục đích thương mại (tránh rate limit)

### Max Retries
Số lần retry khi reply thất bại (1-5 lần). Mặc định: 3 lần

### Auto-check Commentable
Tự động kiểm tra post có thể comment được không trước khi generate reply. Nên bật để tránh lãng phí quota.

### Notifications
- **Notify on Complete**: Nhận notification khi tất cả tasks hoàn thành
- **Notify on Error**: Nhận notification khi có task thất bại

## Troubleshooting

### Extension không load

**Nguyên nhân:**
- Chrome version không hỗ trợ Manifest V3
- Developer mode chưa được bật
- Lỗi trong manifest.json

**Giải pháp:**
1. Kiểm tra Chrome version (cần Chrome 88+)
2. Bật Developer mode trong `chrome://extensions/`
3. Kiểm tra console errors
4. Reload extension

### Không thể login

**Nguyên nhân:**
- Telegram bot chưa được start
- Bot token không hợp lệ
- API không response

**Giải pháp:**
1. Kiểm tra Telegram bot đang chạy
2. Thử gửi `/login` trực tiếp trong Telegram
3. Kiểm tra bot token trong `.env`
4. Refresh extension sau khi login

### Tasks không processing

**Nguyên nhân:**
- Chưa login
- Hết quota
- Tab X/Twitter chưa mở
- Lỗi trong code

**Giải pháp:**
1. Kiểm tra đã login chưa
2. Kiểm tra quota còn lại
3. Mở tab X/Twitter
4. Kiểm tra console errors

### Reply không được đăng

**Nguyên nhân:**
- Post URL không hợp lệ
- Post không thể comment (disabled replies)
- X UI đã thay đổi
- Lỗi trong content script

**Giải pháp:**
1. Kiểm tra URL có đúng định dạng không
2. Thử comment thủ công trên post đó
3. Kiểm tra X UI có thay đổi không
4. Kiểm tra console errors trong tab X

### Quota không cập nhật

**Nguyên nhân:**
- API không sync
- Token expired
- Network error

**Giải pháp:**
1. Refresh extension
2. Logout và login lại
3. Kiểm tra network connection
4. Kiểm tra API status

## Best Practices

### 1. Sử dụng Delay hợp lý
- Không set delay quá ngắn (< 5 giây) để tránh rate limit
- Không set delay quá dài (> 30 giây) để không mất thời gian

### 2. Kiểm tra Quota thường xuyên
- Theo dõi quota trước khi thêm nhiều tasks
- Nâng cấp plan nếu cần nhiều replies hơn

### 3. Validate URLs trước khi add
- Đảm bảo URLs là X/Twitter posts hợp lệ
- Kiểm tra post có thể comment được không

### 4. Monitor Processing
- Giữ extension popup mở để theo dõi progress
- Kiểm tra failed tasks để xử lý lại

### 5. Backup Settings
- Lưu lại settings quan trọng
- Export task list nếu cần

## Bảo mật

### Token Storage
- Tokens được lưu trong `chrome.storage.local` (được mã hóa bởi Chrome)
- Không bao giờ expose tokens trong console logs
- Tokens tự động expire sau 7 ngày

### Message Validation
- Tất cả messages được validate trước khi xử lý
- Chỉ accept messages từ extension components

### Content Script Isolation
- Content script không thể truy cập trực tiếp vào background
- Phải sử dụng message passing

## FAQ

### Extension có miễn phí không?
Extension miễn phí để sử dụng, nhưng bạn cần có license để sử dụng AI replies. Bạn có thể mua license qua Telegram bot.

### Tôi có thể dùng extension trên nhiều tài khoản không?
Có, nhưng bạn cần login từng tài khoản riêng biệt.

### Extension có hoạt động với private accounts không?
Không, extension chỉ có thể reply các public posts.

### Tôi có thể customize prompts không?
Hiện tại chưa hỗ trợ, nhưng đang trong roadmap.

### Extension có hỗ trợ schedule replies không?
Hiện tại chưa hỗ trợ, nhưng đang trong roadmap.

### Làm sao để report bugs?
Bạn có thể report bugs qua Telegram bot hoặc GitHub Issues.

## Hỗ trợ

Nếu bạn gặp vấn đề hoặc có câu hỏi:

- **Telegram Bot**: Gửi `/help` để xem hướng dẫn
- **GitHub Issues**: Tạo issue trên GitHub repo
- **Email**: support@replyguys.com

---

**Made with ❤️ for the Reply Guys community**

