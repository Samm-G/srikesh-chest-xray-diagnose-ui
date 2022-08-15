import React from "react";
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import "./ImageGrid.css";

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};
// Rendering individual images
const Image = ({ image, onSelectImage, selectedImage }) => {
  return (
    <div
      className="file-item"
      onClick={() => {
        console.log("selected " + image.file.name);
        onSelectImage(image.file.name);
      }}
    >
      <img alt={`img - ${image.id}`} src={image.src} className="file-img" />
      {selectedImage == image.file.name && (
        <motion.div
          layoutId="outline"
          className="outline"
          initial={false}
          // animate={{ borderColor: "#ff0055" }}
          transition={spring}
        />
      )}
    </div>
  );
};

// ImageList Component//
const ImageGride = ({ images, onSelectImage, selectedImage }) => {
  // render each image by calling Image component
  const renderImage = (image, index) => {
    return (
      <Image
        image={image}
        key={`${image.id}-image`}
        onSelectImage={onSelectImage}
        selectedImage={selectedImage}
      ></Image>
    );
  };
  // Return the list of files//
  return (
    <AnimateSharedLayout>
      <section className="file-list">{images.map(renderImage)}</section>
    </AnimateSharedLayout>
  );
};

export default ImageGride;