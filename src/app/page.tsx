"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import VerticalCardRoadmap from '@/components/sections/layouts/roadmap/VerticalCardRoadmap';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/logo.svg"
          logoWidth={50}
          logoHeight={50}
          buttonText="Buy BRN"
          onButtonClick={() => console.log('Button Clicked')}
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "Roadmap", id: "roadmap" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "Footer", id: "footer" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <SplitHero
          title="Welcome to BrainRot Coin!"
          subtitle="A playful memecoin with clear buy steps and a community vibe."
          primaryButtonText="Buy Now"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => console.log('Primary Button Clicked')}
          onSecondaryButtonClick={() => console.log('Secondary Button Clicked')}
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          description="BrainRot Coin is designed for playful interactions and community engagement, ensuring an easy entry into the crypto ecosystem."
        />
      </div>
      <div id="roadmap" data-section="roadmap">
        <VerticalCardRoadmap
          items={[
            { title: "Kickoff", description: "Launch of BrainRot Coin", video: "", image: "/images/logo.svg" },
            { title: "Development", description: "Bringing the vision to life", video: "", image: "/images/logo.svg" },
            { title: "Launch", description: "Public release and community engagement", video: "", image: "/images/logo.svg" }
          ]}
          title="Roadmap"
          className="roadmap-class"
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: "Step 1", description: "Get a wallet", image: "/images/logo.svg", position: "left", isCenter: false },
            { title: "Step 2", description: "Buy BRN Coins", image: "/images/logo.svg", position: "center", isCenter: true },
            { title: "Step 3", description: "Join the community", image: "/images/logo.svg", position: "right", isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics
          title="Tokenomics"
          description="An overview of BrainRot Coin's economics and distribution."
          kpiItems={[
            { value: "100M", description: "Total Supply", icon: { icon: "Coin" } },
            { value: "50M", description: "Market Cap", icon: { icon: "Coin" } }
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoText="BrainRot Coin"
          className="footer-class"
        />
      </div>
    </SiteThemeProvider>
  );
}