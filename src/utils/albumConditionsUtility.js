
export const albumConditionsOptions = [
  { value: "mint", label: "Mint"},
  { value: "very_good", label: "Very Good"},
  { value: "good", label: "Good"},
  { value: "fair", label: "Fair"},
  { value: "poor", label: "Poor"},
];

export const albumConditionsFormatted = {
  mint: { formattedName: "Mint", rank: 0 },
  very_good: { formattedName: "Very Good", rank: 1 },
  good: { formattedName: "Good", rank: 2 },
  fair: { formattedName: "Fair", rank: 3 },
  poor: { formattedName: "Poor", rank: 4 },
}

export const sortConditionsByRank = (conditionA, conditionB) => {

  const conditionA_Rank = albumConditionsFormatted[conditionA].rank;
  const conditionB_Rank = albumConditionsFormatted[conditionB].rank;

  if (conditionA_Rank > conditionB_Rank) {
    return 1;
  }
  if (conditionA_Rank < conditionB_Rank) {
    return -1;
  }

  return 0;

};