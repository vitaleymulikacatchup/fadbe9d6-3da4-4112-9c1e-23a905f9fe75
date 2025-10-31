"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Calendar, ChefHat, Clock, HelpCircle, MessageSquare, Palmtree, Sparkles, Star, Waves } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Azure Bay Hotel"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury at Azure Bay Hotel"
          description="Escape to paradise with world-class amenities, stunning ocean views, and exceptional service that creates unforgettable memories."
          tag="Premium Resort"
          tagIcon={Star}
          buttons={[
            {
              text: "Book Your Stay",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/2422393/pexels-photo-2422393.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel exterior with palm trees and ocean view"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We create extraordinary hospitality experiences that blend luxury, comfort, and personalized service to make every moment of your stay truly exceptional."
          buttons={[
            {
              text: "Discover More",
              href: "amenities"
            },
            {
              text: "View Gallery",
              href: "#gallery"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our premium facilities designed for your ultimate comfort and relaxation"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Infinity Pool & Spa",
              description: "Relax in our stunning infinity pool overlooking the ocean, complete with a full-service spa for ultimate rejuvenation.",
              icon: Waves,
              button: {
                text: "Learn More",
                href: "#spa"
              }
            },
            {
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine crafted by world-renowned chefs using locally sourced ingredients and international flavors.",
              icon: ChefHat,
              button: {
                text: "View Menu",
                href: "#dining"
              }
            },
            {
              title: "Private Beach Access",
              description: "Enjoy exclusive access to pristine white sand beaches with complimentary water sports and beachside service.",
              icon: Palmtree,
              button: {
                text: "Explore Beach",
                href: "#beach"
              }
            },
            {
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to arrange excursions, dining, and personalized experiences.",
              icon: Clock,
              button: {
                text: "Contact Concierge",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Guests Say"
          description="Read reviews from travelers who experienced the magic of Azure Bay Hotel"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Travel Blogger",
              company: "Wanderlust Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Executive",
              company: "Tech Innovations Inc",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Honeymoon Guest",
              company: "Newlyweds",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7776140/pexels-photo-7776140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Family Vacation",
              company: "Kim Family",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about your stay at Azure Bay Hotel"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What time is check-in and check-out?",
              content: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request and subject to availability."
            },
            {
              id: "2",
              title: "Do you offer airport transportation?",
              content: "Yes, we provide complimentary airport shuttle service for all guests. Please contact our concierge 24 hours in advance to arrange pickup times."
            },
            {
              id: "3",
              title: "Are pets allowed at the hotel?",
              content: "We welcome well-behaved pets in designated pet-friendly rooms. A pet fee of $50 per night applies, and advance notice is required when booking."
            },
            {
              id: "4",
              title: "Is WiFi available throughout the property?",
              content: "Complimentary high-speed WiFi is available throughout the entire property, including all guest rooms, common areas, pool deck, and beach areas."
            },
            {
              id: "5",
              title: "What dining options are available?",
              content: "We offer three dining venues: our signature oceanfront restaurant, casual poolside grill, and 24-hour room service menu featuring local and international cuisine."
            },
            {
              id: "6",
              title: "Can I cancel or modify my reservation?",
              content: "Reservations can be cancelled or modified up to 48 hours before arrival without penalty. Cancellations within 48 hours are subject to a one-night charge."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          title="Ready to Book Your Perfect Getaway?"
          description="Contact our reservations team to secure your stay at Azure Bay Hotel and start planning your unforgettable vacation experience."
          tagIcon={Calendar}
          inputPlaceholder="Enter your email for booking updates"
          buttonText="Book Now"
          termsText="By booking with us, you agree to our reservation terms and cancellation policy."
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern hotel lobby and reception area"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "Rooms & Suites",
                  href: "rooms"
                },
                {
                  label: "Amenities",
                  href: "amenities"
                },
                {
                  label: "Dining",
                  href: "#dining"
                },
                {
                  label: "Spa & Wellness",
                  href: "#spa"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Concierge",
                  href: "#concierge"
                },
                {
                  label: "Events & Weddings",
                  href: "#events"
                },
                {
                  label: "Business Center",
                  href: "#business"
                },
                {
                  label: "Transportation",
                  href: "#transport"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Guest Services",
                  href: "#services"
                },
                {
                  label: "Location & Directions",
                  href: "#location"
                },
                {
                  label: "Special Offers",
                  href: "#offers"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Azure Bay Hotel | All rights reserved"
        />
      </div>
    </ThemeProvider>
  );
}