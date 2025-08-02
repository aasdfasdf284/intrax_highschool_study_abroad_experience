'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  GlobeAltIcon 
} from '@heroicons/react/24/outline'

const contactInfo = [
  {
    icon: <MapPinIcon className="h-5 w-5" />,
    label: "住所",
    value: "〒105-0022 東京都港区海岸1-9-11 マリンクスタワー7F"
  },
  {
    icon: <PhoneIcon className="h-5 w-5" />,
    label: "電話",
    value: "03-3434-2636"
  },
  {
    icon: <EnvelopeIcon className="h-5 w-5" />,
    label: "メール",
    value: "intrax@intraxjp.com"
  },
  {
    icon: <ClockIcon className="h-5 w-5" />,
    label: "営業時間",
    value: "平日10時～18時30分"
  },
  {
    icon: <GlobeAltIcon className="h-5 w-5" />,
    label: "ウェブサイト",
    value: "www.intraxjp.com"
  }
]

const quickLinks = [
  { name: "プログラム概要", href: "#program" },
  { name: "ハイライト", href: "#highlights" },
  { name: "現地校での学び", href: "#learning" },
  { name: "ホームステイ", href: "#homestay" },
  { name: "サポート体制", href: "#support" },
  { name: "よくある質問", href: "#faq" }
]

const programs = [
  { name: "アメリカサマーキャンプ", href: "https://www.intraxjp.com/summercamp/" },
  { name: "高校交換留学", href: "https://www.intraxjp.com/ayusa/" },
  { name: "大学留学", href: "https://www.intraxjp.com/" },
  { name: "語学留学", href: "https://www.intraxjp.com/" }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <Image
                src="https://www.intraxjp.com/summercamp/img/Ayusa_Logo.png"
                alt="Ayusa Logo"
                width={120}
                height={48}
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <h3 className="text-lg font-bold mb-4">アユサインターナショナル</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              1980年の設立以来、40年以上にわたり世界各国の青少年の国際交流事業を推進し、
              グローバル人材の育成に貢献しています。
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.intraxjp.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
              >
                <GlobeAltIcon className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-bold mb-6">クイックリンク</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 inline-block hover:translate-x-1"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Other Programs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-bold mb-6">その他のプログラム</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <motion.li
                  key={program.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={program.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200 inline-block hover:translate-x-1"
                  >
                    {program.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-bold mb-6">お問い合わせ</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 text-blue-400 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                    <p className="text-gray-300 text-sm">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-700"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              サンディエゴ留学のご相談はお気軽に
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              専門スタッフがお子様一人ひとりに最適なプログラムをご提案いたします。
              まずはお気軽にお問い合わせください。
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg"
            >
              無料相談・お問い合わせ
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700 text-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Ayusa International. All rights reserved. | 
            <a href="https://www.intraxjp.com/" className="hover:text-white transition-colors duration-200 ml-1">
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}