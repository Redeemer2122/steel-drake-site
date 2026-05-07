export interface Project {
  title: string;
  slug: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  gallery?: ProjectGalleryItem[];
  process?: ProjectProcessItem[];
  services?: string[];
  credits?: ProjectCredit[];
  featured: boolean;
  accentColor: string;
}

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectProcessItem {
  title: string;
  description: string;
}

export interface ProjectCredit {
  role: string;
  name: string;
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
    gallery: [
      {
        src: "/images/works/land-cruiser.jpg",
        alt: "Land Cruiser Next Gen exterior concept front view",
        caption: "Hero exterior study",
      },
    ],
    process: [
      {
        title: "Proportion",
        description:
          "Defined a heavier stance and clean architectural body mass before detailing the surface language.",
      },
      {
        title: "Surface",
        description:
          "Reduced decorative lines in favor of controlled tension, shadow breaks, and industrial precision.",
      },
    ],
    services: ["Exterior concept", "Automotive art direction", "Form study"],
    credits: [
      {
        role: "Design",
        name: "Steel Drake",
      },
      {
        role: "Presentation",
        name: "Steel Drake Studio",
      },
    ],
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
    gallery: [
      {
        src: "/images/works/branding.jpg",
        alt: "ChyraQ brand identity system presentation",
        caption: "Identity system overview",
      },
    ],
    services: ["Brand identity", "Guidelines", "Digital asset system"],
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
    gallery: [
      {
        src: "/images/works/tesla.jpg",
        alt: "Tesla Model SD futuristic sedan concept",
        caption: "Electric sedan silhouette",
      },
    ],
    process: [
      {
        title: "Silhouette",
        description:
          "Built the concept around a low visual center of gravity and one continuous aerodynamic gesture.",
      },
    ],
    services: ["EV concept", "Automotive visualization", "Design language"],
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
    gallery: [
      {
        src: "/images/works/automotive.jpg",
        alt: "Automotive motion and vehicle rendering collection",
        caption: "Motion studies collection",
      },
    ],
    services: ["Motion direction", "Vehicle rendering", "Concept boards"],
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
    gallery: [
      {
        src: "/images/works/samsung.jpg",
        alt: "Samsung Galaxy S8 industrial design exploration",
        caption: "Device form exploration",
      },
    ],
    process: [
      {
        title: "Reduction",
        description:
          "Focused the object around a restrained edge-to-edge surface and minimal industrial detailing.",
      },
    ],
    services: [
      "Industrial design",
      "Product visualization",
      "Presentation system",
    ],
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
    gallery: [
      {
        src: "/images/works/mercedes.jpg",
        alt: "Mercedes SF1 visionary hypercar concept",
        caption: "Hypercar hero study",
      },
    ],
    services: ["Hypercar concept", "Design language", "Cinematic presentation"],
    credits: [
      {
        role: "Concept",
        name: "Steel Drake",
      },
    ],
    featured: true,
    accentColor: "#FFFFFF",
  },
];
