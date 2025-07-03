// import { Icons } from "@/components/common/icons";

// export interface skillsInterface {
//   name: string;
//   description: string;
//   rating: number;
//   icon: any;
// }

// export const skillsUnsorted: skillsInterface[] = [
//   {
//     name: "Python",
//     description: "Proficient in Python for scripting, automation, data analysis, and backend development.",
//     rating: 5,
//     icon: Icons.nextjs,
//   },
//   {
//     name: "Java",
//     description: "Strong in Java for OOP, Android development, and competitive programming.",
//     rating: 4,
//     icon: Icons.graphql,
//   },
//   {
//     name: "C++",
//     description: "Intermediate in C++ for DSA, competitive programming, and system design.",
//     rating: 3,
//     icon: Icons.nestjs,
//   },
//   {
//     name: "Machine Learning",
//     description: "Strong grasp of ML algorithms, model training, and deployment.",
//     rating: 4,
//     icon: Icons.express,
//   },
//   {
//     name: "PyTorch",
//     description: "Hands-on experience with PyTorch for deep learning and neural networks.",
//     rating: 4,
//     icon: Icons.nodejs,
//   },
//   {
//     name: "TensorFlow",
//     description: "Proficient in TensorFlow for scalable ML/DL solutions.",
//     rating: 4,
//     icon: Icons.mongodb,
//   },
//   {
//     name: "Deep Learning",
//     description: "Knowledge of CNNs, RNNs, and transformers for advanced AI tasks.",
//     rating: 4,
//     icon: Icons.typescript,
//   },
//   {
//     name: "Data Analytics",
//     description: "Expertise in EDA, statistical analysis, and visualization (Matplotlib, Seaborn).",
//     rating: 4,
//     icon: Icons.javascript,
//   },
//   {
//     name: "DSA",
//     description: "Solid understanding of algorithms and data structures for optimization.",
//     rating: 4,
//     icon: Icons.bootstrap,
//   },
//   {
//     name: "HTML 5",
//     description:
//     "Structure web content beautifully with the latest version of HyperText Markup Language.",
//     rating: 4,
//     icon: Icons.html5,
//   },
//   {
//     name: "CSS",
//     description:
//     "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
//     rating: 4,
//     icon: Icons.css3,
//   },
//   {
//     name: "React Native",
//     description:
//     "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
//     rating: 4,
//     icon: Icons.react,
//   },
//   {
//     name: "Tailwind CSS",
//     description:
//     "Design beautiful, modern websites faster with a utility-first CSS framework.",
//     rating: 5,
//     icon: Icons.tailwindcss,
//   },
//   {
//     name: "AWS",
//     description:
//     "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
//     rating: 3,
//     icon: Icons.amazonaws,
//   },
//   {
//     name: "React",
//     description:
//       "Craft interactive user interfaces using components, state, props, and virtual DOM.",
//     rating: 5,
//     icon: Icons.react,
//   },
// ];

// export const skills = skillsUnsorted
//   .slice()
//   .sort((a, b) => b.rating - a.rating);

// export const featuredSkills = skills.slice(0, 6);

import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description: "Proficient in Python for scripting, automation, data analysis, and backend development.",
    rating: 5,
    icon: Icons.python,
  },
  {
    name: "Java",
    description: "Strong in Java for OOP, Android development, and competitive programming.",
    rating: 4,
    icon: Icons.java,
  },
  {
    name: "C++",
    description: "Intermediate in C++ for DSA, competitive programming, and system design.",
    rating: 3,
    icon: Icons.cplusplus,
  },
  {
    name: "Machine Learning",
    description: "Strong grasp of ML algorithms, model training, and deployment.",
    rating: 4,
    icon: Icons.machineLearning
, // You can replace this with a custom ML icon later
  },
  {
    name: "PyTorch",
    description: "Hands-on experience with PyTorch for deep learning and neural networks.",
    rating: 4,
    icon: Icons.pytorch,
  },
  {
    name: "TensorFlow",
    description: "Proficient in TensorFlow for scalable ML/DL solutions.",
    rating: 4,
    icon: Icons.tensorflow,
  },
  {
    name: "Deep Learning",
    description: "Knowledge of CNNs, RNNs, and transformers for advanced AI tasks.",
    rating: 4,
    icon: Icons.deepLearning, // stylized; you can replace it
  },
  {
    name: "Data Analytics",
    description: "Expertise in EDA, statistical analysis, and visualization (Matplotlib, Seaborn).",
    rating: 4,
    icon: Icons.tableau,
  },
  {
    name: "DSA",
    description: "Solid understanding of algorithms and data structures for optimization.",
    rating: 4,
    icon: Icons.dsa,
  },
  {
    name: "HTML 5",
    description: "Structure web content beautifully with the latest version of HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS",
    description: "Style web pages creatively with the latest iteration of Cascading Style Sheets.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "React Native",
    description: "Develop cross-platform mobile apps using React for consistent and engaging experiences.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Tailwind CSS",
    description: "Design beautiful, modern websites faster with a utility-first CSS framework.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "AWS",
    description: "Utilize Amazon Web Services to build and deploy scalable, reliable, and secure applications.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "React",
    description: "Craft interactive user interfaces using components, state, props, and virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);

