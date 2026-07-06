# Cài đặt & Bộ lọc

Màn hình **Settings** (trang chủ → **Configuration → Settings**) kiểm soát cách AI viết reply cho bạn. Các hành vi theo lượt chạy như độ trễ reply và bộ lọc điểm nằm bên trong từng chế độ tự động, không phải ở đây — chúng được nói đến trong mục **Bộ lọc điểm InfoFi** bên dưới và trong [Hướng dẫn sử dụng](/docs?doc=usage-guide&lang=vi).

## AI Model & Response

- **AI Provider** — chọn **OpenAI**, **Grok**, hoặc **DeepSeek**. Model cụ thể của mỗi nhà cung cấp do Reply Guys quản lý theo gói của bạn.
- **Reply Language** — **Auto-detect** (tự nhận diện), English, Tiếng Việt, 한국어, hoặc 中文.
- **Temperature** — từ 0.0 đến 1.0. Thấp thì tập trung và dễ đoán hơn; cao thì sáng tạo hơn (mặc định 0.7).
- **Min Length / Max Length** — độ dài reply mong muốn tính theo ký tự.

## Custom Instructions (Chỉ dẫn riêng)

- **Custom Prompt** — chỉ dẫn dạng văn bản tự do được thêm vào mọi reply AI (ví dụ "luôn viết thân mật" hoặc "kèm một chi tiết cụ thể"). Rất hữu ích để giữ giọng điệu nhất quán.

## Personalization (Cá nhân hóa)

- **Writing Style Profile** — Reply Guys phân tích các bài đăng X của bạn để reply AI nghe giống bạn. Khi hồ sơ đang bật, bạn sẽ thấy huy hiệu "Writing Style Profile Active".
- **Re-analyze Writing Style** — dựng lại hồ sơ bất cứ lúc nào từ các bài đăng mới nhất của bạn.

Nhấp **Save** để áp dụng, hoặc **Reset** để khôi phục mặc định.

> **Lưu ý:** các tùy chọn cũ như "độ trễ giữa các reply", "số lần thử lại tối đa", và "thông báo" **không** nằm trong màn hình này. Độ trễ reply và hành vi thử lại được đặt bên trong từng chế độ tự động (Post List, Newfeed, v.v.).

## Bộ lọc điểm InfoFi

Một số chế độ tự động có thể lọc xem bạn reply cho tác giả nào dựa trên điểm uy tín / mức độ ảnh hưởng của họ. Bật các bộ lọc bạn muốn, đặt ngưỡng tối thiểu, rồi chọn một **điều kiện**:

- **AND** — mọi bộ lọc đã bật đều phải đạt.
- **OR** — chỉ cần một bộ lọc đã bật đạt là đủ.

### Trên X

- **Ethos** — điểm uy tín/độ tin cậy Ethos (đặt ngưỡng tối thiểu, ví dụ 1200).
- **Wallchain** — điểm Wallchain (đặt ngưỡng tối thiểu).
- **Kaito Yaps** — điểm mức độ ảnh hưởng "Yaps" của Kaito. Chọn khung thời gian (**All Time / 7 Days / 30 Days**) và một ngưỡng tối thiểu.
- **Moni** — cấp smart-followers của Moni (**Smart 1 / 2 / 3**, tức cơ bản / trung / hàng đầu), một ngưỡng điểm followers tùy chọn, và công tắc **Verified only** (chỉ tài khoản đã xác minh).

### Trên Farcaster

- **Ethos** — như trên.
- **Neymar** — điểm ảnh hưởng Farcaster từ 0–100 (quy đổi từ 0.0–1.0). Phần lớn người dùng đạt 50–60; chỉ một nhóm nhỏ đạt trên 70.
- **Farcaster Pro** — chỉ reply cho người dùng có huy hiệu Farcaster Pro.

**Chế độ nào dùng bộ lọc:** Newfeed, List Reply, và Reply Repliers trên X (Reply Repliers dùng Ethos / Wallchain / Kaito Yaps, không có Moni); Farcaster Newfeed dùng Ethos / Neymar / Farcaster Pro.

## Tài khoản & Hạn mức

Mở màn hình **Account** (trang chủ → **Configuration → Account**) để xem:

- **Hồ sơ** của bạn (X và/hoặc Telegram) và trạng thái.
- **API Quota** — Limit (giới hạn), Used (đã dùng), và Left (còn lại), cùng kỳ hiện tại.
- **Account Info** — email, gói, vai trò, và ngày bắt đầu là thành viên.
- Bản tóm tắt **cài đặt hiện tại** và **phân tích phong cách viết** của bạn.
- Hành động: **Re-analyze**, **Export** dữ liệu của bạn, và **Logout**.

Bạn mua và nạp thêm hạn mức trong bot Telegram **[@reply_guys_bot](https://t.me/reply_guys_bot)** (**Buy License** → chọn một gói). Khi hết, bạn sẽ thấy "Quota exceeded" cho đến khi nạp thêm.

---

**Trước:** [Hướng dẫn sử dụng](/docs?doc=usage-guide&lang=vi) | [Về trang chủ](/)
