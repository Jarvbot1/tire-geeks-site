'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TireSizeFinder from '@/components/tools/TireSizeFinder';

export default function TireSizeCalculator() {
  const [activeTab, setActiveTab] = useState<'finder' | 'compare'>('finder');
  const [current, setCurrent] = useState({ width: 265, aspect: 70, rim: 17 });
  const [newTire, setNewTire] = useState({ width: 285, aspect: 70, rim: 17 });
  const [showResults, setShowResults] = useState(false);

  const calcDiameter = (w: number, a: number, r: number) =>
    (w * a / 2540) * 2 + r;
  const calcCircumference = (d: number) => d * Math.PI;
  const calcSidewallHeight = (w: number, a: number) => w * a / 2540;
  const calcRevsPerMile = (c: number) => 63360 / c;

  const currentDiam = calcDiameter(current.width, current.aspect, current.rim);
  const newDiam = calcDiameter(newTire.width, newTire.aspect, newTire.rim);
  const currentCirc = calcCircumference(currentDiam);
  const newCirc = calcCircumference(newDiam);
  const currentSidewall = calcSidewallHeight(current.width, current.aspect);
  const newSidewall = calcSidewallHeight(newTire.width, newTire.aspect);
  const currentRevs = calcRevsPerMile(currentCirc);
  const newRevs = calcRevsPerMile(newCirc);
  const diamDiff = newDiam - currentDiam;
  const pctDiff = Math.abs(((newDiam - currentDiam) / currentDiam) * 100);
  const speedoAt60 = 60 * (currentDiam / newDiam);

  const getDiffColor = (pct: number) => {
    if (pct <= 3) return '#22C55E';
    if (pct <= 5) return '#EAB308';
    return '#EF4444';
  };

  const diffColor = getDiffColor(pctDiff);

  const maxVisualSize = 200;
  const largerDiam = Math.max(currentDiam, newDiam);
  const currentVisualSize = (currentDiam / largerDiam) * maxVisualSize;
  const newVisualSize = (newDiam / largerDiam) * maxVisualSize;

  const rows = [
    {
      label: 'Overall Diameter',
      current: `${currentDiam.toFixed(2)}"`,
      new: `${newDiam.toFixed(2)}"`,
      diff: `${diamDiff > 0 ? '+' : ''}${diamDiff.toFixed(2)}"`,
    },
    {
      label: 'Circumference',
      current: `${currentCirc.toFixed(2)}"`,
      new: `${newCirc.toFixed(2)}"`,
      diff: `${(newCirc - currentCirc) > 0 ? '+' : ''}${(newCirc - currentCirc).toFixed(2)}"`,
    },
    {
      label: 'Sidewall Height',
      current: `${currentSidewall.toFixed(2)}"`,
      new: `${newSidewall.toFixed(2)}"`,
      diff: `${(newSidewall - currentSidewall) > 0 ? '+' : ''}${(newSidewall - currentSidewall).toFixed(2)}"`,
    },
    {
      label: 'Revs Per Mile',
      current: `${Math.round(currentRevs)}`,
      new: `${Math.round(newRevs)}`,
      diff: `${(newRevs - currentRevs) > 0 ? '+' : ''}${Math.round(newRevs - currentRevs)}`,
    },
    {
      label: 'Speedometer at 60 MPH',
      current: '60.0 mph',
      new: `${speedoAt60.toFixed(1)} mph`,
      diff: `${(speedoAt60 - 60) > 0 ? '+' : ''}${(speedoAt60 - 60).toFixed(1)} mph`,
    },
    {
      label: 'Diameter Difference',
      current: '—',
      new: '—',
      diff: `${diamDiff > 0 ? '+' : ''}${diamDiff.toFixed(2)}" (${diamDiff > 0 ? '+' : ''}${pctDiff.toFixed(1)}%)`,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: '#0A0A0A' }}>
        {/* Hero */}
        <section className="py-16 text-center" style={{ backgroundColor: '#0A0A0A' }}>
          <h1
            className="font-display font-bold text-white text-center"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            TIRE SIZE CALCULATOR
          </h1>
          <p
            className="font-body text-center max-w-2xl mx-auto mt-4 px-6"
            style={{ fontSize: '16px', color: '#9E9E9E' }}
          >
            Find your OEM tire size by vehicle, or compare tire sizes side by side.
          </p>
        </section>

        {/* Tab Switcher */}
        <section className="max-w-4xl mx-auto px-6">
          <div className="flex gap-0 mb-10">
            <button
              onClick={() => setActiveTab('finder')}
              className={`flex-1 py-4 font-nav text-[15px] font-bold uppercase tracking-[0.1em] transition-all border-b-[3px] ${
                activeTab === 'finder'
                  ? 'text-white border-[#D42B2B]'
                  : 'text-[#666] border-transparent hover:text-[#999]'
              }`}
            >
              FIND BY VEHICLE
            </button>
            <button
              onClick={() => setActiveTab('compare')}
              className={`flex-1 py-4 font-nav text-[15px] font-bold uppercase tracking-[0.1em] transition-all border-b-[3px] ${
                activeTab === 'compare'
                  ? 'text-white border-[#D42B2B]'
                  : 'text-[#666] border-transparent hover:text-[#999]'
              }`}
            >
              COMPARE SIZES
            </button>
          </div>
        </section>

        {/* Tab Content */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
          {/* Tab 1: Find By Vehicle */}
          {activeTab === 'finder' && <TireSizeFinder />}

          {/* Tab 2: Compare Sizes */}
          {activeTab === 'compare' && (
            <>
              {/* Inputs — 2 columns */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Current Tires */}
                <div
                  className="rounded-xl p-6"
                  style={{ backgroundColor: '#141414', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <h2 className="font-heading text-white mb-6" style={{ fontSize: '18px' }}>
                    CURRENT TIRES
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="font-nav text-xs uppercase tracking-wider block mb-2" style={{ color: '#9E9E9E' }}>
                        Width (mm)
                      </label>
                      <input
                        type="number"
                        placeholder="265"
                        value={current.width}
                        onChange={(e) => setCurrent({ ...current, width: Number(e.target.value) })}
                        min={100}
                        max={500}
                        step={5}
                        className="w-full rounded-lg px-4 py-3 text-white font-body focus:outline-none"
                        style={{
                          backgroundColor: '#1A1A1A',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#D42B2B')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <div>
                      <label className="font-nav text-xs uppercase tracking-wider block mb-2" style={{ color: '#9E9E9E' }}>
                        Aspect Ratio (%)
                      </label>
                      <input
                        type="number"
                        placeholder="70"
                        value={current.aspect}
                        onChange={(e) => setCurrent({ ...current, aspect: Number(e.target.value) })}
                        min={20}
                        max={95}
                        step={5}
                        className="w-full rounded-lg px-4 py-3 text-white font-body focus:outline-none"
                        style={{
                          backgroundColor: '#1A1A1A',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#D42B2B')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <div>
                      <label className="font-nav text-xs uppercase tracking-wider block mb-2" style={{ color: '#9E9E9E' }}>
                        Rim Diameter (inches)
                      </label>
                      <input
                        type="number"
                        placeholder="17"
                        value={current.rim}
                        onChange={(e) => setCurrent({ ...current, rim: Number(e.target.value) })}
                        min={12}
                        max={30}
                        step={1}
                        className="w-full rounded-lg px-4 py-3 text-white font-body focus:outline-none"
                        style={{
                          backgroundColor: '#1A1A1A',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#D42B2B')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                  </div>
                </div>

                {/* New Tires */}
                <div
                  className="rounded-xl p-6"
                  style={{ backgroundColor: '#141414', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <h2 className="font-heading mb-6" style={{ fontSize: '18px', color: '#D42B2B' }}>
                    NEW TIRES
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="font-nav text-xs uppercase tracking-wider block mb-2" style={{ color: '#9E9E9E' }}>
                        Width (mm)
                      </label>
                      <input
                        type="number"
                        placeholder="265"
                        value={newTire.width}
                        onChange={(e) => setNewTire({ ...newTire, width: Number(e.target.value) })}
                        min={100}
                        max={500}
                        step={5}
                        className="w-full rounded-lg px-4 py-3 text-white font-body focus:outline-none"
                        style={{
                          backgroundColor: '#1A1A1A',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#D42B2B')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <div>
                      <label className="font-nav text-xs uppercase tracking-wider block mb-2" style={{ color: '#9E9E9E' }}>
                        Aspect Ratio (%)
                      </label>
                      <input
                        type="number"
                        placeholder="70"
                        value={newTire.aspect}
                        onChange={(e) => setNewTire({ ...newTire, aspect: Number(e.target.value) })}
                        min={20}
                        max={95}
                        step={5}
                        className="w-full rounded-lg px-4 py-3 text-white font-body focus:outline-none"
                        style={{
                          backgroundColor: '#1A1A1A',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#D42B2B')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                    <div>
                      <label className="font-nav text-xs uppercase tracking-wider block mb-2" style={{ color: '#9E9E9E' }}>
                        Rim Diameter (inches)
                      </label>
                      <input
                        type="number"
                        placeholder="17"
                        value={newTire.rim}
                        onChange={(e) => setNewTire({ ...newTire, rim: Number(e.target.value) })}
                        min={12}
                        max={30}
                        step={1}
                        className="w-full rounded-lg px-4 py-3 text-white font-body focus:outline-none"
                        style={{
                          backgroundColor: '#1A1A1A',
                          border: '1px solid rgba(255,255,255,0.1)',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = '#D42B2B')}
                        onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Compare Button */}
              <button
                onClick={() => setShowResults(true)}
                className="mt-6 w-full py-4 rounded-lg font-nav uppercase tracking-widest text-white font-bold text-lg transition-opacity hover:opacity-90"
                style={{
                  background: 'linear-gradient(to right, #D42B2B, #B71C1C)',
                }}
              >
                COMPARE
              </button>

              {/* Results */}
              {showResults && (
                <div className="mt-12">
                  {/* Visual Tire Comparison */}
                  <div className="flex justify-center gap-8 my-10">
                    {/* Current Tire */}
                    <div className="flex flex-col items-center">
                      <div
                        className="rounded-full flex items-center justify-center"
                        style={{
                          width: `${currentVisualSize}px`,
                          height: `${currentVisualSize}px`,
                          border: '4px solid rgba(255,255,255,0.2)',
                        }}
                      >
                        <span className="font-heading text-white text-sm md:text-base">
                          {currentDiam.toFixed(1)}&quot;
                        </span>
                      </div>
                      <span className="font-body text-sm mt-3" style={{ color: '#9E9E9E' }}>
                        Current
                      </span>
                    </div>

                    {/* New Tire */}
                    <div className="flex flex-col items-center">
                      <div
                        className="rounded-full flex items-center justify-center"
                        style={{
                          width: `${newVisualSize}px`,
                          height: `${newVisualSize}px`,
                          border: '4px solid #D42B2B',
                        }}
                      >
                        <span className="font-heading text-white text-sm md:text-base">
                          {newDiam.toFixed(1)}&quot;
                        </span>
                      </div>
                      <span className="font-body text-sm mt-3" style={{ color: '#9E9E9E' }}>
                        New
                      </span>
                    </div>
                  </div>

                  {/* Results Table */}
                  <div className="max-w-2xl mx-auto">
                    {/* Table Header */}
                    <div className="flex justify-between items-center py-3 px-6 mb-2">
                      <span className="font-body text-xs uppercase tracking-wider" style={{ color: '#9E9E9E', flex: 2 }}>
                        Measurement
                      </span>
                      <span className="font-body text-xs uppercase tracking-wider text-center" style={{ color: '#9E9E9E', flex: 1 }}>
                        Current
                      </span>
                      <span className="font-body text-xs uppercase tracking-wider text-center" style={{ color: '#9E9E9E', flex: 1 }}>
                        New
                      </span>
                      <span className="font-body text-xs uppercase tracking-wider text-right" style={{ color: '#9E9E9E', flex: 1 }}>
                        Difference
                      </span>
                    </div>

                    {/* Rows */}
                    {rows.map((row, i) => (
                      <div
                        key={row.label}
                        className="flex justify-between items-center py-4 px-6 rounded-lg"
                        style={{ backgroundColor: i % 2 === 0 ? '#141414' : '#1A1A1A' }}
                      >
                        <span className="font-body" style={{ fontSize: '14px', color: '#9E9E9E', flex: 2 }}>
                          {row.label}
                        </span>
                        <span className="font-body text-white text-center" style={{ fontSize: '16px', flex: 1 }}>
                          {row.current}
                        </span>
                        <span className="font-body text-white text-center" style={{ fontSize: '16px', flex: 1 }}>
                          {row.new}
                        </span>
                        <span className="font-body text-right" style={{ fontSize: '14px', color: diffColor, flex: 1 }}>
                          {row.diff}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Recommendation Box */}
                  <div
                    className="max-w-2xl mx-auto mt-10 rounded-xl p-6"
                    style={{
                      backgroundColor: '#141414',
                      borderLeft: `4px solid ${diffColor}`,
                    }}
                  >
                    <p className="font-body text-white text-lg font-semibold mb-2">
                      {pctDiff <= 3 && 'These sizes are compatible. Good to go!'}
                      {pctDiff > 3 && pctDiff <= 5 && 'Minor difference. May need speedometer recalibration.'}
                      {pctDiff > 5 && 'Significant difference. Consult with Tire Geeks before installing.'}
                    </p>
                    <p className="font-body text-sm" style={{ color: '#9E9E9E' }}>
                      {pctDiff <= 3 && 'The size difference is within the acceptable range for most vehicles.'}
                      {pctDiff > 3 && pctDiff <= 5 && 'This size change may affect your speedometer accuracy and fuel economy readings.'}
                      {pctDiff > 5 && 'This size change could affect handling, clearance, and may require modifications.'}
                    </p>
                  </div>
                </div>
              )}
            </>
          )}

          {/* CTA */}
          <div className="text-center mt-20 pb-10">
            <p className="font-body mb-8" style={{ fontSize: '18px', color: '#9E9E9E' }}>
              Not sure what size fits? Visit Tire Geeks and we&apos;ll measure for free.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/locations"
                className="inline-block px-10 py-4 rounded-lg font-nav uppercase tracking-widest text-white font-bold text-lg transition-opacity hover:opacity-90"
                style={{
                  background: 'linear-gradient(to right, #D42B2B, #B71C1C)',
                }}
              >
                FIND A LOCATION
              </Link>
              <a
                href="tel:9168008786"
                className="inline-block px-10 py-4 rounded-lg font-nav uppercase tracking-widest font-bold text-lg transition-colors hover:bg-white/5"
                style={{
                  color: '#D42B2B',
                  border: '2px solid #D42B2B',
                }}
              >
                CALL (916) 800-8786
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
