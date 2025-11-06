# Tiện ích Yaps

Tiện ích Chrome tự động trả lời các bài đăng trên X (Twitter) bằng AI.

## Tính năng

### Tính năng chính
- **Trả lời hàng loạt** - Thêm nhiều đường dẫn và tự động trả lời tuần tự
- **Tự động trả lời KOL** - Tự động trả lời bài đăng của KOL trong bảng tin
- **Theo dõi KOL** - Theo dõi và tự động trả lời bài đăng của KOL cụ thể
- **Cá nhân hóa phong cách viết** - Phân tích phong cách viết để tạo phản hồi giống bạn
- **Nhiều nhà cung cấp AI** - OpenAI, Grok, DeepSeek
- **Kiểm tra thông minh** - Tự động kiểm tra bài đăng có thể bình luận không
- **Quản lý hạn mức** - Theo dõi hạn mức theo thời gian thực

### Tính năng nâng cao
- **Quản lý tài khoản** - Quản lý nhiều tài khoản X
- **Bảng điều khiển** - Thống kê phản hồi, tỷ lệ thành công
- **Theo dõi lỗi** - Theo dõi và thử lại lỗi
- **Cài đặt** - Cấu hình độ trễ, số lần thử lại, thông báo
- **Quản lý KOL** - Thêm, xóa, lọc KOL

## Bắt đầu nhanh

### Bước 1: Cài đặt tiện ích
1. Tải tiện ích từ Chrome Web Store
2. Hoặc cài đặt từ mã nguồn (xem [Hướng dẫn cài đặt](./installation-vi.md))
3. Tiện ích sẽ xuất hiện trên thanh công cụ Chrome

### Bước 2: Mở tiện ích trên X.com
1. Mở trình duyệt Chrome và vào **X.com** (hoặc Twitter.com)
2. Nhấp vào biểu tượng tiện ích Yaps trên thanh công cụ
3. Tiện ích sẽ mở ở thanh bên (side panel)

> **Lưu ý**: Tiện ích chỉ hoạt động khi bạn đang ở trang X.com hoặc Twitter.com

### Bước 3: Đăng nhập
1. Trong tiện ích, nhấp nút "**Đăng nhập bằng Telegram**"
2. Một tab Telegram mới sẽ tự động mở bot `@reply_guys_bot`
3. Hai trường hợp xảy ra:

#### Nếu bạn chưa có tài khoản:
- Bot hiển thị thông báo: "⚠️ You don't have an account yet"
- Nhấp nút "**💳 Buy License**"
- Chọn gói phù hợp:
  - **Trial**: MIỄN PHÍ - 399 phản hồi, 1 tài khoản (dùng thử)
  - **Starter**: $10 - 10,000 phản hồi, 5 tài khoản (cá nhân)
  - **Pro**: $18 - 20,000 phản hồi, 10 tài khoản (chuyên nghiệp)
  - **Max**: $84 - 100,000 phản hồi, 20 tài khoản (đội nhóm)
- Thanh toán theo hướng dẫn
- Tài khoản tự động được tạo sau khi thanh toán thành công
- Đóng tab Telegram và quay lại tiện ích
- Nhấp "Đăng nhập bằng Telegram" lần nữa để hoàn tất

#### Nếu bạn đã có tài khoản:
- Bot hiển thị: "✅ Login Successful!"
- Quay lại tiện ích, đăng nhập tự động hoàn tất
- Bắt đầu sử dụng ngay

### Bước 4: Sử dụng các tính năng

#### Trả lời hàng loạt (Batch Reply)
1. Mở tab **Nhiệm vụ** trong tiện ích
2. Dán các đường dẫn bài đăng X (mỗi đường dẫn một dòng)
3. Nhấp "Thêm nhiệm vụ"
4. Nhấp "Bắt đầu xử lý"
5. Tiện ích sẽ tự động trả lời từng bài đăng

#### Tự động trả lời bảng tin (Newsfeed Auto-Reply)
1. Mở tab **Bảng tin**
2. Chọn các KOL bạn muốn tự động trả lời
3. Cấu hình cài đặt (độ trễ, bộ lọc)
4. Nhấp "Bắt đầu tự động trả lời"
5. Tiện ích sẽ tự động trả lời bài đăng của KOL trong bảng tin của bạn

#### Theo dõi KOL (KOL Monitoring)
1. Mở tab **KOL**
2. Thêm KOL (tên người dùng hoặc đường dẫn profile)
3. Nhấp "Bắt đầu theo dõi"
4. Tiện ích sẽ theo dõi và tự động trả lời bài đăng mới

#### Cá nhân hóa phong cách viết
1. Mở tab **Tài khoản**
2. Nhấp "Chạy lại quá trình thiết lập"
3. Chọn các bài đăng của bạn để phân tích
4. Tiện ích sẽ học phong cách viết của bạn
5. Các phản hồi sau sẽ giống phong cách viết của bạn

## Gói sử dụng

| Gói | Giá | Số phản hồi | Số tài khoản | Phù hợp với |
|-----|-----|-------------|--------------|-------------|
| **Trial** | MIỄN PHÍ | 399 | 1 | Dùng thử tính năng |
| **Starter** | $10 | 10,000 | 5 | Người dùng cá nhân |
| **Pro** | $18 | 20,000 | 10 | Người dùng chuyên nghiệp |
| **Max** | $84 | 100,0000 | 20 | Đội nhóm & doanh nghiệp |

*Xem giá chi tiết trong bot Telegram khi mua license*

## Cài đặt

- **Nhà cung cấp AI**: OpenAI / Grok / DeepSeek
- **Độ trễ**: 1-60 giây giữa các phản hồi
- **Số lần thử lại tối đa**: 1-5 lần khi thất bại
- **Tự động kiểm tra**: Tự động kiểm tra bài đăng có thể bình luận
- **Thông báo**: Thông báo khi hoàn thành hoặc lỗi

## Khắc phục sự cố

**Tiện ích không mở**: Đảm bảo bạn đang ở trang X.com hoặc Twitter.com

**Không thấy nút tiện ích**: Kiểm tra tiện ích đã được cài đặt và bật trong Chrome

**Không đăng nhập được**: Đảm bảo Telegram đã cài đặt, thử đăng nhập lại

**Chưa có tài khoản**: Mua license trong bot Telegram (`@reply_guys_bot`), tài khoản sẽ được tạo tự động

**Nhiệm vụ không xử lý**: Kiểm tra đã đăng nhập, còn hạn mức, đang ở tab X.com

**Phản hồi không đăng**: Kiểm tra bài đăng có thể bình luận, đường dẫn hợp lệ

## Hỗ trợ

- Bot Telegram: `@reply_guys_bot` - Gửi tin nhắn để được hỗ trợ
- Open ticket: `@reply_guys_bot`

---

**Được tạo bằng ❤️ cho cộng đồng Yaps**
