export const crops = [
  {
    id: 1,
    name: "Wheat",
    quantity: "1,200 kg",
    quality: "Grade A",
    currentPrice: 3150,
    bestPrice: 3280,
    market: "Meerut"
  },
  {
    id: 2,
    name: "Onion",
    quantity: "850 kg",
    quality: "Grade A",
    currentPrice: 2450,
    bestPrice: 2620,
    market: "Lasalgaon"
  },
  {
    id: 3,
    name: "Tomato",
    quantity: "500 kg",
    quality: "Grade A",
    currentPrice: 1850,
    bestPrice: 2050,
    market: "Azadpur"
  }
];

export const buyers = [
  {
    id: 1,
    name: "Sharma Foods",
    crop: "Wheat",
    required: "1,000 kg",
    offer: 3250,
    distance: "48 km",
    match: 92
  },
  {
    id: 2,
    name: "FreshMart Wholesale",
    crop: "Wheat",
    required: "700 kg",
    offer: 3220,
    distance: "35 km",
    match: 87
  },
  {
    id: 3,
    name: "Agro Foods India",
    crop: "Onion",
    required: "1,500 kg",
    offer: 2580,
    distance: "61 km",
    match: 84
  }
];

export const warehouses = [
  {
    id: 1,
    name: "Green Storage Hub",
    distance: "12 km",
    available: 72,
    charge: 4
  },
  {
    id: 2,
    name: "AgriSafe Warehouse",
    distance: "18 km",
    available: 58,
    charge: 5
  },
  {
    id: 3,
    name: "Kisan Storage Point",
    distance: "24 km",
    available: 81,
    charge: 4
  }
];

export const priceData = [
  { day: "Mon", wheat: 3050, onion: 2380 },
  { day: "Tue", wheat: 3090, onion: 2420 },
  { day: "Wed", wheat: 3120, onion: 2410 },
  { day: "Thu", wheat: 3090, onion: 2480 },
  { day: "Fri", wheat: 3160, onion: 2510 },
  { day: "Sat", wheat: 3200, onion: 2560 },
  { day: "Sun", wheat: 3280, onion: 2620 }
];

export const vehicles = [
  {
    id: 1,
    type: "Mini Truck",
    capacity: "1,500 kg",
    distance: "48 km",
    cost: 2400,
    status: "Available"
  },
  {
    id: 2,
    type: "Pickup",
    capacity: "1,000 kg",
    distance: "35 km",
    cost: 1850,
    status: "Available"
  },
  {
    id: 3,
    type: "Light Truck",
    capacity: "2,500 kg",
    distance: "62 km",
    cost: 3900,
    status: "Available"
  }
];

export const orders = [
  {
    id: "SK1024",
    crop: "Wheat",
    buyer: "Sharma Foods",
    amount: 38500,
    status: "Payment Completed"
  },
  {
    id: "SK1025",
    crop: "Onion",
    buyer: "FreshMart Wholesale",
    amount: 22100,
    status: "Payment Pending"
  }
];

export const notifications = [
  {
    id: 1,
    icon: "🤖",
    title: "Better price found in Meerut",
    text: "Wheat price is ₹3,280/q."
  },
  {
    id: 2,
    icon: "🎯",
    title: "New buyer matched",
    text: "Sharma Foods wants your wheat."
  },
  {
    id: 3,
    icon: "🚚",
    title: "Transport available",
    text: "Mini truck available nearby."
  },
  {
    id: 4,
    icon: "🏭",
    title: "Warehouse booking confirmed",
    text: "Green Storage Hub confirmed."
  },
  {
    id: 5,
    icon: "💰",
    title: "Payment received",
    text: "Order #SK1024 completed."
  }
];