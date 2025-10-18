import { useState } from 'react';
import { submitLead } from '../../services/GoogleSheetsService';
import { Send } from 'lucide-react';

export default function FormsSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    programInterest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const programs = [
    'Discovery Flight',
    'Private Pilot License (PPL)',
    'Instrument Rating (IR)',
    'Commercial Pilot License (CPL)',
    'Flight Instructor (CFI)',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const success = await submitLead({
    fullName: formData.fullName,
    email: formData.email,
    programInterest: formData.programInterest,
    });

    setIsSubmitting(false);
    if (success) {
      setIsSuccess(true);
      setFormData({ fullName: '', email: '', programInterest: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 mobile:px-6 desktop:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl desktop:text-4xl font-bold text-black mb-4">
            Start Your Flight Training Today
          </h2>
          <p className="text-gray-600 text-lg">
            Fill out the form below and we'll contact you within 24 hours to schedule your discovery flight
          </p>
        </div>

        {isSuccess && (
          <div className="mb-6 p-4 bg-fl-blue bg-opacity-10 border border-fl-blue rounded-lg text-fl-blue text-center">
            Thank you! We'll be in touch soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fl-blue"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fl-blue"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-2">
              I'm Interested In *
            </label>
            <select
              id="program"
              required
              value={formData.programInterest}
              onChange={(e) => setFormData({ ...formData, programInterest: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-fl-blue"
            >
              <option value="">Select a program...</option>
              {programs.map((program) => (
                <option key={program} value={program}>
                  {program}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-fl-blue text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                <Send className="w-5 h-5" />
                Get Started
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}