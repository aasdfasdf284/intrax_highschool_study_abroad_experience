'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqData = [
  {
    question: "英語力に自信がないのですが大丈夫ですか？",
    answer: "はい、大丈夫です。英語力不問でご参加いただけます。現地校にはESL（English as a Second Language）クラスがあり、英語を第二言語として学ぶ生徒向けのサポートが充実しています。また、日本人スタッフも現地におりますので安心してご参加いただけます。"
  },
  {
    question: "ホームステイ先はどのように決まりますか？",
    answer: "現地スタッフが厳選したホストファミリーをご紹介します。お子様の性格や興味を考慮してマッチングを行います。1日3食付きで、学校への送迎もホストファミリーが行いますので安心です。"
  },
  {
    question: "現地校での授業についていけるか心配です。",
    answer: "現地校では各生徒に1人のアメリカ人生徒「バディ」がつきます。バディが授業のサポートや学校生活の案内をしてくれるので、初めての方でも安心して学校生活を送ることができます。"
  },
  {
    question: "どのような科目を履修できますか？",
    answer: "アメリカの高校では多彩な科目を選択できます。STEM（科学・技術・工学・数学）、芸術、語学、体育、音楽など、日本では体験できない科目も多数あります。興味に応じて科目を選択していただけます。"
  },
  {
    question: "緊急時のサポート体制はどうなっていますか？",
    answer: "現地には24時間対応の日本人スタッフが常駐しています。また、アユサインターナショナル日本事務局とも連携し、緊急時には迅速に対応いたします。海外旅行保険への加入も必須となっています。"
  },
  {
    question: "参加費用には何が含まれていますか？",
    answer: "参加費用には、授業料、ホームステイ費用（1日3食・学校送迎込み）、現地スタッフサポート費用、空港送迎が含まれています。航空券、海外旅行保険、お小遣いは別途必要です。"
  },
  {
    question: "申込みの締切はいつですか？",
    answer: "春休み参加：12月末、夏休み参加：4月末が目安ですが、定員に達し次第締切となります。早めのお申込みをおすすめします。詳細な締切日はお問い合わせください。"
  },
  {
    question: "滞在期間は選択できますか？",
    answer: "はい、2週間から12週間まで、1週間単位で選択可能です。お子様の学校の休み期間や目標に合わせて期間をお選びいただけます。"
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            よくある<span className="text-gradient">質問</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            サンディエゴ留学プログラムについて、よくお寄せいただくご質問にお答えします。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                          className="text-gray-600 leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                その他のご質問がございましたら
              </h3>
              <p className="text-gray-600 mb-6">
                お気軽にお問い合わせください。専門スタッフが丁寧にお答えいたします。
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                お問い合わせはこちら
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}