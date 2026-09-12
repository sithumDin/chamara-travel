// ---------------------------------------------------------------------------
// AIRPORT & PRIVATE TAXI TRANSFERS
//
// One-way private transfer rates, priced in USD per vehicle (not per person).
// PRICING: placeholders pending confirmation — update the numbers below.
// ---------------------------------------------------------------------------

export interface TransferRoute {
  from: string;
  to: string;
  priceUsd: number;
}

export const transferRoutes: TransferRoute[] = [
  { from: "Airport", to: "Hikkaduwa", priceUsd: 60 }, // price: placeholder
  { from: "Airport", to: "Unawatuna", priceUsd: 70 }, // price: placeholder
  { from: "Airport", to: "Ahangama", priceUsd: 70 }, // price: placeholder
  { from: "Airport", to: "Mirissa", priceUsd: 70 }, // price: placeholder
  { from: "Galle", to: "Ella", priceUsd: 85 }, // price: placeholder
  { from: "Airport", to: "Sigiriya", priceUsd: 60 }, // price: placeholder
];
