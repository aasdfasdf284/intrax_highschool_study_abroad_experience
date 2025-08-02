'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

const contactSchema = z.object({
  name: z.string().min(1, 'お名前は必須です'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  phone: z.string().optional(),
  age: z.string().optional(),
  period: z.string().optional(),
  season: z.string().optional(),
  message: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const ageOptions = [
  { value: '', label: '選択してください' },
  { value: '中学1年', label: '中学1年' },
  { value: '中学2年', label: '中学2年' },
  { value: '中学3年', label: '中学3年' },
  { value: '高校1年', label: '高校1年' },
  { value: '高校2年', label: '高校2年' },
  { value: '高校3年', label: '高校3年' },
]

const periodOptions = [
  { value: '', label: '選択してください' },
  { value: '2週間', label: '2週間' },
  { value: '3週間', label: '3週間' },
  { value: '4週間', label: '4週間' },
  { value: '6週間', label: '6週間' },
  { value: '8週間', label: '8週間' },
  { value: '12週間', label: '12週間' },
  { value: 'その他', label: 'その他' },
]

const seasonOptions = [
  { value: '', label: '選択してください' },
  { value: '春休み', label: '春休み' },
  { value: '夏休み', label: '夏休み' },
  { value: 'その他の時期', label: 'その他の時期' },
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, dirtyFields }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange'
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact <span className="text-gradient">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            下記のフォームに必要事項をご入力の上、送信してください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="card p-8 lg:p-12 relative overflow-hidden">
            {/* Background Animation */}
            <motion.div
              className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${
                      errors.name 
                        ? 'border-red-500 focus:border-red-500' 
                        : dirtyFields.name
                        ? 'border-green-500 focus:border-green-500'
                        : 'border-gray-200 focus:border-blue-500'
                    }`}
                    placeholder="山田太郎"
                  />
                  {dirtyFields.name && !errors.name && (
                    <CheckCircleIcon className="absolute right-3 top-3 h-6 w-6 text-green-500" />
                  )}
                  {errors.name && (
                    <ExclamationCircleIcon className="absolute right-3 top-3 h-6 w-6 text-red-500" />
                  )}
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {errors.name.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register('email')}
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/20 ${
                      errors.email 
                        ? 'border-red-500 focus:border-red-500' 
                        : dirtyFields.email
                        ? 'border-green-500 focus:border-green-500'
                        : 'border-gray-200 focus:border-blue-500'
                    }`}
                    placeholder="example@email.com"
                  />
                  {dirtyFields.email && !errors.email && (
                    <CheckCircleIcon className="absolute right-3 top-3 h-6 w-6 text-green-500" />
                  )}
                  {errors.email && (
                    <ExclamationCircleIcon className="absolute right-3 top-3 h-6 w-6 text-red-500" />
                  )}
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-2"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </motion.div>

              {/* Phone Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
                  placeholder="090-1234-5678"
                />
              </motion.div>

              {/* Age Field */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  お子様の年齢
                </label>
                <select
                  {...register('age')}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
                >
                  {ageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Period Field */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  希望期間
                </label>
                <select
                  {...register('period')}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
                >
                  {periodOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Season Field */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="md:col-span-1"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  参加希望時期
                </label>
                <select
                  {...register('season')}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
                >
                  {seasonOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="md:col-span-2"
              >
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  お問い合わせ内容
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 resize-vertical"
                  placeholder="ご質問やご相談内容をお聞かせください"
                />
              </motion.div>
            </div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <motion.button
                type="submit"
                disabled={isSubmitting || !isValid}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden ${
                  isSubmitting || !isValid
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Button Background Animation */}
                {!isSubmitting && isValid && (
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-xl"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                
                <span className="relative z-10 flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" className="opacity-25" />
                        <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75" />
                      </svg>
                      送信中...
                    </>
                  ) : (
                    'お問い合わせを送信'
                  )}
                </span>
              </motion.button>
            </motion.div>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="mt-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-center"
              >
                <CheckCircleIcon className="h-6 w-6 mr-3 text-green-600" />
                <div>
                  <p className="font-semibold">送信完了しました！</p>
                  <p className="text-sm">担当者より3営業日以内にご連絡いたします。</p>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="mt-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-center"
              >
                <ExclamationCircleIcon className="h-6 w-6 mr-3 text-red-600" />
                <div>
                  <p className="font-semibold">送信に失敗しました</p>
                  <p className="text-sm">しばらく時間をおいて再度お試しください。</p>
                </div>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}