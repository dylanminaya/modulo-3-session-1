import {
  ArrowDown,
  ArrowsClockwise,
  ArrowUp,
  Cloud,
  CloudRain,
  CloudSun,
  Drop,
  MapPin,
  MaskSad,
  MoonStars,
  Sun,
  SunDim,
  ThermometerHot,
  Wind,
} from "@phosphor-icons/react/dist/ssr";
import type { ComponentType } from "react";

type Glyph = ComponentType<{ className?: string; size?: number }>;

const hourly: { time: string; Glyph: Glyph; temp: string; now?: boolean }[] = [
  { time: "Now", Glyph: SunDim, temp: "31°", now: true },
  { time: "4 PM", Glyph: SunDim, temp: "31°" },
  { time: "5 PM", Glyph: Sun, temp: "30°" },
  { time: "6 PM", Glyph: CloudSun, temp: "29°" },
  { time: "7 PM", Glyph: Cloud, temp: "28°" },
  { time: "8 PM", Glyph: MoonStars, temp: "27°" },
];

const forecast: {
  day: string;
  Glyph: Glyph;
  hi: string;
  lo: string;
  dust?: boolean;
  strong?: boolean;
}[] = [
  { day: "Today", Glyph: SunDim, hi: "33°", lo: "26°", dust: true, strong: true },
  { day: "Wed", Glyph: Sun, hi: "34°", lo: "26°" },
  { day: "Thu", Glyph: CloudSun, hi: "32°", lo: "25°" },
  { day: "Fri", Glyph: CloudRain, hi: "30°", lo: "24°" },
  { day: "Sat", Glyph: SunDim, hi: "33°", lo: "26°" },
];

const quickStats: { Glyph: Glyph; value: string; label: string }[] = [
  { Glyph: Drop, value: "74%", label: "Humidity" },
  { Glyph: Wind, value: "18 km/h", label: "Wind" },
  { Glyph: Sun, value: "9 High", label: "UV Index" },
];

const meter = [
  { label: "Low", active: false },
  { label: "Moderate", active: true },
  { label: "High", active: false },
  { label: "Very High", active: false },
];

const tempTrack = {
  backgroundImage: "linear-gradient(to right, var(--temp-cool), var(--accent))",
};

export function MobileView() {
  return (
    <div className="isolate relative w-full max-w-[390px] overflow-hidden px-5 pt-14 pb-7">
      {/* Resplandor cálido del sol entre la calima */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 h-80 w-80 rounded-full left-[150px] top-[120px]"
        style={{
          background: "radial-gradient(circle, var(--haze) 0%, transparent 70%)",
          opacity: 0.2,
        }}
      />

      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-[3px]">
          <div className="flex items-center gap-1.5">
            <MapPin className="text-text" size={18} />
            <span className="font-head text-xl text-text">Santo Domingo</span>
          </div>
          <span className="font-body text-[13px] font-medium text-text-dim">
            Tuesday, Jun 12 · 2:40 PM
          </span>
        </div>
        <button
          type="button"
          aria-label="Refresh"
          className="flex h-10 w-10 items-center justify-center rounded-[20px] border border-glass-border bg-glass"
        >
          <ArrowsClockwise className="text-text" size={18} />
        </button>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center gap-0.5 pt-[30px] pb-4">
        <SunDim className="text-accent" size={76} />
        <div className="flex items-start pt-1.5">
          <span className="font-head text-[118px] leading-none text-text">31</span>
          <span className="font-head text-[64px] text-text-dim">°</span>
        </div>
        <div className="flex items-center gap-2 rounded-[18px] border border-glass-border bg-glass px-3.5 py-2">
          <Wind className="text-accent" size={16} />
          <span className="font-body text-sm font-bold text-text">
            Calima · Hazy Sunshine
          </span>
        </div>
        <div className="flex gap-4 pt-3">
          <div className="flex items-center gap-1">
            <ArrowUp className="text-text-dim" size={14} />
            <span className="font-body text-sm font-semibold text-text-dim">High 33°</span>
          </div>
          <div className="flex items-center gap-1">
            <ArrowDown className="text-text-dim" size={14} />
            <span className="font-body text-sm font-semibold text-text-dim">Low 26°</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="flex flex-col gap-[13px] pt-1.5">
        {/* Feels Like */}
        <div className="flex items-center gap-3.5 rounded-[22px] border border-glass-border bg-glass-strong p-3.5">
          <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[23px] bg-accent-strong">
            <ThermometerHot className="text-text" size={24} />
          </div>
          <div className="flex flex-1 flex-col gap-[3px]">
            <span className="font-body text-[11px] font-extrabold tracking-[1px] text-text-faint">
              FEELS LIKE
            </span>
            <div className="flex flex-1 items-center gap-2">
              <span className="font-head text-3xl text-text">38°</span>
              <span className="min-w-0 flex-1 font-body text-[12.5px] font-semibold text-text-dim">
                Dust + 74% humidity make it feel hotter
              </span>
            </div>
          </div>
        </div>

        {/* Sahara Dust */}
        <div className="flex flex-col gap-[13px] rounded-[22px] border border-glass-border bg-glass p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wind className="text-accent" size={20} />
              <span className="font-head text-[17px] text-text">Sahara Dust</span>
            </div>
            <div className="rounded-[13px] bg-accent-strong px-[11px] py-[5px]">
              <span className="font-body text-xs font-extrabold text-text">Moderate</span>
            </div>
          </div>

          <div className="flex gap-[5px]">
            {meter.map((seg) => (
              <div key={seg.label} className="flex flex-1 flex-col items-center gap-1.5">
                <div
                  className={`h-[7px] w-full rounded ${seg.active ? "bg-accent" : "bg-track-muted"}`}
                />
                <span
                  className={`font-body text-[10.5px] ${
                    seg.active ? "font-extrabold text-text" : "font-semibold text-text-faint"
                  }`}
                >
                  {seg.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex gap-2.5 pt-1">
            {[
              { k: "PM10", v: "112 µg/m³" },
              { k: "PM2.5", v: "41 µg/m³" },
            ].map((box) => (
              <div
                key={box.k}
                className="flex flex-1 flex-col gap-0.5 rounded-[14px] bg-surface-inset px-3 py-2"
              >
                <span className="font-body text-[11px] font-bold text-text-faint">{box.k}</span>
                <span className="font-head text-[15px] text-text">{box.v}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-0.5">
            <MaskSad className="shrink-0 text-accent" size={16} />
            <span className="min-w-0 flex-1 font-body text-[12.5px] font-semibold text-text-dim">
              Sensitive groups: limit long outdoor exposure.
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-2.5">
          {quickStats.map(({ Glyph, value, label }) => (
            <div
              key={label}
              className="flex flex-1 flex-col items-center gap-[7px] rounded-[18px] border border-glass-border bg-glass px-2 py-[13px]"
            >
              <Glyph className="text-accent" size={21} />
              <span className="font-head text-[15px] text-text">{value}</span>
              <span className="font-body text-[11px] font-semibold text-text-dim">{label}</span>
            </div>
          ))}
        </div>

        {/* Hourly */}
        <section className="flex flex-col gap-[11px] pt-2">
          <div className="flex items-center justify-between">
            <span className="font-head text-base text-text">Hourly</span>
            <span className="font-body text-xs font-semibold text-text-faint">Next 6 hours</span>
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {hourly.map(({ time, Glyph, temp, now }) => (
              <div
                key={time}
                className={`flex min-w-[44px] flex-1 flex-col items-center gap-[9px] rounded-2xl border px-1 py-3 ${
                  now ? "border-accent-strong bg-accent-strong" : "border-glass-border bg-glass"
                }`}
              >
                <span
                  className={`font-body text-[11px] font-bold ${now ? "text-text" : "text-text-dim"}`}
                >
                  {time}
                </span>
                <Glyph className={now ? "text-text" : "text-accent"} size={22} />
                <span className="font-head text-[15px] text-text">{temp}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5-Day Forecast */}
        <section className="flex flex-col gap-[11px] pt-2">
          <span className="font-head text-base text-text">5-Day Forecast</span>
          <div className="flex flex-col gap-1.5 rounded-[20px] border border-glass-border bg-glass p-2">
            {forecast.map(({ day, Glyph, hi, lo, dust, strong }) => (
              <div key={day} className="flex items-center gap-2.5 px-2 py-[9px]">
                <span
                  className={`w-[46px] font-body text-sm ${
                    strong ? "font-extrabold text-text" : "font-bold text-text-dim"
                  }`}
                >
                  {day}
                </span>
                <Glyph className="text-accent" size={22} />
                <div className="flex w-[54px] justify-center">
                  {dust && (
                    <div className="flex items-center gap-1 rounded-[10px] bg-surface-inset px-2 py-[3px]">
                      <Wind className="text-accent" size={11} />
                      <span className="font-body text-[10px] font-bold text-text-dim">Dust</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 items-center justify-end gap-2">
                  <span className="font-body text-[13px] font-semibold text-text-faint">{lo}</span>
                  <div className="h-[5px] w-[78px] rounded-[3px]" style={tempTrack} />
                  <span className="w-[26px] font-head text-sm text-text">{hi}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
