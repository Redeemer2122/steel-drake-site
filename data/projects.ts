export interface Project {
  title: string;
  slug: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  featured: boolean;
  accentColor: string;
}

export const projects: Project[] = [
  {
    title: "Land Cruiser Next Gen",
    slug: "land-cruiser-next-gen",
    category: "Automotive Design",
    year: "2024",
    image: "/images/works/land-cruiser.jpg",
    description: "Exterior concept. 6,363 appreciations on Behance.",
    tags: ["Exterior Concept", "Automotive", "Behance"],
    featured: true,
    accentColor: "#00D4FF",
  },
  {
    title: "ChyraQ Brandbook",
    slug: "chyraq-brandbook",
    category: "Branding",
    year: "2024",
    image: "/images/works/branding.jpg",
    description:
      "Complete brand identity for ChyraQ — visual system, guidelines, and digital assets.",
    tags: ["Brand Identity", "Guidelines", "Digital Assets"],
    featured: true,
    accentColor: "#FF6B1A",
  },
  {
    title: "Tesla Model SD",
    slug: "tesla-model-sd",
    category: "Automotive Concept",
    year: "2023",
    image: "/images/works/tesla.jpg",
    description:
      "Futuristic sedan concept exploring next-gen EV aesthetics and aerodynamic silhouette.",
    tags: ["EV Concept", "Sedan", "Aerodynamics"],
    featured: true,
    accentColor: "#00D4FF",
  },
  {
    title: "Automotive Concepts",
    slug: "automotive-concepts",
    category: "Motion & Design",
    year: "2023",
    image: "/images/works/automotive.jpg",
    description:
      "Collection of motion studies and vehicle renderings pushing the boundaries of automotive form.",
    tags: ["Motion", "Vehicle Rendering", "Form Study"],
    featured: true,
    accentColor: "#FF6B1A",
  },
  {
    title: "Samsung Galaxy S8",
    slug: "samsung-galaxy-s8",
    category: "Industrial Design",
    year: "2022",
    image: "/images/works/samsung.jpg",
    description:
      "Product design exploration for next-generation mobile devices with edge-to-edge display.",
    tags: ["Product Design", "Mobile", "Industrial Design"],
    featured: true,
    accentColor: "#00D4FF",
  },
  {
    title: "Mercedes SF1",
    slug: "mercedes-sf1",
    category: "Automotive Concept",
    year: "2022",
    image: "/images/works/mercedes.jpg",
    description:
      "Visionary hypercar concept blending Mercedes heritage with forward-looking design language.",
    tags: ["Hypercar", "Concept", "Design Language"],
    featured: true,
    accentColor: "#FFFFFF",
  },
];
