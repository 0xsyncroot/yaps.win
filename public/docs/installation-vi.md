# Hướng dẫn cài đặt

Cài đặt và sử dụng Reply Guys chỉ trong khoảng 2 phút.

## Bước 1: Cài đặt tiện ích Chrome

Reply Guys là tiện ích cho Chrome / Edge, bổ sung một bảng điều khiển (side panel) vào X (Twitter) và Farcaster.

👉 **[Cài đặt Reply Guys từ Chrome Web Store](https://chromewebstore.google.com/detail/reply-guys/agcghmpffaaokcgmnikdgocfakgnalbd)**

1. Mở liên kết ở trên (hoặc tìm "Reply Guys" trong Chrome Web Store)
2. Nhấp **"Thêm vào Chrome"**
3. Xác nhận bằng **"Thêm tiện ích"** trong popup
4. Biểu tượng Reply Guys sẽ xuất hiện trên thanh công cụ trình duyệt

> **Mẹo:** Nhấp vào biểu tượng mảnh ghép trong Chrome và ghim **Reply Guys** để biểu tượng luôn hiển thị.

### Cài đặt bản dựng chưa đóng gói (dành cho lập trình viên)

Nếu bạn được cấp một bản dựng thay vì bản trên cửa hàng:

1. Vào `chrome://extensions/`
2. Bật **Chế độ dành cho nhà phát triển** (Developer mode, góc trên bên phải)
3. Nhấp **"Tải tiện ích đã giải nén"** (Load unpacked) và chọn thư mục `dist/` của tiện ích

## Bước 2: Mở bảng điều khiển (Side Panel)

Reply Guys chỉ chạy trên các trang được hỗ trợ, nên hãy mở một trong số đó trước:

- **X:** [x.com](https://x.com) (hoặc twitter.com)
- **Farcaster:** [farcaster.xyz](https://farcaster.xyz)

Sau đó mở bảng điều khiển theo một trong hai cách:

- Nhấp **biểu tượng Reply Guys** trên thanh công cụ, **hoặc**
- Nhấp vào **tab Reply Guys** mỏng được ghim ở cạnh phải của trang

**Bảng điều khiển** sẽ mở ở bên phải. Nó tự động hiển thị đúng giao diện cho trang bạn đang xem — bảng X trên X, bảng Farcaster trên Farcaster.

> Nếu bạn nhấp biểu tượng trên thanh công cụ khi đang ở trang khác, Reply Guys sẽ nhắc bạn mở X hoặc Farcaster trước.

## Bước 3: Đăng nhập

Bảng điều khiển mở ra màn hình **"Sign in to Reply Guys"** với hai lựa chọn:

- **Continue with Telegram** — mở bot Telegram `@reply_guys_bot`. Nhấn **Start**, và tiện ích sẽ tự động đăng nhập ngay khi bot xác nhận.
- **Continue with Discord** — mở trang cấp quyền của Discord. Chấp thuận quyền truy cập, và tiện ích sẽ tự động đăng nhập.

Bạn có thể để bảng điều khiển mở trong khi hoàn tất đăng nhập ở tab kia — nó sẽ tự hoàn thành. (Một phiên đăng nhập đang chờ sẽ hết hạn sau khoảng 30 phút; nếu hết giờ, chỉ cần nhấp lại nút.)

## Bước 4: Nhận hạn mức (Quota)

Reply Guys hoạt động dựa trên **hạn mức** — số lượt reply bằng AI. Bạn mua và quản lý hạn mức ngay trong bot Telegram:

1. Mở **[@reply_guys_bot](https://t.me/reply_guys_bot)** trên Telegram
2. Nhấn **Start**, rồi chọn **Buy License**
3. Chọn một gói (có gói **Trial** miễn phí để dùng thử các tính năng)
4. Làm theo các bước bot hướng dẫn — tài khoản và hạn mức được thiết lập tự động

Quay lại tiện ích, hạn mức còn lại được hiển thị trên thẻ thống kê của bảng điều khiển và trong mục **Account** (Tài khoản).

---

## Yêu cầu hệ thống

- ✅ Google Chrome 114+ hoặc Microsoft Edge 114+ (để hỗ trợ side panel)
- ✅ Tài khoản Telegram **hoặc** Discord (để đăng nhập)
- ✅ Tài khoản X (Twitter) và/hoặc Farcaster
- ✅ Kết nối internet ổn định

---

## Xử lý sự cố

### Bảng điều khiển không mở
- Đảm bảo bạn đang ở **x.com**, **twitter.com**, hoặc **farcaster.xyz**
- Làm mới trang, rồi nhấp lại biểu tượng trên thanh công cụ hoặc tab ở cạnh trang
- Kiểm tra tiện ích đã được bật trong `chrome://extensions/`

### Đăng nhập không hoàn tất
- Hoàn thành bước **Start** trong bot Telegram (hoặc chấp thuận quyền trong Discord)
- Nếu báo "Login timed out", nhấp lại **Continue with Telegram / Discord**
- Kiểm tra kết nối internet

### "Quota exceeded" (Hết hạn mức)
- Bạn đã hết lượt reply — nạp thêm gói trong **[@reply_guys_bot](https://t.me/reply_guys_bot)**
- Kiểm tra số dư còn lại trong mục **Account**

### Cần trợ giúp?
- 📚 Đọc [Bắt đầu](/docs?doc=getting-started&lang=vi) và [Hướng dẫn sử dụng](/docs?doc=usage-guide&lang=vi)
- 💬 Hỗ trợ: **[@yapssupport](https://t.me/yapssupport)** trên Telegram

---

**Tiếp theo:** [Bắt đầu](/docs?doc=getting-started&lang=vi) | [Về trang chủ](/)
