import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function FeedbackWidget({ category = 'general' }: { category?: string }) {
  const { data, error, mutate } = useSWR(`/api/feedback?category=${encodeURIComponent(category)}`, fetcher);
  const [content, setContent] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;
    setLoading(true);
    await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author_name: name, author_email: email, content, category }),
    });
    setContent('');
    setLoading(false);
    mutate();
  }

  return (
    <div className="feedback-widget">
      <h3>{category === 'general' ? 'Generic Questions' : 'Feedback'}</h3>

      <form onSubmit={submit}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name (optional)" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email (optional)" />
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Write your question or feedback" />
        <button type="submit" disabled={loading}>{loading ? 'Posting…' : 'Post'}</button>
      </form>

      <div className="posts">
        {error && <div>Error loading posts</div>}
        {!data && <div>Loading…</div>}
        {data && data.data?.length === 0 && <div>No posts yet</div>}
        {data &&
          data.data.map((p: any) => (
            <article key={p.id} className="post">
              <div className="meta"><strong>{p.author_name || 'Anonymous'}</strong> · <small>{new Date(p.created_at).toLocaleString()}</small></div>
              <p>{p.content}</p>
            </article>
          ))}
      </div>
    </div>
  );
}
