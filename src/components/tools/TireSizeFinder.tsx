'use client';
import { useState, useEffect } from 'react';
import { getYears, getMakes, getModels, getSubmodels, getTireSpecs } from '@/data/vehicleDatabase';
import type { VehicleTireSpec } from '@/data/vehicleDatabase';

export default function TireSizeFinder() {
  const [year, setYear] = useState<number | null>(null);
  const [make, setMake] = useState<string>('');
  const [model, setModel] = useState<string>('');
  const [submodel, setSubmodel] = useState<string>('');
  const [result, setResult] = useState<VehicleTireSpec | null>(null);

  const years = getYears();
  const makes = year ? getMakes(year) : [];
  const models = year && make ? getModels(year, make) : [];
  const submodels = year && make && model ? getSubmodels(year, make, model) : [];

  // Reset downstream selections when upstream changes
  useEffect(() => { setMake(''); setModel(''); setSubmodel(''); setResult(null); }, [year]);
  useEffect(() => { setModel(''); setSubmodel(''); setResult(null); }, [make]);
  useEffect(() => { setSubmodel(''); setResult(null); }, [model]);

  // Lookup tire specs when all 4 fields are selected
  useEffect(() => {
    if (year && make && model && submodel) {
      const specs = getTireSpecs(year, make, model, submodel);
      setResult(specs);
    }
  }, [year, make, model, submodel]);

  const selectClasses = `h-[52px] px-4 bg-[#141414] border border-[#2A2A2A] rounded-lg text-white
    font-body text-[16px] focus:border-[#D42B2B] focus:ring-1 focus:ring-[#D42B2B]/20
    outline-none transition-colors appearance-none cursor-pointer
    disabled:opacity-40 disabled:cursor-not-allowed w-full`;

  return (
    <div className="space-y-6">
      <h3 className="font-heading text-2xl font-bold uppercase text-white">
        Find Your Tire Size
      </h3>
      <p className="font-body text-[#9E9E9E]">
        Select your vehicle to see factory tire and wheel specifications.
      </p>

      {/* 4 cascading dropdowns — stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {/* Year */}
        <select
          value={year || ''}
          onChange={(e) => setYear(e.target.value ? Number(e.target.value) : null)}
          className={selectClasses}
        >
          <option value="">Year</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>

        {/* Make */}
        <select
          value={make}
          onChange={(e) => setMake(e.target.value)}
          disabled={!year}
          className={selectClasses}
        >
          <option value="">Make</option>
          {makes.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        {/* Model */}
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          disabled={!make}
          className={selectClasses}
        >
          <option value="">Model</option>
          {models.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        {/* Submodel */}
        <select
          value={submodel}
          onChange={(e) => setSubmodel(e.target.value)}
          disabled={!model}
          className={selectClasses}
        >
          <option value="">Trim / Submodel</option>
          {submodels.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Results */}
      {result && (
        <div
          className="mt-8 rounded-xl p-8 space-y-6"
          style={{ backgroundColor: '#141414', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <h4 className="font-heading text-xl font-bold text-white uppercase">
            {year} {make} {model} &mdash; {submodel}
          </h4>

          {/* Tire sizes */}
          <div>
            <h5 className="font-nav text-sm font-semibold tracking-widest text-[#D42B2B] uppercase mb-3">
              OEM Tire Sizes
            </h5>
            <div className="flex flex-wrap gap-3">
              {result.tireSizes.map((size) => (
                <span
                  key={size}
                  className="px-4 py-2 rounded-lg font-body text-lg text-white font-medium"
                  style={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A' }}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Wheel sizes */}
          <div>
            <h5 className="font-nav text-sm font-semibold tracking-widest text-[#D42B2B] uppercase mb-3">
              OEM Wheel Sizes
            </h5>
            <div className="flex flex-wrap gap-3">
              {result.wheelSizes.map((size) => (
                <span
                  key={size}
                  className="px-4 py-2 rounded-lg font-body text-lg text-white font-medium"
                  style={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A' }}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Bolt pattern */}
          <div>
            <h5 className="font-nav text-sm font-semibold tracking-widest text-[#D42B2B] uppercase mb-3">
              Bolt Pattern
            </h5>
            <span
              className="px-4 py-2 rounded-lg font-body text-lg text-white font-medium inline-block"
              style={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A' }}
            >
              {result.boltPattern}
            </span>
          </div>

          {/* Notes */}
          {result.notes && (
            <p
              className="text-[#9E9E9E] font-body text-sm italic pl-4"
              style={{ borderLeft: '2px solid #D42B2B' }}
            >
              {result.notes}
            </p>
          )}

          {/* CTA */}
          <div className="pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p className="font-body text-[#9E9E9E] mb-4">
              Need help finding the right tires for your {year} {make} {model}? Our experts at Tire Geeks
              can help you find the perfect fitment.
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <a
                href="tel:+19168008786"
                className="px-6 py-3 text-white font-nav text-sm font-bold tracking-wider uppercase rounded transition-all hover:shadow-[0_0_20px_rgba(212,43,43,0.4)] text-center h-12 md:h-auto flex items-center justify-center"
                style={{ background: 'linear-gradient(to right, #D42B2B, #FF1744)' }}
              >
                CALL (916) 800-8786
              </a>
              <a
                href="/financing"
                className="px-6 py-3 text-white font-nav text-sm font-bold tracking-wider uppercase rounded transition-all hover:border-white text-center h-12 md:h-auto flex items-center justify-center"
                style={{ border: '2px solid rgba(255,255,255,0.3)' }}
              >
                APPLY FOR FINANCING
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
