import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { supabase } from "../../../../supabaseClient";

const ImageComponent = ({
  src,
  alt,
  bucketId,
  supabaseId,
  style,
  ...restProps
}) => {
  const [imageSrc, setImageSrc] = useState(src);

  // Destructure and omit non-HTML-standard props
  const { contextId, ...filteredProps } = restProps;
  if (contextId) {
    filteredProps["data-context-id"] = contextId;
  }

  // Fetch image from Supabase if `supabaseId` is provided
  useEffect(() => {
    const fetchImageFromSupabase = async () => {
      if (supabaseId) {
        const { data, error } = await supabase.storage
          .from(bucketId) // specify your bucket name here
          .getPublicUrl(supabaseId);

        if (error) {
          console.error("Error fetching image from Supabase:", error);
        } else {
          setImageSrc(data.publicUrl);
        }
      }
    };

    fetchImageFromSupabase();
  }, [supabaseId, bucketId]);

  const defaultImageStyle = "object-cover w-full h-full ";
  const imageStyle = style ? Object.values(style).join(" ") : "";

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={twMerge(defaultImageStyle + imageStyle)}
      {...filteredProps}
    />
  );
};

ImageComponent.propTypes = {
  src: PropTypes.string, // Either src or supabaseId should be provided
  alt: PropTypes.string,
  bucketId: PropTypes.string, // New prop for Supabase bucket ID
  supabaseId: PropTypes.string, // New prop for Supabase image ID
  style: PropTypes.shape({
    className: PropTypes.string,
  }),
};

export default ImageComponent;
