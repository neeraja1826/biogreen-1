/**
 * Every string in this file is copied verbatim from the original
 * Bio Green Solutions website. Do not rewrite or edit the wording.
 */

export const company = {
  name: 'Bio Green Solutions',
  email: 'biogreensolutions2022@gmail.com',
  phones: ['9841013758', '9381007323', '9841062250'],
  address: 'Address: No 23, Kalyani Estate, Athipattu, Chennai-600058'
};

export const hero = {
  eyebrow: "WE'll Save Our Planet",
  heading: 'Protect Environment',
  tagline: 'Building a sustainable future one bag at a time',
  cta: 'Join With Us',
  image: "/17e07080-230c-40f6-9cce-da09a86f0e49.jpg"
};

export const aboutHome = {
  eyebrow: 'About Us',
  heading: 'Our main goal is to protect environment',
  intro:
  'BioGreen Solutions was founded by three passionate entrepreneurs with a shared vision for a greener future.',
  tabs: [
  {
    key: 'About',
    title: 'Leading the Way in Eco-Friendly Solutions',
    body:
    'We specialize in the manufacturing and marketing of a wide range of carry bags and waste collection garbage bags. In response to government initiatives to ban plastic bags, we launched BioGreen Solutions — a company dedicated to producing eco-friendly, compostable bags that support sustainable living.'
  },
  {
    key: 'Mission',
    title: 'Excellence, Quality, and Service',
    body:
    "At BioGreen Solutions, our foundation rests on three key principles: Operational Excellence, Quality Products, and Superior Customer Service. For over a decade, these values have shaped our journey, fueling our growth and inspiring our future. We are committed to providing our customers with exceptional value by delivering premium-quality and high-quantity materials. With BioGreen Solutions, you don't just receive a product; you experience a promise of reliability, sustainability, and excellence."
  },
  {
    key: 'Vision',
    title: 'Our Vision',
    body:
    'To provide premium-quality, eco-friendly products that contribute to a sustainable and healthier environment.'
  }]

};

export const whatWeDo = {
  eyebrow: 'What we do',
  heading: 'What we do to protect environment'
};

export type ProductCategory = {
  slug: string;
  title: string;
  image: string;
};

export const productCategories: ProductCategory[] = [
{
  slug: 'biodegradable-plastic-bag',
  title: 'Biodegradable Plasic Bag',
  image: "/fc410a90-154e-4be5-80fc-889ba140f697.jpg"
},
{
  slug: 'reliable-and-easy-to-use',
  title: 'Reliable and Easy to Use',
  image: "/1a74200c-9c07-4bc1-a717-517082814b09.jpg"
},
{
  slug: 'how-to-use',
  title: 'How to use',
  image: "/1ae10e0d-131f-4620-ae64-c59c119cce05.jpg"
},
{
  slug: 'detachable-drawstrings',
  title: 'Detachable DrawStrings',
  image: "/953ff665-5c29-46bb-babb-c494d326fbbe.jpg"
}];


export const certificationsSection = {
  eyebrow: 'Our Certifications',
  heading: 'Certifications That Reflect Our Commitment to Sustainability'
};

export type Certification = {
  slug: string;
  name: string;
  date: string;
  title: string;
  body: string;
};

export const certifications: Certification[] = [
{
  slug: 'pollution-certificate',
  name: 'Pollution Certificate',
  date: '06 June, 2024',
  title: 'Review the Official Document from the Pollution Control Board',
  body:
  "This certificate authorizes the manufacturer to operate in compliance with Tamil Nadu PCB's plastic waste management rules."
},
{
  slug: 'test-report',
  name: 'Test Report',
  date: '18 Oct, 2023',
  title: 'Promoting Environmental Health through Bio Green Solution',
  body:
  'Bio Green Solution is committed to reducing plastic pollution through eco-friendly alternatives that support a cleaner, greener environment.'
},
{
  slug: 'plastic-management',
  name: 'Plastic Management',
  date: '21 Feb, 2025',
  title: 'Regulations for Plastic Waste Management',
  body:
  'These guidelines ensure proper handling, recycling, and reduction of plastic waste, supporting compliance with environmental regulations and promoting sustainability.'
},
{
  slug: 'tnpcb-certificate',
  name: 'TNPCB Certificate',
  date: '5 Aug, 2024',
  title: 'Tamilnadu Pollution Control Board',
  body:
  'The TNPCB is responsible for implementing and enforcing a wide range of environmental regulations aimed at reducing pollution and promoting sustainability across various industries.'
},
{
  slug: 'cpcb-certificate',
  name: 'CPCB Certificate',
  date: '21 April, 2025',
  title: 'Certificate to Manufacturer for Manufacturing',
  body:
  'This certificate authorizes the manufacturer to produce goods in compliance with environmental and regulatory standards.'
}];


export const motto = {
  eyebrow: 'Our Motto',
  quotes: [
  '“Think Green choose Bio Green”',
  '“Building a sustainable future one bag at a time”',
  '“Where Eco Friendly Meets Excellence"']

};

export const aboutPage = {
  eyebrow: 'About Us',
  tagline: 'Think Green choose Bio Green',
  whyHeading: 'Why Choose BioGreen Solutions?',
  whyPoints: [
  'Founded by visionaries: Started by three passionate entrepreneurs, BioGreen Solutions focuses on eco-friendly carry and garbage bags.',
  'Certified compostable products: We offer 100% certified compostable alternatives — strong for daily use and gentle on Earth.',
  'Sustainability mission: Our mission is to reduce plastic pollution and support a cleaner, greener planet.',
  'Inspiring change: We promote a future where communities, businesses, and nature thrive together.'],

  manufacturingLabel: 'Manufacturing',
  manufacturingTitle: 'Leading the Way in Eco-Friendly Manufacturing',
  manufacturingBody: [
  'Our company manufactures a range of compostable garbage bags and carry bags, all certified as eco-friendly by the Pollution Control Board.',
  'We manufacture our products following ISI Standard No: IS017088. The products are made using TBACT, which is imported and specifically used for manufacturing compostable bags.'],

  achievementsTitle: 'Achievements',
  achievementsBody:
  'We started manufacturing garbage bags as per customer requirements and achieved outstanding customer satisfaction, gaining recognition in the MSME sector.',
  futureTitle: 'The Future',
  futureBody:
  'Our Company is committed to sourcing the best new products, providing customers with a seamless automated procurement experience. We offer a broad selection of options that fit within their budgets, while consolidating services across all their locations. With us, customers are assured of significant cost reductions, making their procurement process simpler, smarter, and more cost-effective.',
  valuesTitle: 'Our Values',
  values: [
  'Earth First: Every decision we make is rooted in protecting the environment.',
  'Genuine Quality: Products crafted with the finest materials and certified for real compostability.',
  'Customer Commitment: Solutions tailored to your needs, backed by dependable service and support.'],

  deliveryTitle: 'Delivery Team',
  delivery: [
  'Robust local distribution: Our delivery team operates a strong network across the city.',
  'Dedicated delivery van: Ensures quick and smooth transportation of goods.',
  'Prompt fulfillment: Orders are processed and delivered efficiently with reliability.'],

  customerTitle: 'Customer Approach',
  customer: [
  'Motto: "Servicing the Service Industry" – a commitment to supporting businesses that serve others.',
  'Service Excellence: We strive to consistently deliver outstanding service using the full capabilities of BIOGREEN SOLUTIONS.']

};

export const contactPage = {
  heading: 'Enquiry',
  intro:
  "Have questions or need more information about our products or services? Please fill out the enquiry form below, and our team will get back to you as soon as possible. We're here to assist you!",
  submit: 'Send Enquiry',
  illustration: "/a2afb353-e6ea-4a9d-9c3d-5607fa62126e.jpg"
};

export const footerHeadings = {
  services: 'Our Services',
  certifications: 'Certifications',
  gallery: 'Our Gallery'
};

export const imagery = {
  manufacturing: "/6c1ecaee-01e9-4b14-b690-89bc85e53304.jpg",
  sustainability: "/85f8454b-54c3-4574-ac41-6854eab1e684.jpg"
};

export const gallery = [
{
  src: "/1e91982c-a533-4248-bcd5-d11225ca1102.jpg",
  alt: 'Stacked rolls of compostable bags manufactured by Bio Green Solutions',
  tall: true
},
{
  src: "/6366af36-290d-4ad3-b742-2b753e7abab8.jpg",
  alt: 'Compostable carry bag in everyday use',
  tall: false
},
{
  src: "/1ae10e0d-131f-4620-ae64-c59c119cce05.jpg",
  alt: 'Waste bin lined with a compostable drawstring bag',
  tall: true
},
{
  src: "/fc410a90-154e-4be5-80fc-889ba140f697.jpg",
  alt: 'Roll of compostable garbage bags',
  tall: false
},
{
  src: "/1a74200c-9c07-4bc1-a717-517082814b09.jpg",
  alt: 'Compostable U-cut carry bag',
  tall: false
},
{
  src: "/6c1ecaee-01e9-4b14-b690-89bc85e53304.jpg",
  alt: 'Eco-friendly manufacturing and distribution illustration',
  tall: true
},
{
  src: "/953ff665-5c29-46bb-babb-c494d326fbbe.jpg",
  alt: 'Compostable drawstring bin liner beside a bin',
  tall: false
},
{
  src: "/85f8454b-54c3-4574-ac41-6854eab1e684.jpg",
  alt: 'Illustration of the earth surrounded by leaves',
  tall: false
}];


export const nav = [
{ label: 'Home', to: '/' },
{ label: 'About Us', to: '/about' },
{ label: 'Services', to: '/services' },
{ label: 'Products', to: '/products' },
{ label: 'Manufacturing', to: '/manufacturing' },
{ label: 'Sustainability', to: '/sustainability' },
{ label: 'Certificates', to: '/certifications' },
{ label: 'Gallery', to: '/gallery' },
{ label: 'Contact Us', to: '/contact' }];