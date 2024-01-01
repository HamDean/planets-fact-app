import { motion } from "framer-motion";
interface Props {
  image?: string;
  imageSec?: string;
  isSec?: boolean;
}

const PageImage = ({ image, imageSec, isSec = false }: Props) => {
  return (
    <motion.div className="planet-image-container">
      <motion.img
        initial={{ opacity: 0, x: "-200px" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="planet-image"
        src={image}
      />
      {isSec && (
        <motion.img
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: 0 }}
          className="surface-image"
          src={imageSec}
        />
      )}
    </motion.div>
  );
};
export default PageImage;
