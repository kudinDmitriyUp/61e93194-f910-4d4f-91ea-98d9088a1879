"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="medium"
      sizing="large"
      background="animatedGrid"
      cardStyle="glass-depth"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="URBAN COLLECTIVE"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759625451-y6092w8g.jpg"
          logoAlt="Urban Collective logo"
          navItems={[
            { name: "Shop", id: "products" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Shop Now",
            href: "products"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="ELEVATED STREETWEAR"
          description="Premium urban fashion designed for culture. Limited edition pieces that define the streets."
          tag="New Collection"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759626190-r5ojnslk.jpg"
          imageAlt="Premium streetwear collection hero image"
          textPosition="bottom-left"
          showDimOverlay={true}
          showBlur={true}
          buttons={[
            {
              text: "Shop Collection",
              href: "products"
            },
            {
              text: "Learn More",
              href: "about"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Brand"
          description="Urban Collective represents the intersection of street culture and premium craftsmanship. We create limited-edition pieces that resonate with genuine culture, combining authentic design with meticulous quality. Every garment tells a story of rebellion, creativity, and commitment to excellence."
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Featured Collection"
          description="Explore our latest limited edition pieces"
          tag="New Arrivals"
          textboxLayout="default"
          gridVariant="four-items-2x2-equal-grid"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Premium Black Hoodie",
              price: "$95",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759626823-l8lmj8dy.jpg",
              imageAlt: "Black hoodie streetwear"
            },
            {
              id: "2",
              name: "Classic White Tee",
              price: "$35",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759627567-04w5k8i0.jpg",
              imageAlt: "White t-shirt streetwear"
            },
            {
              id: "3",
              name: "Cargo Pants",
              price: "$120",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759628496-h60zi0cb.jpg",
              imageAlt: "Cargo pants streetwear"
            },
            {
              id: "4",
              name: "Urban Sneakers",
              price: "$140",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759629153-xaozbqk3.jpg",
              imageAlt: "Streetwear sneakers"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThree
          title="Why Choose Urban Collective"
          description="We stand for quality, authenticity, and cultural respect"
          tag="Our Values"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Premium Quality",
              description: "Crafted from premium materials with meticulous attention to detail. Each piece meets our uncompromising standards.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759629870-l553t56j.jpg",
              imageAlt: "Premium fabric quality"
            },
            {
              id: "02",
              title: "Authentic Design",
              description: "Designed by culture insiders who understand the streets. Our designs resonate with genuine urban aesthetics.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759630920-7ikfjypw.jpg",
              imageAlt: "Fashion design process"
            },
            {
              id: "03",
              title: "Sustainable",
              description: "Committed to ethical manufacturing and sustainable practices. Fashion with a conscience.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759631628-ewjuux58.jpg",
              imageAlt: "Sustainable clothing production"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour
          title="What Our Community Says"
          description="Real stories from real streetwear enthusiasts"
          tag="Testimonials"
          textboxLayout="default"
          testimonials={[
            {
              id: "1",
              name: "Marcus J.",
              role: "Streetwear Collector",
              company: "Urban Culture",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759632597-jyfddx8u.jpg",
              imageAlt: "Marcus J testimonial"
            },
            {
              id: "2",
              name: "Alex Chen",
              role: "Fashion Designer",
              company: "Creative Studios",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759633673-64cvghi2.jpg",
              imageAlt: "Alex Chen testimonial"
            },
            {
              id: "3",
              name: "Jordan Lee",
              role: "Content Creator",
              company: "Street Culture Media",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759634387-p34hg94q.jpg",
              imageAlt: "Jordan Lee testimonial"
            },
            {
              id: "4",
              name: "Casey Williams",
              role: "Lifestyle Blogger",
              company: "Urban Fashion",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759635040-6lc9ura8.jpg",
              imageAlt: "Casey Williams testimonial"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Street Culture Icons"
          description="Featured in and endorsed by the most influential names in streetwear"
          textboxLayout="default"
          showCard={true}
          speed={40}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759635807-2wikcvwz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759638437-igaft42y.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759638917-2qg3egq2.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759639422-q9y595nz.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759639884-cet03mwi.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759640400-k7zo41kh.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759640878-v3cbnoia.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759641719-a2lj0hwf.jpg"
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about our products and services"
          tag="Help"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your return policy?",
              content: "We offer a 30-day money-back guarantee on all items. If you're not satisfied with your purchase, simply return it within 30 days for a full refund."
            },
            {
              id: "2",
              title: "How long does shipping take?",
              content: "Standard shipping typically takes 5-7 business days within the continental US. Express shipping options are available at checkout."
            },
            {
              id: "3",
              title: "Are your products authentic?",
              content: "Yes, all Urban Collective pieces are 100% authentic and original designs. We do not manufacture counterfeit items and maintain strict quality control."
            },
            {
              id: "4",
              title: "Do you offer international shipping?",
              content: "Yes, we ship to over 50 countries worldwide. International shipping times vary but typically range from 10-21 business days."
            },
            {
              id: "5",
              title: "What materials do you use?",
              content: "We use premium quality materials including 100% organic cotton, premium blends, and sustainable fabrics. All materials are sourced from ethical suppliers."
            },
            {
              id: "6",
              title: "Are there size guides?",
              content: "Yes, detailed size guides are available on each product page. We recommend checking our comprehensive sizing chart to ensure the perfect fit."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have questions about our collection? We'd love to hear from you. Reach out to our team and we'll respond within 24 hours."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763759642486-puh33kyg.jpg"
          imageAlt="Urban studio workspace"
          mediaPosition="right"
          buttonText="Send Message"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Share your message or question...",
            rows: 5,
            required: true
          }}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="URBAN COLLECTIVE"
          columns={[
            {
              items: [
                { label: "Shop", href: "products" },
                { label: "New Arrivals", href: "products" },
                { label: "Collections", href: "products" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Story", href: "about" },
                { label: "Careers", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Support", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Terms of Service", href: "#" },
                { label: "Privacy Policy", href: "#" },
                { label: "Return Policy", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}