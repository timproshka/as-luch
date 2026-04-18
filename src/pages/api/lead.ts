import type { APIRoute } from 'astro';

export const prerender = false;

interface LeadPayload {
  name?: string;
  phone?: string;
  category?: string;
  source?: string;
  referrer?: string;
  userAgent?: string;
}

const validate = (p: LeadPayload): string | null => {
  if (!p.name || p.name.length < 2) return 'Имя обязательно';
  if (!p.phone || p.phone.replace(/\D/g, '').length < 11) return 'Некорректный телефон';
  if (!p.category) return 'Категория обязательна';
  return null;
};

export const POST: APIRoute = async ({ request }) => {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const error = validate(body);
  if (error) {
    return new Response(JSON.stringify({ ok: false, error }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID;

  const message = [
    '🎯 <b>Новая заявка АС-Луч</b>',
    '',
    `👤 <b>Имя:</b> ${body.name}`,
    `📞 <b>Телефон:</b> ${body.phone}`,
    `🚗 <b>Категория:</b> ${body.category}`,
    '',
    `🌐 <b>Источник:</b> ${body.source || '—'}`,
    `🔗 <b>Referrer:</b> ${body.referrer || 'direct'}`,
    `📅 <b>Время:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Yekaterinburg' })}`,
  ].join('\n');

  // Telegram notification (если настроено)
  if (telegramToken && telegramChatId) {
    try {
      await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: message,
          parse_mode: 'HTML',
        }),
      });
    } catch (err) {
      console.error('Telegram send failed', err);
    }
  }

  // Fallback: log в консоль Vercel
  console.log('[LEAD]', JSON.stringify(body));

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
