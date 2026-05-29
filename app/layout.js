import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PreferencesProvider } from "@/components/PreferencesProvider";

const SITE_URL = "https://styleguide.slichemicals.com";
const TITLE = "SLI Chemicals — Brand Guidelines";
const DESCRIPTION =
  "Brand Guidelines von SLI Chemicals: Logo, Farben, Typografie, Bildsprache und Anwendungsbeispiele. Ihr Partner für Specialty Chemicals und natürliche Rohstoffe in Beauty, Health und Pet Food.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · SLI Brand Guidelines" },
  description: DESCRIPTION,
  applicationName: "SLI Brand Guidelines",
  authors: [{ name: "SLI Chemicals", url: "https://www.slichemicals.com" }],
  creator: "SLI Chemicals",
  publisher: "SLI Chemicals",
  keywords: [
    "SLI Chemicals",
    "Brand Guidelines",
    "Styleguide",
    "Corporate Design",
    "Logo",
    "Farben",
    "Typografie",
    "Specialty Chemicals",
    "Personal Care",
    "Food & Animal Nutrition",
    "Industrial & Home Care",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: SITE_URL,
    siteName: "SLI Brand Guidelines",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#006843",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
};

// FOUC-free init: applies stored theme + locale before React hydrates.
const PREF_INIT = `
(function(){try{
  var t = localStorage.getItem('sli-theme');
  var l = localStorage.getItem('sli-locale');
  if (t === 'dark' || t === 'light') document.documentElement.dataset.theme = t;
  if (l === 'en' || l === 'de') document.documentElement.lang = l;
}catch(_){}}())`;

export default function RootLayout({ children }) {
  return (
    <html lang="de" data-theme="light" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: PREF_INIT }} />
      </head>
      <body className="min-h-full antialiased" suppressHydrationWarning>
        <PreferencesProvider>
          <SkipLink />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </PreferencesProvider>
      </body>
    </html>
  );
}

function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-full focus:bg-brand focus:text-white focus:text-sm focus:shadow-lg"
    >
      Zum Inhalt springen · Skip to content
    </a>
  );
}
