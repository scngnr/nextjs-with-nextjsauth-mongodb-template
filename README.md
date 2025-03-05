# Next.js Authentication Template

[🇹🇷 Türkçe](#türkçe) | [🇬🇧 English](#english)

# English

A modern, full-featured Next.js template with multi-language support, authentication (Google, GitHub, Email), and MongoDB integration.

## 🚀 Features

- Modern and responsive UI using Tailwind CSS
- Server-side rendering with Next.js
- TypeScript for type safety
- Component-based architecture
- Multi-language support system
- Authentication with Google, GitHub, and Email
- MongoDB integration with Prisma ORM
- Responsive navigation system
- Mobile-first design approach

## 🛠️ Tech Stack

- **Framework:** Next.js 15.1.7
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Form Handling:** React Hook Form
- **Database:** MongoDB
- **ORM:** Prisma
- **HTTP Client:** Axios
- **Icons:** React Icons
- **UI Components:** Custom-built components
- **Font:** Nunito (Google Fonts)
- **Toast Notifications:** React Hot Toast

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn package manager
- Git
- MongoDB database

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add necessary environment variables:
```env
# Database Configuration
DATABASE_URL="your-mongodb-connection-string"

# Authentication
NEXTAUTH_SECRET="your-nextauth-secret"

# OAuth Providers
GOOGLE_ID="your-google-oauth-client-id"
GOOGLE_SECRET="your-google-oauth-client-secret"

GITHUB_ID="your-github-oauth-app-id"
GITHUB_SECRET="your-github-oauth-app-secret"

# Next Auth Configuration
NEXTAUTH_URL="http://localhost:3000"
```

To set up OAuth providers:

**For GitHub:**
1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Create a new OAuth application
3. Set Homepage URL to `http://localhost:3000`
4. Set Authorization callback URL to `http://localhost:3000/api/auth/callback/github`

**For Google:**
1. Visit Google Cloud Console
2. Create a new project or select existing one
3. Enable Google+ API
4. Configure OAuth consent screen
5. Create credentials (OAuth client ID)
6. Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
/
├── pages/               # Pages directory for API routes
│   └── api/             # API endpoints
├── prisma/              # Prisma ORM configuration
│   └── schema.prisma    # Database schema
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # Reusable UI components
│   │   ├── Inputs/    # Form input components
│   │   ├── Navbar/    # Navigation components
│   │   ├── modals/    # Modal components
│   │   └── ui/        # Basic UI components
│   ├── hooks/         # Custom React hooks
│   └── libs/          # Utility libraries
├── public/            # Static files
│   └── images/        # Image assets
└── package.json       # Project dependencies
```

## 🔧 Development

- The application uses the Next.js App Router for routing
- Multi-language support implemented with built-in i18n
- Authentication handled by NextAuth.js
- Database operations through Prisma ORM
- Styling is done using Tailwind CSS utility classes
- State management is handled with Zustand
- Form validation and handling with React Hook Form
- Toast notifications using React Hot Toast

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [MongoDB Documentation](https://docs.mongodb.com)
- [NextAuth.js Documentation](https://next-auth.js.org)

---

# Türkçe

Çoklu dil desteği, kimlik doğrulama (Google, GitHub, E-posta) ve MongoDB entegrasyonu ile modern, tam özellikli bir Next.js şablonu.

## 🚀 Özellikler

- Tailwind CSS kullanarak modern ve duyarlı kullanıcı arayüzü
- Next.js ile sunucu tarafında işleme
- TypeScript ile tip güvenliği
- Bileşen tabanlı mimari
- Çoklu dil desteği sistemi
- Google, GitHub ve E-posta ile kimlik doğrulama
- Prisma ORM ile MongoDB entegrasyonu
- Duyarlı gezinme sistemi
- Önce mobil tasarım yaklaşımı

## 🛠️ Teknoloji Stack

- **Framework:** Next.js 15.1.7
- **Programlama Dili:** TypeScript
- **Stil:** Tailwind CSS
- **Durum Yönetimi:** Zustand
- **Form İşleme:** React Hook Form
- **Veritabanı:** MongoDB
- **ORM:** Prisma
- **HTTP İstemcisi:** Axios
- **İkonlar:** React Icons
- **UI Bileşenleri:** Özel yapılmış bileşenler
- **Yazı Tipi:** Nunito (Google Fonts)
- **Bildirimler:** React Hot Toast

## 🏃‍♂️ Başlangıç

### Ön Koşullar

- Node.js (En son LTS sürümü önerilir)
- npm veya yarn paket yöneticisi
- Git
- MongoDB veritabanı

### Kurulum

1. Depoyu klonlayın:
```bash
git clone [depo-url'niz]
```

2. Bağımlılıkları yükleyin:
```bash
npm install
# veya
yarn install
```

3. Kök dizinde bir `.env` dosyası oluşturun ve gerekli ortam değişkenlerini ekleyin:
```env
# Veritabanı Yapılandırması
DATABASE_URL="mongodb-bağlantı-dizginiz"

# Kimlik Doğrulama
NEXTAUTH_SECRET="nextauth-gizli-anahtarınız"

# OAuth Sağlayıcıları
GOOGLE_ID="google-oauth-istemci-id'niz"
GOOGLE_SECRET="google-oauth-istemci-gizli-anahtarınız"

GITHUB_ID="github-oauth-uygulama-id'niz"
GITHUB_SECRET="github-oauth-uygulama-gizli-anahtarınız"

# Next Auth Yapılandırması
NEXTAUTH_URL="http://localhost:3000"
```

OAuth sağlayıcılarının kurulumu için:

**GitHub için:**
1. GitHub Ayarlar > Geliştirici ayarları > OAuth Uygulamaları'na gidin
2. Yeni bir OAuth uygulaması oluşturun
3. Ana sayfa URL'sini `http://localhost:3000` olarak ayarlayın
4. Yetkilendirme callback URL'sini `http://localhost:3000/api/auth/callback/github` olarak ayarlayın

**Google için:**
1. Google Cloud Console'u ziyaret edin
2. Yeni bir proje oluşturun veya mevcut bir projeyi seçin
3. Google+ API'sini etkinleştirin
4. OAuth onay ekranını yapılandırın
5. Kimlik bilgileri oluşturun (OAuth istemci kimliği)
6. Yetkilendirilmiş yönlendirme URI'sini ekleyin: `http://localhost:3000/api/auth/callback/google`

4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
# veya
yarn dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açarak sonucu görebilirsiniz.

## 📁 Proje Yapısı

```
/
├── pages/               # API rotaları için sayfalar dizini
│   └── api/             # API uç noktaları
├── prisma/              # Prisma ORM yapılandırması
│   └── schema.prisma    # Veritabanı şeması
├── src/
│   ├── app/            # Next.js uygulama dizini
│   ├── components/     # Yeniden kullanılabilir UI bileşenleri
│   │   ├── Inputs/    # Form giriş bileşenleri
│   │   ├── Navbar/    # Gezinme bileşenleri
│   │   ├── modals/    # Modal bileşenleri
│   │   └── ui/        # Temel UI bileşenleri
│   ├── hooks/         # Özel React hooks
│   └── providers/     # Context sağlayıcıları
├── public/            # Statik dosyalar
│   └── images/        # Görsel varlıklar
└── package.json       # Proje bağımlılıkları
```

## 🔧 Geliştirme

- Uygulama, yönlendirme için Next.js App Router kullanır
- Çoklu dil desteği yerleşik i18n ile uygulanır
- Kimlik doğrulama NextAuth.js ile yönetilir
- Veritabanı işlemleri Prisma ORM aracılığıyla yapılır
- Stillendirme Tailwind CSS utility sınıfları ile yapılır
- Durum yönetimi Zustand ile sağlanır
- Form doğrulama ve işleme React Hook Form ile yapılır
- Bildirimler React Hot Toast kullanılarak gösterilir

## 🚀 Dağıtım

Next.js uygulamanızı dağıtmanın en kolay yolu, Next.js'in yaratıcıları tarafından geliştirilen [Vercel Platform](https://vercel.com/new)'u kullanmaktır.

Daha fazla detay için [Next.js dağıtım dokümantasyonu](https://nextjs.org/docs/app/building-your-application/deploying)'nu inceleyebilirsiniz.

## 📚 Daha Fazla Bilgi

Projede kullanılan teknolojiler hakkında daha fazla bilgi edinmek için:

- [Next.js Dokümantasyonu](https://nextjs.org/docs)
- [TypeScript Dokümantasyonu](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Dokümantasyonu](https://tailwindcss.com/docs)
- [Zustand Dokümantasyonu](https://github.com/pmndrs/zustand)
- [React Hook Form Dokümantasyonu](https://react-hook-form.com/)
- [Prisma Dokümantasyonu](https://www.prisma.io/docs)
- [MongoDB Dokümantasyonu](https://docs.mongodb.com)
- [NextAuth.js Dokümantasyonu](https://next-auth.js.org)
