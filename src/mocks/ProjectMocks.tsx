import React from "react";
import park from "./../images/park.jpg";
import shop from "./../images/shop.jpg";
import ProjectCard, { ProjectCardProps } from "./ProjectCard.tsx";

const ProjectCardMocks: ProjectCardProps[] = [
  { id: 1234,
    title: "Семейный парк развлечений",
    country: "Россия, Краснодар",
    industry: "Обустройство",
    priceMin: 10000000,
    priceMax: 50000000,
    imageSource: park
  },
  { id: 1464,
    title: "Строительство нового магазина",
    country: "Россия, Москва",
    industry: "Строительство",
    priceMin: 20000000,
    priceMax: 100000000,
    imageSource: shop
  },
  { id: 1234,
    title: "Семейный парк развлечений",
    country: "Россия, Краснодар",
    industry: "Обустройство",
    priceMin: 10000000,
    priceMax: 50000000,
    imageSource: park
  },
  { id: 1464,
    title: "Строительство нового магазина",
    country: "Россия, Москва",
    industry: "Строительство",
    priceMin: 20000000,
    priceMax: 100000000,
    imageSource: shop
  },
  { id: 1234,
    title: "Семейный парк развлечений",
    country: "Россия, Краснодар",
    industry: "Обустройство",
    priceMin: 10000000,
    priceMax: 50000000,
    imageSource: park
  },
  { id: 1464,
    title: "Строительство нового магазина",
    country: "Россия, Москва",
    industry: "Строительство",
    priceMin: 20000000,
    priceMax: 100000000,
    imageSource: shop
  }
]


const ProjectMocks = () => {
  return (
    <ul className="projects">
      <ProjectCards/>
    </ul>
  );
}

const ProjectCards = () => ProjectCardMocks.map((mock: ProjectCardProps) => (
  <ProjectCard
    id = {mock.id}
    title = {mock.title}
    country = {mock.country}
    industry = {mock.industry}
    priceMin = {mock.priceMin}
    priceMax = {mock.priceMax}
    imageSource = {mock.imageSource}
  />
))

export default ProjectMocks;