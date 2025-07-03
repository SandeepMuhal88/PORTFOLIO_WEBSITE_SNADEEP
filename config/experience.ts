// Rewritten to reflect 365 Days Learning Journey instead of company/professional experience
import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string; // Used as learning module/topic
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "python-foundations",
    companyName: "Python Foundations",
    type: "Learning",
    category: ["Backend", "Scripting", "Automation"],
    shortDescription:
      "Started my journey with Python, exploring scripting, automation, and basic problem solving.",
    techStack: ["Python"],
    startDate: new Date("2025-01-01"),
    endDate: new Date("2025-01-20"),
    companyLogoImg: "/experience/python/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "The beginning of my 365-day challenge started with learning Python. I focused on basic syntax, control structures, functions, and simple scripts for automation.",
        "I practiced building small utilities like a calculator, a to-do list app, and file system operations using Python libraries.",
      ],
      bullets: [
        "Learned Python syntax, data types, loops, and functions.",
        "Created small CLI tools using argparse and sys.",
        "Built automation scripts for file organization.",
      ],
    },
  },
  {
    id: "dsa-journey",
    companyName: "Data Structures & Algorithms",
    type: "Learning",
    category: ["DSA"],
    shortDescription:
      "Mastered the core fundamentals of data structures and algorithms with daily problem solving.",
    techStack: ["Python", "C++", "Java"],
    startDate: new Date("2025-01-21"),
    endDate: new Date("2025-03-15"),
    companyLogoImg: "/experience/dsa/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "To crack placements and strengthen my fundamentals, I dived into Data Structures & Algorithms.",
        "Topics like arrays, linked lists, trees, graphs, sorting, searching, dynamic programming became a daily ritual.",
      ],
      bullets: [
        "Solved 150+ problems on platforms like LeetCode and GFG.",
        "Practiced C++, Java, and Python for DSA.",
        "Used DSA for building logic in small projects.",
      ],
    },
  },
  {
    id: "ml-deep-learning",
    companyName: "Machine Learning & Deep Learning",
    type: "Learning",
    category: ["AI/ML", "Deep Learning"],
    shortDescription:
      "Exploring AI by learning ML algorithms and implementing deep learning models using PyTorch and TensorFlow.",
    techStack: ["Python", "TensorFlow", "PyTorch"],
    startDate: new Date("2025-03-16"),
    endDate: new Date("2025-06-01"),
    companyLogoImg: "/experience/ml/logo.png",
    pagesInfoArr: [],
    descriptionDetails: {
      paragraphs: [
        "Once confident in Python and DSA, I moved to Machine Learning and Deep Learning.",
        "Started with Linear Regression, Decision Trees, KNN, and gradually built CNNs, RNNs and transformers.",
        "Used datasets from Kaggle and scikit-learn, and built hands-on projects.",
      ],
      bullets: [
        "Implemented ML models from scratch and using scikit-learn.",
        "Built image classifier using CNN in PyTorch.",
        "Explored RNNs and LSTMs for text generation and sequence modeling.",
        "Fine-tuned transformers for basic NLP tasks.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 3);