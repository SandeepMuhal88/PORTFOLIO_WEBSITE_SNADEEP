import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  title: string;
  tags: string[];
  date: Date;
  content: string[];
  skills: ValidSkills[];
  coverImage?: string;
  githubLink?: string;
  liveDemoLink?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "day-1-python-start",
    title: "Day 1: Starting Python and Basics of Programming",
    tags: ["Python", "Learning", "365DaysChallenge"],
    date: new Date("2024-11-01"),
    content: [
      "Started the journey by diving into Python basics like variables, loops, and functions.",
      "Practiced writing simple programs including a calculator, number reverser, and palindrome checker.",
      "Set up GitHub and documented all the practice codes as part of the challenge."
    ],
    skills: ["Python"],
    coverImage: "/blogs/day-1.png",
    githubLink: "https://github.com/yourusername/day1-python-basics"
  },
  {
    id: "day-30-dsa-basics",
    title: "Day 30: Data Structures and Algorithms – Arrays & Searching",
    tags: ["DSA", "Problem Solving", "Learning"],
    date: new Date("2024-12-01"),
    content: [
      "Started learning DSA by focusing on arrays, binary search, and basic complexity analysis.",
      "Solved problems on platforms like LeetCode and GeeksforGeeks.",
      "Learned about linear vs binary search, and how space/time complexity impacts performance."
    ],
    skills: ["Python", "Java", "Javascript"],
    coverImage: "/blogs/day-30.png",
    githubLink: "https://github.com/yourusername/day30-dsa-arrays"
  }
];
