interface Props {
  image?: string;
  imageSec?: string;
  isSec?: boolean;
}

const PageImage = ({ image, imageSec, isSec = false }: Props) => {
  return (
    <div className="planet-image-container">
      <img className="planet-image" src={image} />
      {isSec && <img className="surface-image" src={imageSec} />}
    </div>
  );
};
export default PageImage;
