import { z } from "zod";

export type TopicId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Topic {
  id: TopicId;
  name: string;
  color: string;
  bg: string;
}

export const topicIdSchema = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
  z.literal(6),
  z.literal(7),
  z.literal(8),
  z.literal(9),
  z.literal(10),
  z.literal(11),
  z.literal(12),
]);

export const topicSchema: z.ZodType<Topic> = z.object({
  id: topicIdSchema,
  name: z.string().min(1),
  color: z.string().min(1),
  bg: z.string().min(1),
});

const topicData = [
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
] satisfies Topic[];

const TOPICS: Topic[] = z.array(topicSchema).parse(topicData);

export default TOPICS;
