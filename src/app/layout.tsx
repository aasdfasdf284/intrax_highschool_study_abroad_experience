import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'アメリカ・サンディエゴ中学・高校留学 | アユサインターナショナル',
  description: 'アメリカ・サンディエゴの現地校で本格的な学校生活を体験できる中学・高校短期留学プログラム。英語力不問、2週間から参加可能。バディ制度、ホームステイ、日本人スタッフサポートで安心の留学体験。',
  keywords: 'アメリカ留学,サンディエゴ留学,中学生留学,高校生留学,短期留学,ホームステイ,現地校,英語力不問,バディ制度,アユサインターナショナル',
  authors: [{ name: 'アユサインターナショナル' }],
  openGraph: {
    title: 'アメリカ・サンディエゴ中学・高校留学 | アユサインターナショナル',
    description: 'アメリカ・サンディエゴの現地校で本格的な学校生活を体験できる中学・高校短期留学プログラム。英語力不問、2週間から参加可能。',
    type: 'website',
    url: 'https://www.intraxjp.com/san-diego-highschool/',
    siteName: 'アユサインターナショナル',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'アメリカ・サンディエゴ中学・高校留学 | アユサインターナショナル',
    description: 'アメリカ・サンディエゴの現地校で本格的な学校生活を体験できる中学・高校短期留学プログラム。',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" type="image/x-icon" href="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iNiIgZmlsbD0iIzAwNjZjYyIvPgo8cGF0aCBkPSJNOCAyMGg0VjEySDh2OHptNi04djhoNGgtNGgtNHYtOGg4em02IDB2OGg0di04aC00eiIgZmlsbD0id2hpdGUiLz4KPHN2Zz4K" />
        <link rel="canonical" href="https://www.intraxjp.com/san-diego-highschool/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "アユサインターナショナル",
            "description": "アメリカ・サンディエゴの現地校で本格的な学校生活を体験できる中学・高校短期留学プログラム",
            "url": "https://www.intraxjp.com/san-diego-highschool/",
            "logo": "https://www.intraxjp.com/summercamp/img/Ayusa_Logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+81-3-3434-2636",
              "contactType": "customer service",
              "email": "intrax@intraxjp.com",
              "availableLanguage": "Japanese"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "海岸1-9-11マリンクスタワー7F",
              "addressLocality": "港区",
              "addressRegion": "東京都",
              "postalCode": "105-0022",
              "addressCountry": "JP"
            },
            "offers": {
              "@type": "Offer",
              "name": "サンディエゴ中学・高校短期留学プログラム",
              "description": "2週間から12週間の現地校体験プログラム",
              "price": "676000",
              "priceCurrency": "JPY",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}