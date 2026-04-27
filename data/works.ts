export interface Work {
  id: number;
  title: string;
  category: string;
  year: string;
  size: "large" | "small" | "medium";
  accentColor: string;
  description?: string;
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
  },
  {
    id: 2,
    title: "ChyraQ Brandbook",
    category: "Branding",
    year: "2024",
    size: "small",
    accentColor: "#FF6B1A",
  },
  {
    id: 3,
    title: "Tesla Model SD",
    category: "Automotive Concept",
    year: "2023",
    size: "small",
    accentColor: "#00D4FF",
  },
  {
    id: 4,
    title: "Automotive Concepts",
    category: "Motion & Design",
    year: "2023",
    size: "medium",
    accentColor: "#FF6B1A",
  },
  {
    id: 5,
    title: "Samsung Galaxy S8",
    category: "Industrial Design",
    year: "2022",
    size: "small",
    accentColor: "#00D4FF",
  },
  {
    id: 6,
    title: "Mercedes SF1",
    category: "Automotive Concept",
    year: "2022",
    size: "small",
    accentColor: "#FFFFFF",
  },
];
