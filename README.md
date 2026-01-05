# Meat Shop - Hệ thống bán thịt

Meat Shop là ứng dụng web giúp cửa hàng thịt quản lý danh mục sản phẩm, đơn hàng của khách và quá trình giao hàng theo thời gian thực. Dự án được xây dựng trên nền tảng Nuxt 4, sẵn sàng mở rộng để tích hợp các tính năng như thanh toán trực tuyến, quản lý tồn kho và báo cáo doanh thu.

## Điểm nổi bật
- Tổ chức sản phẩm theo loại thịt, trạng thái tồn kho, mức giá và các nhãn phân loại tùy chỉnh.
- Trang chi tiết sản phẩm với mô tả, bảng giá theo khối lượng và gợi ý combo bán chạy.
- Giỏ hàng và quy trình checkout nhiều bước (thông tin giao hàng, lựa chọn thời gian nhận hàng, phương thức thanh toán).
- Bảng điều khiển dành cho nhân viên để theo dõi đơn mới, cập nhật trạng thái xử lý và xuất chứng từ.
- Khả năng mở rộng để kết nối API cân điện tử, quản lý lô hàng và chương trình khách hàng thân thiết.

> **Trạng thái hiện tại:** Kho dự án đang ở giai đoạn khởi tạo với trang chủ Nuxt mặc định. Các mô-đun nghiệp vụ được mô tả ở trên đang trong quá trình phát triển, cấu trúc đã được chuẩn bị để tích hợp dần dần.

## Ngăn xếp công nghệ
- [Nuxt 4](https://nuxt.com/) & Vue 3 cho giao diện phía client và server-side rendering.
- TypeScript cho việc quản lý kiểu tĩnh và tự tin khi refactor.
- [@nuxt/ui](https://ui.nuxt.com/) giúp dựng nhanh các thành phần UI tuân thủ thiết kế.
- [@nuxt/image](https://image.nuxt.com/) tối ưu hình ảnh sản phẩm.
- ESLint 9 và cấu hình mặc định của Nuxt để đảm bảo chất lượng mã.

## Cấu trúc thư mục
```
.
├── app/app.vue          # Entry point hiện tại của ứng dụng
├── public/              # Tài nguyên tĩnh (logo, favicon, ...)
├── nuxt.config.ts       # Cấu hình Nuxt và module tùy chỉnh
├── package.json         # Scripts và danh sách phụ thuộc
├── tsconfig.json        # Cấu hình TypeScript
└── eslint.config.mjs    # Quy tắc linting
```

## Bắt đầu phát triển
1. Cài đặt PNPM (khuyến nghị) hoặc chọn npm/yarn/bun tùy môi trường.
2. Cài đặt phụ thuộc:
   ```bash
   pnpm install
   # hoặc: npm install | yarn install | bun install
   ```
3. Khởi động máy chủ phát triển ở `http://localhost:3000`:
   ```bash
   pnpm dev
   ```

Ứng dụng sẽ tự động reload khi bạn chỉnh sửa mã nguồn.

## Các lệnh có sẵn
- `pnpm dev` – Chạy máy chủ phát triển với HMR.
- `pnpm build` – Đóng gói ứng dụng để triển khai production.
- `pnpm preview` – Chạy bản build production trên máy cục bộ.
- `pnpm generate` – Xuất bản tĩnh (SSG) cho các kịch bản triển khai cần static hosting.

## Quy ước và chất lượng mã
- Bám sát cấu trúc module của Nuxt (`/pages`, `/components`, `/server`, …) để dễ mở rộng.
- Sử dụng TypeScript và các composable của Nuxt để chia sẻ logic.
- Chạy ESLint trước khi tạo pull request để đảm bảo code style nhất quán.

## Lộ trình phát triển đề xuất
- Thiết kế UI/UX cho trang chủ, trang sản phẩm và checkout.
- Xây dựng module quản lý sản phẩm (CRUD, tồn kho, nhập khẩu dữ liệu từ Excel).
- Tích hợp module đơn hàng với trạng thái tùy biến và thông báo realtime.
- Hoàn thiện hệ thống phân quyền cho quản trị viên, nhân viên bán hàng và thu ngân.
- Kết nối cổng thanh toán và dịch vụ vận chuyển địa phương.

## Đóng góp
Đóng góp luôn được chào đón! Hãy mở issue mô tả nhu cầu của bạn hoặc tạo pull request với phần mô tả thay đổi chi tiết. Đừng quên cập nhật README hoặc tài liệu liên quan khi bổ sung tính năng mới.

