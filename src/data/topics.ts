export type TopicId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Topic {
  id: TopicId;
  name: string;
  color: string;
  bg: string;
}

const TOPICS: Topic[] = [
  {
    id: 1,
    name: "Coordinate Systems & Vector Transformations",
    color: "var(--t1)",
    bg: "var(--t1bg)",
  },
  {
    id: 2,
    name: "Electrostatics — Electric Field & Flux Density",
    color: "var(--t2)",
    bg: "var(--t2bg)",
  },
  {
    id: 3,
    name: "Electrostatics — Potential, Energy & Capacitance",
    color: "var(--t3)",
    bg: "var(--t3bg)",
  },
  {
    id: 4,
    name: "Continuity Equation & Dielectric Boundaries",
    color: "var(--t4)",
    bg: "var(--t4bg)",
  },
  {
    id: 5,
    name: "Magnetostatics — Biot-Savart, Ampere & H-Field",
    color: "var(--t5)",
    bg: "var(--t5bg)",
  },
  { id: 6, name: "Stokes' Theorem & Curl", color: "var(--t6)", bg: "var(--t6bg)" },
  {
    id: 7,
    name: "Magnetic Potential & Boundary Conditions",
    color: "var(--t7)",
    bg: "var(--t7bg)",
  },
  {
    id: 8,
    name: "Maxwell's Equations & Time-Varying Fields",
    color: "var(--t8)",
    bg: "var(--t8bg)",
  },
  { id: 9, name: "Uniform Plane Waves", color: "var(--t9)", bg: "var(--t9bg)" },
  { id: 10, name: "Transmission Lines", color: "var(--t10)", bg: "var(--t10bg)" },
  { id: 11, name: "Waveguides", color: "var(--t11)", bg: "var(--t11bg)" },
  { id: 12, name: "Antennas", color: "var(--t12)", bg: "var(--t12bg)" },
];

export default TOPICS;
