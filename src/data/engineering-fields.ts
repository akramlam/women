export interface FieldData {
  title: string;
  description: string;
  opportunities: string[];
  rankings: {
    school: string;
    rank: number;
    details?: string;
  }[];
  successStories: {
    name: string;
    role: string;
    company: string;
    achievement: string;
    image?: string;
  }[];
  stats: {
    employmentRate: string;
    averageSalary: string;
    femalePercentage: string;
  };
}

export const engineeringFields = [
  {
    title: "Génie Informatique",
    description: "Développement de logiciels, intelligence artificielle, et cybersécurité",
    icon: "💻",
    slug: "informatique"
  },
  {
    title: "Génie Civil",
    description: "Construction, infrastructure et développement urbain",
    icon: "🏗️",
    slug: "civil"
  },
  {
    title: "Génie Électrique",
    description: "Électronique, systèmes embarqués et énergies renouvelables",
    icon: "⚡",
    slug: "electrique"
  },
  {
    title: "Génie Mécanique",
    description: "Conception mécanique, automation et robotique",
    icon: "⚙️",
    slug: "mecanique"
  },
  {
    title: "Génie Chimique",
    description: "Procédés industriels, biotechnologie et environnement",
    icon: "🧪",
    slug: "chimique"
  },
  {
    title: "Génie Industriel",
    description: "Optimisation des processus, logistique et qualité",
    icon: "🏭",
    slug: "industriel"
  }
];

export const fieldsData: Record<string, FieldData> = {
  informatique: {
    title: "Génie Informatique",
    description: "Le génie informatique est l'un des domaines les plus dynamiques au Maroc, avec une forte demande en talents féminins dans les secteurs de l'IA, du développement logiciel et de la cybersécurité.",
    opportunities: [
      "Ingénieure en Intelligence Artificielle",
      "Architecte Cloud & DevOps",
      "Experte en Cybersécurité",
      "Développeuse Full Stack",
      "Data Scientist",
      "Cheffe de Projet Digital"
    ],
    rankings: [
      { 
        school: "EMI Rabat",
        rank: 1,
        details: "École Mohammadia d'Ingénieurs - Formation d'excellence en informatique"
      },
      { 
        school: "ENSIAS",
        rank: 2,
        details: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes"
      },
      { 
        school: "INPT",
        rank: 3,
        details: "Institut National des Postes et Télécommunications"
      }
    ],
    successStories: [
      {
        name: "Lamia Bennis",
        role: "Directrice de l'Innovation",
        company: "IBM Maroc",
        achievement: "Pionnière dans l'implémentation de solutions d'IA pour les entreprises marocaines"
      },
      {
        name: "Sofia Ammor",
        role: "Fondatrice & CEO",
        company: "TechWomen Morocco",
        achievement: "A créé le plus grand réseau de femmes dans la tech au Maroc"
      }
    ],
    stats: {
      employmentRate: "98%",
      averageSalary: "18000 DH",
      femalePercentage: "35%"
    }
  },
  civil: {
    title: "Génie Civil",
    description: "Le génie civil est un secteur en pleine expansion au Maroc, avec de nombreux projets d'infrastructure et de développement urbain offrant des opportunités uniques aux femmes ingénieures.",
    opportunities: [
      "Ingénieure Structures",
      "Cheffe de Projets Construction",
      "Experte en Développement Durable",
      "Ingénieure BIM",
      "Consultante en Génie Parasismique",
      "Directrice de Travaux"
    ],
    rankings: [
      { 
        school: "EMI Rabat",
        rank: 1,
        details: "Formation historique en génie civil"
      },
      { 
        school: "EHTP Casablanca",
        rank: 2,
        details: "École Hassania des Travaux Publics"
      },
      { 
        school: "ENSEM",
        rank: 3,
        details: "École Nationale Supérieure d'Électricité et de Mécanique"
      }
    ],
    successStories: [
      {
        name: "Nadia Laraki",
        role: "Directrice Générale",
        company: "ANP",
        achievement: "Dirige l'Agence Nationale des Ports et supervise les plus grands projets portuaires du Maroc"
      }
    ],
    stats: {
      employmentRate: "95%",
      averageSalary: "15000 DH",
      femalePercentage: "40%"
    }
  }
  // Add other fields similarly...
}; 