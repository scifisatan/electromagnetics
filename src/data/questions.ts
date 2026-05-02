import { z } from "zod";
import { type TopicId, topicIdSchema } from "./topics";

export const examTypeSchema = z.union([z.literal("Regular"), z.literal("Back")]);

export type ExamType = "Regular" | "Back";

export interface QuestionOccurrence {
  year: string;
  type: ExamType;
  qno: string;
}

export interface Question {
  id: string;
  t: TopicId;
  text: string;
  sub?: string[];
  occurrences: QuestionOccurrence[];
}

export const questionOccurrenceSchema = z.object({
  year: z.string().min(1),
  type: examTypeSchema,
  qno: z.string().min(1),
});

export const questionSchema: z.ZodType<Question> = z.object({
  id: z.string().min(1),
  t: topicIdSchema,
  text: z.string().min(1),
  sub: z.array(z.string().min(1)).optional(),
  occurrences: z.array(questionOccurrenceSchema).min(1),
});

const questionData: Question[] = [
  {
    id: "q-MUBAQFRyYW5zZm9y-0",
    t: 1,
    text: "Transform the vector $\\vec{A}=4\\hat{a}_{x}-2\\hat{a}_{y}-4\\hat{a}_{z}$ into spherical co-ordinates at a point $\\mathrm{P(x=-2,\\,y=-3,\\,z=4)}$.",

    occurrences: [
      {
        year: "2082 Shrawan",
        type: "Back",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQEFuIGluZmlu-1",
    t: 2,
    text: "An infinite uniform line charge $\\rho_L = 2\\,\\mathrm{nC/m}$ lies along the x-axis in free space, while point charges of $8\\,\\mathrm{nC}$ each are located at $(0,0,1)$ and $(0,0,-1)$. Find $\\vec{D}$ at $(2,3,-4)$.",

    occurrences: [
      {
        year: "2082 Shrawan",
        type: "Back",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-M0BAQFN0YXRlIGFu-2",
    t: 3,
    text: "State and prove the Uniqueness Theorem.",

    occurrences: [
      {
        year: "2082 Shrawan",
        type: "Back",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-NEBAQFVzaW5nIHRo-3",
    t: 4,
    text: "Using the continuity equation, elaborate the concept of Relaxation Time Constant (RTC) with necessary derivations. Let $\\vec{J}=\\dfrac{e^{-10^{4}t}}{\\rho^{2}}\\hat{a}_{\\rho}\\,\\mathrm{A/m^2}$ be the current density. At $t=10\\,\\mathrm{ms}$, calculate the current passing through surface $\\rho=2\\,\\mathrm{m}$, $0\\leq z\\leq 3\\,\\mathrm{m}$, $0\\leq\\phi\\leq 2\\pi$.",

    occurrences: [
      {
        year: "2082 Shrawan",
        type: "Back",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NkBAQFN0YXRlIGFu-4",
    t: 6,
    text: "State and prove Stokes' Theorem. Calculate the vector current density in cylindrical coordinates at $P_B(1.5,\\,90°,\\,0.5)$ if $\\vec{H}=\\dfrac{2}{\\rho}(\\cos 0.2\\phi)\\,\\hat{a}_{\\rho}$.",

    occurrences: [
      {
        year: "2082 Shrawan",
        type: "Back",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-N0BAQERlZmluZSBz-5",
    t: 7,
    text: "Define scalar magnetic potential. The region $y<0$ (Region 1) is air and $y>0$ (Region 2) has $\\mu_r=10$. If there is a uniform magnetic field $\\vec{H}=5\\hat{a}_x+6\\hat{a}_y+7\\hat{a}_z\\,\\mathrm{A/m}$ in region 2, find $\\vec{B}$ and $\\vec{H}$ in region 2.",

    occurrences: [
      {
        year: "2082 Shrawan",
        type: "Back",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQExpc3Qgb3V0-6",
    t: 8,
    text: "List out the Maxwell equations in phasor form for time-varying case in free space. Derive the wave equation for a wave propagating in Lossy Media.",

    occurrences: [
      {
        year: "2082 Shrawan",
        type: "Back",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQEEgdW5pZm9y-7",
    t: 9,
    text: "A uniform plane wave in free space is given by $\\vec{H}_s=(250\\angle30°)\\,e^{-j350Z}\\,\\hat{a}_x\\,\\mathrm{V/m}$. Determine: (a) phase constant, (b) frequency of the wave, (c) intrinsic impedance, (d) $\\vec{E}_s$, and (e) magnitude of $\\vec{H}$ at $z=25\\,\\mathrm{mm}$ and $t=4\\,\\mathrm{ps}$.",

    occurrences: [
      {
        year: "2082 Shrawan",
        type: "Back",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQFdpdGhpbiBh-8",
    t: 9,
    text: "Within a certain region, $\\varepsilon=10^{-11}\\,\\mathrm{F/m}$ and $\\mu=10^{-5}\\,\\mathrm{H/m}$. If $B_x=2\\times10^{-4}\\cos10^5t\\sin10^{-3}y\\,\\mathrm{T}$, find:",
    sub: [
      "(a) Find $\\vec{E}$",
      "(b) Find the total magnetic flux passing through the surface $x=0$, $0<y<40\\,\\mathrm{m}$, $0<z<2\\,\\mathrm{m}$ at $t=1\\,\\mu\\mathrm{s}$",
      "(c) Find the value of the closed line integral of $\\vec{E}$ around the perimeter of the given surface.",
    ],
    occurrences: [
      {
        year: "2082 Shrawan",
        type: "Back",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBBIHRyYW5z-9",
    t: 10,
    text: "A transmission line operating at $120\\,\\mathrm{MHz}$ has $R=20\\,\\Omega/\\mathrm{m}$, $L=0.3\\,\\mu\\mathrm{H/m}$, $C=63\\,\\mathrm{pF/m}$ and $G=4.2\\,\\mathrm{mS/m}$. Find:",
    sub: [
      "(a) Propagation coefficient $(\\gamma)$",
      "(b) Velocity of wave propagation $(v)$",
      "(c) Characteristic impedance $(Z_0)$",
    ],
    occurrences: [
      {
        year: "2082 Shrawan",
        type: "Back",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBBIHJlY3Rh-10",
    t: 11,
    text: "A rectangular waveguide has dimensions $a=4\\,\\mathrm{cm}$ and $b=2\\,\\mathrm{cm}$. Determine the cut-off frequency and the range of frequencies over which the guide will operate in single mode.",

    occurrences: [
      {
        year: "2082 Shrawan",
        type: "Back",
        qno: "Q11",
      },
      {
        year: "2076 Chaitra",
        type: "Regular",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MUBAQEV4cHJlc3Mg-11",
    t: 1,
    text: "Express the vector field $D=(x^2+y^2)^{-1}(x\\,a_x+y\\,a_y)$ in the cylindrical coordinate system and find $D$ at $\\rho=2$, $\\phi=0.2\\pi$, and $z=5$.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQERlcml2ZSB0-12",
    t: 2,
    text: "Derive the expression for electric field intensity of an infinite line charge having uniform line charge density $\\rho_L\\,\\mathrm{C/m}$ using Coulomb's Law.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-M0BAQExldCBhIHVu-13",
    t: 3,
    text: "Let a uniform line charge density of $8\\,\\mathrm{nC}$ be located at $x=0$, $z=4$ and a point charge of $2\\,\\mu\\mathrm{C}$ be present at $P(2,0,0)$. If $V=0$ at $M(0,0,5)$, find $V$ at $N(1,2,3)$.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQEZpbmQgdGhl-14",
    t: 3,
    text: "Find the expression for energy stored in an electric field.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NUBAQFN0YXRlIEJp-15",
    t: 5,
    text: "State Biot-Savart's Law. Find the magnetic field intensity at point $P(2,3,5)$ if there is an infinitely long straight current-carrying filament passing through the origin and point $Q(0,1,0)$. The current of $50\\,\\mathrm{A}$ is directed from the origin to point $Q$.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-NkBAQFZlcmlmeSBT-16",
    t: 6,
    text: "Verify Stokes' theorem for the field $\\vec{H}=\\left(\\dfrac{3r^2}{\\sin\\theta}\\right)\\vec{a}_{\\theta}+54r\\cos\\theta\\,\\vec{a}_{\\phi}\\,\\mathrm{A/m}$ in free space for the conical surface defined by $\\theta=20°$, $0\\leq\\phi\\leq2\\pi$, $0\\leq r\\leq5$. Let the positive direction of $\\overrightarrow{dS}$ be $\\vec{a}_{\\theta}$.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-NUBAQERlcml2ZSBh-17",
    t: 5,
    text: "Derive an expression for Torque on a closed current-carrying circuit.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQERlcml2ZSB0-18",
    t: 9,
    text: "Derive the expressions for electric field and magnetic field for a uniform plane wave propagating in free space. Also prove that the uniform plane wave propagates with the speed of light in free space.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQEFuIEVNIHdh-19",
    t: 9,
    text: "An EM wave travels in free space with the electric field component $\\vec{E}=(15\\,\\vec{a}_y-5\\,\\vec{a}_x)\\cos(\\omega t-3y+5z)\\,\\mathrm{V/m}$. Find: (a) $\\omega$ and $\\lambda$; (b) the magnetic field component.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-NEBAQFRoZSByZWdp-20",
    t: 4,
    text: "The region $z<0$ contains a perfect dielectric for which $\\varepsilon_{r1}=2.5$, while the region $z>0$ is characterized by $\\varepsilon_{r2}=4$. Let $\\vec{E}_1=-30\\hat{a}_x+50\\hat{a}_y+70\\hat{a}_z\\,\\mathrm{V/m}$. Find the electric field intensities, electric flux densities, and polarization in region 2.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-M0BAQEZpbmQgdGhl-21",
    t: 3,
    text: "Find the capacitance for a capacitor with two-layer dielectric.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-OEBAQFN0YXRlIEZh-22",
    t: 8,
    text: "State Faraday's Law. Correct the Ampere's Circuital Law with necessary arguments and derivation for time-varying fields.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MTBAQEBBIHRyYW5z-23",
    t: 10,
    text: "A transmission line operating at $200\\,\\mathrm{MHz}$ has $R=20\\,\\Omega/\\mathrm{m}$, $L=0.3\\,\\mu\\mathrm{H/m}$, $C=63\\,\\mathrm{pF/m}$ and $G=4.2\\,\\mathrm{mS/m}$. Find: (a) Propagation coefficient $(\\gamma)$; (b) Phase constant and attenuation constant; (c) Characteristic impedance $(Z_0)$; (d) Velocity of wave propagation $(v)$.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q13",
      },
    ],
  },
  {
    id: "q-MTFAQEBXaGF0IGlz-24",
    t: 11,
    text: "What is a waveguide? Explain its advantages over a transmission line.",

    occurrences: [
      {
        year: "2082 Baishakh",
        type: "Back",
        qno: "Q14",
      },
    ],
  },
  {
    id: "q-MUBAQEF0IHBvaW50-25",
    t: 1,
    text: "At point $P(-3,-4,5)$, express the vector that extends from $P$ to $Q(2,0,-1)$ in spherical coordinates.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQEZpbmQgJFx2-26",
    t: 2,
    text: "Find $\\vec{D}$ at $P(6,8,10)$ caused by: a point charge of $30\\,\\mathrm{nC}$ at the origin, a uniform line charge $\\rho_L=40\\,\\mu\\mathrm{C/m}$ on the z-axis, and a uniform surface charge density $\\rho_s=57.2\\,\\mu\\mathrm{C/m^2}$ on the plane $x=9$.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-OEBAQERlcml2ZSB0-27",
    t: 8,
    text: "Derive the expression for the Maxwell's equations in point form.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQEZpbmQgdGhl-28",
    t: 3,
    text: "Find the equation of a streamline that passes through the point $P(1,4,-2)$ in the field $\\vec{E}=-\\dfrac{8x}{y}\\,a_x+\\dfrac{4x^2}{y^2}\\,a_y$.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NUBAQERlcml2ZSBh-29",
    t: 5,
    text: "Derive an expression for the magnetic field intensity produced by an infinitely long filament carrying current using Biot-Savart Law.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-NkBAQFdoYXQgaXMg-30",
    t: 6,
    text: "What is curl? State and prove Stokes' theorem.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-NUBAQEEgc3F1YXJl-31",
    t: 5,
    text: "A square loop of wire in the $z=0$ plane with corners at $(1,0,0)$, $(1,2,0)$, $(3,2,0)$, and $(3,0,0)$ carrying $2\\,\\mathrm{mA}$ is placed in the field of an infinite filament on the y-axis with current $15\\,\\mathrm{A}$ in $-a_y$ direction. Determine the total force on the loop.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQERlcml2ZSBh-32",
    t: 9,
    text: "Derive an expression for standing wave for both electric and magnetic fields. Indicate where on the z-axis you get the maximum and minimum value of electric field intensity $E$. Assume the boundary is at $z=0$, region $z<0$ is a perfect dielectric, and region $z>0$ may be any material.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQEEgJDFcLFxt-33",
    t: 9,
    text: "A $1\\,\\mathrm{MHz}$ uniform plane wave with amplitude $25\\,\\mathrm{V/m}$ propagates along $\\hat{a}_x$ in a material with $\\varepsilon_r=4$, $\\mu_r=9$, $\\sigma=0$. Find: (a) velocity of propagation; (b) phase constant; (c) intrinsic impedance; (d) $\\vec{E}(t)$ if $E_z=0$ and $E_y=25\\,\\mathrm{V/m}$ at $P(10,10,10)$ at $100\\,\\mathrm{ns}$; (e) $\\vec{H}(t)$.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-NEBAQFVzZSBib3Vu-34",
    t: 4,
    text: "Use boundary conditions to find $\\vec{E}_2$ in medium 2 with boundary at $z=0$. Medium 1: $\\varepsilon_{r1}=2.5$; Medium 2: $\\varepsilon_{r2}=5$; $\\vec{E}_1=\\vec{a}_x+3\\vec{a}_y+3\\vec{a}_z\\,\\mathrm{V/m}$. Also find the angle made by $\\vec{E}_2$ with the boundary interface.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-M0BAQEZpbmQgdGhl-35",
    t: 3,
    text: "Find the capacitance per unit length of a co-axial cable using Laplace's equation.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-OEBAQEV4cGxhaW4g-36",
    t: 8,
    text: "Explain Faraday's Law. Derive the relation for motional emf and displacement current.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MTBAQEBUaGUgcGFy-37",
    t: 10,
    text: "The parameters of a transmission line operating at $6\\times10^8\\,\\mathrm{rad/s}$ are $L=0.4\\,\\mu\\mathrm{H/m}$, $C=40\\,\\mathrm{pF/m}$, $G=80\\,\\mathrm{mS/m}$, and $R=20\\,\\Omega/\\mathrm{m}$. Find $\\gamma$, $\\alpha$, $\\beta$, $\\lambda$, and $Z_0$.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q13",
      },
    ],
  },
  {
    id: "q-MTJAQEBXcml0ZSBz-38",
    t: 12,
    text: "Write short notes on types of antenna and antenna parameters.",

    occurrences: [
      {
        year: "2081 Bhadra",
        type: "Regular",
        qno: "Q14",
      },
    ],
  },
  {
    id: "q-MUBAQEV4cHJlc3Mg-39",
    t: 1,
    text: "Express the scalar potential field $V=x^2+2y^2+3z^2$ in spherical coordinates. Find the value of $V$ at the point $(2,\\,60°,\\,90°)$.",

    occurrences: [
      {
        year: "2080 Bhadra",
        type: "Regular",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQERlcml2ZSB0-40",
    t: 2,
    text: "Derive the expression for electric field intensity due to an infinite line charge using Gauss's Law. Find electric flux density at $P(6,5,4)$ due to a uniform line charge of $6\\,\\mathrm{nC/m}$ at $x=4$, $y=2$; a point charge $10\\,\\mathrm{nC}$ at $Q(3,2,4)$; and uniform surface charge density $0.4\\,\\mathrm{nC/m^2}$ at $x=3$.",

    occurrences: [
      {
        year: "2080 Bhadra",
        type: "Regular",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-M0BAQFR3byB1bmlm-41",
    t: 3,
    text: "Two uniform charges $8\\,\\mathrm{nC/m}$ are located at $x=1$, $z=2$ and $x=-1$, $y=2$ in free space respectively. If the potential at the origin is $100\\,\\mathrm{V}$, find $V$ at $P(4,1,3)$.",

    occurrences: [
      {
        year: "2080 Bhadra",
        type: "Regular",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQERlcml2ZSBQ-42",
    t: 3,
    text: "Derive Poisson's Equation. Find the capacitance of a parallel plate capacitor by solving Laplace's equation with potential difference $V_0$ between the plates.",

    occurrences: [
      {
        year: "2080 Bhadra",
        type: "Regular",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NkBAQEV2YWx1YXRl-43",
    t: 6,
    text: "Evaluate both sides of Stokes' theorem for the field $\\vec{H}=12\\sin\\theta\\,\\hat{a}_{\\phi}$ and the surface $r=4$, $0\\leq\\theta\\leq90°$, $0\\leq\\phi\\leq90°$. Let the surface have the $\\hat{a}_r$ direction.",

    occurrences: [
      {
        year: "2080 Bhadra",
        type: "Regular",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-N0BAQERpZmZlcmVu-44",
    t: 7,
    text: "Differentiate Scalar Magnetic Potential and Vector Magnetic Potential. Given $\\vec{A}=-\\dfrac{\\rho^2}{4}\\hat{a}_z\\,\\mathrm{Wb/m}$, calculate the total magnetic flux crossing the surface $\\phi=\\pi/2$, $1\\leq\\rho\\leq2$, $0\\leq z\\leq5$.",

    occurrences: [
      {
        year: "2080 Bhadra",
        type: "Regular",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQExpc3Qgb3V0-45",
    t: 8,
    text: "List out Maxwell's equations in phasor form for the time-varying case. Using these equations, derive the electric field component of a uniform plane wave travelling in perfect dielectric medium.",

    occurrences: [
      {
        year: "2080 Bhadra",
        type: "Regular",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQEEgJDkuMzc1-46",
    t: 9,
    text: "A $9.375\\,\\mathrm{GHz}$ uniform plane wave is propagating in polythene $(\\varepsilon_r=2.26,\\,\\mu_r=1)$. If the amplitude of the electric field intensity is $500\\,\\mathrm{V/m}$ and the material is assumed to be lossless, find: phase constant, wavelength, velocity of propagation, and intrinsic impedance.",

    occurrences: [
      {
        year: "2080 Bhadra",
        type: "Regular",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQEV4cGxhaW4g-47",
    t: 9,
    text: "Explain the term Skin Depth. Using the Poynting Vector, deduce the time-average power density for a perfect dielectric.",

    occurrences: [
      {
        year: "2080 Bhadra",
        type: "Regular",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBBIGxvc3Ns-48",
    t: 10,
    text: "A lossless $60\\,\\Omega$ line is $1.8\\lambda$ long and terminated with a pure resistance of $80\\,\\Omega$. The load voltage is $15\\angle30°\\,\\mathrm{V}$. Find: (i) average power delivered to load; (ii) magnitude of minimum voltage on the line.",

    occurrences: [
      {
        year: "2080 Bhadra",
        type: "Regular",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBXaGF0IGFy-49",
    t: 11,
    text: "What are the advantages of waveguides over transmission lines? Consider a rectangular waveguide with dimensions $a=1.07\\,\\mathrm{cm}$, $b=0.43\\,\\mathrm{cm}$. Find the cut-off frequency for $\\mathrm{TM}_{11}$ mode. $(\\varepsilon_r=2,\\,\\mu=\\mu_0)$",

    occurrences: [
      {
        year: "2080 Bhadra",
        type: "Regular",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MTJAQEBXcml0ZSBz-50",
    t: 12,
    text: "Write short notes about antenna and its parameters.",

    occurrences: [
      {
        year: "2080 Bhadra",
        type: "Regular",
        qno: "Q12",
      },
      {
        year: "2078 Bhadra",
        type: "Regular",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MUBAQFRoZSBtYWdu-51",
    t: 1,
    text: "The magnetic field intensity in a certain region is given as $\\vec{H}=20\\hat{a}_{\\rho}-10\\hat{a}_{\\phi}+3\\hat{a}_z\\,\\mathrm{A/m}$. Transform this field vector into Cartesian coordinates at $P(x=5,\\,y=2,\\,z=-1)$.",

    occurrences: [
      {
        year: "2081 Baishakh",
        type: "Back",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQEEgcG9pbnQg-52",
    t: 2,
    text: "A point charge of $6\\,\\mu\\mathrm{C}$ located at the origin, uniform line charge density of $180\\,\\mathrm{nC/m}$ along the x-axis, and uniform sheet charge of $25\\,\\mathrm{C/m^2}$ on $z=0$ plane. Find $\\vec{D}$ at $(1,2,4)$.",

    occurrences: [
      {
        year: "2081 Baishakh",
        type: "Back",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-M0BAQERpZmZlcmVu-53",
    t: 3,
    text: "Differentiate between divergence and gradient. Let $V=\\dfrac{\\cos2\\phi}{\\rho}$ in free space. (i) Find the volume charge density at point $A(0.5,\\,60°,\\,1)$. (ii) Find the surface charge density on a conductor surface passing through point $B(2,\\,30°,\\,1)$.",

    occurrences: [
      {
        year: "2081 Baishakh",
        type: "Back",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQERlZmluZSB0-54",
    t: 3,
    text: "Define the curvilinear square method for calculating capacitance. Find the potential at points $a, b, c, d, e, f, g, h$ and $i$ using the iteration method (single iteration only).",

    occurrences: [
      {
        year: "2081 Baishakh",
        type: "Back",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-N0BAQEp1c3RpZnkg-55",
    t: 7,
    text: "Justify the Maxwell's equation $\\oint_S \\vec{B}\\cdot d\\vec{S}=0$ with necessary remarks. Derive an expression for magnetic field intensity for an infinite filament carrying a direct current using vector magnetic potential.",

    occurrences: [
      {
        year: "2081 Baishakh",
        type: "Back",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-N0BAQERlZmluZSBC-56",
    t: 7,
    text: "Define Biot-Savart's law. Let the permeability be $5\\,\\mu\\mathrm{H/m}$ in region $x<0$ and $20\\,\\mu\\mathrm{H/m}$ in region $x>0$. If surface current density $\\vec{K}=150\\hat{a}_y-200\\hat{a}_z\\,\\mathrm{A/m}$ at $x=0$ and $\\vec{H}=300\\hat{a}_x-400\\hat{a}_y+500\\hat{a}_z\\,\\mathrm{A/m}$, find $|\\vec{H}_{tA}|$, $|\\vec{H}_{NA}|$, $|\\vec{H}_{tB}|$ and $|\\vec{H}_{NB}|$.",

    occurrences: [
      {
        year: "2081 Baishakh",
        type: "Back",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OUBAQERlZmluZSBQ-57",
    t: 9,
    text: "Define Poynting vector. Using this, deduce the time-average power density for a dissipative medium.",

    occurrences: [
      {
        year: "2081 Baishakh",
        type: "Back",
        qno: "Q7",
      },
      {
        year: "2078 Kartik",
        type: "Back",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-NEBAQEEgY29uZHVj-58",
    t: 4,
    text: "A conductor with cross-sectional area of $10\\,\\mathrm{cm^2}$ carries conduction current $\\vec{J}=0.2\\sin10^9t\\,\\hat{a}_z\\,\\mathrm{mA}$. Given $\\sigma=2.5\\times10^6\\,\\mathrm{S/m}$ and $\\varepsilon_r=6$. Calculate the magnitude of the displacement current density.",

    occurrences: [
      {
        year: "2081 Baishakh",
        type: "Back",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQEEgdW5pZm9y-59",
    t: 9,
    text: "A uniform plane wave in free space is given by $\\vec{H}_s=400\\angle30°\\,e^{-j250z}\\,\\hat{a}_y\\,\\mathrm{A/m}$. Find: (a) Angular frequency $(\\omega)$; (b) Wavelength $(\\lambda)$ and intrinsic impedance $(\\eta)$; (c) Electric field intensity $\\vec{E}(x,y,z,t)$ at $z=50\\,\\mathrm{mm}$ and $t=4\\,\\mathrm{ps}$.",

    occurrences: [
      {
        year: "2081 Baishakh",
        type: "Back",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBUaGUgcGFy-60",
    t: 10,
    text: "The parameters of a transmission line operating at $6\\times10^8\\,\\mathrm{rad/s}$ are $L=0.4\\,\\mu\\mathrm{H/m}$, $C=40\\,\\mathrm{pF/m}$, $G=80\\,\\mathrm{mS/m}$, and $R=20\\,\\Omega/\\mathrm{m}$. Find $\\gamma$, $\\lambda$ and $Z_0$.",

    occurrences: [
      {
        year: "2081 Baishakh",
        type: "Back",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBBIHN0YW5k-61",
    t: 11,
    text: "A standard air-filled rectangular waveguide with dimensions $8.636\\,\\mathrm{cm}\\times4.318\\,\\mathrm{cm}$ is fed by a $4\\,\\mathrm{GHz}$ carrier from a coaxial cable. Determine if a $\\mathrm{TE}_{10}$ mode will be propagating or not.",

    occurrences: [
      {
        year: "2081 Baishakh",
        type: "Back",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MTJAQEBXaGF0IGFy-62",
    t: 12,
    text: "What are the parameters of an antenna? List out the types of antennas.",

    occurrences: [
      {
        year: "2081 Baishakh",
        type: "Back",
        qno: "Q12",
      },
      {
        year: "2080 Baishakh",
        type: "Back",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MUBAQFRyYW5zZm9y-63",
    t: 1,
    text: "Transform the vector $\\vec{A}=y\\,a_x-(x+y)\\,a_y+z\\,a_z$ at point $P(-3,4,5)$ to the cylindrical coordinate system.",

    occurrences: [
      {
        year: "2080 Baishakh",
        type: "Back",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQERlZmluZSBl-64",
    t: 2,
    text: "Define electric flux density. Given $\\vec{D}=\\dfrac{20}{\\rho^2}(-\\sin^2\\phi\\,\\hat{a}_{\\rho}+\\sin2\\phi\\,\\hat{a}_{\\phi})$, evaluate both sides of the divergence theorem for the region $1<\\rho<2$, $0<\\phi<90°$, $0<z<1$.",

    occurrences: [
      {
        year: "2080 Baishakh",
        type: "Back",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-NEBAQFN0YXRlIERp-65",
    t: 4,
    text: "State Divergence Theorem. A current density in a certain region is given as $\\vec{J}=\\dfrac{400\\sin\\theta\\,a_r}{r^2}\\,\\mathrm{A/m^2}$. Find the total current flowing through that portion of the spherical surface $r=0.8$ bounded by $0.1\\pi<\\theta<0.3\\pi$, $0<\\phi<2\\pi$.",

    occurrences: [
      {
        year: "2080 Baishakh",
        type: "Back",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQEZpbmQgdGhl-66",
    t: 3,
    text: "Find the equation for Energy Density in the electrostatic field.",

    occurrences: [
      {
        year: "2080 Baishakh",
        type: "Back",
        qno: "Q4",
      },
      {
        year: "2072 Kartik",
        type: "Back",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NkBAQERlZmluZSBj-67",
    t: 6,
    text: "Define curl. Evaluate both sides of Stokes' Theorem for $\\vec{H}=8z\\,\\vec{a}_x-4x^3\\,\\vec{a}_z\\,\\mathrm{A/m}$ and rectangular path $P(2,3,4)\\to Q(4,3,4)\\to R(4,3,1)\\to S(2,3,1)\\to P$.",

    occurrences: [
      {
        year: "2080 Baishakh",
        type: "Back",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-NUBAQFN0YXRlIEJp-68",
    t: 5,
    text: "State Biot-Savart's law. A filamentary current of $10\\,\\mathrm{A}$ is directed from infinity to the origin on the positive x-axis and then back out to infinity along the positive z-axis. Use Biot-Savart's law to determine $\\vec{H}$ at $P(0,1,0)$.",

    occurrences: [
      {
        year: "2080 Baishakh",
        type: "Back",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQFN0YXRlIEZh-69",
    t: 8,
    text: "State Faraday's law of electromagnetic induction. Explain motional induction and transformer induction with necessary expressions.",

    occurrences: [
      {
        year: "2080 Baishakh",
        type: "Back",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQERlcml2ZSBh-70",
    t: 9,
    text: "Derive an expression for electric field and magnetic field for a uniform plane wave propagating in free space.",

    occurrences: [
      {
        year: "2080 Baishakh",
        type: "Back",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQERldGVybWlu-71",
    t: 9,
    text: "Determine skin depth, propagation constant and velocity of wave at $1\\,\\mathrm{MHz}$ in a good conductor with conductivity $1.9\\times10^7\\,\\mathrm{S/m}$.",

    occurrences: [
      {
        year: "2080 Baishakh",
        type: "Back",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBBICQyMDBc-72",
    t: 10,
    text: "A $200\\,\\Omega$ lossless transmission line is $0.25\\lambda$ long and terminated in $Z_L=400\\,\\Omega$. The line has a generator $80\\angle0°\\,\\mathrm{V}$ in series with $100\\,\\Omega$ connected to the input. (a) Find the load voltage. (b) Find the voltage at the midpoint of the line.",

    occurrences: [
      {
        year: "2080 Baishakh",
        type: "Back",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBFeHBsYWlu-73",
    t: 11,
    text: "Explain the different modes of propagation supported by waveguides. A rectangular waveguide has cross-section $2.5\\,\\mathrm{cm}\\times1.2\\,\\mathrm{cm}$. Determine if the signal of $5\\,\\mathrm{GHz}$ propagates in the dominant mode.",

    occurrences: [
      {
        year: "2080 Baishakh",
        type: "Back",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MUBAQFRyYW5zZm9y-75",
    t: 1,
    text: "Transform the vector $\\vec{F}=10\\vec{a}_x-8\\vec{a}_y+6\\vec{a}_z$ into the cylindrical coordinate system at point $P(x=10,\\,y=-8,\\,z=6)$.",

    occurrences: [
      {
        year: "2079 Bhadra",
        type: "Regular",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-M0BAQERlZmluZSBl-76",
    t: 3,
    text: "Define electric dipole moment. Two uniform line charges, $8\\,\\mathrm{nC/m}$ each, are located at $x=1$, $z=2$ and $x=-1$, $y=2$ in free space. If the potential at the origin is $100\\,\\mathrm{V}$, find $V$ at $P(4,1,3)$.",

    occurrences: [
      {
        year: "2079 Bhadra",
        type: "Regular",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-NEBAQFN0YXRlIEdh-77",
    t: 4,
    text: "State Gauss's Law. The region $y<0$ contains a dielectric with $\\varepsilon_{r1}=2.5$, while the region $y>0$ is characterized by $\\varepsilon_{r2}=4$. Let $\\vec{E}_1=-30\\hat{a}_x+50\\hat{a}_y+70\\hat{a}_z\\,\\mathrm{V/m}$. Find: electric field intensities and flux densities in region 2, and the angle $\\theta_1$ made by the normal component of $\\vec{E}$ (or $\\vec{D}$) with total $\\vec{E}$ (or $\\vec{D}$).",

    occurrences: [
      {
        year: "2079 Bhadra",
        type: "Regular",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQERlcml2ZSBQ-78",
    t: 3,
    text: "Derive Poisson's equation. Assuming $V$ in cylindrical coordinates is a function of $\\rho$ only, solve Laplace's equation by integration and derive the capacitance of a co-axial capacitor using the same solution of $V$.",

    occurrences: [
      {
        year: "2079 Bhadra",
        type: "Regular",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NkBAQFN0YXRlIFN0-79",
    t: 6,
    text: "State Stokes' theorem. Evaluate both sides of Stokes' theorem for the field $\\vec{H}=8xy\\,\\hat{a}_x-5y^2\\,\\hat{a}_y\\,\\mathrm{A/m}$ and the rectangular path around $2\\leq x\\leq5$, $-1\\leq y\\leq1$, $z=0$. Let the positive direction of $\\overrightarrow{dS}$ be $\\hat{a}_z$.",

    occurrences: [
      {
        year: "2079 Bhadra",
        type: "Regular",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-NUBAQERlZmluZSBB-80",
    t: 5,
    text: "Define Ampere's Circuital law. Determine $\\vec{H}$ at $P_2(0.4,\\,0.3,\\,0)$ in the field of an $8\\,\\mathrm{A}$ filamentary current directed inward from infinity to the origin on the positive x-axis, and then outward to infinity along the y-axis.",

    occurrences: [
      {
        year: "2079 Bhadra",
        type: "Regular",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQEV4cGxhaW4g-81",
    t: 8,
    text: "Explain motional induction with necessary derivations. Correct the equation $\\nabla\\times\\vec{H}=\\vec{J}$ with necessary arguments and derivation for time-varying fields.",

    occurrences: [
      {
        year: "2079 Bhadra",
        type: "Regular",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQERlcml2ZSB0-82",
    t: 9,
    text: "Derive the expression for electric and magnetic fields for a uniform plane wave propagating in a dissipative medium.",

    occurrences: [
      {
        year: "2079 Bhadra",
        type: "Regular",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQEEgdW5pZm9y-83",
    t: 9,
    text: "A uniform plane wave in free space is given by $\\vec{H}_s=(250\\angle30°)\\,e^{-j350Z}\\,\\hat{a}_x\\,\\mathrm{V/m}$. Determine: phase constant, frequency of the wave, intrinsic impedance, $\\vec{E}_s$ at $z=25\\,\\mathrm{mm}$ and $t=4\\,\\mathrm{ps}$.",

    occurrences: [
      {
        year: "2079 Bhadra",
        type: "Regular",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBEZWZpbmUg-84",
    t: 10,
    text: "Define the secondary parameters of a transmission line. A lossless transmission line with $Z_0=50\\,\\Omega$ has length $0.4\\lambda$. Operating frequency $300\\,\\mathrm{MHz}$, terminated with $Z_L=40+j30\\,\\Omega$. Find: (a) Reflection Coefficient; (b) SWR; (c) Input impedance $Z_{in}$.",

    occurrences: [
      {
        year: "2079 Bhadra",
        type: "Regular",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBEaWZmZXJl-85",
    t: 11,
    text: "Differentiate between TE and TM modes. Consider a rectangular waveguide with $\\varepsilon_r=4$, $\\mu=\\mu_0$, dimensions $a=2.08\\,\\mathrm{cm}$, $b=0.54\\,\\mathrm{cm}$. Find the cutoff frequency for $\\mathrm{TM}_{11}$ mode and the dominant mode.",

    occurrences: [
      {
        year: "2079 Bhadra",
        type: "Regular",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MTJAQEBXcml0ZSBz-86",
    t: 12,
    text: "Write short notes on antenna and its types.",

    occurrences: [
      {
        year: "2079 Bhadra",
        type: "Regular",
        qno: "Q12",
      },
      {
        year: "2076 Chaitra",
        type: "Regular",
        qno: "Q12",
      },
      {
        year: "2073 Chaitra",
        type: "Regular",
        qno: "Q12",
      },
      {
        year: "2073 Shrawan",
        type: "Back",
        qno: "Q12",
      },
      {
        year: "2072 Chaitra",
        type: "Regular",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MUBAQEV4cHJlc3Mg-87",
    t: 1,
    text: "Express the vector field $A=(x-y)\\,a_y$ in cylindrical and spherical coordinate systems.",

    occurrences: [
      {
        year: "2079 Baishakh",
        type: "Back",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQEZpbmQgdGhl-88",
    t: 2,
    text: "Find the total charge inside the volume indicated: $\\rho_v=4xyz^2$, $0\\leq\\rho\\leq2$, $0\\leq\\phi\\leq\\pi/2$, $0\\leq z\\leq3$.",

    occurrences: [
      {
        year: "2079 Baishakh",
        type: "Back",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-M0BAQE9idGFpbiB0-89",
    t: 3,
    text: "Obtain the equation of the streamline that passes through $P(-2,7,10)$ in the field $\\vec{E}=2(y-1)\\hat{a}_x+2x\\hat{a}_y$.",

    occurrences: [
      {
        year: "2079 Baishakh",
        type: "Back",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQEdpdmVuIHRo-90",
    t: 3,
    text: "Given the potential field in cylindrical coordinates, $V=[100/(z^2+1)]\\rho\\cos\\phi\\,\\mathrm{V}$, and point $P$ at $\\rho=3\\,\\mathrm{m}$, $\\phi=60°$, $z=2\\,\\mathrm{m}$. Find values at $P$ for: (a) $V$; (b) $E$; (c) $|E|$; (d) $dV/dN$; (e) $a_N$; (f) $\\rho_v$ in free space.",

    occurrences: [
      {
        year: "2079 Baishakh",
        type: "Back",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-M0BAQERlZmluZSBn-91",
    t: 3,
    text: "Define gradient and Laplacian function. A point charge of $16\\,\\mathrm{nC}$ is located at $Q(2,3,5)$ and a uniform line charge of $5\\,\\mathrm{nC/m}$ is at the intersection of planes $x=2$ and $y=4$. If the potential at the origin is $100\\,\\mathrm{V}$, find $V$ at $P(4,1,3)$.",

    occurrences: [
      {
        year: "2079 Baishakh",
        type: "Back",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-NkBAQERlZmluZSBj-92",
    t: 6,
    text: "Define curl and its significance. Evaluate both sides of Stokes' theorem for the field $H=6xy\\,a_x-3y^2\\,a_y\\,\\mathrm{A/m}$ and the rectangular path around $2\\leq x\\leq5$, $-1\\leq y\\leq1$, $z=0$. Let positive direction of $ds$ be $a_z$.",

    occurrences: [
      {
        year: "2079 Baishakh",
        type: "Back",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-N0BAQEp1c3RpZnkg-93",
    t: 7,
    text: "Justify Maxwell's equation $\\oint_S\\vec{B}\\cdot\\overrightarrow{dS}=0$ with necessary remarks. Derive an expression for magnetic field intensity for an infinite filament carrying a direct current using vector magnetic potential.",

    occurrences: [
      {
        year: "2079 Baishakh",
        type: "Back",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OEBAQFdyaXRlIGRv-94",
    t: 8,
    text: "Write down the Maxwell equations in phasor form. Derive the equation for electric field for a uniform plane wave travelling in air.",

    occurrences: [
      {
        year: "2079 Baishakh",
        type: "Back",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQEEgdW5pZm9y-95",
    t: 9,
    text: "A uniform plane wave in free space is given by electric field intensity $\\vec{E}_s$ in phasor form. Find: (a) Angular frequency $(\\omega)$; (b) Wavelength $(\\lambda)$ and intrinsic impedance $(\\eta)$; (c) Magnetic field intensity $\\vec{H}(x,y,z,t)$ at $z=8\\,\\mathrm{mm}$ and $t=6\\,\\mathrm{ps}$.",

    occurrences: [
      {
        year: "2079 Baishakh",
        type: "Back",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-NEBAQERlZmluZSBG-96",
    t: 4,
    text: "Define Faraday's law. A conductor with cross-sectional area $10\\,\\mathrm{cm^2}$ carries conduction current $\\vec{J}=0.2\\sin10^9t\\,\\hat{a}_z\\,\\mathrm{mA}$. Given $\\sigma=2.5\\times10^6\\,\\mathrm{S/m}$ and $\\varepsilon_r=6$. Calculate the value of the displacement current.",

    occurrences: [
      {
        year: "2079 Baishakh",
        type: "Back",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTBAQEBBIGxvc3Ns-97",
    t: 10,
    text: "A lossless transmission line is $80\\,\\mathrm{cm}$ long and operates at $600\\,\\mathrm{MHz}$. Line parameters: $L=0.25\\,\\mu\\mathrm{H/m}$ and $C=100\\,\\mathrm{pF/m}$. Find: characteristic impedance, phase constant, phase velocity on the line, and input impedance for $Z_L=100\\,\\Omega$.",

    occurrences: [
      {
        year: "2079 Baishakh",
        type: "Back",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MTFAQEBEZWZpbmUg-98",
    t: 11,
    text: "Define dominant mode. A standard air-filled rectangular waveguide with dimensions $8.636\\,\\mathrm{cm}\\times4.318\\,\\mathrm{cm}$ is fed by an $8\\,\\mathrm{GHz}$ carrier. Determine if a $\\mathrm{TE}_{10}$ mode will be propagating or not.",

    occurrences: [
      {
        year: "2079 Baishakh",
        type: "Back",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MTJAQEBXcml0ZSBz-99",
    t: 12,
    text: "Write short notes on antenna and its parameters.",

    occurrences: [
      {
        year: "2079 Baishakh",
        type: "Back",
        qno: "Q13",
      },
      {
        year: "2074 Chaitra",
        type: "Regular",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MUBAQFRyYW5zZm9y-100",
    t: 1,
    text: "Transform the vector field $\\vec{A}=4\\vec{a}_x-2\\vec{a}_y-4\\vec{a}_z$ into the cylindrical coordinate system at point $P(2,3,5)$.",

    occurrences: [
      {
        year: "2078 Kartik",
        type: "Back",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQEEgcGxhbmUg-101",
    t: 2,
    text: "A plane $x=2$ carries surface charge density $10\\,\\mathrm{nC/m^2}$, a line $x=0$, $z=3$ carries line charge density $10\\,\\mathrm{nC/m}$, and a point charge of $10\\,\\mathrm{nC}$ is at the origin. Calculate $\\vec{E}$ at $(1,1,-1)$.",

    occurrences: [
      {
        year: "2078 Kartik",
        type: "Back",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-MkBAQEV2YWx1YXRl-102",
    t: 2,
    text: "Evaluate both sides of the divergence theorem for $\\vec{D}=2xy\\,\\vec{a}_x+x^2\\,\\vec{a}_y\\,\\mathrm{C/m^2}$ and the rectangular parallelepiped formed by the planes $x=0$ and $1$, $y=0$ and $2$, and $z=0$ and $3$.",

    occurrences: [
      {
        year: "2078 Kartik",
        type: "Back",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQElmIHRoZSBw-103",
    t: 3,
    text: "If the potential field in free space is $V=\\dfrac{10}{r^2}\\sin\\theta\\cos\\phi\\,\\mathrm{V}$ and point $P$ is at $(2,\\,90°,\\,0°)$, find: (a) $\\vec{E}$; (b) direction of $\\vec{E}$ at $P$; (c) energy density at $P$.",

    occurrences: [
      {
        year: "2078 Kartik",
        type: "Back",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NUBAQEZpbmQgdGhl-104",
    t: 5,
    text: "Find the vector magnetic field intensity $\\vec{H}$ in Cartesian coordinates at $P(2,1,3)$ caused by a filament of $12\\,\\mathrm{A}$ in the $\\vec{a}_z$ direction on the z-axis extending from $z=0$ to $z=4$.",

    occurrences: [
      {
        year: "2078 Kartik",
        type: "Back",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-N0BAQENvbnNpZGVy-105",
    t: 7,
    text: "Consider a boundary at $z=0$ carrying current $\\vec{K}=\\left(\\dfrac{1}{\\mu_0}\\right)\\vec{a}_y\\,\\mathrm{mA/m}$. Medium 1 ($z<0$) has $\\mu_r=6$, medium 2 ($z>0$) has $\\mu_r=4$. If $\\vec{B}_2=5\\vec{a}_x+8\\vec{a}_z\\,\\mathrm{mT}$, find $\\vec{B}_1$.",

    occurrences: [
      {
        year: "2078 Kartik",
        type: "Back",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OUBAQEEgdW5pZm9y-107",
    t: 9,
    text: "A uniform plane wave has magnetic field component $\\vec{H}=15\\cos(2\\times10^8t+\\beta x)\\,\\vec{a}_y\\,\\mathrm{A/m}$ in a medium with $\\sigma=0$, $\\varepsilon=4\\varepsilon_0$, $\\mu=\\mu_0$. Find: (a) direction of propagation, phase constant $\\beta$, wavelength $\\lambda$, velocity $v_p$, intrinsic impedance $\\eta$; (b) magnitude of $\\vec{H}$.",

    occurrences: [
      {
        year: "2078 Kartik",
        type: "Back",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQEEgdW5pZm9y-108",
    t: 9,
    text: "A uniform plane wave in air partially reflects from the surface of an unknown material. Maxima are spaced $1.5\\,\\mathrm{m}$ apart, with the first maximum $0.75\\,\\mathrm{m}$ from the interface. The SWR is $5$. Determine the intrinsic impedance of the unknown material.",

    occurrences: [
      {
        year: "2078 Kartik",
        type: "Back",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBBICQ1MFws-109",
    t: 10,
    text: "A $50\\,\\Omega$ lossless transmission line is $0.4\\lambda$ long, terminated with $Z_L=40+j30\\,\\Omega$. Operating frequency is $300\\,\\mathrm{MHz}$. Find: (a) reflection coefficient $(\\Gamma)$; (b) SWR $(s)$; (c) input impedance $(Z_{in})$.",

    occurrences: [
      {
        year: "2078 Kartik",
        type: "Back",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBFeHBsYWlu-110",
    t: 11,
    text: "Explain why TEM wave doesn't exist in a rectangular waveguide. A rectangular waveguide has dimensions $a=1\\,\\mathrm{cm}$, $b=2\\,\\mathrm{cm}$, with $\\varepsilon_r=1$, $\\mu_r=1$, $\\sigma=1$. Find whether or not a signal of $500\\,\\mathrm{MHz}$ will be transmitted in the $\\mathrm{TE}_{1,0}$ mode.",

    occurrences: [
      {
        year: "2078 Kartik",
        type: "Back",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MTJAQEBXaGF0IGFy-111",
    t: 12,
    text: "What are the parameters of an antenna? List out the different types of antennas.",

    occurrences: [
      {
        year: "2078 Kartik",
        type: "Back",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MUBAQEdpdmVuIGEg-112",
    t: 1,
    text: "Given a point $P(-2,6,3)$ and vector field $\\vec{A}=y\\,\\vec{a}_x+(xy+z)\\,\\vec{a}_y$, express $P$ and $\\vec{A}$ in the spherical coordinate system.",

    occurrences: [
      {
        year: "2078 Bhadra",
        type: "Regular",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQEEgcG9pbnQg-113",
    t: 2,
    text: "A point charge of $6\\,\\mu\\mathrm{C}$ at the origin, uniform line charge density $180\\,\\mathrm{nC/m}$ along the x-axis, and uniform sheet charge $25\\,\\mathrm{C/m^2}$ on $z=0$ plane. Find $\\vec{D}$ at $(1,2,4)$.",

    occurrences: [
      {
        year: "2078 Bhadra",
        type: "Regular",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-MkBAQERlcml2ZSB0-114",
    t: 2,
    text: "Derive the expression for electric field intensity due to an infinitely long line charge with charge density $\\rho_L$ using Gauss's law. Find the volume charge density associated with the field $\\vec{D}=xy^2\\,\\vec{a}_x+x^2y\\,\\vec{a}_y+z\\,\\vec{a}_z\\,\\mathrm{C/m^2}$.",

    occurrences: [
      {
        year: "2078 Bhadra",
        type: "Regular",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-NEBAQFN0YXRlIHRo-115",
    t: 4,
    text: "State the continuity equation. Given $\\vec{J}=10\\rho^2z\\,\\vec{a}_{\\rho}-4\\rho\\sin^2\\phi\\,\\vec{a}_{\\phi}\\,\\mathrm{mA/m^2}$. Determine the current flowing outward through the circular band $\\rho=5$, $0<\\phi<2\\pi$, $2<z<2.8$.",

    occurrences: [
      {
        year: "2078 Bhadra",
        type: "Regular",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-N0BAQERpZmZlcmVu-116",
    t: 7,
    text: "Differentiate between scalar and vector magnetic potential. If a vector magnetic potential $\\vec{A}=-(\\rho^2/4)\\,\\vec{a}_z\\,\\mathrm{Wb/m}$, calculate total magnetic flux crossing the surface $\\phi=\\pi/2$, $1\\leq\\rho\\leq2\\,\\mathrm{m}$, $0\\leq z\\leq5\\,\\mathrm{m}$.",

    occurrences: [
      {
        year: "2078 Bhadra",
        type: "Regular",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-N0BAQFRoZSByZWdp-117",
    t: 7,
    text: "The region $y<0$ (Region 1) is air and $y>0$ (Region 2) has $\\mu_r=10$. If there is a uniform magnetic field $\\vec{H}=5\\hat{a}_x+6\\hat{a}_y+7\\hat{a}_z\\,\\mathrm{A/m}$ in region 1, find $\\vec{B}$ and $\\vec{H}$ in region 2.",

    occurrences: [
      {
        year: "2078 Bhadra",
        type: "Regular",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQENvcnJlY3Qg-118",
    t: 8,
    text: "Correct the equation $\\nabla\\times\\vec{E}=0$ for time-varying field with necessary derivation. Also modify the equation $\\nabla\\times\\vec{H}=\\sigma\\vec{E}$ with necessary arguments and derivation for time-varying field.",

    occurrences: [
      {
        year: "2078 Bhadra",
        type: "Regular",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQEEgdW5pZm9y-119",
    t: 9,
    text: "A uniform plane wave in free space is given by $\\vec{H}_s=(250\\angle30°)\\,e^{-j350Z}\\,\\vec{a}_x\\,\\mathrm{V/m}$. Determine: phase constant, frequency, intrinsic impedance, $\\vec{E}_s$, and magnitude of $\\vec{H}$ at $z=25\\,\\mathrm{mm}$ and $t=4\\,\\mathrm{ps}$.",

    occurrences: [
      {
        year: "2078 Bhadra",
        type: "Regular",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQERlcml2ZSB0-120",
    t: 9,
    text: "Derive the expression for electric and magnetic fields for a uniform plane wave propagating in free space.",

    occurrences: [
      {
        year: "2078 Bhadra",
        type: "Regular",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBBIGxvc3Ns-121",
    t: 10,
    text: "A lossless transmission line is $80\\,\\mathrm{cm}$ long and operates at $1\\,\\mathrm{GHz}$. Line parameters: $L=0.5\\,\\mu\\mathrm{H/m}$ and $C=200\\,\\mathrm{pF/m}$. Find: characteristic impedance, phase constant, phase velocity, and input impedance for $Z_L=100\\,\\Omega$.",

    occurrences: [
      {
        year: "2078 Bhadra",
        type: "Regular",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBXcml0ZSBz-122",
    t: 11,
    text: "Write short notes on TE and TM modes of a rectangular waveguide. An air-filled rectangular waveguide has cross-section $2.3\\,\\mathrm{cm}\\times1.02\\,\\mathrm{cm}$. Calculate the cutoff frequency of the dominant mode $(\\mathrm{TE}_{10})$.",

    occurrences: [
      {
        year: "2078 Bhadra",
        type: "Regular",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MUBAQFRyYW5zZm9y-124",
    t: 1,
    text: "Transform the vector $\\vec{A}=4\\hat{a}_x-2\\hat{a}_y-4\\hat{a}_z$ into spherical coordinates at point $P(x=-2,\\,y=-3,\\,z=4)$.",

    occurrences: [
      {
        year: "2076 Chaitra",
        type: "Regular",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQEFuIGluZmlu-125",
    t: 2,
    text: "An infinite uniform line charge $\\rho_L=2\\,\\mathrm{nC/m}$ lies along the x-axis in free space, while point charges of $8\\,\\mathrm{nC}$ each are located at $(0,0,1)$ and $(0,0,-1)$. Find $\\vec{D}$ at $(2,3,-4)$.",

    occurrences: [
      {
        year: "2076 Chaitra",
        type: "Regular",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-M0BAQERlZmluZSBV-126",
    t: 3,
    text: "Define Uniqueness Theorem. Find the energy stored in free space for the region $2\\,\\mathrm{mm}<r<3\\,\\mathrm{mm}$, $0<\\theta<90°$, $0<\\phi<90°$, given: (a) $V=\\dfrac{200}{r}\\,\\mathrm{V}$; (b) $V=\\dfrac{300}{r^2}\\cos\\theta\\,\\mathrm{V}$.",

    occurrences: [
      {
        year: "2076 Chaitra",
        type: "Regular",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-NEBAQFVzaW5nIHRo-127",
    t: 4,
    text: "Using the continuity equation, elaborate the concept of Relaxation Time Constant (RTC). Let $\\vec{J}=\\dfrac{e^{-10^4t}}{\\rho^2}\\hat{a}_{\\rho}\\,\\mathrm{A/m^2}$. At $t=10\\,\\mathrm{ms}$, calculate the current through surface $\\rho=2\\,\\mathrm{m}$, $0\\leq z\\leq3\\,\\mathrm{m}$, $0\\leq\\phi\\leq2\\pi$.",

    occurrences: [
      {
        year: "2076 Chaitra",
        type: "Regular",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NkBAQFN0YXRlIGFu-128",
    t: 6,
    text: "State and prove Stokes' Theorem. Calculate the vector current density in cylindrical coordinates at $P_B(1.5,\\,90°,\\,0.5)$ if $\\vec{H}=\\dfrac{2}{\\rho}(\\cos0.2\\phi)\\,\\hat{a}_{\\rho}$.",

    occurrences: [
      {
        year: "2076 Chaitra",
        type: "Regular",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-N0BAQERlZmluZSBz-129",
    t: 7,
    text: "Define scalar magnetic potential. The region $y<0$ is air and $y>0$ has $\\mu_r=10$. If there is a uniform magnetic field $\\vec{H}=5\\hat{a}_x+6\\hat{a}_y+7\\hat{a}_z\\,\\mathrm{A/m}$ in region 2, find $\\vec{B}$ and $\\vec{H}$ in region 2.",

    occurrences: [
      {
        year: "2076 Chaitra",
        type: "Regular",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQExpc3Qgb3V0-130",
    t: 8,
    text: "List out Maxwell's equations in phasor form for time-varying case in free space. A conducting bar slides freely over two conducting rails placed at $x=0$ and $x=10\\,\\mathrm{cm}$. Calculate the induced voltage if the bar slides at velocity $\\vec{v}=10\\,\\hat{a}_y\\,\\mathrm{m/s}$ and $\\vec{B}=3\\hat{a}_z\\,\\mathrm{mWb/m^2}$.",

    occurrences: [
      {
        year: "2076 Chaitra",
        type: "Regular",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQEEgdW5pZm9y-131",
    t: 9,
    text: "A uniform plane wave in free space is given by $\\vec{H}_s=(250\\angle30°)\\,e^{-j350Z}\\,\\hat{a}_x\\,\\mathrm{V/m}$. Determine: phase constant, frequency, intrinsic impedance, $\\vec{E}_s$ and magnitude of $\\vec{H}$ at $z=25\\,\\mathrm{mm}$ and $t=4\\,\\mathrm{ps}$.",

    occurrences: [
      {
        year: "2076 Chaitra",
        type: "Regular",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQFdpdGhpbiBh-132",
    t: 9,
    text: "Within a certain region, $\\varepsilon=10^{-11}\\,\\mathrm{F/m}$ and $\\mu=10^{-5}\\,\\mathrm{H/m}$. If $B_x=2\\times10^{-4}\\cos10^5t\\sin10^{-3}y\\,\\mathrm{T}$, find: (a) $\\vec{E}$; (b) total magnetic flux through surface $x=0$, $0<y<40\\,\\mathrm{m}$, $0<z<2\\,\\mathrm{m}$ at $t=1\\,\\mu\\mathrm{s}$; (c) closed line integral of $\\vec{E}$ around the perimeter.",

    occurrences: [
      {
        year: "2076 Chaitra",
        type: "Regular",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBBIHRyYW5z-133",
    t: 10,
    text: "A transmission line operating at $120\\,\\mathrm{MHz}$ has $R=20\\,\\Omega/\\mathrm{m}$, $L=0.3\\,\\mu\\mathrm{H/m}$, $C=63\\,\\mathrm{pF/m}$ and $G=4.2\\,\\mathrm{mS/m}$. Find: (a) propagation coefficient $(\\gamma)$; (b) velocity $(v)$; (c) characteristic impedance $(Z_0)$.",

    occurrences: [
      {
        year: "2076 Chaitra",
        type: "Regular",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MUBAQEdpdmVuIHBv-136",
    t: 1,
    text: "Given points $A(\\rho=5,\\,\\varphi=70°,\\,z=-3)$ and $B(\\rho=2,\\,\\varphi=-30°,\\,z=1)$, find: (a) a unit vector in Cartesian coordinates at $A$ directed toward $B$; (b) a unit vector in cylindrical coordinates at $A$ directed toward $B$.",

    occurrences: [
      {
        year: "2076 Ashwin",
        type: "Back",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQFR3byB1bmlm-137",
    t: 2,
    text: "Two uniform line charges, each $20\\,\\mathrm{nC/m}$, are located at $y=1$, $z=\\pm1\\,\\mathrm{m}$. Find the total electric flux leaving the surface of a sphere of radius $2\\,\\mathrm{m}$ centered at $A(3,1,0)$.",

    occurrences: [
      {
        year: "2076 Ashwin",
        type: "Back",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-M0BAQERlcml2ZSBF-138",
    t: 3,
    text: "Derive Energy Density in the electrostatic field.",

    occurrences: [
      {
        year: "2076 Ashwin",
        type: "Back",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQFRoZSBjb25k-139",
    t: 3,
    text: "The conducting planes $2x+3y=12$ and $2x+3y=18$ are at potentials $100\\,\\mathrm{V}$ and $0$, respectively. Let $\\varepsilon=\\varepsilon_0$ and find: (a) $V$ at $P(5,2,6)$; (b) $\\vec{E}$ at $P(5,2,6)$.",

    occurrences: [
      {
        year: "2076 Ashwin",
        type: "Back",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NUBAQExldCBhIGZp-140",
    t: 5,
    text: "Let a filamentary current of $5\\,\\mathrm{mA}$ be directed from infinity to the origin on the positive z-axis and then back out to infinity on the positive x-axis. Find $H$ at $P(0,1,0)$.",

    occurrences: [
      {
        year: "2076 Ashwin",
        type: "Back",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-N0BAQFN0YXRlIEFt-141",
    t: 7,
    text: "State Ampere's circuital law. Let the permeability be $5\\,\\mu\\mathrm{H/m}$ in region $x<0$ and $20\\,\\mu\\mathrm{H/m}$ in region $x>0$. Surface current density $K=150\\,a_y-200\\,a_z\\,\\mathrm{A/m}$ at $x=0$, and $H_A=300\\,a_x-400\\,a_y+500\\,a_z\\,\\mathrm{A/m}$. Find: (a) $|H_{tA}|$; (b) $|H_{NA}|$; (c) $|H_{tB}|$; (d) $|H_{NB}|$.",

    occurrences: [
      {
        year: "2076 Ashwin",
        type: "Back",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQFN0YXRlIGFu-142",
    t: 8,
    text: "State and explain Maxwell's equations in differential and integral form. Also define displacement current and depth of penetration.",

    occurrences: [
      {
        year: "2076 Ashwin",
        type: "Back",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OEBAQEVzdGFibGlz-143",
    t: 8,
    text: "Establish the relation for Helmholtz's equation for electromagnetic wave propagation.",

    occurrences: [
      {
        year: "2076 Ashwin",
        type: "Back",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQFN0YXRlIGFu-144",
    t: 9,
    text: "State and prove Poynting's theorem.",

    occurrences: [
      {
        year: "2076 Ashwin",
        type: "Back",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBBIGxvYWQg-145",
    t: 10,
    text: "A load $Z_L=80+j100\\,\\Omega$ is at $z=0$ on a lossless $50\\,\\Omega$ line. Operating frequency $200\\,\\mathrm{MHz}$, wavelength on line $2\\,\\mathrm{m}$. If the line is $0.8\\,\\mathrm{m}$ long, use the Smith chart to find: (a) input impedance; (b) SWR $s$; (c) distance from load to nearest voltage maximum.",

    occurrences: [
      {
        year: "2076 Ashwin",
        type: "Back",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBBbiBhaXIt-146",
    t: 11,
    text: "An air-filled rectangular waveguide has dimensions $a=2\\,\\mathrm{cm}$ and $b=1\\,\\mathrm{cm}$. Determine the range of frequencies over which the guide will operate in single mode $(\\mathrm{TE}_{10})$.",

    occurrences: [
      {
        year: "2076 Ashwin",
        type: "Back",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MTFAQEBXcml0ZSBz-147",
    t: 11,
    text: "Write short notes on: (a) TE mode and TM mode; (b) Antenna Properties.",

    occurrences: [
      {
        year: "2076 Ashwin",
        type: "Back",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MUBAQEZpbmQgdGhl-148",
    t: 1,
    text: "Find the vector that extends from $A(-3,-4,6)$ to $B(-5,2,-8)$ and express it in the cylindrical coordinate system.",

    occurrences: [
      {
        year: "2075 Chaitra",
        type: "Regular",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQEEgcG9pbnQg-149",
    t: 2,
    text: "A point charge of $12\\,\\mathrm{nC}$ is at the origin. Four uniform line charges are in the $x=0$ plane: $80\\,\\mathrm{nC/m}$ at $y=-1$ and $-5\\,\\mathrm{m}$; $-50\\,\\mathrm{nC/m}$ at $y=-2$ and $-4\\,\\mathrm{m}$. Find $\\vec{D}$ at $P(0,-3,2)$.",

    occurrences: [
      {
        year: "2075 Chaitra",
        type: "Regular",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-NEBAQExldCB0aGUg-150",
    t: 4,
    text: "Let the region $z<0$ be a uniform dielectric with $\\varepsilon_{r1}=3.2$, while $z>0$ has $\\varepsilon_{r2}=2$. Let $\\mathbf{D}_1=-30\\mathbf{a}_x+50\\mathbf{a}_y+70\\mathbf{a}_z\\,\\mathrm{nC/m^2}$ and find: (a) $\\mathbf{D}_{t1}$; (b) Polarization $\\mathbf{P}_1$; (c) $\\mathbf{E}_{n2}$; (d) $\\mathbf{E}_{t2}$.",

    occurrences: [
      {
        year: "2075 Chaitra",
        type: "Regular",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQERlcml2ZSBQ-151",
    t: 3,
    text: "Derive Poisson's and Laplace's equations. Assuming potential $V$ in cylindrical coordinates is a function of $r$ only, solve Laplace's equation and derive the capacitance of a Spherical Capacitor using the same solution.",

    occurrences: [
      {
        year: "2075 Chaitra",
        type: "Regular",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NUBAQERlcml2ZSB0-152",
    t: 5,
    text: "Derive the equation for magnetic field intensity in different regions due to a co-axial cable carrying uniformly distributed dc current $I$ in the inner conductor and $-I$ in the outer conductor.",

    occurrences: [
      {
        year: "2075 Chaitra",
        type: "Regular",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-NUBAQEZpbmQgdGhl-153",
    t: 5,
    text: "Find the vector magnetic field intensity $\\vec{H}$ in Cartesian coordinates at $P(-1.5,-4,3)$ caused by a current filament of $12\\,\\mathrm{A}$ in the $a_z$ direction on the z-axis, extending from $z=-3$ to $z=3$.",

    occurrences: [
      {
        year: "2075 Chaitra",
        type: "Regular",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-NkBAQERlZmluZSBD-154",
    t: 6,
    text: "Define Curl and give the physical interpretation of Curl with a suitable example.",

    occurrences: [
      {
        year: "2075 Chaitra",
        type: "Regular",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQEEgdW5pZm9y-155",
    t: 9,
    text: "A uniform plane wave in free space propagating in the $-a_y$ direction at $5\\,\\mathrm{MHz}$. If $E=200\\cos(\\omega t+\\beta y)\\,a_z\\,\\mathrm{V/m}$, write the expressions for $E_s(x,y,z)$ and $H_s(x,y,z)$ in phasor form.",

    occurrences: [
      {
        year: "2075 Chaitra",
        type: "Regular",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQERlcml2ZSBh-156",
    t: 9,
    text: "Derive an expression for Standing Wave Ratio (SWR). Indicate where on the z-axis you get maximum and minimum electric field intensity. Assume boundary at $z=0$, region $z<0$ is a perfect dielectric, and region $z>0$ may be any material.",

    occurrences: [
      {
        year: "2075 Chaitra",
        type: "Regular",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-NEBAQEZpbmQgdGhl-157",
    t: 4,
    text: "Find the amplitude of displacement current density in air space within a large power transformer where $H=10^6\\cos(377t+1.2566\\times10^{-6}z)\\,a_y\\,\\mathrm{A/m}$.",

    occurrences: [
      {
        year: "2075 Chaitra",
        type: "Regular",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTBAQEBBIGxvc3Ns-158",
    t: 10,
    text: "A lossless $50\\,\\Omega$ line is $1.5\\lambda$ long, terminated with a pure resistance of $100\\,\\Omega$. Load voltage is $40\\angle60°\\,\\mathrm{V}$. Find: (a) average power delivered to load; (b) magnitude of minimum voltage on the line.",

    occurrences: [
      {
        year: "2075 Chaitra",
        type: "Regular",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MTFAQEBXaGF0IGFy-159",
    t: 11,
    text: "What are the advantages and disadvantages of waveguides compared to transmission lines? Explain the TE and TM modes used in rectangular waveguides.",

    occurrences: [
      {
        year: "2075 Chaitra",
        type: "Regular",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MTJAQEBHaXZlIHRo-160",
    t: 12,
    text: "Give the definition of an antenna and explain the properties of any one type of antenna.",

    occurrences: [
      {
        year: "2075 Chaitra",
        type: "Regular",
        qno: "Q13",
      },
    ],
  },
  {
    id: "q-MUBAQEV4cHJlc3Mg-161",
    t: 1,
    text: "Express in Cartesian components: (a) the vector at $A(\\rho=4,\\,\\Phi=40°,\\,z=-2)$ that extends to $B(\\rho=5,\\,\\Phi=-110°,\\,z=2)$; (b) a unit vector at $B$ directed toward $A$.",

    occurrences: [
      {
        year: "2075 Ashwin",
        type: "Back",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQERlcml2ZSB0-162",
    t: 2,
    text: "Derive the electric field intensity $\\vec{E}$ in between two co-axial cylindrical conductors (inner radius $a$, outer radius $b$, both infinite, surface charge density $\\rho_s$ on outer surface of inner conductor). Also, given an infinite uniform line charge $\\rho_L=2\\,\\mathrm{nC/m}$ along the x-axis and point charges of $8\\,\\mathrm{nC}$ at $(0,0,1)$, find $\\vec{E}$ at $(2,3,-4)$.",

    occurrences: [
      {
        year: "2075 Ashwin",
        type: "Back",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-NEBAQERlcml2ZSB0-163",
    t: 4,
    text: "Derive the integral and point forms of the continuity equation. In a certain region, $\\vec{J}=3r^2\\cos\\theta\\,\\vec{a}_r-r^2\\sin\\theta\\,\\vec{a}_{\\theta}\\,\\mathrm{A/m^2}$. Find the current crossing the surface defined by $\\theta=30°$, $0<\\phi<2\\pi$, $0<r<2$.",

    occurrences: [
      {
        year: "2075 Ashwin",
        type: "Back",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-MkBAQEdpdmVuIHRo-164",
    t: 2,
    text: "Given the field $\\vec{D}=\\dfrac{5\\sin\\theta\\cos\\phi}{r}\\,a_r\\,\\mathrm{C/m^2}$, find: (a) volume charge density; (b) total charge in region $r<2\\,\\mathrm{m}$; (c) value of $D$ at surface $r=2$.",

    occurrences: [
      {
        year: "2075 Ashwin",
        type: "Back",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-N0BAQERpZmZlcmVu-165",
    t: 7,
    text: "Differentiate between scalar and vector magnetic potential. Derive the expression for magnetic boundary conditions.",

    occurrences: [
      {
        year: "2075 Ashwin",
        type: "Back",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-NkBAQFN0YXRlIFN0-166",
    t: 6,
    text: "State Stokes' theorem. Evaluate both sides of Stokes' theorem for $\\vec{G}=10\\sin\\theta\\,\\hat{a}_{\\phi}$ and the surface $r=3$, $0\\leq\\theta\\leq2\\pi$, $0\\leq\\phi\\leq90°$. Let surface have the $\\hat{a}_r$ direction.",

    occurrences: [
      {
        year: "2075 Ashwin",
        type: "Back",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-M0BAQEZpbmQgdGhl-167",
    t: 3,
    text: "Find the capacitance of a spherical capacitor using Laplace's equation.",

    occurrences: [
      {
        year: "2075 Ashwin",
        type: "Back",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OEBAQFdyaXRlIE1h-168",
    t: 8,
    text: "Write Maxwell's equations in phasor domain for perfect dielectric material. Use these equations to derive the magnetic field component of a uniform plane wave travelling in perfect dielectric medium.",

    occurrences: [
      {
        year: "2075 Ashwin",
        type: "Back",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQExldCAkXHZl-169",
    t: 9,
    text: "Let $\\vec{E}(z,t)=1800\\cos(10^7\\pi t-\\beta z)\\,\\vec{a}_x\\,\\mathrm{V/m}$ and $\\vec{H}(z,t)=3.8\\cos(10^7\\pi t-\\beta z)\\,\\vec{a}_y\\,\\mathrm{A/m}$ represent a uniform plane wave propagating at $v=1.4\\times10^8\\,\\mathrm{m/s}$ in a perfect dielectric. Find: (a) $\\beta$; (b) $\\lambda$; (c) $\\eta$; (d) $\\mu_r$; (e) $\\varepsilon_r$.",

    occurrences: [
      {
        year: "2075 Ashwin",
        type: "Back",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBUaGUgdmVs-170",
    t: 10,
    text: "The velocity of propagation on a lossless transmission line is $2.5\\times10^8\\,\\mathrm{m/s}$. If the capacitance is $30\\,\\mathrm{pF/m}$, find: (a) Inductance of the line; (b) Characteristic impedance; (c) Phase constant at $100\\,\\mathrm{MHz}$; (d) Reflection coefficient if terminated with $50\\,\\Omega$.",

    occurrences: [
      {
        year: "2075 Ashwin",
        type: "Back",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBXaGF0IGFy-171",
    t: 11,
    text: "What are the advantages of waveguides over transmission lines? A rectangular waveguide has cross-section $2.5\\,\\mathrm{cm}\\times1.2\\,\\mathrm{cm}$. Find the cut-off frequencies at the dominant mode and $\\mathrm{TE}_{1,1}$.",

    occurrences: [
      {
        year: "2075 Ashwin",
        type: "Back",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MTJAQEBXcml0ZSBz-172",
    t: 12,
    text: "Write short notes on: Antenna properties.",

    occurrences: [
      {
        year: "2075 Ashwin",
        type: "Back",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MUBAQEFuIHVuaWZv-173",
    t: 1,
    text: "An uniform electric field intensity in a certain region is given by $\\vec{E}=y\\,\\vec{a}_x-xy\\,\\vec{a}_y+z\\,\\vec{a}_z$. Transform this field vector into cylindrical coordinates at point $P(2,\\,45°,\\,3)$.",

    occurrences: [
      {
        year: "2074 Chaitra",
        type: "Regular",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQEEgdW5pZm9y-174",
    t: 2,
    text: "A uniform line charge density of $150\\,\\mu\\mathrm{C/m}$ lies at $x=2$, $z=-4$ and a uniform sheet charge of $25\\,\\mathrm{nC/m^2}$ is placed at $z=5$ plane. Find $\\vec{D}$ at $(1,2,4)$ and convert it to the spherical coordinate system.",

    occurrences: [
      {
        year: "2074 Chaitra",
        type: "Regular",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-M0BAQEdpdmVuIHRo-175",
    t: 3,
    text: "Given the potential function $V=\\dfrac{20\\cos\\theta}{r^2}\\,\\mathrm{V}$ in free space with $P$ at $r=3\\,\\mathrm{m}$, $\\theta=60°$, $\\phi=30°$. Find: (a) $\\vec{E}_P$; (b) $dV/dN$ at $P$; (c) unit normal vector at $P$; (d) $\\rho_v$ at $P$.",

    occurrences: [
      {
        year: "2074 Chaitra",
        type: "Regular",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-NEBAQERlZmluZSBS-176",
    t: 4,
    text: "Define Relaxation Time Constant (RTC). Derive an expression for RTC. Given $\\vec{J}=10\\rho^2z\\,\\vec{a}_{\\rho}-4\\rho\\cos^2\\phi\\,\\vec{a}_{\\phi}\\,\\mathrm{mA/m^2}$, find the current flowing outward through the circular band $\\rho=3$, $0<\\phi<2\\pi$, $2<z<2.8$.",

    occurrences: [
      {
        year: "2074 Chaitra",
        type: "Regular",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-N0BAQFNob3cgdGhh-177",
    t: 7,
    text: "Show that the vector magnetic potential can be defined in both regions where $\\vec{J}$ equals or does not equal zero. Use vector magnetic potential to derive the magnetic field intensity due to an infinite current-carrying filament carrying DC current $I$.",

    occurrences: [
      {
        year: "2074 Chaitra",
        type: "Regular",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-NkBAQFN0YXRlIFN0-178",
    t: 6,
    text: "State Stokes' theorem. Given $\\vec{H}=\\dfrac{1}{2}\\cos\\left(\\dfrac{\\phi}{2}\\right)\\vec{a}_{\\rho}-\\sin\\left(\\dfrac{\\phi}{2}\\right)\\vec{a}_{\\phi}\\,\\mathrm{A/m}$, evaluate both sides of Stokes' theorem for the path formed by the intersection of cylinder $\\rho=3$ and plane $z=2$, and for the surface defined by $\\rho=3$, $0\\leq z\\leq2$, and $z=0$, $0\\leq\\rho\\leq3$.",

    occurrences: [
      {
        year: "2074 Chaitra",
        type: "Regular",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQFN0YXRlIEZh-179",
    t: 8,
    text: "State Faraday's Law. Correct the equation $\\nabla\\times\\vec{H}=\\vec{J}$ with necessary arguments and derivation for time-varying fields.",

    occurrences: [
      {
        year: "2074 Chaitra",
        type: "Regular",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQERlcml2ZSB0-180",
    t: 9,
    text: "Derive the expressions for reflection coefficient and transmission coefficient for reflection of uniform waves at normal incidence.",

    occurrences: [
      {
        year: "2074 Chaitra",
        type: "Regular",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQEF0ICQ1MFws-181",
    t: 9,
    text: "At $50\\,\\mathrm{MHz}$, a lossy dielectric material is characterized by $\\varepsilon=3.6\\varepsilon_0$, $\\mu=2.1\\mu_0$ and $\\sigma=0.08\\,\\mathrm{S/m}$. If $\\vec{E}_s=6e^{-\\gamma x}\\,\\vec{a}_z\\,\\mathrm{V/m}$, compute: (a) propagation constant; (b) wavelength; (c) $\\vec{H}_s$.",

    occurrences: [
      {
        year: "2074 Chaitra",
        type: "Regular",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBTdGF0ZSB0-182",
    t: 10,
    text: "State the condition for lossless transmission line. A lossless line is $80\\,\\mathrm{cm}$ long at $600\\,\\mathrm{MHz}$. Parameters: $L=0.25\\,\\mu\\mathrm{H/m}$, $C=100\\,\\mathrm{pF/m}$. Find: (a) characteristic impedance; (b) phase constant; (c) phase velocity.",

    occurrences: [
      {
        year: "2074 Chaitra",
        type: "Regular",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBEaWZmZXJl-183",
    t: 11,
    text: "Differentiate between transmission line and waveguide. Consider a rectangular waveguide with $\\varepsilon_r=2$, $\\mu_r=1$, dimensions $a=1.07\\,\\mathrm{cm}$, $b=0.43\\,\\mathrm{cm}$. Find the cut-off frequency for $\\mathrm{TM}_{11}$ mode and the dominant mode.",

    occurrences: [
      {
        year: "2074 Chaitra",
        type: "Regular",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MUBAQENvbnZlcnQg-185",
    t: 1,
    text: "Convert the vector $\\vec{F}=F_x\\vec{a}_x+F_y\\vec{a}_y+F_z\\vec{a}_z$ to the spherical coordinate system.",

    occurrences: [
      {
        year: "2074 Ashwin",
        type: "Back",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQEZpbmQgdGhl-186",
    t: 2,
    text: "Find the electric field intensity in all three regions due to an infinite sheet parallel plate capacitor with surface charge density $\\rho_s\\,\\mathrm{C/m^2}$ and $-\\rho_s\\,\\mathrm{C/m^2}$ placed at $y=0$ and $y=b$. Also find $\\vec{E}$ at the origin given: uniform line charge density $3\\,\\mathrm{nC/m}$ at $y=3$, and uniform surface charge density $0.2\\,\\mathrm{nC/m^2}$ at $x=2$.",

    occurrences: [
      {
        year: "2074 Ashwin",
        type: "Back",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-M0BAQFdoYXQgaXMg-187",
    t: 3,
    text: "What is a dipole? Derive the equation for potential and electric field due to a dipole at a distant point $P$.",

    occurrences: [
      {
        year: "2074 Ashwin",
        type: "Back",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQERlcml2ZSBQ-188",
    t: 3,
    text: "Derive Poisson's equation. By solving Laplace's equation, find the capacitance of a parallel plate capacitor with potential difference $V_0$ between the plates.",

    occurrences: [
      {
        year: "2074 Ashwin",
        type: "Back",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NkBAQFZlcmlmeSBT-189",
    t: 6,
    text: "Verify Stokes' theorem for the field $\\vec{H}=\\left(\\dfrac{3r^2}{\\sin\\theta}\\right)\\vec{a}_{\\theta}+54r\\cos\\theta\\,\\vec{a}_{\\phi}\\,\\mathrm{A/m}$ in free space for the conical surface $\\theta=20°$, $0\\leq\\phi\\leq2\\pi$, $0\\leq r\\leq5$. Let positive direction of $\\vec{ds}$ be $\\vec{a}_{\\theta}$.",

    occurrences: [
      {
        year: "2074 Ashwin",
        type: "Back",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-N0BAQENvbnNpZGVy-190",
    t: 7,
    text: "Consider a boundary at $z=0$ for which $\\vec{B}_1=2\\vec{a}_x-3\\vec{a}_y+\\vec{a}_z\\,\\mathrm{mT}$, $\\mu_1=4\\,\\mu\\mathrm{H/m}$ ($z>0$), $\\mu_2=7\\,\\mu\\mathrm{H/m}$ ($z<0$) and $\\vec{K}=80\\vec{a}_x\\,\\mathrm{A/m}$ at $z=0$. Find $\\vec{B}_2$.",

    occurrences: [
      {
        year: "2074 Ashwin",
        type: "Back",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQEV4cGxhaW4g-191",
    t: 8,
    text: "Explain how Ampere's law conflicts with the continuity equation and how it is corrected. Derive conduction and displacement current in a capacitor.",

    occurrences: [
      {
        year: "2074 Ashwin",
        type: "Back",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQERlcml2ZSB0-192",
    t: 9,
    text: "Derive the expression for electric and magnetic fields for a uniform plane wave propagating in a perfect dielectric medium.",

    occurrences: [
      {
        year: "2074 Ashwin",
        type: "Back",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQEEgJDkuNFws-193",
    t: 9,
    text: "A $9.4\\,\\mathrm{GHz}$ uniform plane wave propagates in a medium with $\\varepsilon_r=2.25$ and $\\mu_r=1$. The magnetic field intensity is $7\\,\\mathrm{mA/m}$ (lossless). Find: (i) velocity of propagation; (ii) wavelength; (iii) phase constant; (iv) intrinsic impedance; (v) magnitude of electric field intensity.",

    occurrences: [
      {
        year: "2074 Ashwin",
        type: "Back",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBBIGxvc3Ns-194",
    t: 10,
    text: "A lossless line with air dielectric has characteristic impedance $400\\,\\Omega$, operating at $200\\,\\mathrm{MHz}$, $Z_{in}=200-j200\\,\\Omega$. Find: (a) SWR; (b) $Z_L$ if the line is $1\\,\\mathrm{m}$ long; (c) distance from load to nearest voltage maximum.",

    occurrences: [
      {
        year: "2074 Ashwin",
        type: "Back",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBEaWZmZXJl-195",
    t: 11,
    text: "Differentiate between transmission line and waveguide. A rectangular waveguide with cross-section $2\\,\\mathrm{cm}\\times1\\,\\mathrm{cm}$ is filled with a lossless medium: $\\varepsilon=4\\varepsilon_0$, $\\mu_r=1$. Calculate the cut-off frequency of the dominant mode.",

    occurrences: [
      {
        year: "2074 Ashwin",
        type: "Back",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MTJAQEBXcml0ZSBz-196",
    t: 12,
    text: "Write short notes on antenna and its properties.",

    occurrences: [
      {
        year: "2074 Ashwin",
        type: "Back",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MUBAQEV4cHJlc3Mg-197",
    t: 1,
    text: "Express the scalar potential field $V=x^2+2y^2+3z^2$ in spherical coordinates. Find the value of $V$ at point $P(2,\\,60°,\\,90°)$.",

    occurrences: [
      {
        year: "2073 Chaitra",
        type: "Regular",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQERlcml2ZSB0-198",
    t: 2,
    text: "Derive the expression for electric field intensity due to a line charge using Gauss's Law. Find electric flux density at $P(5,4,3)$ due to: uniform line charge $2\\,\\mathrm{nC/m}$ at $x=5$, $y=3$; point charge $12\\,\\mathrm{nC}$ at $Q(2,0,6)$; uniform surface charge density $0.2\\,\\mathrm{nC/m^2}$ at $x=2$.",

    occurrences: [
      {
        year: "2073 Chaitra",
        type: "Regular",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-MkBAQFN0YXRlIHRo-199",
    t: 2,
    text: "State the physical significance of divergence. Derive the Divergence theorem. Given $V=\\dfrac{10}{r^2}\\sin\\theta\\cos\\phi$; find $\\vec{D}$ at $\\left(2,\\,\\dfrac{\\pi}{2},\\,0\\right)$.",

    occurrences: [
      {
        year: "2073 Chaitra",
        type: "Regular",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQERlcml2ZSBM-200",
    t: 3,
    text: "Derive Laplace's equation. Find the capacitance of a co-axial cable using Laplace's equation.",

    occurrences: [
      {
        year: "2073 Chaitra",
        type: "Regular",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NUBAQFN0YXRlIEFt-201",
    t: 5,
    text: "State Ampere's circuital law. By using Biot-Savart's law, derive an expression for $\\vec{H}$ due to an infinite length filament carrying direct current $I$.",

    occurrences: [
      {
        year: "2073 Chaitra",
        type: "Regular",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-N0BAQEZsdXggZGVu-202",
    t: 7,
    text: "Flux density at medium with $\\mu_1=15$ is $\\vec{B}_1=1.2\\,a_x+8\\,a_y+4\\,a_z\\,\\mathrm{T}$. Find $\\vec{B}$, $\\vec{H}$ and the angles between field vectors and tangent to the interface at second medium, if $\\mu_2=1$ and interface plane is $z=0$.",

    occurrences: [
      {
        year: "2073 Chaitra",
        type: "Regular",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQFN0YXRlIGFu-203",
    t: 8,
    text: "State and derive the expression of motional emf. Consider two parallel conductors at $x=0$ and $x=5\\,\\mathrm{cm}$ in a magnetic field $\\vec{B}=6\\,\\vec{a}_z\\,\\mathrm{mWb/m^2}$. A conducting bar slides at $\\vec{v}=18\\,\\vec{a}_y\\,\\mathrm{m/s}$. Calculate the induced voltage and show the polarity.",

    occurrences: [
      {
        year: "2073 Chaitra",
        type: "Regular",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQFdoYXQgaXMg-204",
    t: 9,
    text: "What is a standing wave? Derive the equations for electric field, magnetic field, and SWR of a standing wave.",

    occurrences: [
      {
        year: "2073 Chaitra",
        type: "Regular",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQEFuIEVNIHdh-205",
    t: 9,
    text: "An EM wave travels in free space with electric field $\\vec{E}=(15\\,\\vec{a}_y-5\\,\\vec{a}_z)\\cos(\\omega t-3y+5z)\\,\\mathrm{V/m}$. Find: (a) $\\omega$ and $\\lambda$; (b) the magnetic field component.",

    occurrences: [
      {
        year: "2073 Chaitra",
        type: "Regular",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBBICQ1MFws-206",
    t: 10,
    text: "A $50\\,\\Omega$ lossless transmission line is $30\\,\\mathrm{m}$ long and terminated with $Z_L=60+j40\\,\\Omega$. Operating frequency $20\\,\\mathrm{MHz}$, velocity $2.5\\times10^8\\,\\mathrm{m/s}$. Find: (i) Reflection coefficient; (ii) SWR; (iii) Input impedance.",

    occurrences: [
      {
        year: "2073 Chaitra",
        type: "Regular",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBFeHBsYWlu-207",
    t: 11,
    text: "Explain TE and TM modes. Consider a rectangular waveguide with $\\varepsilon_r=2.25$, $\\mu_r=1$, dimensions $a=1.07$, $b=0.43$. Find the cut-off frequency for $\\mathrm{TM}_{11}$ mode and dominant mode.",

    occurrences: [
      {
        year: "2073 Chaitra",
        type: "Regular",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MUBAQERlZmluZSBh-209",
    t: 1,
    text: "Define a vector field. A field vector $\\vec{A}=\\dfrac{1}{\\sqrt{x^2+y^2+z^2}}(x\\,\\vec{a}_x+y\\,\\vec{a}_y+z\\,\\vec{a}_z)$. Transform this vector in cylindrical coordinate system at point $(2,\\,30°,\\,6)$.",

    occurrences: [
      {
        year: "2073 Shrawan",
        type: "Back",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQEdpdmVuIGZs-210",
    t: 2,
    text: "Given flux density $\\vec{D}=\\dfrac{2\\cos\\theta}{r^3}\\,\\vec{a}_r+\\dfrac{\\sin\\theta}{r^3}\\,\\vec{a}_{\\theta}\\,\\mathrm{C/m^2}$, evaluate both sides of the divergence theorem for the region $1<r<2$, $0<\\theta<\\pi/2$, $0<\\phi<\\pi/2$.",

    occurrences: [
      {
        year: "2073 Shrawan",
        type: "Back",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-NEBAQERlZmluZSBl-211",
    t: 4,
    text: "Define electric dipole and polarization. The region $z<0$ has $\\varepsilon_{r1}=2.5$, the region $z>0$ has $\\varepsilon_{r2}=4$. Let $\\vec{E}_1=-30\\hat{a}_x+50\\hat{a}_y+70\\hat{a}_z\\,\\mathrm{V/m}$. Find: (a) $\\vec{E}_2$; (b) $\\vec{D}_2$; (c) polarization in region 2 $(\\vec{P}_2)$.",

    occurrences: [
      {
        year: "2073 Shrawan",
        type: "Back",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQFN0YXRlIHRo-212",
    t: 3,
    text: "State the Uniqueness theorem and prove it for Laplace's equation.",

    occurrences: [
      {
        year: "2073 Shrawan",
        type: "Back",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NEBAQEEgY3VycmVu-213",
    t: 4,
    text: "A current density in a certain region is given as $\\vec{J}=20\\sin\\theta\\cos\\phi\\,\\vec{a}_r+\\dfrac{1}{r}\\,\\vec{a}_{\\phi}\\,\\mathrm{A/m^2}$. Find: (i) the average value of $J_r$ over the surface $r=1$, $0<\\theta<\\pi/2$, $0<\\phi<\\pi/2$; (ii) $\\partial\\rho_v/\\partial t$.",

    occurrences: [
      {
        year: "2073 Shrawan",
        type: "Back",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-N0BAQFNob3cgdGhh-214",
    t: 7,
    text: "Show that $\\nabla\\times\\vec{E}=0$ for static electric field. The region $y<0$ is air and $y>0$ has $\\mu_r=10$. If $\\vec{H}=5\\vec{a}_x+6\\vec{a}_y+7\\vec{a}_z\\,\\mathrm{A/m}$ in region 1, find $\\vec{B}$ and $\\vec{H}$ in region 2.",

    occurrences: [
      {
        year: "2073 Shrawan",
        type: "Back",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-NEBAQEZpbmQgdGhl-215",
    t: 4,
    text: "Find the amplitude of the displacement current density in a metallic conductor at $60\\,\\mathrm{Hz}$, if $\\varepsilon=\\varepsilon_0$, $\\mu=\\mu_0$, $\\sigma=5.8\\times10^7\\,\\mathrm{S/m}$, and $\\vec{J}=\\sin(377t-117.1z)\\,a_x\\,\\mathrm{MA/m^2}$.",

    occurrences: [
      {
        year: "2073 Shrawan",
        type: "Back",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQEV4cGxhaW4g-216",
    t: 9,
    text: "Explain the phenomena when a plane wave is incident normally on the interface between two different media. Derive the expression for reflection and transmission coefficient.",

    occurrences: [
      {
        year: "2073 Shrawan",
        type: "Back",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQEEgdW5pZm9y-217",
    t: 9,
    text: "A uniform plane wave in a non-magnetic medium has $\\vec{E}=50\\cos(10^8t+2z)\\,\\hat{a}_y\\,\\mathrm{V/m}$. Find: (i) direction of propagation; (ii) phase constant $\\beta$, wavelength $\\lambda$, velocity $v_p$, relative permittivity $\\varepsilon_r$, intrinsic impedance $\\eta$; (iii) $\\vec{H}$.",

    occurrences: [
      {
        year: "2073 Shrawan",
        type: "Back",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBEZXRlcm1p-218",
    t: 10,
    text: "Determine the primary constants ($R$, $L$, $C$ and $G$) of a transmission line when measurements at $1\\,\\mathrm{kHz}$ gave: $Z_0=710\\angle-16°$, $\\alpha=0.01\\,\\mathrm{Np/m}$ and $\\beta=0.035\\,\\mathrm{rad/m}$.",

    occurrences: [
      {
        year: "2073 Shrawan",
        type: "Back",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBFeHBsYWlu-219",
    t: 11,
    text: "Explain the modes supported by a rectangular waveguide. Calculate the cut-off frequencies of the first four propagating modes for an air-filled copper waveguide with dimensions $a=2.5\\,\\mathrm{cm}$, $b=1.2\\,\\mathrm{cm}$.",

    occurrences: [
      {
        year: "2073 Shrawan",
        type: "Back",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MUBAQEV4cHJlc3Mg-221",
    t: 1,
    text: "Express the uniform vector field $\\vec{F}=5\\vec{a}_x$ in: (a) cylindrical components; (b) spherical components.",

    occurrences: [
      {
        year: "2072 Chaitra",
        type: "Regular",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQERlcml2ZSB0-222",
    t: 2,
    text: "Derive the expression for electric field intensity due to an infinitely long line charge with uniform charge density $\\rho_L$ using Gauss's law. A uniform line charge density of $20\\,\\mathrm{nC/m}$ is located at $y=3$ and $z=5$. Find $\\vec{E}$ at $P(5,6,1)$.",

    occurrences: [
      {
        year: "2072 Chaitra",
        type: "Regular",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-M0BAQERlcml2ZSBh-223",
    t: 3,
    text: "Derive an expression to calculate the potential due to a dipole in terms of the dipole moment $\\vec{p}$. A dipole for which $\\vec{p}=3\\vec{a}_x-5\\vec{a}_y+10\\vec{a}_z\\,\\mathrm{nC\\cdot m}$ is located at $(1,2,-4)$. Find $\\vec{E}$ at $P$.",

    occurrences: [
      {
        year: "2072 Chaitra",
        type: "Regular",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQEFzc3VtaW5n-224",
    t: 3,
    text: "Assuming $V$ in cylindrical coordinates is a function of $\\rho$ only, solve Laplace's equation and derive the capacitance of a co-axial capacitor of length $L$. Assume inner conductor of radius $a$ is at potential $V_0$ with respect to the outer conductor of radius $b$.",

    occurrences: [
      {
        year: "2072 Chaitra",
        type: "Regular",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NkBAQFN0YXRlIGFu-225",
    t: 6,
    text: "State and derive Stokes' theorem. Evaluate the closed line integral of $\\vec{H}$ from $P_1(5,4,1)$ to $P_2(5,6,1)$ to $P_3(0,6,1)$ to $P_4(0,4,1)$ to $P_1$ using straight line segments, if $\\vec{H}=0.1y^3\\,\\vec{a}_x+0.4x\\,\\vec{a}_z\\,\\mathrm{A/m}$.",

    occurrences: [
      {
        year: "2072 Chaitra",
        type: "Regular",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-N0BAQERlZmluZSBz-226",
    t: 7,
    text: "Define scalar magnetic potential and show that it satisfies Laplace's equation. Given $\\vec{A}=-(\\rho^2/4)\\,\\hat{a}_z\\,\\mathrm{Wb/m}$, calculate the total magnetic flux crossing the surface $\\phi=\\pi/2$, $1\\leq\\rho\\leq2\\,\\mathrm{m}$, $0\\leq z\\leq5\\,\\mathrm{m}$.",

    occurrences: [
      {
        year: "2072 Chaitra",
        type: "Regular",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQEhvdyBkb2Vz-227",
    t: 8,
    text: "How does $\\nabla\\times\\vec{H}=\\vec{J}$ conflict with the continuity equation in time-varying fields? How is this conflict rectified?",

    occurrences: [
      {
        year: "2072 Chaitra",
        type: "Regular",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQERlcml2ZSB0-228",
    t: 9,
    text: "Derive the expression for electric and magnetic fields for a uniform plane wave propagating in a perfect dielectric space.",

    occurrences: [
      {
        year: "2072 Chaitra",
        type: "Regular",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQEEgbG9zc2xl-229",
    t: 9,
    text: "A lossless dielectric material has $\\sigma=0$, $\\mu_r=1$, $\\varepsilon_r=4$. An electromagnetic wave has magnetic field $\\vec{H}=-0.1\\cos(\\omega t-z)\\,\\vec{a}_x+0.5\\cos(\\omega t-z)\\,\\vec{a}_y\\,\\mathrm{A/m}$. Find: (a) angular frequency $(\\omega)$; (b) wave impedance $(\\eta)$; (c) $\\vec{E}$.",

    occurrences: [
      {
        year: "2072 Chaitra",
        type: "Regular",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBDb25zaWRl-230",
    t: 10,
    text: "Consider a two-wire $40\\,\\Omega$ line $(Z_0=40\\,\\Omega)$ connecting a source of $80\\,\\mathrm{V}$, $400\\,\\mathrm{kHz}$ with series resistance $10\\,\\Omega$ to a load $Z_L=60\\,\\Omega$. The line is $75\\,\\mathrm{m}$ long and velocity is $2.5\\times10^8\\,\\mathrm{m/s}$. Find the voltage $V_{in,s}$ at the input end and $V_{L,s}$ at the output end.",

    occurrences: [
      {
        year: "2072 Chaitra",
        type: "Regular",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBXaHkgZG9l-231",
    t: 11,
    text: "Why does a hollow rectangular waveguide not support TEM mode? A rectangular air-filled waveguide has cross-section $45\\times90\\,\\mathrm{mm}$. Find the cut-off frequencies of the first four propagating modes.",

    occurrences: [
      {
        year: "2072 Chaitra",
        type: "Regular",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MUBAQFRyYW5zZm9y-233",
    t: 1,
    text: "Transform $\\vec{A}=10\\vec{a}_x-8\\vec{a}_y+6\\vec{a}_z$ at point $P(10,-8,6)$ to the cylindrical coordinate system.",

    occurrences: [
      {
        year: "2072 Kartik",
        type: "Back",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-M0BAQEEgbGluZSBj-234",
    t: 3,
    text: "A line charge of $8\\,\\mathrm{nC/m}$ is at $x=-1$, $y=2$; a point charge of $6\\,\\mathrm{mC}$ at $y=-4$; and a surface charge of $30\\,\\mathrm{pC/m^2}$ at $z=0$. If the potential at origin is $100\\,\\mathrm{V}$, find $V$ at $P(4,1,3)$.",

    occurrences: [
      {
        year: "2072 Kartik",
        type: "Back",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-NEBAQEV4cGxhaW4g-235",
    t: 4,
    text: "Explain the continuity equation. In a certain region $\\vec{J}=\\left(\\dfrac{0.1}{r}\\right)e^{-10^6t}\\,\\vec{a}_r\\,\\mathrm{A/m^2}$ in spherical coordinates. (a) How much current crosses surface $r=50\\,\\mathrm{cm}$ at $t=1\\,\\mu\\mathrm{S}$? (b) Find $\\rho_v(r,t)$ assuming $\\rho_v\\to0$ as $t\\to\\infty$.",

    occurrences: [
      {
        year: "2072 Kartik",
        type: "Back",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-N0BAQERpZmZlcmVu-237",
    t: 7,
    text: "Differentiate between scalar and vector magnetic potential. Derive an expression for the magnetic field intensity $\\vec{H}$ due to an infinite filament carrying direct current $I$ on the z-axis using Ampere's circuital law.",

    occurrences: [
      {
        year: "2072 Kartik",
        type: "Back",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-NkBAQFN0YXRlIGFu-238",
    t: 6,
    text: "State and prove Stokes' theorem. Given $\\vec{H}=10\\sin\\theta\\,\\vec{a}_r$ in free space. Find the current in $\\vec{a}_r$ direction having $r=3$, $0\\leq\\theta\\leq90°$, $0\\leq\\phi\\leq90°$.",

    occurrences: [
      {
        year: "2072 Kartik",
        type: "Back",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQFdpdGhpbiBh-239",
    t: 8,
    text: "Within a certain region, $\\varepsilon=10^{-11}\\,\\mathrm{F/m}$ and $\\mu=10^{-5}\\,\\mathrm{H/m}$. If $\\vec{B}_x=2\\times10^{-4}\\cos10^5t\\sin10^{-3}y\\,\\vec{a}_x\\,\\mathrm{T}$: (a) Use $\\nabla\\times\\vec{H}=\\varepsilon\\dfrac{\\partial\\vec{E}}{\\partial t}$ to find $\\vec{E}$; (b) Find the total magnetic flux passing through $x=0$, $0\\leq y\\leq40\\,\\mathrm{m}$, $0\\leq z\\leq2\\,\\mathrm{m}$ at $t=1\\,\\mu\\mathrm{S}$.",

    occurrences: [
      {
        year: "2072 Kartik",
        type: "Back",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQERlcml2ZSBh-240",
    t: 9,
    text: "Derive an expression for standing wave ratio of a uniform plane wave in terms of reflection coefficient. Find the reflection coefficient for the interface between air and fresh water $(\\varepsilon=81\\varepsilon_0,\\,\\sigma\\approx0)$ for normal incidence.",

    occurrences: [
      {
        year: "2072 Kartik",
        type: "Back",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQFRoZSBtYWdu-241",
    t: 9,
    text: "The magnetic field intensity $\\vec{H}(x,t)=10\\cos(10^8t+\\beta x)\\,\\vec{a}_y\\,\\mathrm{A/m}$ in free space. Find: (a) phase constant $(\\beta)$; (b) wavelength; (c) $|\\vec{E}(x,t)|$ at $P(0.1,0.2,0.3)$ at $t=1\\,\\mathrm{nS}$.",

    occurrences: [
      {
        year: "2072 Kartik",
        type: "Back",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBBICQzMDBc-242",
    t: 10,
    text: "A $300\\,\\Omega$ lossless transmission line is $0.25\\lambda$ long, terminated with $Z_L=500\\,\\Omega$. Generator $90\\angle0°\\,\\mathrm{V}$ in series with $100\\,\\Omega$. Find: (a) the load voltage; (b) voltage at the midpoint of the line.",

    occurrences: [
      {
        year: "2072 Kartik",
        type: "Back",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBEZXRlcm1p-243",
    t: 11,
    text: "Determine the cut-off frequency for an air-filled rectangular waveguide with $a=2.5\\,\\mathrm{cm}$ and $b=1.25\\,\\mathrm{cm}$ for $\\mathrm{TE}_{11}$ mode.",

    occurrences: [
      {
        year: "2072 Kartik",
        type: "Back",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MTJAQEBXcml0ZSBz-244",
    t: 12,
    text: "Write short notes on: (a) Loss tangent; (b) Antenna types and properties.",

    occurrences: [
      {
        year: "2072 Kartik",
        type: "Back",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MUBAQFRyYW5zZm9y-245",
    t: 1,
    text: "Transform the vector $4\\vec{a}_x-2\\vec{a}_y-4\\vec{a}_z$ into spherical coordinates at point $P(-2,-3,4)$.",

    occurrences: [
      {
        year: "2071 Chaitra",
        type: "Regular",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQFN0YXRlIGFu-246",
    t: 2,
    text: "State and write the mathematical equation of Gauss' Law. Using the same law, derive an expression for electric field intensity $\\vec{E}$ in between two co-axial cylindrical conductors (inner radius $a$, outer radius $b$, each infinite, with surface charge density $\\rho_s$ on outer surface of inner conductor).",

    occurrences: [
      {
        year: "2071 Chaitra",
        type: "Regular",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-M0BAQFN0YXRlIHRo-247",
    t: 3,
    text: "State the physical significance of potential gradient. Assuming $V$ in spherical coordinates is a function of $r$ only, solve the Laplacian equation and derive the capacitance of a spherical capacitor using the same solution of $V$.",

    occurrences: [
      {
        year: "2071 Chaitra",
        type: "Regular",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQFdpdGhpbiB0-248",
    t: 3,
    text: "Within the cylinder $\\rho=2$, $0<z<1$ the potential is given by $V=100+50\\rho+150\\rho\\sin\\phi\\,\\mathrm{V}$. Find: (a) electric field intensity $\\vec{E}$ at $P(1,\\,60°,\\,0.5)$ in free space; (b) potential gradient $dV/dN$; (c) volume charge density $\\rho_v$ at $P(1,\\,60°,\\,0.5)$ in free space.",

    occurrences: [
      {
        year: "2071 Chaitra",
        type: "Regular",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NkBAQFN0YXRlIHRo-249",
    t: 6,
    text: "State the physical significance of Curl. Evaluate both sides of Stokes' theorem for $\\vec{A}=6xy\\,\\vec{a}_x-3y^2\\,\\vec{a}_y\\,\\mathrm{A/m}$ and the rectangular path $2\\leq x\\leq5$, $-1\\leq y\\leq1$, $z=0$. Let positive direction of $\\overrightarrow{dS}$ be $\\vec{a}_z$.",

    occurrences: [
      {
        year: "2071 Chaitra",
        type: "Regular",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-N0BAQEV4cGxhaW4g-250",
    t: 7,
    text: "Explain the physical significance of $\\oint_S\\vec{B}\\cdot\\vec{ds}=0$. Given $\\vec{A}=\\rho^2/8\\,\\vec{a}_z\\,\\mathrm{Wb/m}$. Calculate the total magnetic flux crossing the surface $\\phi=\\pi/4$, $1\\leq\\rho\\leq3\\,\\mathrm{m}$, $0\\leq z\\leq5\\,\\mathrm{m}$.",

    occurrences: [
      {
        year: "2071 Chaitra",
        type: "Regular",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQEV4cGxhaW4g-251",
    t: 8,
    text: "Explain motional emf and transformer emf with necessary mathematical derivations. A straight conductor of $0.2\\,\\mathrm{m}$ lies along the x-axis. If $\\vec{B}=0.08\\,\\vec{a}_y\\,\\mathrm{T}$ and velocity $v=2.5\\sin10^3t\\,a_z\\,\\mathrm{m/s}$, calculate the induced emf.",

    occurrences: [
      {
        year: "2071 Chaitra",
        type: "Regular",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQERlZmluZSBU-252",
    t: 9,
    text: "Define TEM wave. Derive an expression for electric field for a uniform plane wave propagating in a perfect dielectric medium.",

    occurrences: [
      {
        year: "2071 Chaitra",
        type: "Regular",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQEEgdW5pZm9y-253",
    t: 9,
    text: "A uniform plane wave in free space at $12\\,\\mathrm{MHz}$: $\\vec{E}=200\\cos(\\omega t+120x+30°)\\,\\vec{a}_y\\,\\mathrm{V/m}$. Find: (a) $|E_{max}|$; (b) $\\vec{H}$ at $x=40\\,\\mathrm{mm}$ and $t=340\\,\\mathrm{ps}$.",

    occurrences: [
      {
        year: "2071 Chaitra",
        type: "Regular",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-MTBAQEBBIGxvc3Ns-254",
    t: 10,
    text: "A lossless transmission line with $Z_0=50\\,\\Omega$ has length $0.4\\lambda$. Operating frequency $300\\,\\mathrm{MHz}$, terminated with $Z_L=40+j30\\,\\Omega$. Find: (a) Reflection coefficient $(\\Gamma)$; (b) SWR; (c) Input impedance $(Z_{in})$.",

    occurrences: [
      {
        year: "2071 Chaitra",
        type: "Regular",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTFAQEBFeHBsYWlu-255",
    t: 11,
    text: "Explain Transverse Electric Mode and Transverse Magnetic Mode of a waveguide.",

    occurrences: [
      {
        year: "2071 Chaitra",
        type: "Regular",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MTJAQEBXcml0ZSBz-256",
    t: 12,
    text: "Write short notes on: (a) Skin depth; (b) Antenna and its types.",

    occurrences: [
      {
        year: "2071 Chaitra",
        type: "Regular",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MUBAQEV4cHJlc3Mg-257",
    t: 1,
    text: "Express the vector field $G=(x^2+y^2)^{-1}(x\\,a_x+y\\,a_y)$ in cylindrical components and cylindrical variables.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQEZpbmQgJFx2-258",
    t: 2,
    text: "Find $\\vec{D}$ at $(-3,4,2)$ given: point charge $12\\,\\mathrm{nC}$ at $P(2,0,6)$; uniform line charge density $3\\,\\mathrm{nC/m}$ at $x=-2$, $y=3$; uniform surface charge density $0.2\\,\\mathrm{nC/m^2}$ at $x=2$.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-M0BAQFR3byB1bmlm-259",
    t: 3,
    text: "Two uniform line charges, $8\\,\\mathrm{nC/m}$ each, are at $x=1$, $z=2$ and $x=-1$, $y=2$ in free space. If the potential at the origin is $100\\,\\mathrm{V}$, find $V$ at $P(4,1,3)$.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-M0BAQFN0YXRlIHRo-260",
    t: 3,
    text: "State the Uniqueness theorem and prove that the solution of Poisson's equation is unique.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-N0BAQFdyaXRlIHRo-261",
    t: 7,
    text: "Write the equation of the Vector Magnetic Potential in differential form. Using the same equation, derive the equation for magnetic field intensity at a point due to an infinite filament carrying uniformly distributed DC current $I$.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-NkBAQENhbGN1bGF0-262",
    t: 6,
    text: "Calculate the vector current density in cylindrical coordinates at $P_1(\\rho=1.5,\\,\\phi=90°,\\,z=0.5)$ if $\\mathbf{H}=\\dfrac{2}{\\rho}(\\cos0.2\\phi)\\,\\mathbf{a}_{\\rho}$.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q6a",
      },
    ],
  },
  {
    id: "q-NkBAQENhbGN1bGF0-263",
    t: 6,
    text: "Calculate the vector current density in spherical coordinates at $P_2(r=2,\\,\\theta=30°,\\,\\phi=20°)$ if $\\mathbf{H}=\\dfrac{1}{\\sin\\theta}\\,a_{\\theta}$.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q6b",
      },
    ],
  },
  {
    id: "q-NkBAQFN0YXRlIGFu-264",
    t: 6,
    text: "State and derive Stokes' theorem.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQFdoYXQgaXMg-265",
    t: 9,
    text: "What is intrinsic impedance? Derive an expression for the input intrinsic impedance using the concept of reflection of uniform plane waves.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-OUBAQFRoZSBlbGVj-266",
    t: 9,
    text: "The electric field amplitude of a uniform plane wave propagating in free space in $a_z$ direction is $250\\,\\mathrm{V/m}$. If $E=E_x\\,a_x$ and $\\omega=1.00\\,\\mathrm{Mrad/s}$, find: (a) frequency; (b) wavelength; (c) period; (d) amplitude of $H$.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-NEBAQEZpbmQgdGhl-267",
    t: 4,
    text: "Find the amplitude of the displacement current density inside a typical metallic conductor where $f=1\\,\\mathrm{kHz}$, conductivity $\\sigma=5\\times10^7\\,\\mathrm{S/m}$, $\\varepsilon_r=1$, and conduction current density $J=10^7\\sin(6283t-444z)\\,a_x\\,\\mathrm{A/m^2}$.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTBAQEBBICQ1MFws-268",
    t: 10,
    text: "A $50\\,\\Omega$ lossless line has length $0.4\\lambda$. Operating frequency $300\\,\\mathrm{MHz}$. Load $Z_L=40+j30\\,\\Omega$ at $z=0$. Thevenin source at $z=-l$: $12\\angle0°\\,\\mathrm{V}$ in series with $Z_{Th}=50+j0\\,\\Omega$. Find: (a) Reflection Coefficient $\\Gamma$; (b) VSWR; (c) Input Impedance $Z_{in}$.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MTFAQEBFeHBsYWlu-269",
    t: 11,
    text: "Explain why it is not possible to use waveguides at lower frequencies. Explain the TE and TM modes used in rectangular waveguides.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MTJAQEBHaXZlIHRo-270",
    t: 12,
    text: "Give the definition of an antenna. Explain the properties of any one type of antenna.",

    occurrences: [
      {
        year: "2071 Shawan",
        type: "Back",
        qno: "Q13",
      },
    ],
  },
  {
    id: "q-MUBAQFRyYW5zZm9y-271",
    t: 1,
    text: "Transform the Vector $\\vec{A}=y\\,\\vec{a}_x+x\\,\\vec{a}_y+z\\,\\vec{a}_z$ into cylindrical coordinates at point $P(2,\\,45°,\\,5)$.",

    occurrences: [
      {
        year: "2070 Chaitra",
        type: "Regular",
        qno: "Q1",
      },
    ],
  },
  {
    id: "q-MkBAQEFsb25nIHRo-272",
    t: 2,
    text: "Along the z-axis there is a uniform line of charge with $\\rho_L=4\\pi\\,\\mathrm{C/m}$ and in the $x=1$ plane there is a surface charge with $\\rho_s=20\\,\\mathrm{C/m^2}$. Find the Electric Flux Density at $(0.5,0,0)$.",

    occurrences: [
      {
        year: "2070 Chaitra",
        type: "Regular",
        qno: "Q2",
      },
    ],
  },
  {
    id: "q-M0BAQERlZmluZSBV-273",
    t: 3,
    text: "Define Uniqueness theorem. Assuming $V$ in cylindrical coordinates is a function of $\\rho$ only, solve the Laplacian equation by integration and derive the expression for the capacitance of the co-axial capacitor.",

    occurrences: [
      {
        year: "2070 Chaitra",
        type: "Regular",
        qno: "Q3",
      },
    ],
  },
  {
    id: "q-NEBAQERlZmluZSBF-274",
    t: 4,
    text: "Define Electric Dipole and Polarization. The region $y<0$ has $\\varepsilon_{r1}=3.2$, while $y>0$ has $\\varepsilon_{r2}=2$. Let $\\vec{D}_1=-30\\vec{a}_x+50\\vec{a}_y+70\\vec{a}_z\\,\\mathrm{nC/m^2}$. Find: (a) magnitude of flux density and $E$ in region 2; (b) polarization $P$ in regions 1 and 2.",

    occurrences: [
      {
        year: "2070 Chaitra",
        type: "Regular",
        qno: "Q4",
      },
    ],
  },
  {
    id: "q-NUBAQFN0YXRlIEFt-275",
    t: 5,
    text: "State Ampere's circuital law and Stokes' theorem. Derive an expression for magnetic field intensity $\\vec{H}$ due to an infinite current-carrying filament using Biot-Savart's Law.",

    occurrences: [
      {
        year: "2070 Chaitra",
        type: "Regular",
        qno: "Q5",
      },
    ],
  },
  {
    id: "q-NUBAQERpZmZlcmVu-276",
    t: 5,
    text: "Differentiate between scalar and vector magnetic potential. The magnetic field intensity in a certain region is $\\vec{H}=(2\\rho+z)\\vec{a}_{\\rho}+\\dfrac{2}{z}\\vec{a}_z\\,\\mathrm{A/m}$. Find the total current passing through surface $\\rho=2$, $\\pi/4<\\varphi<\\pi/2$, $3<z<5$, in the $\\vec{a}_{\\rho}$ direction.",

    occurrences: [
      {
        year: "2070 Chaitra",
        type: "Regular",
        qno: "Q6",
      },
    ],
  },
  {
    id: "q-OEBAQFN0YXRlIEZh-277",
    t: 8,
    text: "State Faraday's law and correct the equation $\\nabla\\times\\vec{E}=0$ for time-varying field. Also modify $\\nabla\\times\\vec{H}=\\vec{J}$ for time-varying field with necessary derivations.",

    occurrences: [
      {
        year: "2070 Chaitra",
        type: "Regular",
        qno: "Q7",
      },
    ],
  },
  {
    id: "q-OUBAQERlcml2ZSBh-278",
    t: 9,
    text: "Derive an expression for input intrinsic impedance using the concept of reflection of uniform plane waves.",

    occurrences: [
      {
        year: "2070 Chaitra",
        type: "Regular",
        qno: "Q8",
      },
    ],
  },
  {
    id: "q-NEBAQEZpbmQgdGhl-279",
    t: 4,
    text: "Find the amplitude of displacement current density inside a typical metallic conductor where $f=1\\,\\mathrm{kHz}$, $\\sigma=5\\times10^7\\,\\mathrm{S/m}$, $\\varepsilon_r=1$, and conduction current density $\\vec{J}=10^7\\sin(6283t-444z)\\,\\hat{a}_y\\,\\mathrm{A/m^2}$.",

    occurrences: [
      {
        year: "2070 Chaitra",
        type: "Regular",
        qno: "Q9",
      },
    ],
  },
  {
    id: "q-OEBAQFdyaXRlIGFs-280",
    t: 8,
    text: "Write all Maxwell equations for time-varying fields in both point form and integral form.",

    occurrences: [
      {
        year: "2070 Chaitra",
        type: "Regular",
        qno: "Q10",
      },
    ],
  },
  {
    id: "q-MTBAQEBBIGxvc3Ns-281",
    t: 10,
    text: "A lossless transmission line with $Z_0=50\\,\\Omega$, length $1.5\\,\\mathrm{m}$, connects a voltage source $V_g=60\\,\\mathrm{V}$ to a load $Z_L=(50+j50)\\,\\Omega$. Operating frequency $f=100\\,\\mathrm{MHz}$, generator impedance $Z_g=50\\,\\Omega$, wave speed equal to speed of light. Find the distance of the first voltage maximum from the load and the power delivered to the load.",

    occurrences: [
      {
        year: "2070 Chaitra",
        type: "Regular",
        qno: "Q11",
      },
    ],
  },
  {
    id: "q-MTBAQEBXaGF0IGFy-282",
    t: 10,
    text: "What are the techniques that can be taken to match the transmission line with a mismatched load? Explain any one.",

    occurrences: [
      {
        year: "2070 Chaitra",
        type: "Regular",
        qno: "Q12",
      },
    ],
  },
  {
    id: "q-MTFAQEBXcml0ZSBz-283",
    t: 11,
    text: "Write short notes on: (a) Modes in rectangular waveguide; (b) Antenna and its types.",

    occurrences: [
      {
        year: "2070 Chaitra",
        type: "Regular",
        qno: "Q13",
      },
    ],
  },
];

const Q: Question[] = z.array(questionSchema).parse(questionData);

export default Q;
