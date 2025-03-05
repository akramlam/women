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
  careers: Record<string, CareerPath>;
}

export interface RoadmapStep {
  title: string;
  description: string;
  duration: string;
  subjects: string[];
  skills: string[];
  certifications?: string[];
}

export interface CareerPath {
  title: string;
  description: string;
  roadmap: RoadmapStep[];
  salary: {
    entry: string;
    mid: string;
    senior: string;
  };
  requirements: string[];
  externalResources?: {
    roadmaps: {
      title: string;
      url: string;
    }[];
  };
  podcasts?: {
    title: string;
    description: string;
    duration: string;
    url: string;
    host: string;
    topics: string[];
  }[];
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
  },
  {
    title: "Génie Energétique",
    description: "Production et distribution d'énergie, énergies renouvelables et économies d'énergie",
    icon: "🔋",
    slug: "energetique"
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
    },
    careers: {
      "ingenieure-en-intelligence-artificielle": {
        title: "Ingénieure en Intelligence Artificielle",
        description: "Spécialiste dans la conception et le développement de systèmes d'intelligence artificielle et d'apprentissage automatique.",
        roadmap: [
          {
            title: "Formation Fondamentale",
            description: "Première année de tronc commun en informatique",
            duration: "1 an",
            subjects: [
              "Mathématiques pour l'informatique",
              "Algorithmique",
              "Programmation",
              "Architecture des ordinateurs",
              "Systèmes d'exploitation"
            ],
            skills: [
              "Programmation de base",
              "Logique algorithmique",
              "Résolution de problèmes"
            ]
          },
          {
            title: "Spécialisation en IA",
            description: "Introduction aux concepts fondamentaux de l'IA",
            duration: "1 an",
            subjects: [
              "Apprentissage automatique",
              "Statistiques avancées",
              "Traitement du langage naturel",
              "Vision par ordinateur"
            ],
            skills: [
              "Python pour la data science",
              "Manipulation de données",
              "Modèles de base en ML"
            ],
            certifications: ["TensorFlow Developer Certificate"]
          },
          {
            title: "Expertise et Projets",
            description: "Approfondissement et application pratique",
            duration: "1 an",
            subjects: [
              "Deep Learning",
              "Réseaux de neurones",
              "IA éthique",
              "Projets industriels"
            ],
            skills: [
              "Déploiement de modèles",
              "Optimisation d'algorithmes",
              "Résolution de problèmes complexes"
            ],
            certifications: ["AWS Machine Learning Specialty"]
          }
        ],
        salary: {
          entry: "12000-18000 DH",
          mid: "20000-30000 DH",
          senior: "35000-50000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en informatique",
          "Maîtrise des langages Python, R",
          "Connaissance des frameworks d'IA (TensorFlow, PyTorch)",
          "Solides bases en mathématiques et statistiques"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "AI and Data Scientist Roadmap",
              url: "https://roadmap.sh/ai-data-scientist"
            },
            {
              title: "Python Roadmap",
              url: "https://roadmap.sh/python"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "architecte-cloud-devops": {
        title: "Architecte Cloud & DevOps",
        description: "Experte en conception et implémentation d'infrastructures cloud et en pratiques DevOps.",
        roadmap: [
          {
            title: "Formation Fondamentale",
            description: "Bases de l'informatique et des systèmes",
            duration: "1 an",
            subjects: [
              "Systèmes d'exploitation",
              "Réseaux informatiques",
              "Programmation",
              "Bases de données",
              "Sécurité informatique"
            ],
            skills: [
              "Linux/Unix",
              "Scripting",
              "Virtualisation"
            ]
          },
          {
            title: "Spécialisation Cloud",
            description: "Maîtrise des technologies cloud",
            duration: "1 an",
            subjects: [
              "Architecture cloud",
              "Conteneurisation",
              "Orchestration",
              "Infrastructure as Code",
              "CI/CD"
            ],
            skills: [
              "Docker",
              "Kubernetes",
              "Terraform",
              "AWS/Azure/GCP"
            ],
            certifications: ["AWS Certified Solutions Architect"]
          },
          {
            title: "Expertise DevOps",
            description: "Intégration et déploiement continus",
            duration: "1 an",
            subjects: [
              "Automatisation",
              "Monitoring",
              "SRE (Site Reliability Engineering)",
              "Gestion de configuration"
            ],
            skills: [
              "Jenkins/GitLab CI",
              "Prometheus/Grafana",
              "Ansible/Chef/Puppet",
              "Gestion d'incidents"
            ],
            certifications: ["Certified Kubernetes Administrator"]
          }
        ],
        salary: {
          entry: "15000-20000 DH",
          mid: "25000-35000 DH",
          senior: "40000-60000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en informatique",
          "Expérience avec les plateformes cloud (AWS, Azure, GCP)",
          "Maîtrise des outils DevOps",
          "Connaissance des conteneurs et de l'orchestration"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "DevOps Roadmap",
              url: "https://roadmap.sh/devops"
            },
            {
              title: "System Design",
              url: "https://roadmap.sh/system-design"
            },
            {
              title: "Docker Roadmap",
              url: "https://roadmap.sh/docker"
            },
            {
              title: "Kubernetes Roadmap",
              url: "https://roadmap.sh/kubernetes"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "experte-en-cybersecurite": {
        title: "Experte en Cybersécurité",
        description: "Spécialiste dans la protection des systèmes informatiques et la gestion des risques de sécurité.",
        roadmap: [
          {
            title: "Formation Fondamentale",
            description: "Bases de la sécurité informatique",
            duration: "1 an",
            subjects: [
              "Réseaux et protocoles",
              "Systèmes d'exploitation",
              "Cryptographie",
              "Programmation sécurisée"
            ],
            skills: [
              "Analyse de vulnérabilités",
              "Sécurité réseau",
              "Bases de la cryptographie"
            ]
          },
          {
            title: "Spécialisation Sécurité",
            description: "Techniques avancées de cybersécurité",
            duration: "1 an",
            subjects: [
              "Sécurité offensive",
              "Tests d'intrusion",
              "Forensics",
              "Sécurité cloud"
            ],
            skills: [
              "Ethical hacking",
              "Analyse de malwares",
              "SIEM",
              "Gestion des incidents"
            ],
            certifications: ["CompTIA Security+", "CEH (Certified Ethical Hacker)"]
          },
          {
            title: "Expertise et Gouvernance",
            description: "Gestion stratégique de la sécurité",
            duration: "1 an",
            subjects: [
              "Gouvernance de la sécurité",
              "Conformité et normes",
              "Gestion des risques",
              "Architecture de sécurité"
            ],
            skills: [
              "Élaboration de politiques de sécurité",
              "Audit de sécurité",
              "Réponse aux incidents",
              "Leadership en sécurité"
            ],
            certifications: ["CISSP", "ISO 27001 Lead Implementer"]
          }
        ],
        salary: {
          entry: "14000-20000 DH",
          mid: "25000-35000 DH",
          senior: "40000-55000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en informatique",
          "Certifications en sécurité",
          "Connaissance approfondie des menaces et vulnérabilités",
          "Veille technologique constante"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "Cyber Security Roadmap",
              url: "https://roadmap.sh/cyber-security"
            },
            {
              title: "Computer Science",
              url: "https://roadmap.sh/computer-science"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "developpeuse-full-stack": {
        title: "Développeuse Full Stack",
        description: "Experte en développement web capable de travailler sur toutes les couches d'une application.",
        roadmap: [
          {
            title: "Formation Fondamentale",
            description: "Bases du développement web",
            duration: "1 an",
            subjects: [
              "Algorithmes et structures de données",
              "HTML/CSS",
              "JavaScript",
              "Bases de données relationnelles",
              "Principes de conception"
            ],
            skills: [
              "Développement frontend de base",
              "Requêtes SQL",
              "Logique de programmation"
            ]
          },
          {
            title: "Spécialisation Full Stack",
            description: "Maîtrise des technologies frontend et backend",
            duration: "1 an",
            subjects: [
              "Frameworks frontend (React, Vue, Angular)",
              "Développement backend (Node.js, Python, Java)",
              "API RESTful",
              "Bases de données NoSQL",
              "Tests et déploiement"
            ],
            skills: [
              "Développement d'applications SPA",
              "Création d'API",
              "Gestion de l'état",
              "Intégration continue"
            ],
            certifications: ["AWS Developer Associate"]
          },
          {
            title: "Expertise Avancée",
            description: "Technologies avancées et architecture",
            duration: "1 an",
            subjects: [
              "Architecture microservices",
              "GraphQL",
              "Performance et optimisation",
              "Sécurité des applications",
              "DevOps pour développeurs"
            ],
            skills: [
              "Conception d'architectures scalables",
              "Optimisation des performances",
              "Déploiement cloud",
              "Sécurisation des applications"
            ],
            certifications: ["Professional Scrum Developer"]
          }
        ],
        salary: {
          entry: "10000-15000 DH",
          mid: "18000-28000 DH",
          senior: "30000-45000 DH"
        },
        requirements: [
          "Diplôme en informatique ou formation équivalente",
          "Maîtrise des technologies frontend et backend",
          "Expérience en développement d'applications web",
          "Connaissance des bonnes pratiques de développement"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "React Roadmap",
              url: "https://roadmap.sh/react"
            },
            {
              title: "Node.js Roadmap",
              url: "https://roadmap.sh/nodejs"
            },
            {
              title: "Python Roadmap",
              url: "https://roadmap.sh/python"
            },
            {
              title: "Java Roadmap",
              url: "https://roadmap.sh/java"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "data-scientist": {
        title: "Data Scientist",
        description: "Experte en analyse de données et en modélisation statistique pour extraire des insights stratégiques.",
        roadmap: [
          {
            title: "Formation Fondamentale",
            description: "Bases en mathématiques et programmation",
            duration: "1 an",
            subjects: [
              "Statistiques et probabilités",
              "Algèbre linéaire",
              "Python pour la data science",
              "SQL et bases de données",
              "Visualisation de données"
            ],
            skills: [
              "Programmation Python",
              "Analyse statistique",
              "Manipulation de données"
            ]
          },
          {
            title: "Spécialisation Data Science",
            description: "Techniques avancées d'analyse de données",
            duration: "1 an",
            subjects: [
              "Machine Learning",
              "Deep Learning",
              "Big Data Analytics",
              "Data Engineering",
              "Cloud Computing"
            ],
            skills: [
              "Modélisation prédictive",
              "Feature engineering",
              "Pipeline de données",
              "Déploiement de modèles"
            ],
            certifications: ["AWS Machine Learning Specialty"]
          },
          {
            title: "Expertise Métier",
            description: "Application business et industrialisation",
            duration: "1 an",
            subjects: [
              "MLOps",
              "Business Intelligence",
              "Optimisation des performances",
              "Éthique et IA responsable"
            ],
            skills: [
              "Industrialisation de modèles",
              "Communication des résultats",
              "Gestion de projets data"
            ]
          }
        ],
        salary: {
          entry: "12000-16000 DH",
          mid: "20000-30000 DH",
          senior: "35000-50000 DH"
        },
        requirements: [
          "Master en Data Science, Statistiques ou domaine connexe",
          "Maîtrise de Python et des bibliothèques de data science",
          "Expérience en ML/DL et statistiques avancées",
          "Capacité à communiquer des insights techniques"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "AI and Data Scientist Roadmap",
              url: "https://roadmap.sh/ai-data-scientist"
            },
            {
              title: "Python Roadmap",
              url: "https://roadmap.sh/python"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "cheffe-de-projet-digital": {
        title: "Cheffe de Projet Digital",
        description: "Experte en gestion de projets numériques et transformation digitale.",
        roadmap: [
          {
            title: "Formation de Base",
            description: "Fondamentaux de la gestion de projet",
            duration: "1 an",
            subjects: [
              "Méthodologies Agile",
              "Gestion de projet IT",
              "Communication professionnelle",
              "Bases techniques du digital",
              "Business Analysis"
            ],
            skills: [
              "Planification de projet",
              "Animation d'équipe",
              "Analyse des besoins"
            ]
          },
          {
            title: "Spécialisation Digital",
            description: "Expertise en transformation numérique",
            duration: "1 an",
            subjects: [
              "Transformation digitale",
              "UX/UI Design",
              "Marketing digital",
              "Technologies cloud",
              "Cybersécurité"
            ],
            skills: [
              "Stratégie digitale",
              "Gestion du changement",
              "Coordination technique"
            ],
            certifications: ["PMP", "PRINCE2 Agile"]
          },
          {
            title: "Leadership",
            description: "Développement des compétences managériales",
            duration: "1 an",
            subjects: [
              "Leadership d'équipe",
              "Gestion budgétaire",
              "Négociation",
              "Innovation management"
            ],
            skills: [
              "Direction de programme",
              "Gestion des stakeholders",
              "Pilotage stratégique"
            ]
          }
        ],
        salary: {
          entry: "15000-20000 DH",
          mid: "25000-35000 DH",
          senior: "40000-60000 DH"
        },
        requirements: [
          "Formation en gestion de projet ou informatique",
          "Certification en gestion de projet (PMP, PRINCE2)",
          "Expérience en transformation digitale",
          "Excellentes compétences en communication"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "Engineering Manager Roadmap",
              url: "https://roadmap.sh/engineering-manager"
            },
            {
              title: "Product Manager Roadmap",
              url: "https://roadmap.sh/product-manager"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      }
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
    },
    careers: {
      "ingenieure-structures": {
        title: "Ingénieure Structures",
        description: "Spécialiste dans la conception et l'analyse des structures de bâtiments et d'ouvrages d'art.",
        roadmap: [
          {
            title: "Formation Fondamentale",
            description: "Première année de tronc commun en génie civil",
            duration: "1 an",
            subjects: [
              "Mathématiques avancées",
              "Physique",
              "Mécanique des solides",
              "Chimie des matériaux",
              "Dessin technique"
            ],
            skills: [
              "Calcul scientifique",
              "Analyse vectorielle",
              "Base de la statique"
            ]
          },
          {
            title: "Spécialisation Structures",
            description: "Approfondissement en conception structurelle",
            duration: "1 an",
            subjects: [
              "Résistance des matériaux",
              "Béton armé",
              "Structures métalliques",
              "Géotechnique",
              "Modélisation numérique"
            ],
            skills: [
              "Calcul de structures",
              "Logiciels de modélisation",
              "Normes de construction"
            ],
            certifications: ["AutoCAD Certification", "Robot Structural Analysis"]
          },
          {
            title: "Expertise Technique",
            description: "Maîtrise des techniques avancées",
            duration: "1 an",
            subjects: [
              "Dynamique des structures",
              "Construction parasismique",
              "Ponts et ouvrages d'art",
              "BIM pour structures"
            ],
            skills: [
              "Analyse structurelle avancée",
              "Conception parasismique",
              "Gestion de projets structurels"
            ]
          }
        ],
        salary: {
          entry: "10000-15000 DH",
          mid: "18000-28000 DH",
          senior: "30000-45000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en génie civil",
          "Maîtrise des logiciels de calcul structural",
          "Connaissance des normes de construction",
          "Expérience en conception structurelle"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "System Design",
              url: "https://roadmap.sh/system-design"
            },
            {
              title: "Computer Science",
              url: "https://roadmap.sh/computer-science"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "cheffe-de-projets-construction": {
        title: "Cheffe de Projets Construction",
        description: "Experte en gestion et coordination de projets de construction d'envergure.",
        roadmap: [
          {
            title: "Formation de Base",
            description: "Fondamentaux du génie civil",
            duration: "1 an",
            subjects: [
              "Gestion de projet",
              "Planification",
              "Estimation des coûts",
              "Sécurité de chantier",
              "Droit de la construction"
            ],
            skills: [
              "Organisation de chantier",
              "Coordination d'équipes",
              "Budgétisation"
            ]
          },
          {
            title: "Spécialisation Projet",
            description: "Maîtrise de la gestion de projet construction",
            duration: "1 an",
            subjects: [
              "Management de la construction",
              "BIM Management",
              "Lean Construction",
              "Gestion des risques",
              "Approvisionnement"
            ],
            skills: [
              "Gestion de planning",
              "Management d'équipe",
              "Suivi financier"
            ],
            certifications: ["PMP", "PRINCE2"]
          },
          {
            title: "Leadership Construction",
            description: "Développement des compétences de direction",
            duration: "1 an",
            subjects: [
              "Direction de grands projets",
              "Stratégie construction",
              "Développement durable",
              "Innovation construction"
            ],
            skills: [
              "Leadership de projet",
              "Négociation",
              "Vision stratégique"
            ]
          }
        ],
        salary: {
          entry: "15000-20000 DH",
          mid: "25000-35000 DH",
          senior: "40000-60000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en génie civil",
          "Certification en gestion de projet",
          "Expérience en gestion de chantier",
          "Excellentes compétences managériales"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "Engineering Manager Roadmap",
              url: "https://roadmap.sh/engineering-manager"
            },
            {
              title: "Product Manager Roadmap",
              url: "https://roadmap.sh/product-manager"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "experte-en-developpement-durable": {
        title: "Experte en Développement Durable",
        description: "Spécialiste en conception et réalisation de projets de construction écologiques et durables.",
        roadmap: [
          {
            title: "Formation Initiale",
            description: "Bases du génie civil durable",
            duration: "1 an",
            subjects: [
              "Écologie industrielle",
              "Matériaux durables",
              "Efficacité énergétique",
              "Gestion environnementale",
              "Réglementation environnementale"
            ],
            skills: [
              "Analyse environnementale",
              "Évaluation d'impact",
              "Certification environnementale"
            ]
          },
          {
            title: "Spécialisation Durable",
            description: "Expertise en construction durable",
            duration: "1 an",
            subjects: [
              "Construction verte",
              "Énergies renouvelables",
              "Gestion des déchets",
              "Économie circulaire",
              "Smart Buildings"
            ],
            skills: [
              "Conception bioclimatique",
              "Audit énergétique",
              "Certification LEED/HQE"
            ],
            certifications: ["LEED AP", "BREEAM Assessor"]
          },
          {
            title: "Innovation Durable",
            description: "Leadership en construction durable",
            duration: "1 an",
            subjects: [
              "Innovation durable",
              "Ville intelligente",
              "Résilience urbaine",
              "Économie verte"
            ],
            skills: [
              "Stratégie durable",
              "Management environnemental",
              "Communication RSE"
            ]
          }
        ],
        salary: {
          entry: "12000-18000 DH",
          mid: "20000-30000 DH",
          senior: "35000-50000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en génie civil",
          "Spécialisation en développement durable",
          "Connaissance des certifications environnementales",
          "Expérience en projets durables"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "System Design",
              url: "https://roadmap.sh/system-design"
            },
            {
              title: "DevOps Roadmap",
              url: "https://roadmap.sh/devops"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      }
    }
  },
  electrique: {
    title: "Génie Électrique",
    description: "Électronique, systèmes embarqués et énergies renouvelables",
    opportunities: [
      "Ingénieure en Systèmes Embarqués",
      "Experte en Énergies Renouvelables",
      "Ingénieure en Électronique de Puissance"
    ],
    rankings: [
      { 
        school: "EMI Rabat",
        rank: 1,
        details: "École Mohammadia d'Ingénieurs - Excellence en génie électrique"
      },
      { 
        school: "ENSEM",
        rank: 2,
        details: "École Nationale Supérieure d'Électricité et de Mécanique"
      },
      { 
        school: "ENSA",
        rank: 3,
        details: "École Nationale des Sciences Appliquées"
      }
    ],
    successStories: [
      {
        name: "Fatima Zahra El Alami",
        role: "Directrice Technique",
        company: "Schneider Electric Maroc",
        achievement: "A dirigé l'implémentation de solutions smart grid dans plusieurs villes marocaines"
      }
    ],
    stats: {
      employmentRate: "96%",
      averageSalary: "17000 DH",
      femalePercentage: "30%"
    },
    careers: {
      "ingenieure-en-systemes-embarques": {
        title: "Ingénieure en Systèmes Embarqués",
        description: "Experte en conception et développement de systèmes électroniques embarqués.",
        roadmap: [
          {
            title: "Formation Fondamentale",
            description: "Bases de l'électronique et programmation",
            duration: "1 an",
            subjects: [
              "Électronique numérique",
              "Microcontrôleurs",
              "Programmation C/C++",
              "Architecture des processeurs",
              "Systèmes temps réel"
            ],
            skills: [
              "Programmation bas niveau",
              "Design électronique",
              "Debug matériel"
            ]
          },
          {
            title: "Spécialisation Embarquée",
            description: "Expertise en systèmes embarqués",
            duration: "1 an",
            subjects: [
              "RTOS",
              "IoT",
              "Protocoles de communication",
              "FPGA",
              "Sécurité embarquée"
            ],
            skills: [
              "Développement RTOS",
              "Design FPGA",
              "Optimisation ressources"
            ],
            certifications: ["ARM Accredited Engineer", "RTOS Certification"]
          },
          {
            title: "Expertise Avancée",
            description: "Applications industrielles et innovation",
            duration: "1 an",
            subjects: [
              "Intelligence artificielle embarquée",
              "Systèmes critiques",
              "Certification de systèmes",
              "Automotive/Aéronautique"
            ],
            skills: [
              "Architecture système",
              "Validation & Test",
              "Gestion de projets embarqués"
            ]
          }
        ],
        salary: {
          entry: "12000-16000 DH",
          mid: "20000-30000 DH",
          senior: "35000-50000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en électronique",
          "Maîtrise des microcontrôleurs et RTOS",
          "Expérience en C/C++ embarqué",
          "Connaissance des normes de sécurité"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "Computer Science",
              url: "https://roadmap.sh/computer-science"
            },
            {
              title: "C++ Roadmap",
              url: "https://roadmap.sh/cpp"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "experte-en-energies-renouvelables": {
        title: "Experte en Énergies Renouvelables",
        description: "Spécialiste en conception et déploiement de solutions d'énergie renouvelable.",
        roadmap: [
          {
            title: "Formation de Base",
            description: "Fondamentaux des énergies renouvelables",
            duration: "1 an",
            subjects: [
              "Physique de l'énergie",
              "Électrotechnique",
              "Conversion d'énergie",
              "Réseaux électriques",
              "Développement durable"
            ],
            skills: [
              "Analyse de systèmes énergétiques",
              "Dimensionnement installations",
              "Étude d'impact"
            ]
          },
          {
            title: "Spécialisation EnR",
            description: "Expertise en technologies renouvelables",
            duration: "1 an",
            subjects: [
              "Systèmes photovoltaïques",
              "Énergie éolienne",
              "Smart grids",
              "Stockage d'énergie",
              "Efficacité énergétique"
            ],
            skills: [
              "Conception de centrales EnR",
              "Gestion de réseaux intelligents",
              "Optimisation énergétique"
            ],
            certifications: ["PV Installation Professional", "Wind Energy Expert"]
          },
          {
            title: "Management de Projets EnR",
            description: "Gestion de projets d'envergure",
            duration: "1 an",
            subjects: [
              "Gestion de projets EnR",
              "Réglementation énergétique",
              "Analyse financière",
              "Innovation énergétique"
            ],
            skills: [
              "Direction de projets EnR",
              "Analyse technico-économique",
              "Conseil stratégique"
            ]
          }
        ],
        salary: {
          entry: "14000-18000 DH",
          mid: "22000-32000 DH",
          senior: "35000-55000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en génie électrique",
          "Expertise en technologies renouvelables",
          "Expérience en gestion de projets EnR",
          "Connaissance des normes du secteur"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "System Design",
              url: "https://roadmap.sh/system-design"
            },
            {
              title: "Engineering Manager",
              url: "https://roadmap.sh/engineering-manager"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      }
    }
  },
  chimique: {
    title: "Génie Chimique",
    description: "Procédés industriels, biotechnologie et environnement",
    opportunities: [
      "Ingénieure de Procédés",
      "Experte en Biotechnologie",
      "Ingénieure Environnement"
    ],
    rankings: [
      { 
        school: "EMI Rabat",
        rank: 1,
        details: "École Mohammadia d'Ingénieurs - Excellence en génie des procédés"
      },
      { 
        school: "ENSIAC",
        rank: 2,
        details: "École Nationale Supérieure des Industries Agricoles et Chimiques"
      },
      { 
        school: "FST Mohammedia",
        rank: 3,
        details: "Faculté des Sciences et Techniques - Spécialisation procédés"
      }
    ],
    successStories: [
      {
        name: "Nadia Fathi",
        role: "Directrice Innovation",
        company: "OCP Group",
        achievement: "A développé des procédés innovants de traitement des phosphates"
      }
    ],
    stats: {
      employmentRate: "92%",
      averageSalary: "15000 DH",
      femalePercentage: "45%"
    },
    careers: {
      "ingenieure-de-procedes": {
        title: "Ingénieure de Procédés",
        description: "Experte en conception et optimisation des procédés chimiques industriels.",
        roadmap: [
          {
            title: "Formation Fondamentale",
            description: "Bases du génie des procédés",
            duration: "1 an",
            subjects: [
              "Thermodynamique",
              "Cinétique chimique",
              "Transfert de matière",
              "Mécanique des fluides",
              "Bilans de matière et d'énergie"
            ],
            skills: [
              "Calcul de procédés",
              "Simulation de base",
              "Analyse de données"
            ]
          },
          {
            title: "Spécialisation Procédés",
            description: "Expertise en ingénierie des procédés",
            duration: "1 an",
            subjects: [
              "Opérations unitaires",
              "Contrôle de procédés",
              "Simulation numérique",
              "Sécurité des procédés",
              "Optimisation"
            ],
            skills: [
              "Aspen Plus/HYSYS",
              "Contrôle-commande",
              "Design de procédés"
            ],
            certifications: ["Six Sigma Green Belt", "Process Safety Management"]
          },
          {
            title: "Applications Industrielles",
            description: "Mise en œuvre et gestion",
            duration: "1 an",
            subjects: [
              "Scale-up industriel",
              "Gestion de production",
              "Qualité et normes",
              "Développement durable"
            ],
            skills: [
              "Management de projets",
              "Optimisation industrielle",
              "Analyse technico-économique"
            ]
          }
        ],
        salary: {
          entry: "13000-17000 DH",
          mid: "20000-30000 DH",
          senior: "35000-50000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en génie chimique",
          "Maîtrise des logiciels de simulation",
          "Expérience en procédés industriels",
          "Connaissance des normes de sécurité"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "System Design",
              url: "https://roadmap.sh/system-design"
            },
            {
              title: "DevOps Roadmap",
              url: "https://roadmap.sh/devops"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "experte-en-biotechnologie": {
        title: "Experte en Biotechnologie",
        description: "Spécialiste en développement et optimisation de procédés biotechnologiques.",
        roadmap: [
          {
            title: "Formation Fondamentale",
            description: "Bases de la biotechnologie",
            duration: "1 an",
            subjects: [
              "Biochimie",
              "Microbiologie",
              "Génie génétique",
              "Biologie cellulaire",
              "Procédés biotechnologiques"
            ],
            skills: [
              "Techniques de laboratoire",
              "Analyse biologique",
              "Fermentation"
            ]
          },
          {
            title: "Spécialisation Biotech",
            description: "Expertise en biotechnologie industrielle",
            duration: "1 an",
            subjects: [
              "Bioprocédés",
              "Bioréacteurs",
              "Purification biologique",
              "Bioinformatique",
              "Scale-up biotechnologique"
            ],
            skills: [
              "Design de bioréacteurs",
              "Optimisation de cultures",
              "Analyse de données biologiques"
            ],
            certifications: ["Bioprocess Professional", "GMP Certification"]
          },
          {
            title: "Innovation Biotechnologique",
            description: "Applications avancées et R&D",
            duration: "1 an",
            subjects: [
              "R&D biotechnologique",
              "Biotechnologie verte",
              "Réglementation biotech",
              "Innovation durable"
            ],
            skills: [
              "Développement de procédés",
              "Gestion de projets biotech",
              "Validation de procédés"
            ]
          }
        ],
        salary: {
          entry: "14000-18000 DH",
          mid: "22000-32000 DH",
          senior: "35000-55000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en biotechnologie",
          "Expérience en laboratoire",
          "Connaissance des BPF/GMP",
          "Maîtrise des techniques analytiques"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "Computer Science",
              url: "https://roadmap.sh/computer-science"
            },
            {
              title: "Python Roadmap",
              url: "https://roadmap.sh/python"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "ingenieure-environnement": {
        title: "Ingénieure Environnement",
        description: "Experte en gestion environnementale et développement de solutions durables.",
        roadmap: [
          {
            title: "Formation de Base",
            description: "Fondamentaux de l'ingénierie environnementale",
            duration: "1 an",
            subjects: [
              "Chimie environnementale",
              "Traitement des eaux",
              "Gestion des déchets",
              "Pollution atmosphérique",
              "Écologie industrielle"
            ],
            skills: [
              "Analyse environnementale",
              "Techniques de traitement",
              "Évaluation d'impact"
            ]
          },
          {
            title: "Spécialisation Environnement",
            description: "Expertise en solutions environnementales",
            duration: "1 an",
            subjects: [
              "Technologies propres",
              "Énergies renouvelables",
              "Économie circulaire",
              "Réglementation environnementale",
              "Management environnemental"
            ],
            skills: [
              "Audit environnemental",
              "Gestion de projets verts",
              "ISO 14001"
            ],
            certifications: ["Environmental Management Systems", "ISO 14001 Lead Auditor"]
          },
          {
            title: "Leadership Environnemental",
            description: "Gestion stratégique environnementale",
            duration: "1 an",
            subjects: [
              "RSE",
              "Innovation durable",
              "Stratégie environnementale",
              "Communication environnementale"
            ],
            skills: [
              "Direction de projets",
              "Conseil stratégique",
              "Reporting environnemental"
            ]
          }
        ],
        salary: {
          entry: "13000-17000 DH",
          mid: "20000-30000 DH",
          senior: "35000-50000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en génie chimique/environnement",
          "Maîtrise des normes environnementales",
          "Expérience en gestion de projets environnementaux",
          "Connaissance des certifications ISO"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "System Design",
              url: "https://roadmap.sh/system-design"
            },
            {
              title: "DevOps Roadmap",
              url: "https://roadmap.sh/devops"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      }
    }
  },
  industriel: {
    title: "Génie Industriel",
    description: "Optimisation des processus, logistique et qualité",
    opportunities: [
      "Ingénieure en Optimisation de Production",
      "Experte en Lean Manufacturing",
      "Responsable Qualité et Amélioration Continue"
    ],
    rankings: [
      { 
        school: "EMI Rabat",
        rank: 1,
        details: "École Mohammadia d'Ingénieurs - Excellence en génie industriel"
      },
      { 
        school: "ENSEM",
        rank: 2,
        details: "École Nationale Supérieure d'Électricité et de Mécanique"
      },
      { 
        school: "ENSA Agadir",
        rank: 3,
        details: "École Nationale des Sciences Appliquées - Spécialisation industrielle"
      }
    ],
    successStories: [
      {
        name: "Salma Bennani",
        role: "Directrice des Opérations",
        company: "Renault Maroc",
        achievement: "A implémenté le système Lean Manufacturing augmentant la productivité de 40%"
      }
    ],
    stats: {
      employmentRate: "95%",
      averageSalary: "16500 DH",
      femalePercentage: "40%"
    },
    careers: {
      "ingenieure-en-optimisation-de-production": {
        title: "Ingénieure en Optimisation de Production",
        description: "Experte en amélioration des processus de production et de la performance industrielle.",
        roadmap: [
          {
            title: "Formation Fondamentale",
            description: "Bases du génie industriel",
            duration: "1 an",
            subjects: [
              "Gestion de production",
              "Recherche opérationnelle",
              "Statistiques industrielles",
              "Supply Chain",
              "Méthodes d'organisation"
            ],
            skills: [
              "Analyse de processus",
              "Planification",
              "Outils statistiques"
            ]
          },
          {
            title: "Spécialisation Production",
            description: "Expertise en optimisation",
            duration: "1 an",
            subjects: [
              "MES/ERP",
              "Planification avancée",
              "Gestion des stocks",
              "Industrie 4.0",
              "Gestion de projet industriel"
            ],
            skills: [
              "SAP/ERP",
              "MRPII",
              "Simulation industrielle"
            ],
            certifications: ["CPIM", "SAP Production Planning"]
          },
          {
            title: "Management Industriel",
            description: "Leadership et innovation",
            duration: "1 an",
            subjects: [
              "Management d'équipe",
              "Innovation industrielle",
              "Excellence opérationnelle",
              "Gestion du changement"
            ],
            skills: [
              "Leadership",
              "Gestion de la performance",
              "Conduite du changement"
            ]
          }
        ],
        salary: {
          entry: "14000-18000 DH",
          mid: "22000-32000 DH",
          senior: "35000-55000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en génie industriel",
          "Maîtrise des outils de GPAO",
          "Expérience en optimisation de production",
          "Connaissance des ERP"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "Engineering Manager",
              url: "https://roadmap.sh/engineering-manager"
            },
            {
              title: "System Design",
              url: "https://roadmap.sh/system-design"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "experte-en-lean-manufacturing": {
        title: "Experte en Lean Manufacturing",
        description: "Spécialiste en amélioration continue et optimisation des processus selon les principes du Lean.",
        roadmap: [
          {
            title: "Formation de Base",
            description: "Fondamentaux du Lean",
            duration: "1 an",
            subjects: [
              "Principes du Lean",
              "5S et management visuel",
              "Value Stream Mapping",
              "Kaizen",
              "Gestion des flux"
            ],
            skills: [
              "Analyse de processus",
              "Animation d'ateliers",
              "Résolution de problèmes"
            ]
          },
          {
            title: "Spécialisation Lean",
            description: "Maîtrise des outils avancés",
            duration: "1 an",
            subjects: [
              "Six Sigma",
              "TPM",
              "SMED",
              "Jidoka",
              "Management Lean"
            ],
            skills: [
              "Analyse statistique",
              "Gestion de projets Lean",
              "Formation d'équipes"
            ],
            certifications: ["Lean Six Sigma Black Belt", "TPM Practitioner"]
          },
          {
            title: "Leadership Lean",
            description: "Transformation et culture Lean",
            duration: "1 an",
            subjects: [
              "Transformation Lean",
              "Hoshin Kanri",
              "Lean Leadership",
              "Change Management"
            ],
            skills: [
              "Déploiement stratégique",
              "Coaching Lean",
              "Gestion du changement"
            ]
          }
        ],
        salary: {
          entry: "15000-20000 DH",
          mid: "25000-35000 DH",
          senior: "40000-60000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en génie industriel",
          "Certification Lean Six Sigma Black Belt",
          "Expérience en transformation Lean",
          "Excellentes compétences en communication"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "Engineering Manager",
              url: "https://roadmap.sh/engineering-manager"
            },
            {
              title: "System Design",
              url: "https://roadmap.sh/system-design"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "responsable-qualite-et-amelioration-continue": {
        title: "Responsable Qualité et Amélioration Continue",
        description: "Experte en gestion de la qualité et mise en place de processus d'amélioration continue.",
        roadmap: [
          {
            title: "Formation Fondamentale",
            description: "Bases de la qualité",
            duration: "1 an",
            subjects: [
              "Systèmes de management qualité",
              "Outils qualité",
              "Normes ISO 9001",
              "Audit qualité",
              "Statistiques"
            ],
            skills: [
              "Gestion documentaire",
              "Analyse de processus",
              "Techniques d'audit"
            ]
          },
          {
            title: "Spécialisation Qualité",
            description: "Expertise en amélioration continue",
            duration: "1 an",
            subjects: [
              "Six Sigma",
              "TQM",
              "EFQM",
              "Gestion des risques",
              "KPI et tableaux de bord"
            ],
            skills: [
              "Management de la qualité",
              "Résolution de problèmes",
              "Animation d'équipes"
            ],
            certifications: ["ISO 9001 Lead Auditor", "Six Sigma Black Belt"]
          },
          {
            title: "Leadership Qualité",
            description: "Management stratégique de la qualité",
            duration: "1 an",
            subjects: [
              "Excellence opérationnelle",
              "Change management",
              "Leadership qualité",
              "Innovation qualité"
            ],
            skills: [
              "Direction de programmes",
              "Coaching qualité",
              "Gestion du changement"
            ]
          }
        ],
        salary: {
          entry: "14000-18000 DH",
          mid: "22000-32000 DH",
          senior: "35000-50000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en génie industriel",
          "Certification en management de la qualité",
          "Expérience en amélioration continue",
          "Excellentes compétences managériales"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "Engineering Manager",
              url: "https://roadmap.sh/engineering-manager"
            },
            {
              title: "System Design",
              url: "https://roadmap.sh/system-design"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      }
    }
  },
  mecanique: {
    title: "Génie Mécanique",
    description: "Conception mécanique, automation et robotique",
    opportunities: [
      "Ingénieure en Conception Mécanique",
      "Experte en Robotique Industrielle",
      "Ingénieure en Automation"
    ],
    rankings: [
      { 
        school: "EMI Rabat",
        rank: 1,
        details: "École Mohammadia d'Ingénieurs - Excellence en génie mécanique"
      },
      { 
        school: "ENSEM",
        rank: 2,
        details: "École Nationale Supérieure d'Électricité et de Mécanique"
      },
      { 
        school: "ENSA Oujda",
        rank: 3,
        details: "École Nationale des Sciences Appliquées - Spécialisation mécatronique"
      }
    ],
    successStories: [
      {
        name: "Houda Bakri",
        role: "Directrice R&D",
        company: "Groupe PSA Maroc",
        achievement: "A dirigé le développement de nouveaux systèmes de motorisation hybride"
      }
    ],
    stats: {
      employmentRate: "94%",
      averageSalary: "16000 DH",
      femalePercentage: "25%"
    },
    careers: {
      "ingenieure-en-conception-mecanique": {
        title: "Ingénieure en Conception Mécanique",
        description: "Experte en conception et développement de systèmes mécaniques complexes.",
        roadmap: [
          {
            title: "Formation Fondamentale",
            description: "Bases de la mécanique et conception",
            duration: "1 an",
            subjects: [
              "Mécanique des solides",
              "Résistance des matériaux",
              "CAO/DAO",
              "Science des matériaux",
              "Dessin technique"
            ],
            skills: [
              "Modélisation 3D",
              "Calculs mécaniques",
              "Analyse structurelle"
            ]
          },
          {
            title: "Spécialisation Conception",
            description: "Expertise en conception avancée",
            duration: "1 an",
            subjects: [
              "Conception mécanique avancée",
              "Simulation numérique",
              "Prototypage rapide",
              "Méthodes des éléments finis",
              "Gestion de projet technique"
            ],
            skills: [
              "CATIA/SolidWorks",
              "Analyse FEA",
              "Optimisation topologique"
            ],
            certifications: ["SOLIDWORKS Professional", "AutoCAD Professional"]
          },
          {
            title: "Expertise Industrielle",
            description: "Application industrielle et innovation",
            duration: "1 an",
            subjects: [
              "Innovation produit",
              "Industrialisation",
              "Qualité et normes",
              "Management technique"
            ],
            skills: [
              "Gestion de projets complexes",
              "Validation de conception",
              "Leadership technique"
            ]
          }
        ],
        salary: {
          entry: "12000-16000 DH",
          mid: "18000-28000 DH",
          senior: "30000-45000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en génie mécanique",
          "Maîtrise des logiciels de CAO",
          "Expérience en conception mécanique",
          "Connaissance des normes industrielles"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "System Design",
              url: "https://roadmap.sh/system-design"
            },
            {
              title: "Computer Science",
              url: "https://roadmap.sh/computer-science"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "experte-en-robotique-industrielle": {
        title: "Experte en Robotique Industrielle",
        description: "Spécialiste en conception, programmation et intégration de systèmes robotiques industriels.",
        roadmap: [
          {
            title: "Formation de Base",
            description: "Fondamentaux de la robotique",
            duration: "1 an",
            subjects: [
              "Mécatronique",
              "Automatique",
              "Programmation robotique",
              "Électronique industrielle",
              "Vision artificielle"
            ],
            skills: [
              "Programmation de robots",
              "Intégration systèmes",
              "Contrôle-commande"
            ]
          },
          {
            title: "Spécialisation Robotique",
            description: "Expertise en systèmes robotiques",
            duration: "1 an",
            subjects: [
              "Robotique avancée",
              "Intelligence artificielle",
              "Cobotique",
              "Systèmes temps réel",
              "Sécurité robotique"
            ],
            skills: [
              "Conception de cellules robotisées",
              "Programmation avancée",
              "Simulation robotique"
            ],
            certifications: ["FANUC Robotics", "ABB Robotics"]
          },
          {
            title: "Applications Industrielles",
            description: "Mise en œuvre et optimisation",
            duration: "1 an",
            subjects: [
              "Industrie 4.0",
              "IoT industriel",
              "Maintenance prédictive",
              "Gestion de production"
            ],
            skills: [
              "Optimisation de process",
              "Gestion de projets robotiques",
              "Analyse de performance"
            ]
          }
        ],
        salary: {
          entry: "14000-18000 DH",
          mid: "20000-30000 DH",
          senior: "35000-50000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en mécatronique ou robotique",
          "Expertise en programmation robotique",
          "Expérience en intégration de systèmes",
          "Connaissance des normes de sécurité"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "AI and Data Scientist",
              url: "https://roadmap.sh/ai-data-scientist"
            },
            {
              title: "Python Roadmap",
              url: "https://roadmap.sh/python"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      },
      "ingenieure-en-automation": {
        title: "Ingénieure en Automation",
        description: "Experte en conception et mise en œuvre de systèmes automatisés industriels.",
        roadmap: [
          {
            title: "Formation Fondamentale",
            description: "Bases de l'automation industrielle",
            duration: "1 an",
            subjects: [
              "Automatique",
              "Électrotechnique",
              "Programmation API",
              "Instrumentation",
              "Réseaux industriels"
            ],
            skills: [
              "Programmation PLC",
              "SCADA",
              "Schémas électriques"
            ]
          },
          {
            title: "Spécialisation Automation",
            description: "Expertise en systèmes automatisés",
            duration: "1 an",
            subjects: [
              "Contrôle de processus",
              "IHM avancée",
              "Motion Control",
              "Systèmes distribués",
              "Cybersécurité industrielle"
            ],
            skills: [
              "Configuration DCS",
              "Programmation avancée",
              "Intégration systèmes"
            ],
            certifications: ["Siemens TIA Portal", "Schneider Unity Pro"]
          },
          {
            title: "Innovation Industrielle",
            description: "Applications avancées et industrie 4.0",
            duration: "1 an",
            subjects: [
              "Industrie 4.0",
              "IIoT",
              "Big Data industriel",
              "Maintenance prédictive"
            ],
            skills: [
              "Gestion de projets d'automation",
              "Optimisation de processus",
              "Analyse de données industrielles"
            ]
          }
        ],
        salary: {
          entry: "13000-17000 DH",
          mid: "20000-30000 DH",
          senior: "35000-45000 DH"
        },
        requirements: [
          "Diplôme d'ingénieur en automatisation",
          "Maîtrise des automates programmables",
          "Expérience en systèmes SCADA",
          "Connaissance des protocoles industriels"
        ],
        externalResources: {
          roadmaps: [
            {
              title: "DevOps Roadmap",
              url: "https://roadmap.sh/devops"
            },
            {
              title: "System Design",
              url: "https://roadmap.sh/system-design"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          }
        ]
      }
    }
  },
  "energetique": {
    title: "Génie Énergétique",
    description: "Le génie énergétique se concentre sur la conception, l'optimisation et la gestion des systèmes de production, de distribution et d'utilisation de l'énergie, avec un accent particulier sur les énergies renouvelables et l'efficacité énergétique.",
    stats: {
      employmentRate: "94%",
      averageSalary: "12 000 - 18 000 MAD",
      femalePercentage: "28%"
    },
    opportunities: [
      "Ingénieure en Efficacité Énergétique",
      "Conceptrice de Systèmes Solaires",
      "Spécialiste en Énergie Éolienne",
      "Consultante en Transition Énergétique",
      "Responsable de Projets Énergies Renouvelables",
      "Ingénieure en Réseaux Intelligents"
    ],
    rankings: [
      {
        rank: 1,
        school: "École Nationale Supérieure d'Arts et Métiers (ENSAM)",
        details: "Casablanca - Formation reconnue pour son excellence en génie énergétique et automatisation"
      },
      {
        rank: 2,
        school: "École Mohammadia d'Ingénieurs (EMI)",
        details: "Rabat - Programme spécialisé en énergies renouvelables et efficacité énergétique"
      },
      {
        rank: 3,
        school: "Institut National des Sciences Appliquées (INSA)",
        details: "Fès - Formation axée sur l'innovation en génie énergétique et développement durable"
      },
      {
        rank: 4,
        school: "École Nationale des Sciences Appliquées (ENSA)",
        details: "Marrakech - Spécialisation en systèmes énergétiques et énergies renouvelables"
      },
      {
        rank: 5,
        school: "Université Internationale de Rabat (UIR)",
        details: "Rabat - Programme en partenariat avec des entreprises du secteur énergétique"
      }
    ],
    successStories: [
      {
        name: "Leila Benali",
        role: "Directrice de Projets Énergétiques",
        company: "MASEN (Moroccan Agency for Sustainable Energy)",
        achievement: "J'ai dirigé l'implémentation de la plus grande centrale solaire d'Afrique à Ouarzazate, contribuant à la stratégie nationale d'énergies renouvelables du Maroc."
      },
      {
        name: "Samira Ouadghiri",
        role: "Fondatrice",
        company: "EcoEnergy Solutions",
        achievement: "Après mes études en génie énergétique, j'ai créé ma startup spécialisée dans l'audit énergétique pour les entreprises, permettant des économies d'énergie de 30% en moyenne pour nos clients."
      },
      {
        name: "Nadia El Mrabet",
        role: "Chercheuse en Énergies Renouvelables",
        company: "Institut de Recherche en Énergie Solaire et Énergies Nouvelles (IRESEN)",
        achievement: "Mes recherches sur les matériaux photovoltaïques ont contribué au développement de panneaux solaires plus efficaces et adaptés au climat nord-africain."
      }
    ],
    careers: {
      "ingenieure-efficacite-energetique": {
        title: "Ingénieure en Efficacité Énergétique",
        description: "Spécialiste qui analyse, conçoit et implémente des solutions pour optimiser la consommation d'énergie dans les bâtiments, les processus industriels et les systèmes énergétiques.",
        salary: {
          entry: "8 000 - 12 000 MAD",
          mid: "12 000 - 18 000 MAD",
          senior: "18 000 - 25 000 MAD"
        },
        requirements: [
          "Diplôme d'ingénieur en génie énergétique, génie électrique ou mécanique",
          "Connaissance des normes d'efficacité énergétique et des réglementations thermiques",
          "Maîtrise des outils de simulation énergétique (TRNSYS, EnergyPlus)",
          "Compétences en audit énergétique et en analyse de données",
          "Certification en efficacité énergétique (un atout)"
        ],
        roadmap: [
          {
            title: "Formation Initiale",
            description: "Diplôme d'ingénieur en génie énergétique ou domaine connexe",
            duration: "5 ans",
            subjects: [],
            skills: []
          },
          {
            title: "Certification Professionnelle",
            description: "Obtention de certifications en audit énergétique ou gestion de l'énergie",
            duration: "6 mois - 1 an",
            subjects: [],
            skills: []
          },
          {
            title: "Expérience Junior",
            description: "Poste d'ingénieure junior en bureau d'études ou entreprise de services énergétiques",
            duration: "2-3 ans",
            subjects: [],
            skills: []
          },
          {
            title: "Spécialisation",
            description: "Développement d'expertise dans un secteur spécifique (bâtiment, industrie, transport)",
            duration: "2-3 ans",
            subjects: [],
            skills: []
          },
          {
            title: "Poste Senior",
            description: "Responsable de projets d'efficacité énergétique ou consultante experte",
            duration: "Après 5+ ans d'expérience",
            subjects: [],
            skills: []
          }
        ],
        externalResources: {
          roadmaps: [
            {
              title: "Guide de l'Efficacité Énergétique",
              url: "https://www.ademe.fr/expertises/energie"
            },
            {
              title: "Certification en Gestion de l'Énergie",
              url: "https://www.iso.org/fr/iso-50001-energy-management.html"
            }
          ]
        },
        podcasts: [
          {
            title: "La Révolution de la Conception 3D",
            description: "Discussion approfondie sur l'évolution des outils de CAO et leur impact sur l'industrie",
            duration: "45:30",
            url: "https://example.com/podcast/conception-3d",
            host: "Sarah Bennani",
            topics: [
              "Évolution des outils CAO",
              "Intégration de l'IA dans la conception",
              "Futur de la conception mécanique"
            ]
          },
          {
            title: "Innovation en Ingénierie Mécanique",
            description: "Les dernières tendances en conception mécanique et fabrication additive",
            duration: "38:15",
            url: "https://example.com/podcast/innovation-mecanique",
            host: "Mohammed Alami",
            topics: [
              "Fabrication additive",
              "Matériaux innovants",
              "Simulation numérique"
            ]
          },
          {
            title: "Leïla Benali: Pionnière de la Transition Énergétique au Maroc",
            description: "Leïla Benali est une ingénieure et experte en énergie et développement durable, qui a marqué le secteur par son expertise et son engagement. Ancienne ministre de la Transition énergétique et du Développement durable du Maroc, elle a joué un rôle clé dans l'élaboration et la mise en œuvre de la politique énergétique du pays. Elle a notamment contribué à faire du Maroc un leader en matière d'énergies renouvelables, notamment dans les domaines du solaire et de l'éolien. Sa vision stratégique et son leadership ont permis de renforcer la position du pays dans la transition énergétique mondiale. Son parcours incarne l'excellence et l'innovation, et elle est une source d'inspiration pour les femmes dans les secteurs scientifiques et technologiques.",
            duration: "45 min",
            url: "https://open.spotify.com/episode/6TBzYaIma2zb1WGuPml3Hv",
            host: "Fatima Zahra",
            topics: ["Transition Énergétique", "Leadership Féminin", "Énergies Renouvelables", "Politique Énergétique", "Développement Durable"]
          }
        ]
      },
      "conceptrice-systemes-solaires": {
        title: "Conceptrice de Systèmes Solaires",
        description: "Experte qui conçoit, dimensionne et optimise des installations solaires photovoltaïques et thermiques pour diverses applications résidentielles, commerciales ou industrielles.",
        salary: {
          entry: "9 000 - 13 000 MAD",
          mid: "13 000 - 19 000 MAD",
          senior: "19 000 - 28 000 MAD"
        },
        requirements: [
          "Diplôme d'ingénieur en génie énergétique ou électrique",
          "Connaissance approfondie des technologies solaires (PV et thermique)",
          "Maîtrise des logiciels de conception solaire (PVsyst, SAM, PVSOL)",
          "Compétences en dimensionnement électrique et mécanique",
          "Connaissance des normes et réglementations solaires"
        ],
        roadmap: [
          {
            title: "Formation Académique",
            description: "Diplôme d'ingénieur avec spécialisation en énergies renouvelables",
            duration: "5 ans",
            subjects: [],
            skills: []
          },
          {
            title: "Formation Technique Spécialisée",
            description: "Formations sur les technologies solaires et logiciels de conception",
            duration: "3-6 mois",
            subjects: [],
            skills: []
          },
          {
            title: "Première Expérience",
            description: "Poste d'ingénieure junior dans une entreprise d'énergie solaire",
            duration: "1-2 ans",
            subjects: [],
            skills: []
          },
          {
            title: "Développement d'Expertise",
            description: "Participation à des projets solaires de plus grande envergure",
            duration: "2-3 ans",
            subjects: [],
            skills: []
          },
          {
            title: "Position Senior",
            description: "Responsable de conception ou cheffe de projets solaires",
            duration: "Après 5+ ans d'expérience",
            subjects: [
              "Gestion de projets solaires",
              "Conception de systèmes solaires complexes",
              "Optimisation des performances solaires",
              "Gestion de l'équipe et des ressources",
              "Gestion des relations clients"
            ],
            skills: [
              "Gestion de projets solaires",
              "Conception de systèmes solaires complexes",
              "Optimisation des performances solaires",
              "Gestion de l'équipe et des ressources",
              "Gestion des relations clients"
            ]
          }
        ],
        externalResources: {
          roadmaps: [
            {
              title: "Guide du Concepteur Photovoltaïque",
              url: "https://www.ines-solaire.org/fr/formation/"
            },
            {
              title: "Certification en Conception Solaire",
              url: "https://www.nabcep.org/"
            }
          ]
        }
      }
    }
  }
}; 