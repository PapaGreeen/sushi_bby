// Structured address parts are the single source of truth; the display string
// below is composed from them, so the visible address and the address in
// structured data cannot drift apart.
const addressParts = {
  street: "1832 East 2nd Street",
  locality: "Scotch Plains",
  region: "NJ",
  postalCode: "07076",
  country: "US",
};

const phone = "(908) 325-1577";

export const siteConfig = {
  name: "SUSHI BBY OMAKASE",
  tagline: "HOMAKASE ✨ TUNA CARVINGS ✨ PRIVATE EVENTS",
  instagram: "https://instagram.com/sushi_bby_official",
  nav: [
    { label: "Experience", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "Hours & Location", href: "/hours" },
    { label: "Reservations", href: "/reservations" },
  ],
  addressParts,
  address: `${addressParts.street}, ${addressParts.locality}, ${addressParts.region} ${addressParts.postalCode}`,
  phone,
  // E.164 form, required by schema.org / Google Business structured data.
  phoneE164: `+1${phone.replace(/\D/g, "")}`,
  email: "sushibbynj@gmail.com",
  hours: [
    { day: "Sunday – Thursday", time: "5:30pm · 7:00pm · 8:30pm" },
    { day: "Friday - Saturday", time: "5:30 pm · 7:00 pm · 8:30 pm · 10:00 pm" },
  ],
  // Actual door open → close times. Deliberately SEPARATE from `hours` above:
  // that list holds seating START times, which is a different fact and cannot
  // be converted into an open/close range. Do not merge the two.
  //
  // `time` is the display string; `schema` is the same range in schema.org
  // openingHours format, kept alongside it so the two cannot drift.
  businessHours: [
    { day: "Sunday – Thursday", time: "5:00pm – 8:30pm",  schema: "Su-Th 17:00-20:30" },
    { day: "Friday – Saturday", time: "5:00pm – 10:00pm", schema: "Fr-Sa 17:00-22:00" },
  ],
};
