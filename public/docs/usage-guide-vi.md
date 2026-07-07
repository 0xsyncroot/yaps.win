# Hướng dẫn sử dụng

Hướng dẫn này bao quát mọi chế độ trong bảng điều khiển Reply Guys, kèm đúng nhãn bạn sẽ thấy trong giao diện. Mở bảng điều khiển trên [x.com](https://x.com), [farcaster.xyz](https://farcaster.xyz), hoặc [binance.com/square](https://www.binance.com/square), đăng nhập, rồi nhấn một ô trên trang chủ.

> **Khả dụng:** phần lớn chế độ của X chỉ có trên X hoặc dùng chung với Farcaster. Farcaster và Binance Square mỗi bên có bộ riêng — xem ghi chú nền tảng ở cuối mỗi mục, và xem mục [Binance Square](#binance-square) riêng bên dưới.

## Post List

**Reply cho một danh sách URL bài đăng bạn đã có sẵn.** (Trang chủ → **Automate → Post List**. Trên Farcaster ô này là **Reply From Cast List**.)

1. Mở **Post List**. Có hai tab: **Activity Log** và **Settings**.
2. Trong **Post Links**, dán các URL bài đăng X/Twitter — mỗi URL một dòng. Trùng lặp được tự động loại bỏ.
3. Trong tab **Settings**, đặt hồ sơ phong cách viết, chỉ dẫn riêng (custom prompt), và **độ trễ** giữa các reply. Các tùy chọn bật/tắt gồm **dừng khi lỗi** (stop on error) và **tự động thử lại bài lỗi** (auto-retry failed).
4. Nhấp **Start**. Reply Guys mở/dùng một tab X và reply lần lượt từng bài (kèm auto-like).
5. Theo dõi tiến trình và bảng **Activity Log** (Post Link, Like, Reply, Generated Reply, Status). Thống kê hiển thị **Replied / Skipped / Errors**.
6. Dùng bộ lọc trạng thái (All / Success / Failed / Skipped), **Retry failed**, **Export**, hoặc **Clear History** khi cần. **Stop** dừng lượt chạy.

**Nền tảng:** X và Farcaster (Farcaster bổ sung auto-recast bên cạnh auto-like).

## List Reply

**Tự động reply các bài đăng bên trong các List trên X.** (Trang chủ → **Automate → List Reply**.)

1. Mở **List Reply** (tab: **Activity Log**, **Settings**).
2. Trong **List URLs**, dán một hoặc nhiều URL List của X — mỗi URL một dòng (ví dụ `https://x.com/i/lists/1916897389660537163`).
3. Trong **Settings → Filter Settings**, có thể bật **Infofi Filters** (Ethos, Wallchain, Kaito Yap, Moni) và chọn **AND** (mọi bộ lọc đã bật đều phải đạt) hoặc **OR** (chỉ cần một bộ lọc đạt).
4. Trong **Behavior Settings**, tinh chỉnh **Skip replied**, **Skip reply posts**, **Max Posts to Scan/List**, **Max Replies/List**, **Read Time (s)**, và **Reply Delay (s)**.
5. Nhấp **Start**. Nó quét từng List timeline và reply các bài khớp bộ lọc của bạn. Thống kê hiển thị **Scanned / Replied / Skipped / Errors**.

**Nền tảng:** Chỉ X.

## Newfeed

**Reply các bài từ bảng tin của bạn hoặc từ tìm kiếm — tự động.** (Trang chủ → **Automate → Newfeed**.)

1. Mở **Newfeed** (tab: **Activity Log**, **Settings**).
2. Trong **Settings → Mode Selection**, chọn:
   - **Timeline Mode** — reply các bài trong bảng tin (home feed) của bạn.
   - **Search Mode** — reply các bài khớp một truy vấn tìm kiếm.
3. **Bộ lọc Timeline:** **Keywords** (phân tách bằng dấu phẩy) và tùy chọn **KOL Filter** (chỉ reply bài từ các KOL đã chọn).
4. **Bộ lọc Search** (Search Mode): xây dựng **Search Query**, tùy chọn **From User**, **Min Replies / Likes / Retweets**, khoảng ngày **Since/Until**, và **Exclude replies** (loại reply).
5. **Infofi Filters** (cả hai chế độ): bật bất kỳ trong **Ethos**, **Wallchain**, **Kaito Yaps**, **Moni**, mỗi cái có ngưỡng điểm tối thiểu, và chọn **AND** hoặc **OR**.
6. **Behavior Settings:** **Auto-like posts**, **Skip replied**, **Max Posts to Scan**, **Max Posts to Reply**, **Read Time (s)**, **Reply Delay (s)**.
7. Nhấp **Start**. Theo dõi **Scanned / Replied / Skipped / Errors** và Activity Log. **Save** lưu cấu hình của bạn.

**Nền tảng:** X. Farcaster có **Farcaster Newfeed** riêng — ý tưởng giống nhau, nhưng bộ lọc InfoFi là **Ethos**, **Neymar**, và **Farcaster Pro** (không có Wallchain / Kaito / Moni trên Farcaster), và không có chế độ Search.

## Reply Repliers

**Reply lại những người đã reply vào bài đăng của chính bạn.** (Trang chủ → **Automate → Reply Repliers**.)

1. Mở **Reply Repliers**.
2. Trong **Post management → Post URLs**, dán các URL bài đăng X của chính bạn (mỗi URL một dòng). Dùng **Validate** để kiểm tra.
3. Có thể bật **InfoFi filters** (Ethos, Wallchain, Kaito Yap) với điều kiện **AND / OR**, và đặt **Delay** giữa các reply.
4. Nhấp **Start**. Reply Guys quét các reply trong từng bài của bạn và reply lại những người đó. Thống kê hiển thị **Total / Scanned / Replied / Errors**, kèm nhật ký từng bài có thể mở rộng.

**Nền tảng:** Chỉ X.

## KOL Monitor

**Theo dõi các KOL cụ thể và tự động reply bài đăng mới của họ ngay khi xuất hiện.** (Trang chủ → **Monitor → KOL Monitor**.)

1. Mở **KOL Monitor**. Danh sách KOL của bạn được tải (có tìm kiếm và lọc theo nhãn ở trên cùng).
2. Tích chọn các KOL bạn muốn theo dõi. Có **Select All** / **Clear All**.
3. Nhấp **Start Monitoring (N KOLs)**. Reply Guys canh chừng các tài khoản đó và reply bài mới của họ theo thời gian thực; giao diện chuyển sang màn hình theo dõi kèm nhật ký hoạt động trực tiếp.
4. Dừng theo dõi ngay trong màn hình đó khi xong.

> Hãy thêm hoặc tuyển chọn các tài khoản có thể theo dõi trong **Manage KOLs** trước.

**Nền tảng:** X và Farcaster (Farcaster theo dõi các cast mới).

## Manage KOLs

**Xây dựng và duy trì danh sách tài khoản được theo dõi.** (Trang chủ → **Monitor → Manage KOLs**.)

1. Mở **Manage KOLs**. Danh sách **My KOLs** hỗ trợ tìm kiếm, lọc theo nhãn, và phân trang.
2. Dùng tab **Add KOLs** để dán username hoặc URL profile (mỗi cái một dòng) và nhập vào.
3. Với mỗi KOL bạn có thể **phân tích phong cách viết**, xem kết quả phân tích, hoặc xóa. **Delete All** xóa toàn bộ danh sách.
4. Trên X, tab **Leaders** giúp bạn khám phá tài khoản từ các nguồn như Wallchain và thêm vào danh sách.
5. Mỗi dòng KOL có nút **Monitor** để nhảy thẳng vào KOL Monitor cho tài khoản đó.

**Nền tảng:** X và Farcaster.

## Dashboard

**Xem hiệu quả các reply của bạn.** (Trang chủ → **Monitor → Dashboard**.)

Dashboard hiển thị **Reply Statistics** (Total / Success / Pending / Failed và tỷ lệ thành công), **AI Provider Usage** (OpenAI / Grok / DeepSeek), **Recent Activity** (7 và 30 ngày gần nhất), và danh sách **Recent Replies**. Dùng **Refresh** để tải lại.

**Nền tảng:** X và Farcaster.

## Binance Square

Binance Square có **bảng điều khiển riêng** với bố cục quen thuộc. Lần đầu mở, bạn sẽ được yêu cầu đọc và chấp nhận một lưu ý rủi ro ngắn trước khi trang chủ hiện ra.

> ⚠️ **Hãy đọc trước khi bắt đầu.** Tự động hóa trên Binance Square có thể khiến việc **đăng bài/bình luận trên Square của bạn bị tạm ngưng hoặc khóa vĩnh viễn**, và một vi phạm trên Square có thể ảnh hưởng tới **tài khoản đã xác minh KYC, các tài khoản liên kết, và số dư của chúng**. Bạn sẽ tích một ô để xác nhận điều này một lần — hãy dùng tự động hóa Square một cách cân nhắc và tự chịu trách nhiệm.

Khi đã vào, nhóm **Reply** cho bạn bốn cách tương tác:

1. **Feed** — quét bảng tin Binance Square trực tiếp và reply các bài mới.
2. **Link** — dán các link bài đăng Binance Square (mỗi link một dòng, ví dụ `https://www.binance.com/square/post/123…`) và reply từng bài.
3. **Search** — reply các bài Square gợi ý cho một chủ đề bạn nhập.
4. **Profile** — reply các bài mới nhất của một tác giả cụ thể.

Chọn một chế độ (các thẻ ở trang chủ chọn sẵn giúp bạn, và có bộ chuyển để đổi), rồi nhấn **Start on Binance Square** — mở một tab Square trước nếu chưa. Tiến trình và bản nháp hiện ngay trong màn hình.

Hai công cụ nữa nằm cạnh Reply:

- **KOL monitor** — thêm tác giả Square theo handle, chọn ai để theo dõi, và reply bài mới của họ ngay khi xuất hiện. Ở đây cũng có công tắc **Auto-like posts**.
- **Daily tasks** — chạy các nhiệm vụ hằng ngày của Rewards-Hub trên Square (điểm danh, đọc bài, chia sẻ, theo dõi) để kiếm điểm.

> Binance Square dùng cài đặt AI chung của bạn (nhà cung cấp, ngôn ngữ, phong cách viết, custom prompt). Nó **không** dùng bộ lọc điểm InfoFi — các bộ lọc đó chỉ có trên X và Farcaster.

**Nền tảng:** Chỉ Binance Square.

---

Để biết tùy chọn AI, giải thích các bộ lọc điểm InfoFi, và quản lý tài khoản/hạn mức, xem **[Cài đặt](/docs?doc=settings&lang=vi)**.

**Trước:** [Bắt đầu](/docs?doc=getting-started&lang=vi) | **Tiếp theo:** [Cài đặt](/docs?doc=settings&lang=vi)
