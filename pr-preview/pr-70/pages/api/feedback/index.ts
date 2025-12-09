import type { NextApiRequest, NextApiResponse } from 'next';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createServerSupabaseClient({ req, res });

  if (req.method === 'GET') {
    const category = typeof req.query.category === 'string' ? req.query.category : undefined;

    const query = supabase
      .from('feedback')
      .select('id,author_name,content,category,created_at')
      .eq('deleted', false)
      .order('created_at', { ascending: false });

    const filtered = category ? query.eq('category', category) : query;
    const { data, error } = await filtered;
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ data });
  }

  if (req.method === 'POST') {
    const { author_name, author_email, content, category, recaptchaToken } = req.body || {};
    if (!content || typeof content !== 'string' || content.trim().length === 0) {
      return res.status(400).json({ error: 'content is required' });
    }
    if (content.length > 5000) return res.status(400).json({ error: 'content too long' });

    // OPTIONAL: If you use reCAPTCHA, verify recaptchaToken server-side here.

    const ip = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null;

    const { data, error } = await supabase
      .from('feedback')
      .insert({ author_name, author_email, content, category: category || 'general', ip })
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ data });
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).end('Method Not Allowed');
}
