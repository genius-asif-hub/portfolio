'use client';

import { useState, FormEvent } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      fname: (form.elements.namedItem('fname') as HTMLInputElement).value,
      lname: (form.elements.namedItem('lname') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('https://formspree.io/f/mykogvjv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input type="text" id="fname" name="fname" placeholder="John" required />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" name="lname" placeholder="Smith" required />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="john@company.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" placeholder="Project inquiry / Role opportunity" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Tell me about your project or what you're looking for..." required defaultValue="" />
      </div>

      <button type="submit" className="form-submit" id="submitBtn" disabled={status === 'loading'}>
        <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
        <span>{status === 'loading' ? '⏳' : '→'}</span>
      </button>

      {status === 'success' && (
        <p style={{ color: '#22c55e', fontSize: '0.85rem', marginTop: 12, textAlign: 'center' }}>
          ✅ Message sent! I&apos;ll get back to you within 24 hours.
        </p>
      )}
      {status === 'error' && (
        <p style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: 12, textAlign: 'center' }}>
          ❌ Something went wrong. Please email directly at asif@krishaweb.com
        </p>
      )}
    </form>
  );
}
