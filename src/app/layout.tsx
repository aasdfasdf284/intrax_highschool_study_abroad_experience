import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'アメリカ・サンディエゴ中学・高校留学 | アユサインターナショナル',
    template: '%s | アユサインターナショナル'
  },
  description: 'アメリカ・サンディエゴの現地校で本格的な学校生活を体験できる中学・高校短期留学プログラム。英語力不問、2週間から参加可能。バディ制度、ホームステイ、24時間日本人スタッフサポートで安心の留学体験。春休み・夏休みに参加できます。',
  keywords: [
    'アメリカ留学',
    'サンディエゴ留学',
    '中学生留学',
    '高校生留学',
    '短期留学',
    'ホームステイ',
    '現地校',
    '英語力不問',
    'バディ制度',
    'アユサインターナショナル',
    '春休み留学',
    '夏休み留学',
    'カリフォルニア留学',
    '海外留学',
    '交換留学',
    'ESLクラス',
    'STEM教育',
    '国際交流'
  ],
  authors: [{ name: 'アユサインターナショナル', url: 'https://www.intraxjp.com/' }],
  creator: 'アユサインターナショナル',
  publisher: 'アユサインターナショナル',
  category: '教育・留学',
  classification: '留学プログラム',
  openGraph: {
    title: 'アメリカ・サンディエゴ中学・高校留学 | アユサインターナショナル',
    description: 'アメリカ・サンディエゴの現地校で本格的な学校生活を体験できる中学・高校短期留学プログラム。英語力不問、2週間から参加可能。バディ制度、ホームステイ、日本人スタッフサポートで安心の留学体験。',
    type: 'website',
    url: 'https://www.intraxjp.com/san-diego-highschool/',
    siteName: 'アユサインターナショナル',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://www.intraxjp.com/san-diego-highschool/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'アメリカ・サンディエゴ中学・高校留学プログラム',
        type: 'image/jpeg'
      }
    ],
    countryName: 'Japan'
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ayusainternational',
    creator: '@ayusainternational',
    title: 'アメリカ・サンディエゴ中学・高校留学 | アユサインターナショナル',
    description: 'アメリカ・サンディエゴの現地校で本格的な学校生活を体験。英語力不問、2週間から参加可能。バディ制度・ホームステイで安心サポート。',
    images: ['https://www.intraxjp.com/san-diego-highschool/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'your-google-verification-code'
  },
  alternates: {
    canonical: 'https://www.intraxjp.com/san-diego-highschool/'
  }
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
          {JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "アユサインターナショナル",
              "alternateName": "Ayusa International",
              "description": "1980年設立、40年以上の実績を持つ国際交流・留学プログラム専門機関",
              "url": "https://www.intraxjp.com/",
              "logo": "https://www.intraxjp.com/summercamp/img/Ayusa_Logo.png",
              "foundingDate": "1980",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+81-3-3434-2636",
                "contactType": "customer service",
                "email": "intrax@intraxjp.com",
                "availableLanguage": ["Japanese", "English"],
                "hoursAvailable": "Mo-Fr 10:00-18:30"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "海岸1-9-11マリンクスタワー7F",
                "addressLocality": "港区",
                "addressRegion": "東京都",
                "postalCode": "105-0022",
                "addressCountry": "JP"
              },
              "sameAs": [
                "https://www.intraxjp.com/",
                "https://www.facebook.com/ayusainternational",
                "https://twitter.com/ayusainternational"
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "アメリカ・サンディエゴ中学・高校短期留学プログラム",
              "description": "アメリカ・サンディエゴの現地校で本格的な学校生活を体験できる中学・高校短期留学プログラム。英語力不問、2週間から12週間まで選択可能。",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "アユサインターナショナル"
              },
              "serviceType": "教育留学プログラム",
              "areaServed": "Japan",
              "availableLanguage": "Japanese",
              "offers": {
                "@type": "Offer",
                "name": "サンディエゴ中学・高校短期留学プログラム",
                "description": "2週間から12週間の現地校体験プログラム",
                "price": "676000",
                "priceCurrency": "JPY",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock",
                "validFrom": "2024-01-01",
                "seller": {
                  "@type": "EducationalOrganization",
                  "name": "アユサインターナショナル"
                }
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "サンディエゴ現地校留学プログラム",
              "description": "アメリカ・カリフォルニア州サンディエゴの現地中学・高校での授業参加プログラム",
              "provider": {
                "@type": "EducationalOrganization",
                "name": "アユサインターナショナル"
              },
              "hasCourseInstance": {
                "@type": "CourseInstance",
                "courseMode": "In-person",
                "location": {
                  "@type": "Place",
                  "name": "サンディエゴ現地校",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "San Diego",
                    "@type": "PostalAddress",
                    "addressRegion": "California",
                    "addressCountry": "US"
                  }
                }
              },
              "educationalLevel": "Middle School, High School",
              "teaches": ["英語", "STEM", "芸術", "体育", "社会科"],
              "timeRequired": "P2W/P12W",
              "offers": {
                "@type": "Offer",
                "price": "676000",
                "priceCurrency": "JPY"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "英語力に自信がないのですが大丈夫ですか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "はい、大丈夫です。英語力不問でご参加いただけます。現地校にはESL（English as a Second Language）クラスがあり、英語を第二言語として学ぶ生徒向けのサポートが充実しています。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "ホームステイ先はどのように決まりますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "現地スタッフが厳選したホストファミリーをご紹介します。お子様の性格や興味を考慮してマッチングを行います。1日3食付きで、学校への送迎もホストファミリーが行います。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "参加費用には何が含まれていますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "参加費用には、授業料、ホームステイ費用（1日3食・学校送迎込み）、現地スタッフサポート費用、空港送迎が含まれています。航空券、海外旅行保険、お小遣いは別途必要です。"
                  }
                }
              ]
            }
          ])}
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