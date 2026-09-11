import React from 'react';

export default function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] mix-blend-multiply"
      style={{
        backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}
