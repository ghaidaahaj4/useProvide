// PlaceImage.js
import { useContext } from "react";
import { imgSizeContext } from "../../context/imageSize.context";
import { getImageUrl } from "../../utils";

export default function PlaceImage({ place }) {
  const { size } = useContext(imgSizeContext);

  return (
    <img src={getImageUrl(place)} alt={place.name} width={size} height={size} />
  );
}
