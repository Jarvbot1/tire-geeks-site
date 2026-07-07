export interface Author {
  slug: string;
  name: string;
  fullName: string;
  title: string;
  yearsInIndustry: number;
  credentialBadge?: string;
  expertise: string[];
  bio: string;
  shortBio: string;
  imagePath: string;
}

export const authors: Author[] = [
  {
    slug: 'moni-tariq',
    name: 'Moni Tariq',
    fullName: 'Moni Tariq',
    title: 'Owner, Tire Geeks',
    yearsInIndustry: 20,
    expertise: [
      'Tire and wheel retail operations',
      'Multi-shop management',
      'Custom builds',
      'Suspension and lift work',
      'Customer service standards',
      'Fitment expertise',
    ],
    bio: "Moni Tariq owns Tire Geeks and runs both Sacramento shops — Florin Road in South Sac, Arden Way on the north end. Twenty years in the tire and wheel trade, most of those years managing multiple shops before he founded Tire Geeks. He sets the standard for how the business runs: honest fitment, no chain-shop database lookups, no upsells, real Acima approval for working drivers. If a customer walks out unsatisfied, Moni hears about it. Most don't. Walk in either store any day Mon–Sat and the shop runs the way it does because Moni built it that way.",
    shortBio:
      "Owner of Tire Geeks. Twenty years in tires and wheels, with multiple shops managed before founding Tire Geeks. Standards-driven on fitment, financing, and customer treatment.",
    imagePath: '/images/team/moni-tariq.jpg',
  },
  {
    slug: 'azam-mirza',
    name: 'Azam Mirza',
    fullName: 'Azam Mirza',
    title: 'Co-Owner, Tire Geeks',
    yearsInIndustry: 0,
    credentialBadge: 'Founder of Akorbi (exited)',
    expertise: [
      'Business strategy',
      'Technology operations',
      'Scaling operations',
      'Customer experience design',
    ],
    bio: "Azam Mirza is the founder of Akorbi — a technology company he built, scaled, and successfully exited — and is now a co-owner of Tire Geeks. He's new to the tire industry on paper, but he isn't new to running operations. The same systems thinking that took Akorbi from an idea to an exit is what he's bringing to the way Tire Geeks handles inventory, customer experience, financing flow, and shop-to-shop consistency as the business grows. The reason a Tire Geeks customer can walk into Florin Road or Arden Way and get the same answer to the same question — that's the kind of thing Azam pays attention to.",
    shortBio:
      'Co-owner of Tire Geeks. Founder of Akorbi — a technology company he built, scaled, and successfully exited. Brings enterprise-grade operations and customer experience thinking to the shop floor.',
    imagePath: '/images/team/azam-mirza.jpg',
  },
  {
    slug: 'erika',
    name: 'Erika',
    fullName: 'Erika from Tire Geeks',
    title: 'Store Manager',
    yearsInIndustry: 10,
    expertise: [
      'Tire selection',
      'Wheel fitment',
      'Customer financing (Acima)',
      'Store operations',
      'Customer service',
    ],
    bio: "Erika is a Store Manager at Tire Geeks and the person most customers meet first. Ten years in the tire industry, and she runs the day-to-day at her store: walk-ins, scheduling, parts, and the customer experience from the moment you step in to the moment you drive off. She'll walk you through tire selection by vehicle and budget, run the fitment math on a custom wheel package without making you feel like a beginner, and get you through Acima approval in five minutes flat — soft pull only, $5,000 cap, 100 days no interest. No credit shame, no upsell, no judgment. If you walk in unsure, you walk out rolling. Ride now. Pay later.",
    shortBio:
      'Store Manager at Tire Geeks. Ten years in tires, running the day-to-day: walk-ins, ordering, customer experience. Walks customers through tire selection, fitment math, and Acima approval — no credit shame, no upsell.',
    imagePath: '/images/team/erika.jpg',
  },
  {
    slug: 'victor',
    name: 'Victor',
    fullName: 'Victor',
    title: 'Store Manager',
    yearsInIndustry: 0,
    expertise: [
      'Store operations',
      'Customer service',
      'Daily shop management',
      'Tire and wheel sales',
    ],
    bio: "Victor manages a Tire Geeks store day in and day out. He's the one running the floor when you walk in: greeting customers, sizing up what they actually need, getting jobs onto the schedule, and making sure nobody waits longer than they should. Tires, custom wheels, financing, fitment questions — Victor's been doing this work long enough to recognize the right answer fast and to flag the wrong one before a customer drives off. He'll talk you through your options without pressure and without the chain-shop runaround. The shop runs because of people like Victor at the counter every Mon–Sat. Walk in and find him.",
    shortBio:
      'Store Manager at Tire Geeks. Runs the floor at his store every day — customer service, scheduling, tires, custom wheels, fitment, financing. The reason walk-ins move fast and leave happy.',
    imagePath: '/images/team/victor.jpg',
  },
];

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}
