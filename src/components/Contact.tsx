import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mlswijerathne@gmail.com',
    href: 'mailto:mlswijerathne@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+94 766298167',
    href: 'tel:+94766298167',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Sri Lanka',
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'mailto' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

      if (
        serviceId === 'your_service_id' ||
        templateId === 'your_template_id' ||
        publicKey === 'your_public_key'
      ) {
        const mailtoLink = `mailto:mlswijerathne@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
        window.open(mailtoLink, '_blank');
        setSubmitStatus('mailto');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 8000);
        return;
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'mlswijerathne@gmail.com',
          reply_to: formData.email,
        },
        publicKey,
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-[var(--bg-primary)] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <motion.div variants={fadeUp}>
            <p
              className="mb-4 text-xs font-mono uppercase tracking-[0.3em]"
              style={{ color: 'var(--text-muted)' }}
            >
              LET&apos;S CONNECT
            </p>
            <h2
              className="text-section font-display font-black mb-8"
              style={{ color: 'var(--text-primary)' }}
            >
              Get In Touch
            </h2>
            <p
              className="mb-12 max-w-lg text-base leading-relaxed md:text-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              Whether you have a specific project in mind or want to discuss collaborations and
              opportunities, feel free to reach out. I&apos;m always open to new ideas and
              connections.
            </p>

            <div className="space-y-8">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="group flex items-center gap-5">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-colors duration-300 group-hover:border-[var(--border-hover)]"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      borderColor: 'var(--border-color)',
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="mb-1 text-[10px] font-mono uppercase tracking-widest"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="block truncate text-base font-medium transition-colors duration-300 hover:text-[var(--accent)] md:text-lg"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p
                        className="text-base font-medium md:text-lg"
                        style={{ color: 'var(--text-primary)' }}
                      >
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="rounded-3xl bg-[var(--bg-secondary)] p-8 md:p-10">
              {submitStatus === 'success' && (
                <div
                  className="mb-6 rounded-xl border p-4"
                  style={{
                    backgroundColor: 'var(--success-bg)',
                    borderColor: 'var(--success-border)',
                  }}
                >
                  <p className="text-sm font-medium" style={{ color: 'var(--success-text)' }}>
                    Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              {submitStatus === 'mailto' && (
                <div
                  className="mb-6 rounded-xl border p-4"
                  style={{
                    backgroundColor: 'var(--info-bg)',
                    borderColor: 'var(--info-border)',
                  }}
                >
                  <p className="text-sm font-medium" style={{ color: 'var(--info-text)' }}>
                    Your email client should open. If not, send directly to mlswijerathne@gmail.com
                  </p>
                </div>
              )}
              {submitStatus === 'error' && (
                <div
                  className="mb-6 rounded-xl border p-4"
                  style={{
                    backgroundColor: 'var(--error-bg)',
                    borderColor: 'var(--error-border)',
                  }}
                >
                  <p className="text-sm font-medium" style={{ color: 'var(--error-text)' }}>
                    Failed to send message. Please try again or contact me directly.
                  </p>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-xl border-none bg-[var(--bg-input)] p-4 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-all focus:ring-2 focus:ring-[var(--accent)] focus:outline-none disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full rounded-xl border-none bg-[var(--bg-input)] p-4 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-all focus:ring-2 focus:ring-[var(--accent)] focus:outline-none disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-xl border-none bg-[var(--bg-input)] p-4 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-all focus:ring-2 focus:ring-[var(--accent)] focus:outline-none disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="How can we work together?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full resize-none rounded-xl border-none bg-[var(--bg-input)] p-4 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] transition-all focus:ring-2 focus:ring-[var(--accent)] focus:outline-none disabled:opacity-50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--accent)] py-4 text-sm font-bold uppercase tracking-widest text-[var(--bg-primary)] transition-all duration-300 hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
