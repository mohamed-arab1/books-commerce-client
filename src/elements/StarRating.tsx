import { useState } from "react";

const containerStyle = { display: "flex", alignItems: "center" };

type Props = {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  messages?: string[];
  defaultRating?: number;
  viewOnly?: boolean;
  starsOnly?: boolean;
  onSetRating?: (rating: number) => void;
};

export function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 36,
  className = "",
  messages = [],
  defaultRating = 0,
  viewOnly = false,
  starsOnly = false,
  onSetRating,
}: Props) {
  function handleRating(i: number) {
    if (viewOnly) return;
    setRating(i);
    onSetRating && onSetRating(i);
  }

  function handleHoverRating(i: number) {
    if (viewOnly) return;
    setHoverRating(i);
  }

  const [rating, setRating] = useState(defaultRating);
  const [hoverRating, setHoverRating] = useState(0);

  const ratingStyle = {
    fontSize: `${size / 1.6}px`,
    fontWeight: "bold",
    color,
    className,
  };

  return (
    <div style={{ display: "flex", gap: "1.6rem", alignItems: "center" }}>
      <div style={containerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <StarIcon
            onHoverIn={handleHoverRating.bind(null, i + 1)}
            onHoverOut={handleHoverRating.bind(null, rating)}
            onRating={handleRating.bind(null, i + 1)}
            isFilled={hoverRating ? hoverRating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
            key={i + 1}
          />
        ))}
      </div>
      {!starsOnly && (
        <span style={ratingStyle}>
          {messages.length === maxRating
            ? messages[rating - 1]
            : hoverRating || rating || ""}
        </span>
      )}
    </div>
  );
}

type StarIconProps = {
  isFilled: boolean;
  onRating: () => void;
  onHoverIn: () => void;
  onHoverOut: () => void;
  color: string;
  size: number;
};
function StarIcon({
  isFilled = false,
  onRating,
  onHoverIn,
  onHoverOut,
  color,
  size,
}: StarIconProps) {
  const starColor = isFilled ? color : "rgba(255,255,255,0)";

  return (
    <span
      onClick={onRating}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
      style={{ width: `${size}px`, height: `${size}px`, display: "block" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill={starColor}
        stroke={color}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </span>
  );
}
