# Bắt đầu

Reply Guys là tiện ích Chrome dùng AI để giúp bạn reply trên **X (Twitter)** và **Farcaster**. Nó bổ sung một bảng điều khiển (side panel) với nhiều chế độ tự động hóa và theo dõi, các bộ lọc điểm InfoFi, và AI đa nhà cung cấp (OpenAI, Grok, DeepSeek). Hướng dẫn này sẽ dẫn bạn qua lần chạy đầu tiên.

> Lần đầu dùng? Hãy cài đặt trước với [Hướng dẫn cài đặt](/docs?doc=installation&lang=vi).

## 1. Mở bảng điều khiển (Side Panel)

1. Mở **[x.com](https://x.com)** hoặc **[farcaster.xyz](https://farcaster.xyz)** trong trình duyệt
2. Nhấp **biểu tượng Reply Guys** trên thanh công cụ, hoặc **tab Reply Guys** mỏng ở cạnh phải của trang
3. Bảng điều khiển mở ra — bảng X trên X, bảng Farcaster trên Farcaster

## 2. Đăng nhập

Ở lần mở đầu tiên, bạn sẽ thấy màn hình **"Sign in to Reply Guys"**. Hãy chọn:

- **Continue with Telegram** — mở `@reply_guys_bot`; nhấn **Start** là bạn đã đăng nhập
- **Continue with Discord** — mở trang cấp quyền Discord; chấp thuận là bạn đã đăng nhập

Nếu bạn chưa có hạn mức, hãy mở **[@reply_guys_bot](https://t.me/reply_guys_bot)**, chọn **Buy License**, và chọn một gói (có gói **Trial** miễn phí). Xem mục **Bảng giá** bên dưới.

## 3. Tìm hiểu Trang chủ (Home Hub)

Sau khi đăng nhập, bảng điều khiển hiển thị **trang chủ**:

- **Thẻ thống kê (trên cùng).** **Quota left** (số reply còn lại) và **Success rate** (tỷ lệ thành công), kèm thanh màu cho reply Thành công / Đang chờ / Thất bại.
- Nhóm **Monitor**: **Dashboard**, **Manage KOLs**, **KOL Monitor**.
- Nhóm **Automate**: các chế độ reply (xem bên dưới).
- Nhóm **Configuration**: **Settings** và **Account**.

Nhấn vào một ô để mở chế độ đó; mũi tên quay lại (góc trên bên trái) đưa bạn về trang chủ.

## 4. Chọn một chế độ

Reply Guys có nhiều cách để tạo reply. Hãy chọn cách phù hợp với việc bạn muốn làm.

### Nên dùng chế độ tự động nào?

| Chế độ | Chức năng | Phù hợp khi | Nền tảng |
|--------|-----------|-------------|----------|
| **Post List** | Dán một danh sách URL bài đăng; nó reply từng bài | Reply cho một tập bài đăng bạn đã có sẵn | X (Farcaster: **Reply From Cast List**) |
| **List Reply** | Tự động reply các bài trong một **List** trên X của bạn | Làm việc với một List timeline được tuyển chọn | Chỉ X |
| **Newfeed** | Reply các bài trong **bảng tin** hoặc **kết quả tìm kiếm**, kèm bộ lọc | Tương tác tự động trên toàn timeline | X + Farcaster |
| **Reply Repliers** | Dán các URL bài đăng **của chính bạn**; nó reply lại những người đã **reply bạn** | Tương tác với mọi người đã bình luận vào bài của bạn | Chỉ X |
| **KOL Monitor** | Theo dõi các KOL đã chọn và tự động reply bài đăng **mới** của họ ngay khi xuất hiện | Trở thành người reply sớm cho một số tài khoản cụ thể | X + Farcaster |

**Nguyên tắc chung:**

- Đã có sẵn một loạt liên kết? → **Post List** (X) / **Reply From Cast List** (Farcaster)
- Muốn khai thác timeline của bạn hoặc một truy vấn tìm kiếm kèm bộ lọc chất lượng? → **Newfeed**
- Muốn reply lại những người đã tương tác với bạn? → **Reply Repliers**
- Muốn reply sớm cho một vài tài khoản quan trọng? → **KOL Monitor**

Mỗi chế độ có cài đặt riêng (độ trễ giữa các reply, auto-like, bộ lọc, và hơn thế). Xem [Hướng dẫn sử dụng](/docs?doc=usage-guide&lang=vi) để có hướng dẫn từng bước cho mọi chế độ, và [Cài đặt](/docs?doc=settings&lang=vi) để biết các tùy chọn AI và bộ lọc điểm InfoFi.

## 5. Cá nhân hóa reply của bạn (khuyến nghị)

Mở **Settings** → **Personalization** → **Re-analyze Writing Style**. Reply Guys phân tích các bài đăng X của bạn để AI viết reply nghe giống bạn. Bạn cũng có thể đặt **Custom Prompt** (chỉ dẫn riêng), **ngôn ngữ** reply, và **độ dài tối thiểu/tối đa** trong Settings.

## Bảng giá

Các gói được mua ngay trong **[@reply_guys_bot](https://t.me/reply_guys_bot)**. Các mức thường gặp:

| Gói | Giá | Số reply | Số tài khoản | Phù hợp với |
|-----|-----|----------|--------------|-------------|
| **Trial** | Miễn phí | 399 | 1 | Dùng thử tính năng |
| **Starter** | $10 | 10,000 | 5 | Dùng cá nhân |
| **Pro** | $18 | 20,000 | 10 | Người dùng nâng cao |
| **Max** | $84 | 100,000 | 20 | Đội nhóm & doanh nghiệp |

*Bot luôn hiển thị các gói và giá hiện hành khi thanh toán.*

## Khắc phục sự cố

- **Bảng điều khiển không mở** → đảm bảo bạn đang ở x.com, twitter.com, hoặc farcaster.xyz, rồi làm mới trang.
- **Không đăng nhập được** → hoàn thành bước **Start** trong `@reply_guys_bot` (hoặc chấp thuận Discord); nếu hết giờ, nhấp lại nút.
- **"Quota exceeded"** → nạp thêm trong `@reply_guys_bot`; kiểm tra số dư trong **Account**.
- **Một reply không được đăng** → bài đăng có thể không cho reply, hoặc bạn đã hết hạn mức; kiểm tra nhật ký hoạt động của chế độ đó.

## Hỗ trợ

- **Bot Telegram:** [@reply_guys_bot](https://t.me/reply_guys_bot)
- **Hỗ trợ:** [@yapssupport](https://t.me/yapssupport)

---

**Tiếp theo:** [Hướng dẫn sử dụng](/docs?doc=usage-guide&lang=vi) | [Về trang chủ](/)
