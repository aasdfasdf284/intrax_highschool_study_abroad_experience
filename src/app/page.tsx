import dynamic from 'next/dynamic'
import HeroSection from '@/components/HeroSection'
import HighlightSection from '@/components/HighlightSection'

// Dynamic imports for better performance
const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => <div className="section bg-gray-50 animate-pulse" />,
})

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  loading: () => <div className="section bg-gray-50 animate-pulse" />,
})

export default function Home() {
  return (
    <main className="min-h-screen" role="main">
      <HeroSection />
      <HighlightSection />
      
      {/* Program Details Section */}
      <section id="program" className="section bg-white" aria-label="プログラム詳細">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              プログラム<span className="text-gradient">詳細</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                アメリカ・サンディエゴでの本格的な学校生活
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  カリフォルニア州サンディエゴの現地校で、アメリカの中学・高校生と一緒に授業を受けることができます。
                  日本では体験できない多彩な科目や、アクティブな授業スタイルを通して、
                  グローバルな視野と実践的な英語力を身につけることができます。
                </p>
                <p>
                  各参加者には1人のアメリカ人生徒「バディ」がつき、学校生活をサポートします。
                  また、ホームステイを通してアメリカの家庭生活も体験でき、
                  真の国際理解と異文化コミュニケーション能力を育むことができます。
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-80 bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <p className="text-sm font-medium">Adobe Stock画像プレースホルダー</p>
                    <p className="text-xs mt-1">「San Diego high school classroom American students」</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section id="learning" className="section bg-gray-50" aria-label="現地校での学び">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              現地校での<span className="text-gradient">学び</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "STEM教育",
                description: "科学・技術・工学・数学分野の実践的な学習。最新の設備を使用した実験や研究に参加できます。",
                icon: "🔬"
              },
              {
                title: "芸術・創作活動",
                description: "美術、音楽、演劇など、創造性を伸ばす多彩な芸術プログラムに参加可能です。",
                icon: "🎨"
              },
              {
                title: "スポーツ・体育",
                description: "アメリカンフットボール、バスケットボールなど、アメリカ特有のスポーツも体験できます。",
                icon: "🏈"
              },
              {
                title: "ESLサポート",
                description: "英語を第二言語として学ぶ生徒向けの専門クラスで、段階的にスキルアップできます。",
                icon: "📚"
              },
              {
                title: "プレゼンテーション",
                description: "アメリカ式の発表重視の授業で、自己表現力とコミュニケーション能力を向上させます。",
                icon: "🎤"
              },
              {
                title: "グループワーク",
                description: "チームでのプロジェクト学習を通して、協調性とリーダーシップを身につけます。",
                icon: "👥"
              }
            ].map((item, index) => (
              <div key={index} className="card p-6">
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-left">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homestay Section */}
      <section id="homestay" className="section bg-white" aria-label="ホームステイ体験">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              ホームステイ<span className="text-gradient">体験</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-80 bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                  <div className="text-center">
                    <p className="text-sm font-medium">Adobe Stock画像プレースホルダー</p>
                    <p className="text-xs mt-1">「American host family dinner international student」</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                温かいアメリカ家庭での生活
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  厳選されたホストファミリーのもとで、アメリカの家庭生活を体験します。
                  3食付きで栄養バランスの取れた食事が提供され、
                  学校への送迎もホストファミリーが行うため安心です。
                </p>
                <p>
                  ホストファミリーとの日常的な会話を通して、
                  自然な英語表現や文化的背景を学ぶことができます。
                  週末には家族と一緒にアクティビティを楽しむ機会もあります。
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: "3食付き", icon: "🍽️" },
                  { label: "学校送迎", icon: "🚗" },
                  { label: "個室提供", icon: "🛏️" },
                  { label: "24時間サポート", icon: "🕐" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium text-gray-900">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="section bg-gray-50" aria-label="安心のサポート体制">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              安心の<span className="text-gradient">サポート体制</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "出発前サポート",
                description: "ビザ申請、航空券手配、オリエンテーションまで丁寧にサポートします。",
                icon: "✈️"
              },
              {
                title: "現地日本人スタッフ",
                description: "現地には24時間対応の日本人スタッフが常駐し、緊急時も安心です。",
                icon: "🇯🇵"
              },
              {
                title: "学習サポート",
                description: "英語学習のフォローアップや宿題のサポートを行います。",
                icon: "📖"
              },
              {
                title: "健康管理",
                description: "海外旅行保険加入必須。体調管理や医療機関への付き添いも行います。",
                icon: "🏥"
              }
            ].map((item, index) => (
              <div key={index} className="card p-6">
                <div className="text-4xl mb-4 text-center">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-sm text-left">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <ContactForm />
    </main>
  )
}