'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const keyInfo = [
  { label: '対象年齢', value: '中学生～高校生' },
  { label: '開催地', value: 'アメリカ・カリフォルニア州サンディエゴ' },
  { label: '期間', value: '2週間～12週間（1週間単位で選択可能）' },
  { label: '参加費用', value: '2週間 676,000円〜' },
  { label: '滞在方法', value: 'ホームステイ（1日3食、学校送迎付き）' },
  { label: '言語要件', value: '英語力不問' },
]

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, white 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, white 0%, transparent 50%)',
              'radial-gradient(circle at 40% 50%, white 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative container-custom section">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            アメリカ・<span className="text-yellow-400">サンディエゴ</span>
            <br />
            中学・高校短期留学
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto"
          >
            <span className="text-yellow-400 font-semibold">春・夏休み参加できる！</span>
            現地校で本場の学校生活を体験
          </motion.p>

          {/* Key Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 lg:p-8 mb-12 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-left"
                >
                  <dt className="text-yellow-400 font-semibold text-sm mb-1">
                    {item.label}
                  </dt>
                  <dd className="text-white text-sm">
                    {item.value}
                  </dd>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gray-300 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <p className="text-sm font-medium">Adobe Stock画像プレースホルダー</p>
                  <p className="text-xs mt-1">「American high school students classroom international exchange」</p>
                </div>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-sm text-white/80 mt-4 italic"
            >
              アメリカの現地校で学ぶ日本人留学生
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}