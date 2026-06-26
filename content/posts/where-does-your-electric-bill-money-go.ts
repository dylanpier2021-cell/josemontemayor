import type { BlogPost } from "@/lib/posts-types";

export const post: BlogPost = {
  slug: "where-does-your-electric-bill-money-go",
  title: "Where Does Your Electric Bill Money Actually Go?",
  metaTitle: "Where Does Your Electric Bill Money Actually Go? | Jose Montemayor",
  description:
    "A short, plain look at where your central Illinois electric bill money goes: supply, delivery, taxes and fees, and why so much of it stays fixed.",
  excerpt:
    "Most of us pay the electric bill without reading it. Here is what those dollars are really buying, and why a big piece never goes down.",
  date: "2026-02-10",
  readingTime: "3 min read",
  tags: ["Electric Bills", "Education"],
  body: [
    {
      type: "p",
      text: "Most of us pay the electric bill the same way every month. We glance at the total, wince a little, and click pay. We almost never read the rest. But there is a simple story in those line items, and once you see it, you cannot unsee it.",
    },
    {
      type: "p",
      text: "Whether you are with Ameren in most of central Illinois or with ComEd, almost every bill breaks into three buckets. Here is what each one is really paying for.",
    },
    {
      type: "h2",
      text: "1. Supply: the energy you actually used",
    },
    {
      type: "p",
      text: "Supply is the electricity itself, measured in kilowatt-hours. This is the part you have the most control over, and it is the only part that solar can directly offset, because solar makes energy. If your bill went up because you ran the air conditioning all summer, this is usually where you feel it.",
    },
    {
      type: "h2",
      text: "2. Delivery: the part you cannot turn off",
    },
    {
      type: "p",
      text: "Delivery pays for the poles, wires, substations, and maintenance that move power to your home. It includes a flat customer charge plus per-kilowatt-hour delivery charges. Here is the part most people miss. You pay the customer charge no matter how little electricity you use. Even in a month you are barely home, it still shows up.",
    },
    {
      type: "p",
      text: "Delivery charges also tend to climb year after year, and they are largely outside your control. This is the quiet reason a bill can grow even when your usage does not.",
    },
    {
      type: "h2",
      text: "3. Taxes and fees: the smaller slice",
    },
    {
      type: "p",
      text: "The last bucket is state and local taxes plus rider and adjustment line items that fund various programs. Individually they look small. Together they add up, and they ride on top of everything else.",
    },
    {
      type: "callout",
      title: "The honest takeaway",
      text: "A meaningful share of your bill is fixed cost you pay regardless of how careful you are. That is why the real question is not only how much power you use. It is also how your bill is built.",
    },
    {
      type: "h2",
      text: "Why this matters for solar",
    },
    {
      type: "p",
      text: "People often expect solar to erase the whole bill. It does not. Solar offsets supply, the energy bucket. It does not eliminate the fixed delivery charges, and since the 2025 net billing change in Illinois, energy you send back to the grid is credited at the supply rate rather than the full retail rate. None of that makes solar a bad idea. It just means an honest estimate has to account for all of it.",
    },
    {
      type: "p",
      text: "Want a second set of eyes on your own bill? I offer a free, no-pressure review where we go through your charges together and I tell you plainly whether solar makes sense for your home. No script, no obligation.",
    },
  ],
};

export default post;
