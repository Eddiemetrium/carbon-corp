import { ExploreWorld, Insight, NewFeature, Social } from "./data.interface";

export const exploreWorlds: ExploreWorld[] = [
  {
    id: "world-1",
    imgUrl: "/Planet01.png",
    title: "The Hogwarts",
  },
  {
    id: "world-2",
    imgUrl: "/Planet02.png",
    title: "The Upside Down",
  },
  {
    id: "world-3",
    imgUrl: "/Planet03.png",
    title: "Kadirojo Permai",
  },
  {
    id: "world-4",
    imgUrl: "/Planet04.png",
    title: "Paradise Island",
  },
  {
    id: "world-5",
    imgUrl: "/Planet05.png",
    title: "Hawkins Labs",
  },
];

export const startingFeatures: string[] = [
  "Build a carbon free world that suits you and want to live in",
  "Enter the world by reading our blogs to be safe",
  "No need to beat around the bush, just stay on the gas and have fun",
];

export const newFeatures: NewFeature[] = [
  {
    imgUrl: "/VrPano.svg",
    title: "A new world",
    subtitle:
      "We have a variety of zero cabon solutions for you to explore and be part of",
  },
  {
    imgUrl: "/Headset.svg",
    title: "Realistic",
    subtitle:
      "In the latest update, tokens are sent faster and bonuses",
  },
];

export const insights: Insight[] = [
  {
    imgUrl: "/Planet06.png",
    title: "The launch of the Carbon Corp makes Elon musk ketar-ketir",
    subtitle:
      "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
  },
  {
    imgUrl: "/Planet07.png",
    title: "7 tips to easily contribute and be a part of the Carbon Corp",
    subtitle:
      "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
  },
  {
    imgUrl: "/Planet08.png",
    title: "The only one platform where you can explore possibilities of a carbon free globe.",
    subtitle:
      "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
  },
];

export const socials: Social[] = [
  {
    name: "twitter",
    url: "/Twitter.svg",
  },
  {
    name: "linkedin",
    url: "/Linkedin.svg",
  },
  {
    name: "instagram",
    url: "/Instagram.svg",
  },
  {
    name: "facebook",
    url: "/Facebook.svg",
  },
];
