'use client';
import { useState, useEffect } from 'react';
import { BRAND } from '@/lib/constants';
import { getYears, getMakes, getModels, getSubmodels } from '@/data/vehicleDatabase';
import GlassCard from '@/components/ui/GlassCard';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export default function VehicleFinder() {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [trim, setTrim] = useState('');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const yearNum = year ? Number(year) : null;
  const years = getYears();
  const makes = yearNum ? getMakes(yearNum) : [];
  const models = yearNum && make ? getModels(yearNum, make) : [];
  const trims = yearNum && make && model ? getSubmodels(yearNum, make, model) : [];

  // Reset downstream when upstream changes
  useEffect(() => { setMake(''); setModel(''); setTrim(''); }, [year]);
  useEffect(() => { setModel(''); setTrim(''); }, [make]);
  useEffect(() => { setTrim(''); }, [model]);

  return (
    <GlassCard solid={isMobile} className={`w-full ${isMobile ? 'p-4 mx-0 rounded-[12px]' : 'p-6 lg:p-8'}`}>
      <h3 className="font-heading text-[17px] md:text-[24px] font-bold uppercase text-[var(--text-primary)] mb-0.5">
        FIND YOUR FIT
      </h3>
      <p className="font-body text-[12px] md:text-[14px] text-[var(--text-secondary)] mb-3 md:mb-6">
        Select your vehicle to see what fits
      </p>

      <div className="flex flex-col gap-2 md:gap-3">
        <select
          className="vehicle-select font-body"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="" disabled>Year</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>

        <select
          className="vehicle-select font-body"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          disabled={!year}
        >
          <option value="" disabled>Make</option>
          {makes.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <select
          className="vehicle-select font-body"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          disabled={!make}
        >
          <option value="" disabled>Model</option>
          {models.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <select
          className="vehicle-select font-body"
          value={trim}
          onChange={(e) => setTrim(e.target.value)}
          disabled={!model}
        >
          <option value="" disabled>Trim</option>
          {trims.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <a
          href={trim ? '/blog/tire-size-calculator' : undefined}
          onClick={(e) => { if (!trim) e.preventDefault(); }}
          className={`btn-cta font-nav font-bold text-[14px] md:text-[16px] uppercase tracking-[0.08em] h-[44px] md:h-[52px] rounded-[8px] md:rounded-[6px] w-full mt-1 flex items-center justify-center ${
            !trim ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          SHOP TIRES & WHEELS
        </a>
      </div>

      <p className="text-center mt-2 md:mt-4 font-body text-[12px] md:text-[13px] text-[var(--text-muted)]">
        Or call us:{' '}
        <a
          href={`tel:${BRAND.locations[0].phoneRaw}`}
          className="text-[var(--text-primary)] hover:text-[var(--red)] transition-colors"
        >
          {BRAND.locations[0].phone}
        </a>
      </p>
    </GlassCard>
  );
}
