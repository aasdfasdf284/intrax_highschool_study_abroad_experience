'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73V16z"/>
      </svg>
    ),
    title: '現地校での授業参加',
    description: 'アメリカ現地校の授業に実際に参加できる中学・高校留学'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01 1l-2.54 3.38c-.31.41-.45.96-.34 1.5l.13.65c.15.75.8 1.47 1.76 1.47H16v6h4zM9.5 11c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm1.5 1h-3c-.8 0-1.5.7-1.5 1.5v6c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-6c0-.8-.7-1.5-1.5-1.5z"/>
      </svg>
    ),
    title: 'バディ制度',
    description: '1人に1人のアメリカ人生徒「バディ」がサポート'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    title: '多彩な科目',
    description: 'STEM・芸術・語学・体育など多彩な科目を体験'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M3 3h2v18H3V3zm4 13h2V8H7v8zm4-5h2V6h-2v5zm4 2h2V4h-2v9zm4 3h2V2h-2v14z"/>
        <circle cx="6" cy="14" r="1.5" fill="#4CAF50"/>
        <circle cx="10" cy="11" r="1.5" fill="#FF9800"/>
        <circle cx="14" cy="9" r="1.5" fill="#F44336"/>
        <circle cx="18" cy="8" r="1.5" fill="#9C27B0"/>
        <circle cx="22" cy="8" r="1.5" fill="#2196F3"/>
      </svg>
    ),
    title: '英語力不問',
    description: '英語力不問＆ESLクラス完備、初心者にも安心'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    ),
    title: '充実のサポート',
    description: 'ホームステイ、学校送迎、3食付き'
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17C15.24 5.06 14.32 5 13.38 5C11.1 5 8.76 5.44 6.81 6.55C6.56 6.67 6.34 6.84 6.14 7.05L2 11.19L3.41 12.6L7.55 8.46C8.61 7.9 10.8 7 13.38 7C14.32 7 15.24 7.06 16.17 7.17L13.5 9.84L15 11.34L21 5.34V9ZM12.5 16C12.5 14.9 13.4 14 14.5 14S16.5 14.9 16.5 16 15.6 18 14.5 18 12.5 17.1 12.5 16ZM6 16C6 14.9 6.9 14 8 14S10 14.9 10 16 9.1 18 8 18 6 17.1 6 16ZM12 20.5C12 19.1 10.9 18 9.5 18S7 19.1 7 20.5 8.1 23 9.5 23 12 21.9 12 20.5ZM17 20.5C17 19.1 15.9 18 14.5 18S12 19.1 12 20.5 13.1 23 14.5 23 17 21.9 17 20.5Z"/>
      </svg>
    ),
    title: '日本人スタッフ',
    description: '日本人スタッフによるサポート'
  },
]

export default function HighlightSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="highlights" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            プログラム<span className="text-gradient">ハイライト</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotate: index % 2 === 0 ? 2 : -2,
                transition: { duration: 0.3 }
              }}
              className="card p-8 text-center relative overflow-hidden group"
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <motion.div
                whileHover={{ 
                  scale: 1.2,
                  rotate: 360
                }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl"
              >
                {highlight.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {highlight.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {highlight.description}
              </p>

              {/* Floating Particles */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-60"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}