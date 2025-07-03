import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Sandeepmuhal88",
    icon: Icons.gitHub,
    link: "https://github.com/SandeepMuhal88",
  },
  {
    name: "LinkedIn",
    username: "Sandeep Muhal",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/sandeep-muhal-5672aa285/",
  },
  {
    name: "Twitter",
    username: "@i_sandeepmuhal8",
    icon: Icons.twitter,
    link: "https://x.com/i_sandeepmuhal8",
  },
  {
    name: "Gmail",
    username: "sandeepmuhal",
    icon: Icons.gmail,
    link: "mailto:sandeepmuhal9982@gmail.com",
  },
    {
    name: "Youtube",
    username: "Sandeep Muhal",
    icon: Icons.gmail,
    link: "https://www.youtube.com/@sandeepmuhal88",
  },
];
