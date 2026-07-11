/**
 * billSections
 * =============================================================================
 * Source of truth for the interactive Ameren Illinois bill explainer. Each bill
 * points at an image in /public/images/bill and lists the clickable sections.
 *
 * hotspot: top / left / width / height as a percentage of the image wrapper.
 * These were calibrated against the actual rendered images (the colored header
 * bars, separator rules, and column positions were measured), but they are easy
 * to nudge here if a region ever drifts. Nothing else needs to change.
 *
 * image (optional): a photo for that section's expander panel. Drop files in
 * /public/images/bill and add the path here (e.g. a smart-meter photo for
 * "Meter Number", rooftop panels for "Supply"). Sections with no image show a
 * graceful "Photo coming soon" placeholder. See TODO.md.
 *
 * Content is Ameren Illinois only (no ComEd), adapted from Ameren's own
 * "Understanding Your Bill" guide.
 * =============================================================================
 */

export type Hotspot = {
  top: string;
  left: string;
  width: string;
  height: string;
};

export type BillSection = {
  id: string;
  /** Callout number, matches the numbered badge on the bill. */
  n: number;
  label: string;
  blurb: string;
  hotspot: Hotspot;
  /** Optional photo for the expander panel. */
  image?: string;
  imageAlt?: string;
};

export type Bill = {
  id: string;
  title: string;
  image: string;
  /** Intrinsic image size, so next/image can reserve space and stay sharp. */
  width: number;
  height: number;
  /** Short label for the "which bill" summary line. */
  caption: string;
  sections: BillSection[];
};

export const bills: Bill[] = [
  {
    id: "overview",
    title: "Your Ameren bill: the overview page",
    image: "/images/bill/ameren-bill-overview.png",
    width: 1322,
    height: 1716,
    caption:
      "Page 1 shows what you owe, your account details, a charge summary, your usage graphs, and the payment stub.",
    sections: [
      {
        id: "amount-due",
        n: 1,
        label: "Amount Due & Due Date",
        blurb:
          "The Amount Due and Due Date are highlighted at the top right of your statement to make them easy to find.",
        hotspot: { top: "3.8%", left: "61%", width: "37%", height: "8%" },
      },
      {
        id: "account-info",
        n: 2,
        label: "Account Number & Address",
        blurb:
          "Your Account Number and the address where service is received are displayed prominently at the top left of your bill.",
        hotspot: { top: "11%", left: "3%", width: "45%", height: "9%" },
      },
      {
        id: "charge-summary",
        n: 3,
        label: "Current Charge Summary",
        blurb:
          "Your Current Charge Summary breaks down the amounts due for electric and gas service, plus any additional charges or prior balance for this month. The box to the right carries important messages about your account.",
        hotspot: { top: "20.4%", left: "3%", width: "46%", height: "13.5%" },
      },
      {
        id: "usage-graphs",
        n: 4,
        label: "Usage & Temperature Graphs",
        blurb:
          "These graphs show the average monthly temperature and your energy usage in each billing period, so you can make comparisons. The number of days in a billing period can vary. To the right you will find your average daily usage in kilowatt-hours or therms for the current month, last month, and last year.",
        hotspot: { top: "35%", left: "3%", width: "94%", height: "27%" },
      },
      {
        id: "bill-stub",
        n: 5,
        label: "Payment Stub",
        blurb:
          "The payment stub sits at the bottom of your statement. If you pay by mail, tear off this section and return it with your payment in the envelope provided.",
        hotspot: { top: "70%", left: "3%", width: "94%", height: "28%" },
      },
    ],
  },
  {
    id: "detail",
    title: "Your Ameren bill: the charge detail page",
    image: "/images/bill/ameren-bill-detail.png",
    width: 1688,
    height: 2184,
    caption:
      "The itemized page reads your meter, then splits the cost into delivery, supply, and taxes so you can see exactly where each dollar goes.",
    sections: [
      {
        id: "read-type",
        n: 1,
        label: "Read Type",
        blurb:
          "Electric usage is measured in kilowatt-hours (kWh). Natural gas usage is measured in therms.",
        hotspot: { top: "27.2%", left: "5%", width: "11%", height: "3%" },
      },
      {
        id: "meter-number",
        n: 2,
        label: "Meter Number",
        blurb:
          "The unique identification number of the meter or registering device at the service location.",
        hotspot: { top: "27.2%", left: "16%", width: "12%", height: "3%" },
      },
      {
        id: "current-read",
        n: 3,
        label: "Current Meter Read",
        blurb:
          "The numerical values, in kWh or therms, taken from the current meter reading.",
        hotspot: { top: "27.2%", left: "28%", width: "16%", height: "3%" },
      },
      {
        id: "previous-read",
        n: 4,
        label: "Previous Meter Read",
        blurb:
          "The numerical values, in kWh or therms, taken from the previous meter reading.",
        hotspot: { top: "27.2%", left: "45%", width: "16%", height: "3%" },
      },
      {
        id: "read-difference",
        n: 5,
        label: "Read Difference",
        blurb:
          "The difference between the current meter reading and the previous meter reading.",
        hotspot: { top: "27.2%", left: "61%", width: "13%", height: "3%" },
      },
      {
        id: "multiplier",
        n: 6,
        label: "Multiplier",
        blurb:
          "Most residential meters have a multiplier of one. Customers who use a large amount of electricity or natural gas may have a multiplier greater than one, which lets the meter register more usage before moving the meter dial.",
        hotspot: { top: "27.2%", left: "75%", width: "9%", height: "3%" },
      },
      {
        id: "usage",
        n: 7,
        label: "Usage",
        blurb:
          "The total amount of energy used during the billing period.",
        hotspot: { top: "27.2%", left: "85%", width: "10%", height: "3%" },
      },
      {
        id: "usage-summary",
        n: 8,
        label: "Usage Summary",
        blurb:
          "If part of your usage falls in a summer billing season and part in a non-summer season, the usage for each season is shown here. Otherwise, this is your total electric or natural gas usage for the current billing period.",
        hotspot: { top: "33.2%", left: "3%", width: "94%", height: "3.4%" },
      },
      {
        id: "delivery",
        n: 9,
        label: "Delivery",
        blurb:
          "As a delivery company, Ameren Illinois maintains the transmission and distribution system that moves electricity and natural gas from suppliers to your door. Delivery charges pay to build, maintain, and improve that system, and to respond around the clock to restore service when it is interrupted. You pay delivery on every kWh you pull from the grid, even with solar.",
        hotspot: { top: "40.5%", left: "3%", width: "94%", height: "9%" },
      },
      {
        id: "supply",
        n: 10,
        label: "Supply",
        blurb:
          "Supply is the electricity or natural gas itself, bought from the wholesale market. It can come from a Retail Electric Supplier you chose, or the supply Ameren Illinois purchases and passes on to you with no markup. This is the part rooftop solar offsets, and net metering can bring it close to, or all the way down to, zero.",
        hotspot: { top: "50.2%", left: "3%", width: "94%", height: "9.3%" },
      },
      {
        id: "taxes",
        n: 11,
        label: "State & Local Taxes and Other Mandated Charges",
        blurb:
          "This section covers taxes collected for state and local governments, plus charges for programs that are not part of delivery or supply. Several of these fund Illinois solar and clean energy, which means you are already paying toward solar today.",
        hotspot: { top: "60.1%", left: "3%", width: "94%", height: "15.6%" },
      },
      {
        id: "rate",
        n: 12,
        label: "Rate",
        blurb:
          "The rate is the cost per unit of energy, multiplied by the total kilowatt-hours (kWh) or therms used in the billing period.",
        hotspot: { top: "41.3%", left: "63%", width: "18%", height: "5%" },
      },
      {
        id: "supplier-details",
        n: 13,
        label: "Details From Your Electric Supplier",
        blurb:
          "If a third-party Retail Electric Supplier provides your electric supply, their name and contact information appear here. This box may also show the price per kWh you would pay if your supply came from Ameren Illinois.",
        hotspot: { top: "81.3%", left: "3%", width: "94%", height: "14.2%" },
      },
    ],
  },
];
