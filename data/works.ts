export interface Work {
  id: number;
  title: string;
  category: string;
  year: string;
  size: "large" | "small" | "medium" | "tall";
  accentColor: string;
  description?: string;
  image: string;
}

export const works: Work[] = [
  {
    id: 1,
    title: "Land Cruiser Next Gen",
    category: "Automotive Design",
    year: "2024",
    size: "large",
    accentColor: "#00D4FF",
    description: "Exterior concept. 6,363 appreciations on Behance.",
    image: "/images/works/land-cruiser.jpg",
  },
  {
    id: 2,
    title: "ChyraQ Brandbook",
    category: "Branding",
    year: "2024",
    size: "small",
    accentColor: "#FF6B1A",
    description:
      "Complete brand identity for ChyraQ — visual system, guidelines, and digital assets.",
    image: "/images/works/branding.jpg",
  },
  {
    id: 3,
    title: "Tesla Model SD",
    category: "Automotive Concept",
    year: "2023",
    size: "tall",
    accentColor: "#00D4FF",
    description:
      "Futuristic sedan concept exploring next-gen EV aesthetics and aerodynamic silhouette.",
    image: "/images/works/tesla.jpg",
  },
  {
    id: 4,
    title: "Automotive Concepts",
    category: "Motion & Design",
    year: "2023",
    size: "large",
    accentColor: "#FF6B1A",
    description:
      "Collection of motion studies and vehicle renderings pushing the boundaries of automotive form.",
    image: "/images/works/automotive.jpg",
  },
  {
    id: 5,
    title: "Samsung Galaxy S8",
    category: "Industrial Design",
    year: "2022",
    size: "small",
    accentColor: "#00D4FF",
    description:
      "Product design exploration for next-generation mobile devices with edge-to-edge display.",
    image: "/images/works/samsung.jpg",
  },
  {
    id: 6,
    title: "Mercedes SF1",
    category: "Automotive Concept",
    year: "2022",
    size: "small",
    accentColor: "#FFFFFF",
    description:
      "Visionary hypercar concept blending Mercedes heritage with forward-looking design language.",
    image: "/images/works/mercedes.jpg",
  },
];
