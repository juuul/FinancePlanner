import type { NextApiRequest, NextApiResponse } from 'next';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createServerSupabaseClient({ req, res });
  const id = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;

  if (req.method === 'DELETE') {
    // Require an authenticated session: only admins can perform the UPDATE due to RLS policy
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) return res.status(401).json({ error: 'Unauthorized' });

    const user = session.user;
    if (!user || !user.id) return res.status(401).json({ error: 'Unauthorized' });

    const { data, error } = await supabase
      .from('feedback')
      .update({ deleted: true, deleted_at: new Date().toISOString(), deleted_by: user.id })
      .eq('id', id)
      .select()
      .single();

    if (error) return res.status(403).json({ error: error.message });
    return res.status(200).json({ data });
  }

  res.setHeader('Allow', 'DELETE');
  return res.status(405).end('Method Not Allowed');
}
