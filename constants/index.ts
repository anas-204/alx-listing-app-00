// Categories for listings
export const CATEGORIES = [
  { label: "Beach", icon: "🏖️" },
  { label: "Mountain", icon: "⛰️" },
  { label: "City", icon: "🏙️" },
  { label: "Countryside", icon: "🌄" },
  { label: "Lakefront", icon: "🌊" },
  { label: "Cabins", icon: "🏡" },
];

// Default location coordinates (center of the map)
export const DEFAULT_LOCATION = {
  lat: 40.7128,  // New York coordinates
  lng: -74.0060,
  zoom: 11,
};

// Price ranges for filters
export const PRICE_RANGES = [
  { label: "Any", value: "" },
  { label: "$50-100", value: "50-100" },
  { label: "$100-200", value: "100-200" },
  { label: "$200+", value: "200-1000" },
];

// Amenities list
export const AMENITIES = [
  "Wifi",
  "Pool",
  "Kitchen",
  "Parking",
  "Air Conditioning",
  "Washer",
];