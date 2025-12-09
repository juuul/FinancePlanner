import React from 'react';
import FeedbackWidget from '../components/FeedbackWidget';

export default function QuestionsPage() {
  return (
    <main>
      <h1>Questions & Feedback</h1>
      <p>This is a public area where anyone can ask general questions or leave feedback. The repo owner can remove posts.</p>
      <FeedbackWidget category="general" />
    </main>
  );
}
