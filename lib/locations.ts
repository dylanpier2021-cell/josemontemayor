/**
 * Location data. The two core markets each have UNIQUE, non-duplicate copy.
 * Both Champaign and Bloomington are served by Ameren Illinois.
 */

export interface LocationSection {
  heading: string;
  paragraphs: string[];
}

export interface Location {
  slug: string;
  city: string;
  region: string;
  county: string;
  utility: string;
  utilityKind: "investor-owned" | "municipal";
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  sections: LocationSection[];
  highlights: string[];
  utilityNote: string;
  nearby: string[];
}

export const locations: Location[] = [
  {
    slug: "champaign",
    city: "Champaign",
    region: "Illinois",
    county: "Champaign County",
    utility: "Ameren Illinois",
    utilityKind: "investor-owned",
    metaTitle: "Solar Consultant in Champaign, IL | Free Bill Review",
    metaDescription:
      "Honest solar guidance for Champaign, Illinois homeowners. Understand your Ameren bill and whether solar is worth it. Free, no-pressure bill review.",
    heroIntro:
      "If your Ameren bill in Champaign keeps climbing, a clear bill review can show you exactly where that money is going before you decide anything.",
    sections: [
      {
        heading: "Solar that fits a Champaign home",
        paragraphs: [
          "Champaign homes run the full range, from older neighborhoods near campus to newer builds out toward Savoy and Mahomet. Every roof is different, so the honest first step is looking at your actual bill and your actual roof, not a generic quote.",
          "I am not here to sell you anything. I am here to help you understand your options and decide for yourself.",
        ],
      },
    ],
    highlights: [
      "Home to the University of Illinois",
      "Mix of older and newer rooftops",
      "Served by Ameren Illinois",
    ],
    utilityNote:
      "Champaign is served by Ameren Illinois. New solar customers since January 1, 2025 are on net billing, which credits exported energy at the supply rate rather than the full retail rate.",
    nearby: ["Urbana", "Savoy", "Mahomet", "St. Joseph"],
  },
  {
    slug: "bloomington",
    city: "Bloomington",
    region: "Illinois",
    county: "McLean County",
    utility: "Ameren Illinois",
    utilityKind: "investor-owned",
    metaTitle: "Solar Consultant in Bloomington, IL | Free Bill Review",
    metaDescription:
      "Solar guidance you can trust in Bloomington, Illinois. A free, honest review of your Ameren bill and whether solar actually pays off for your home.",
    heroIntro:
      "Bloomington is a community that plans ahead. Looking at your long-term energy costs the same way starts with understanding your Ameren bill.",
    sections: [
      {
        heading: "A community that thinks long term",
        paragraphs: [
          "Electricity is one of the few household costs that tends to rise every year while leaving you nothing to own at the end. For homeowners planning to stay put, that long horizon is exactly where solar can pay off, or where it clearly does not.",
          "Bloomington has a solid base of well-kept, owner-occupied homes, which is often a good starting point. Still, the right answer depends on your usage, your roof, and your budget. I will give you the honest version.",
        ],
      },
    ],
    highlights: [
      "Strong base of owner-occupied homes",
      "Major insurance industry community",
      "Served by Ameren Illinois",
    ],
    utilityNote:
      "Bloomington is served by Ameren Illinois. New solar customers since January 1, 2025 are on net billing, which credits exported energy at the supply rate rather than the full retail rate.",
    nearby: ["Normal", "Hudson", "Downs", "Heyworth"],
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
