interface Detail {
  content: string;
  source: string;
}

interface Images {
  planet: string;
  internal: string;
  geology: string;
}

export default interface Planet {
  name: string;
  overview: Detail;
  structure: Detail;
  geology: Detail;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Images;
  color: string;
}
