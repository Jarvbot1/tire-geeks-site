'use client';

import { useState, FormEvent } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BRAND } from '@/lib/constants';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const inputStyle: React.CSSProperties = {
    background: '#141414',
    border: '1px solid #2A2A2A',
    borderRadius: 6,
    color: '#F2F2F2',
    height: 52,
    width: '100%',
    padding: '0 16px',
    fontSize: 16,
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <>
      <Navbar />
      <main style={{ background: BRAND.colors.bgPrimary, minHeight: '100vh' }}>
        {/* ── Hero Banner ── */}
        <section
          style={{
            width: '100%',
            height: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, rgba(20,20,20,0.95) 100%)',
            borderBottom: `1px solid ${BRAND.colors.border}`,
          }}
        >
          <span
            className="font-nav"
            style={{
              color: BRAND.colors.red,
              fontSize: 13,
              letterSpacing: 3,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            CONTACT US
          </span>
          <h1
            className="font-display"
            style={{
              color: BRAND.colors.textPrimary,
              fontSize: 'clamp(36px, 5vw, 56px)',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            GET IN TOUCH
          </h1>
          <div className="red-bar" style={{ width: 60, height: 3, background: BRAND.colors.red, marginTop: 20, borderRadius: 2 }} />
        </section>

        {/* ── Content ── */}
        <section
          className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20 flex flex-col md:flex-row gap-8 md:gap-12"
        >
          {/* ── Left: Contact Form (60%) ── */}
          <div style={{ flex: '1 1 600px', minWidth: 0 }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {/* Name */}
              <div>
                <label className="font-nav" style={labelStyle}>Name</label>
                <input
                  className="font-body"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  style={inputStyle}
                  onFocus={focusHandler}
                  onBlur={blurHandler}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="font-nav" style={labelStyle}>Phone</label>
                <input
                  className="font-body"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="(916) 555-0000"
                  style={inputStyle}
                  onFocus={focusHandler}
                  onBlur={blurHandler}
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-nav" style={labelStyle}>Email</label>
                <input
                  className="font-body"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  style={inputStyle}
                  onFocus={focusHandler}
                  onBlur={blurHandler}
                />
              </div>

              {/* Location Preference */}
              <div>
                <label className="font-nav" style={labelStyle}>Location Preference</label>
                <select
                  className="font-body vehicle-select"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  onFocus={focusHandler}
                  onBlur={blurHandler}
                >
                  <option value="">Select a location</option>
                  <option value="Florin Road">Florin Road</option>
                  <option value="Arden Way">Arden Way</option>
                </select>
              </div>

              {/* Service Needed */}
              <div>
                <label className="font-nav" style={labelStyle}>Service Needed</label>
                <select
                  className="font-body vehicle-select"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  onFocus={focusHandler}
                  onBlur={blurHandler}
                >
                  <option value="">Select a service</option>
                  <option value="Tires">Tires</option>
                  <option value="Wheels">Wheels</option>
                  <option value="Alignment">Alignment</option>
                  <option value="Lift Kit">Lift Kit</option>
                  <option value="Lowering Kit">Lowering Kit</option>
                  <option value="Brakes/Suspension">Brakes/Suspension</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Vehicle Year / Make / Model */}
              <div>
                <label className="font-nav" style={labelStyle}>Vehicle Year / Make / Model</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    className="font-body"
                    type="text"
                    name="vehicleYear"
                    value={form.vehicleYear}
                    onChange={handleChange}
                    placeholder="Year"
                    style={inputStyle}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                  />
                  <input
                    className="font-body"
                    type="text"
                    name="vehicleMake"
                    value={form.vehicleMake}
                    onChange={handleChange}
                    placeholder="Make"
                    style={inputStyle}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                  />
                  <input
                    className="font-body"
                    type="text"
                    name="vehicleModel"
                    value={form.vehicleModel}
                    onChange={handleChange}
                    placeholder="Model"
                    style={inputStyle}
                    onFocus={focusHandler}
                    onBlur={blurHandler}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="font-nav" style={labelStyle}>Message</label>
                <textarea
                  className="font-body"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your vehicle needs..."
                  style={{
                    ...inputStyle,
                    height: 'auto',
                    minHeight: 120,
                    paddingTop: 14,
                    paddingBottom: 14,
                    resize: 'vertical',
                  }}
                  onFocus={focusHandler}
                  onBlur={blurHandler}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-cta font-nav"
                style={{
                  width: '100%',
                  height: 56,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                  fontSize: 16,
                  letterSpacing: 2,
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: 8,
                }}
              >
                <Send size={16} />
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* ── Right: Location Info (40%) ── */}
          <div style={{ flex: '1 1 360px', display: 'flex', flexDirection: 'column', gap: 24 }}>
            {BRAND.locations.map((loc) => (
              <div
                key={loc.name}
                style={{
                  background: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 12,
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                {/* Location Name */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <MapPin size={20} color={BRAND.colors.red} />
                  <span
                    className="font-heading"
                    style={{ fontWeight: 600, fontSize: 20, color: BRAND.colors.textPrimary }}
                  >
                    {loc.name}
                  </span>
                </div>

                {/* Address */}
                <p
                  className="font-body"
                  style={{ margin: 0, color: BRAND.colors.textSecondary, fontSize: 14, lineHeight: 1.6 }}
                >
                  {loc.address}
                </p>

                {/* Phone */}
                <a
                  href={`tel:${loc.phoneRaw}`}
                  className="font-body"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: BRAND.colors.textPrimary,
                    textDecoration: 'none',
                    fontSize: 15,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = BRAND.colors.red)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = BRAND.colors.textPrimary)}
                >
                  <Phone size={16} />
                  {loc.phone}
                </a>

                {/* Hours */}
                <div
                  className="font-body"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: BRAND.colors.textSecondary,
                    fontSize: 14,
                  }}
                >
                  <Clock size={16} />
                  {loc.hours}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                  <a
                    href={`tel:${loc.phoneRaw}`}
                    className="btn-cta font-nav"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      padding: '10px 20px',
                      fontSize: 12,
                      letterSpacing: 1.5,
                      textDecoration: 'none',
                      borderRadius: 6,
                    }}
                  >
                    <Phone size={14} />
                    CALL NOW
                  </a>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost font-nav"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 6,
                      padding: '10px 20px',
                      fontSize: 12,
                      letterSpacing: 1.5,
                      textDecoration: 'none',
                      borderRadius: 6,
                    }}
                  >
                    <MapPin size={14} />
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ── Helpers ── */

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: 8,
  fontSize: 12,
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  color: '#9E9E9E',
};

const focusHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  e.currentTarget.style.borderColor = '#D42B2B';
};

const blurHandler = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  e.currentTarget.style.borderColor = '#2A2A2A';
};
