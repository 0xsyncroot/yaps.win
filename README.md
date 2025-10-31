# Reply Guys Landing Page

Landing page và documentation cho Reply Guys Extension.

## Tính năng

- 🏠 **Landing Page**: Trang giới thiệu về extension với thiết kế hiện đại, responsive
- 📚 **Documentation**: Trang docs với khả năng render Markdown chuyên nghiệp
- 📝 **Dễ bảo trì**: Chỉ cần sửa file Markdown trong `public/docs/` là xong
- 🎨 **UI đẹp**: Sử dụng Tailwind CSS với thiết kế hiện đại

## Cấu trúc Project

```
reply-landing-page/
├── app/
│   ├── page.tsx          # Landing page
│   ├── layout.tsx        # Root layout
│   ├── docs/
│   │   └── page.tsx      # Docs page với Markdown renderer
│   └── globals.css       # Global styles
├── public/
│   └── docs/
│       └── getting-started.md  # Documentation files (Markdown)
├── package.json
├── tailwind.config.ts
├── postcss.config.mjs
└── README.md
```

## Cài đặt

```bash
npm install
```

## Development

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem landing page.

## Build

```bash
npm run build
npm start
```

## Thêm Documentation

Để thêm documentation mới:

1. Tạo file Markdown trong `public/docs/`:
   ```bash
   touch public/docs/new-doc.md
   ```

2. Thêm vào `docsList` trong `app/docs/page.tsx`:
   ```typescript
   const docsList = [
     { id: 'getting-started', title: 'Getting Started', path: '/docs?doc=getting-started' },
     { id: 'new-doc', title: 'New Doc', path: '/docs?doc=new-doc' },
   ];
   ```

3. Truy cập: `http://localhost:3000/docs?doc=new-doc`

## Customization

### Landing Page

Sửa `app/page.tsx` để thay đổi nội dung landing page.

### Documentation Styling

Sửa `app/docs/page.tsx` để thay đổi styling của Markdown renderer.

### Documentation Content

Sửa các file `.md` trong `public/docs/` để cập nhật nội dung. File Markdown sẽ tự động được render thành HTML đẹp mắt.

## Tech Stack

- **Next.js 14** - React framework với App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **react-markdown** - Markdown renderer
- **remark-gfm** - GitHub Flavored Markdown support
- **rehype-highlight** - Code syntax highlighting

## Pages

### Landing Page (`/`)
- Hero section với CTA buttons
- Features section
- How it works section
- CTA section
- Footer

### Documentation (`/docs?doc=getting-started`)
- Sidebar navigation
- Markdown content renderer
- Syntax highlighting cho code blocks
- Responsive design

## License

MIT
