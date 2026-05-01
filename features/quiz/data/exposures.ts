export function getExposures(scores: number[], total: number): string[] {
  const exposures: string[] = [];
  if (scores[0] === 0) exposures.push("SKU bloat is compressing your margins");
  if (scores[2] === 0)
    exposures.push("Dead stock is trapping cash - likely $100K-$1M+");
  if (scores[3] === 0)
    exposures.push("You don't know your real acquisition cost");
  if (scores[4] === 0)
    exposures.push("No positioning moat - AI competitors will eat you alive");
  if (scores[5] === 0)
    exposures.push("You ARE the system - one illness away from crisis");
  if (scores[6] === 0)
    exposures.push(
      "Channel blindness - you're likely funding your least profitable channel"
    );
  if (scores[7] === 0)
    exposures.push("No kill discipline - everything stays, nothing gets cut");
  if (!exposures.length && total < 16)
    exposures.push("Minor optimizations could still unlock significant margin");
  return exposures;
}
