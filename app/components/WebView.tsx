import {
  ArrowDown,
  ArrowsClockwise,
  ArrowUp,
  Cloud,
  CloudMoon,
  CloudRain,
  CloudSun,
  Drop,
  Eye,
  MagnifyingGlass,
  MapPin,
  MaskSad,
  MoonStars,
  Sun,
  SunDim,
  SunHorizon,
  ThermometerHot,
  Wind,
} from "@phosphor-icons/react/dist/ssr";
import type { ComponentType } from "react";

type Glyph = ComponentType<{ className?: string; size?: number }>;

const hourly: { time: string; Glyph: Glyph; temp: string; now?: boolean }[] = [
  { time: "Now", Glyph: SunDim, temp: "31°", now: true },
  { time: "3PM", Glyph: SunDim, temp: "31°" },
  { time: "4PM", Glyph: Sun, temp: "31°" },
  { time: "5PM", Glyph: Sun, temp: "30°" },
  { time: "6PM", Glyph: CloudSun, temp: "29°" },
  { time: "7PM", Glyph: Cloud, temp: "28°" },
  { time: "8PM", Glyph: MoonStars, temp: "27°" },
  { time: "9PM", Glyph: MoonStars, temp: "27°" },
  { time: "10PM", Glyph: CloudMoon, temp: "26°" },
];

const forecast: { day: string; Glyph: Glyph; hi: string; lo: string }[] = [
  { day: "Today", Glyph: SunDim, hi: "33°", lo: "26°" },
  { day: "Wed", Glyph: Sun, hi: "34°", lo: "26°" },
  { day: "Thu", Glyph: CloudSun, hi: "32°", lo: "25°" },
  { day: "Fri", Glyph: CloudRain, hi: "30°", lo: "24°" },
  { day: "Sat", Glyph: SunDim, hi: "33°", lo: "26°" },
];

const quickStats: { Glyph: Glyph; value: string; label: string }[] = [
  { Glyph: Drop, value: "74%", label: "Humidity" },
  { Glyph: Wind, value: "18 km/h", label: "Wind" },
  { Glyph: Sun, value: "9 · High", label: "UV Index" },
  { Glyph: Eye, value: "6 km", label: "Visibility" },
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

export function WebView() {
  return (
    <div className="isolate relative flex min-h-screen w-full flex-col gap-[26px] overflow-hidden px-11 pt-9 pb-10">
      {/* Resplandor cálido del sol entre la calima */}
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 h-[560px] w-[560px] rounded-full left-[120px] top-[60px]"
        style={{
          background: "radial-gradient(circle, var(--haze) 0%, transparent 70%)",
          opacity: 0.19,
        }}
      />

      {/* Topbar */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-accent-strong">
            <SunDim className="text-text" size={22} />
          </div>
          <span className="font-head text-[22px] text-text">Calima</span>
        </div>

        <div className="flex w-[380px] items-center gap-2.5 rounded-[14px] border border-glass-border bg-glass px-4 py-[11px]">
          <MagnifyingGlass className="text-text-faint" size={18} />
          <span className="flex-1 font-body text-sm font-medium text-text-faint">
            Search city or zip…
          </span>
          <span className="font-body text-xs font-bold text-text-faint">⌘K</span>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="flex rounded-[13px] border border-glass-border bg-glass">
            <span className="rounded-[13px] bg-accent-strong px-3.5 py-[7px] font-body text-[13px] font-bold text-text">
              °C
            </span>
            <span className="px-3.5 py-[7px] font-body text-[13px] font-bold text-text-dim">°F</span>
          </div>
          <div className="flex items-center gap-[7px] rounded-[13px] border border-glass-border bg-glass px-3.5 py-[9px]">
            <MapPin className="text-text" size={16} />
            <span className="font-body text-sm font-bold text-text">Santo Domingo, DR</span>
          </div>
          <button
            type="button"
            aria-label="Refresh"
            className="flex h-10 w-10 items-center justify-center rounded-[13px] border border-glass-border bg-glass"
          >
            <ArrowsClockwise className="text-text" size={18} />
          </button>
        </div>
      </header>

      {/* Main */}
      <div className="flex flex-1 gap-6">
        {/* Hero Card */}
        <div className="flex w-[460px] flex-col justify-between rounded-[28px] border border-glass-border bg-glass-strong p-8">
          <div className="flex flex-col items-center gap-1">
            <span className="font-head text-2xl text-text">Santo Domingo</span>
            <span className="font-body text-sm font-medium text-text-dim">
              Tuesday, June 12 · 2:40 PM
            </span>
          </div>

          <div className="flex flex-col items-center gap-0.5">
            <SunDim className="text-accent" size={104} />
            <div className="flex items-start pt-2">
              <span className="font-head text-[150px] leading-none text-text">31</span>
              <span className="font-head text-[80px] text-text-dim">°</span>
            </div>
            <div className="flex items-center gap-2 rounded-[20px] border border-glass-border bg-glass px-4 py-[9px]">
              <Wind className="text-accent" size={17} />
              <span className="font-body text-[15px] font-bold text-text">
                Calima · Hazy Sunshine
              </span>
            </div>
            <div className="flex gap-[18px] pt-3.5">
              <div className="flex items-center gap-1.5">
                <ArrowUp className="text-text-dim" size={15} />
                <span className="font-body text-[15px] font-semibold text-text-dim">High 33°</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ArrowDown className="text-text-dim" size={15} />
                <span className="font-body text-[15px] font-semibold text-text-dim">Low 26°</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-[13px] rounded-[18px] bg-surface-inset p-3.5">
              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[21px] bg-accent-strong">
                <ThermometerHot className="text-text" size={22} />
              </div>
              <div className="flex flex-1 flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-body text-[11px] font-extrabold tracking-[1px] text-text-faint">
                    FEELS LIKE
                  </span>
                  <span className="font-head text-[22px] text-text">38°</span>
                </div>
                <span className="font-body text-[12.5px] font-semibold text-text-dim">
                  Dust + 74% humidity make it feel hotter
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[9px]">
                <SunHorizon className="text-accent" size={22} />
                <div className="flex flex-col gap-px">
                  <span className="font-body text-[11px] font-semibold text-text-faint">Sunrise</span>
                  <span className="font-head text-[15px] text-text">6:12 AM</span>
                </div>
              </div>
              <div className="flex items-center gap-[9px]">
                <SunHorizon className="-scale-x-100 text-accent" size={22} />
                <div className="flex flex-col gap-px">
                  <span className="font-body text-[11px] font-semibold text-text-faint">Sunset</span>
                  <span className="font-head text-[15px] text-text">7:02 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-1 flex-col gap-5">
          {/* Sahara Dust */}
          <div className="flex gap-[26px] rounded-[24px] border border-glass-border bg-glass p-[22px]">
            <div className="flex w-[210px] flex-col gap-2.5">
              <div className="flex items-center gap-[9px]">
                <Wind className="text-accent" size={22} />
                <span className="font-head text-[19px] text-text">Sahara Dust</span>
              </div>
              <div className="w-fit rounded-[14px] bg-accent-strong px-[13px] py-1.5">
                <span className="font-body text-[13px] font-extrabold text-text">Moderate</span>
              </div>
              <div className="flex items-end gap-2 pt-2">
                <span className="font-head text-[54px] leading-none text-text">98</span>
                <span className="pb-2 font-body text-[13px] font-bold text-text-dim">US AQI</span>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-4">
              <div className="flex gap-1.5">
                {meter.map((seg) => (
                  <div key={seg.label} className="flex flex-1 flex-col items-center gap-1.5">
                    <div
                      className={`h-2 w-full rounded ${seg.active ? "bg-accent" : "bg-track-muted"}`}
                    />
                    <span
                      className={`font-body text-[11.5px] ${
                        seg.active ? "font-extrabold text-text" : "font-semibold text-text-faint"
                      }`}
                    >
                      {seg.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {[
                  { k: "PM10", v: "112 µg/m³" },
                  { k: "PM2.5", v: "41 µg/m³" },
                ].map((box) => (
                  <div
                    key={box.k}
                    className="flex flex-1 flex-col gap-[3px] rounded-[14px] bg-surface-inset px-3.5 py-2.5"
                  >
                    <span className="font-body text-[11.5px] font-bold text-text-faint">{box.k}</span>
                    <span className="font-head text-base text-text">{box.v}</span>
                  </div>
                ))}
                <div className="flex flex-1 items-center gap-[9px] rounded-[14px] bg-surface-inset px-3.5 py-2.5">
                  <MaskSad className="shrink-0 text-accent" size={20} />
                  <span className="font-body text-[12.5px] font-semibold text-text-dim">
                    Sensitive groups: limit outdoor exposure
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-[18px]">
            {quickStats.map(({ Glyph, value, label }) => (
              <div
                key={label}
                className="flex flex-1 items-center gap-[13px] rounded-[18px] border border-glass-border bg-glass px-[18px] py-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-glass">
                  <Glyph className="text-accent" size={21} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-body text-xs font-semibold text-text-faint">{label}</span>
                  <span className="font-head text-lg text-text">{value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Hourly */}
          <div className="flex flex-col gap-3.5 rounded-[22px] border border-glass-border bg-glass p-5">
            <div className="flex items-center justify-between">
              <span className="font-head text-base text-text">Hourly Forecast</span>
              <span className="font-body text-[13px] font-semibold text-text-faint">Today</span>
            </div>
            <div className="flex gap-2.5">
              {hourly.map(({ time, Glyph, temp, now }) => (
                <div
                  key={time}
                  className={`flex flex-1 flex-col items-center gap-[11px] rounded-2xl px-1 py-3.5 ${
                    now ? "border border-accent-strong bg-accent-strong" : "bg-surface-inset"
                  }`}
                >
                  <span
                    className={`font-body text-xs font-bold ${now ? "text-text" : "text-text-dim"}`}
                  >
                    {time}
                  </span>
                  <Glyph className={now ? "text-text" : "text-accent"} size={24} />
                  <span className="font-head text-base text-text">{temp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Day Forecast */}
          <div className="flex flex-col gap-3.5 rounded-[22px] border border-glass-border bg-glass p-5">
            <span className="font-head text-base text-text">5-Day Forecast</span>
            <div className="flex gap-3">
              {forecast.map(({ day, Glyph, hi, lo }, i) => {
                const highlighted = i % 2 === 0;
                return (
                  <div
                    key={day}
                    className={`flex flex-1 flex-col items-center gap-2.5 rounded-[18px] px-2 py-4 ${
                      highlighted ? "border border-glass-border bg-glass" : "bg-surface-faint"
                    }`}
                  >
                    <span
                      className={`font-body text-[13px] font-extrabold ${
                        highlighted ? "text-text" : "text-text-dim"
                      }`}
                    >
                      {day}
                    </span>
                    <Glyph className="text-accent" size={30} />
                    <div className="flex h-5 items-center justify-center">
                      {highlighted && (
                        <div className="flex items-center gap-1 rounded-[9px] bg-surface-inset px-2 py-[3px]">
                          <Wind className="text-accent" size={11} />
                          <span className="font-body text-[10px] font-bold text-text-dim">Dust</span>
                        </div>
                      )}
                    </div>
                    <div className="h-[5px] w-full rounded-[3px]" style={tempTrack} />
                    <div className="flex w-full items-center justify-between">
                      <span className="font-head text-[17px] text-text">{hi}</span>
                      <span className="font-body text-sm font-semibold text-text-faint">{lo}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
