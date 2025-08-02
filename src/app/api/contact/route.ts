import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  phone?: string
  age?: string
  period?: string
  season?: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()
    const { name, email, phone, age, period, season, message } = body

    // バリデーション
    if (!name || !email) {
      return NextResponse.json(
        { error: 'お名前とメールアドレスは必須です' },
        { status: 400 }
      )
    }

    // メールアドレスの形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '正しいメールアドレスを入力してください' },
        { status: 400 }
      )
    }

    // Nodemailer設定（サクラVPS用）
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'your-sakura-smtp-server.com', // サクラVPSのSMTPサーバー
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // 587ポートの場合はfalse
      auth: {
        user: process.env.SMTP_USER || 'your-smtp-username',
        pass: process.env.SMTP_PASS || 'your-smtp-password',
      },
      // デバッグ用（本番では削除）
      debug: process.env.NODE_ENV === 'development',
      logger: process.env.NODE_ENV === 'development',
    })

    // メール本文作成
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>サンディエゴ留学 お問い合わせ</title>
        <style>
          body { font-family: 'Hiragino Sans', 'ヒラギノ角ゴシック', sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0066cc, #003d80); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0066cc; margin-bottom: 5px; }
          .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #0066cc; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏫 サンディエゴ留学 お問い合わせ</h1>
          </div>
          <div class="content">
            <p>新しいお問い合わせが届きました。</p>
            
            <div class="field">
              <div class="label">👤 お名前</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">📧 メールアドレス</div>
              <div class="value">${email}</div>
            </div>
            
            ${phone ? `
            <div class="field">
              <div class="label">📞 電話番号</div>
              <div class="value">${phone}</div>
            </div>
            ` : ''}
            
            ${age ? `
            <div class="field">
              <div class="label">🎓 お子様の年齢</div>
              <div class="value">${age}</div>
            </div>
            ` : ''}
            
            ${period ? `
            <div class="field">
              <div class="label">📅 希望期間</div>
              <div class="value">${period}</div>
            </div>
            ` : ''}
            
            ${season ? `
            <div class="field">
              <div class="label">🌸 参加希望時期</div>
              <div class="value">${season}</div>
            </div>
            ` : ''}
            
            ${message ? `
            <div class="field">
              <div class="label">💬 お問い合わせ内容</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            ` : ''}
            
            <div class="footer">
              <p>このメールは自動送信されています。</p>
              <p>アユサインターナショナル｜サンディエゴ留学プログラム</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    // テキスト版メール
    const textContent = `
サンディエゴ留学 お問い合わせ

新しいお問い合わせが届きました。

お名前: ${name}
メールアドレス: ${email}
電話番号: ${phone || '未記入'}
お子様の年齢: ${age || '未記入'}
希望期間: ${period || '未記入'}
参加希望時期: ${season || '未記入'}

お問い合わせ内容:
${message || '未記入'}

---
このメールは自動送信されています。
アユサインターナショナル｜サンディエゴ留学プログラム
    `

    // 管理者向けメール送信
    await transporter.sendMail({
      from: `"サンディエゴ留学LP" <${process.env.SMTP_FROM || 'noreply@intraxjp.com'}>`,
      to: process.env.CONTACT_EMAIL || 'intrax@intraxjp.com',
      subject: `【サンディエゴ留学】お問い合わせ - ${name}様`,
      text: textContent,
      html: htmlContent,
      replyTo: email,
    })

    // 自動返信メール
    const autoReplyHtml = `
      <!DOCTYPE html>
      <html lang="ja">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>お問い合わせありがとうございます</title>
        <style>
          body { font-family: 'Hiragino Sans', 'ヒラギノ角ゴシック', sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0066cc, #003d80); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
          .highlight { background: linear-gradient(135deg, #ffeb3b, #ffc107); padding: 15px; border-radius: 8px; margin: 20px 0; }
          .contact-info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0066cc; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🌟 お問い合わせありがとうございます</h1>
          </div>
          <div class="content">
            <p>${name} 様</p>
            
            <p>この度は、アメリカ・サンディエゴ中学・高校短期留学プログラムにお問い合わせいただき、誠にありがとうございます。</p>
            
            <div class="highlight">
              <p><strong>📧 お問い合わせを正常に受付いたしました</strong></p>
              <p>担当者より<strong>3営業日以内</strong>にご連絡させていただきます。</p>
            </div>
            
            <p>お問い合わせ内容に関して、より詳しい資料や情報が必要でしたら、お気軽にお声がけください。</p>
            
            <div class="contact-info">
              <h3>📞 お急ぎの場合は、お電話でもお問い合わせいただけます</h3>
              <p><strong>アユサインターナショナル日本事務局</strong></p>
              <p>📧 Email: intrax@intraxjp.com</p>
              <p>📞 TEL: 03-3434-2636</p>
              <p>🕐 受付時間: 平日10時～18時30分</p>
              <p>📍 〒105-0022 東京都港区海岸1-9-11マリンクスタワー7F</p>
            </div>
            
            <p>皆様の留学の夢を実現するため、スタッフ一同全力でサポートさせていただきます。</p>
            
            <div class="footer">
              <p>このメールは自動送信されています。</p>
              <p><strong>アユサインターナショナル｜サンディエゴ留学プログラム</strong></p>
              <p>🌐 https://www.intraxjp.com/</p>
            </div>
          </div>
        </div>
      </body>
      </html>
    `

    // 自動返信メール送信
    await transporter.sendMail({
      from: `"アユサインターナショナル" <${process.env.SMTP_FROM || 'noreply@intraxjp.com'}>`,
      to: email,
      subject: '【自動返信】お問い合わせありがとうございます - サンディエゴ留学プログラム',
      html: autoReplyHtml,
    })

    // 成功レスポンス
    return NextResponse.json(
      { 
        success: true, 
        message: 'お問い合わせありがとうございます。担当者より3営業日以内にご連絡いたします。' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form submission error:', error)
    
    // エラーの詳細をログに記録（本番環境では適切なログサービスを使用）
    if (process.env.NODE_ENV === 'development') {
      console.error('詳細エラー:', error)
    }

    return NextResponse.json(
      { 
        error: 'メール送信に失敗しました。しばらく時間をおいて再度お試しください。',
        details: process.env.NODE_ENV === 'development' ? error : undefined 
      },
      { status: 500 }
    )
  }
}