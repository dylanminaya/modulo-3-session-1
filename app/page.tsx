import { MobileView } from "./components/MobileView";
import { WebView } from "./components/WebView";

export default function Home() {
  return (
    <main
      className="flex flex-1 flex-col font-body text-text"
      style={{ backgroundImage: "var(--gradient-calima)" }}
    >
      {/* Vista mobile — colapsa desde la web por debajo de lg */}
      <div className="flex flex-1 justify-center lg:hidden">
        <MobileView />
      </div>
      {/* Vista web — dashboard glassmorphism a partir de lg */}
      <div className="hidden flex-1 lg:flex">
        <WebView />
      </div>
    </main>
  );
}
