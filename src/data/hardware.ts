export type HardwareBrand = 'Lenovo' | 'HP' | 'Dell' | 'Cisco' | 'APC' | 'Hikvision' | 'Other';
export type HardwareCategory = 'laptops' | 'servers' | 'networking' | 'firewall' | 'ups' | 'cctv';

export interface HardwareItem {
  id: string;
  name: string;
  brand: HardwareBrand;
  category: HardwareCategory;
  description: string;
  specs: string[];
  image: string;
  badge?: 'New' | 'Popular' | 'Refurbished';
  priceOnRequest: true;
}

export const hardwareItems: HardwareItem[] = [
  {
    id: 'lenovo-thinkpad-e14-gen7',
    name: 'ThinkPad E14 Gen 7',
    brand: 'Lenovo',
    category: 'laptops',
    description: 'Business-grade laptop with non-soldered RAM and dual M.2 slots — ideal for enterprise deployments and SME teams.',
    specs: ['AMD Ryzen 7 / Intel Core 5', '16GB DDR5 RAM (upgradeable)', '512GB M.2 SSD', '14" WUXGA Display', 'Windows 11 Pro'],
    image: '/images/hardware/laptop-placeholder.svg',
    badge: 'Popular',
    priceOnRequest: true,
  },
  {
    id: 'lenovo-thinkpad-e16-gen3',
    name: 'ThinkPad E16 Gen 3',
    brand: 'Lenovo',
    category: 'laptops',
    description: 'Larger-format business laptop with the same repairability as the E14 — for users who prefer a 16" display.',
    specs: ['AMD Ryzen 7 250', '16GB / 32GB DDR5', '512GB / 1TB SSD', '16" WUXGA Display', 'Windows 11 Pro'],
    image: '/images/hardware/laptop-placeholder.svg',
    priceOnRequest: true,
  },
  {
    id: 'hp-elitebook-840-g11',
    name: 'EliteBook 840 G11',
    brand: 'HP',
    category: 'laptops',
    description: 'Premium enterprise laptop with HP Wolf Security and military-grade durability (MIL-STD-810H).',
    specs: ['Intel Core Ultra 7', '16GB / 32GB LPDDR5x', '512GB / 1TB SSD', '14" WUXGA Sure View', 'Windows 11 Pro'],
    image: '/images/hardware/laptop-placeholder.svg',
    priceOnRequest: true,
  },
  {
    id: 'dell-poweredge-t150',
    name: 'PowerEdge T150',
    brand: 'Dell',
    category: 'servers',
    description: 'Entry-level tower server for small businesses — quiet, efficient, and easy to expand.',
    specs: ['Intel Xeon E-2300 series', '16GB ECC DDR4 (up to 128GB)', '2TB SATA / SSD options', 'iDRAC9 Remote Mgmt', 'Windows Server / Linux'],
    image: '/images/hardware/server-placeholder.svg',
    badge: 'Popular',
    priceOnRequest: true,
  },
  {
    id: 'hp-proliant-ml110-gen11',
    name: 'ProLiant ML110 Gen11',
    brand: 'HP',
    category: 'servers',
    description: 'Versatile tower server suited for growing SMEs needing reliable compute and storage.',
    specs: ['Intel Xeon Bronze / Silver', 'Up to 256GB DDR5 ECC', 'SFF / LFF drive bays', 'HPE iLO 6 Remote Mgmt', 'Redundant PSU option'],
    image: '/images/hardware/server-placeholder.svg',
    priceOnRequest: true,
  },
  {
    id: 'cisco-catalyst-1000-24t',
    name: 'Catalyst 1000-24T',
    brand: 'Cisco',
    category: 'networking',
    description: 'Reliable managed switch for office networks — ideal for SME LAN infrastructure.',
    specs: ['24x 10/100/1000 Mbps ports', '4x SFP uplinks', 'Layer 2 managed', 'PoE+ model available', 'Lifetime warranty'],
    image: '/images/hardware/switch-placeholder.svg',
    priceOnRequest: true,
  },
  {
    id: 'cisco-rv260-firewall',
    name: 'RV260 VPN Router',
    brand: 'Cisco',
    category: 'firewall',
    description: 'Business VPN router with firewall, SSL VPN, and site-to-site VPN for secure remote access.',
    specs: ['8x GbE LAN ports', 'SSL & IPsec VPN', 'SPI Firewall', 'Web Filtering', 'Cisco Business Dashboard ready'],
    image: '/images/hardware/firewall-placeholder.svg',
    priceOnRequest: true,
  },
  {
    id: 'apc-smart-ups-1500va',
    name: 'Smart-UPS 1500VA LCD',
    brand: 'APC',
    category: 'ups',
    description: 'Double-conversion UPS with LCD display — protects servers and workstations from power outages and surges.',
    specs: ['1500VA / 1000W output', 'Double-conversion online', 'LCD status display', 'USB & Serial mgmt ports', 'Hot-swappable batteries'],
    image: '/images/hardware/ups-placeholder.svg',
    badge: 'Popular',
    priceOnRequest: true,
  },
  {
    id: 'hikvision-cctv-8ch-kit',
    name: 'HiLook 8-Channel CCTV Kit',
    brand: 'Hikvision',
    category: 'cctv',
    description: 'Complete 8-channel surveillance kit with DVR, cameras, and cables — suitable for offices and warehouses.',
    specs: ['8-channel HD DVR', '4x / 8x 2MP dome cameras', 'Night vision up to 20m', '1TB HDD included', 'Remote viewing via app'],
    image: '/images/hardware/cctv-placeholder.svg',
    priceOnRequest: true,
  },
];

export const categoryLabels: Record<HardwareCategory, string> = {
  laptops: 'Laptops',
  servers: 'Servers',
  networking: 'Networking',
  firewall: 'Firewall & VPN',
  ups: 'UPS',
  cctv: 'CCTV',
};
