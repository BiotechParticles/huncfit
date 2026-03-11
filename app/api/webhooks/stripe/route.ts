import { NextRequest, NextResponse } from "next/server";

const PRINTFUL_VARIANTS: Record<string, Record<string, Record<string, number>>> = {
  "unc-daddy": {
    black: { S: 5229518261, M: 5229518262, L: 5229518264, XL: 5229518265, "2XL": 5229518266 },
    white: { S: 5229518267, M: 5229518268, L: 5229518272, XL: 5229518276, "2XL": 5229518277 },
    grey:  { S: 5229518278, M: 5229518279, L: 5229518280, XL: 5229518281, "2XL": 5229518282 },
    red:   { S: 5229518285, M: 5229518285, L: 5229518285, XL: 5229518287, "2XL": 5229518288 },
  },
  "unc-season": {
    black: { S: 5229518352, M: 5229518353, L: 5229518354, XL: 5229518355, "2XL": 5229518356 },
    white: { S: 5229518358, M: 5229518360, L: 5229518361, XL: 5229518362, "2XL": 5229518363 },
    grey:  { S: 5229518364, M: 5229518365, L: 5229518366, XL: 5229518367, "2XL": 5229518368 },
    red:   { S: 5229518371, M: 5229518371, L: 5229518371, XL: 5229518372, "2XL": 5229518373 },
  },
  "built-80s": {
    black: { S: 5229518427, M: 5229518431, L: 5229518442, XL: 5229518452, "2XL": 5229518455 },
    white: { S: 5229518459, M: 5229518463, L: 5229518467, XL: 5229518470, "2XL": 5229518474 },
    grey:  { S: 5229518477, M: 5229518481, L: 5229518484, XL: 5229518487, "2XL": 5229518490 },
    red:   { S: 5229518501, M: 5229518501, L: 5229518501, XL: 5229518504, "2XL": 5229518507 },
  },
  "built-70s": {
    black: { S: 5229518573, M: 5229518574, L: 5229518575, XL: 5229518576, "2XL": 5229518577 },
    white: { S: 5229518578, M: 5229518579, L: 5229518580, XL: 5229518581, "2XL": 5229518582 },
    grey:  { S: 5229518583, M: 5229518584, L: 5229518585, XL: 5229518587, "2XL": 5229518588 },
    red:   { S: 5229518591, M: 5229518591, L: 5229518591, XL: 5229518592, "2XL": 5229518593 },
  },
  "built-60s": {
    black: { S: 5229518596, M: 5229518597, L: 5229518598, XL: 5229518599, "2XL": 5229518600 },
    white: { S: 5229518601, M: 5229518602, L: 5229518603, XL: 5229518604, "2XL": 5229518605 },
    grey:  { S: 5229518606, M: 5229518607, L: 5229518608, XL: 5229518609, "2XL": 5229518610 },
    red:   { S: 5229518613, M: 5229518613, L: 5229518613, XL: 5229518614, "2XL": 5229518615 },
  },
  "gray-hair": {
    black: { S: 5229518622, M: 5229518623, L: 5229518624, XL: 5229518625, "2XL": 5229518626 },
    white: { S: 5229518627, M: 5229518628, L: 5229518629, XL: 5229518630, "2XL": 5229518631 },
    grey:  { S: 5229518632, M: 5229518633, L: 5229518634, XL: 5229518635, "2XL": 5229518636 },
    red:   { S: 5229518639, M: 5229518639, L: 5229518639, XL: 5229518640, "2XL": 5229518641 },
  },
  "dad-bod": {
    black: { S: 5229518709, M: 5229518710, L: 5229518711, XL: 5229518712, "2XL": 5229518713 },
    white: { S: 5229518714, M: 5229518716, L: 5229518717, XL: 5229518718, "2XL": 5229518719 },
    grey:  { S: 5229518720, M: 5229518721, L: 5229518722, XL: 5229518723, "2XL": 5229518724 },
    red:   { S: 5229518728, M: 5229518728, L: 5229518728, XL: 5229518729, "2XL": 5229518730 },
  },
};

export async function POST(req: NextRequest) {
  const Stripe = (await import("stripe")).default;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2026-02-25.clover" });

  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let event: any;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch {
    return NextResponse.json({ error: "Webhook signature failed" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const { productId, size, color = "black" } = session.metadata ?? {};
    const shipping = session.shipping_details ?? session.shipping;
    const email = session.customer_details?.email;
    const variantId = productId && size ? PRINTFUL_VARIANTS[productId]?.[color]?.[size] : null;

    if (variantId && shipping?.address) {
      const order = {
        recipient: {
          name: shipping.name,
          email,
          address1: shipping.address.line1,
          address2: shipping.address.line2 || "",
          city: shipping.address.city,
          state_code: shipping.address.state,
          country_code: shipping.address.country,
          zip: shipping.address.postal_code,
        },
        items: [{ sync_variant_id: variantId, quantity: 1 }],
      };

      const res = await fetch("https://api.printful.com/orders", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.PRINTFUL_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      const data = await res.json();
      console.log("Printful order:", data?.result?.id ?? JSON.stringify(data));
    }
  }

  return NextResponse.json({ received: true });
}
