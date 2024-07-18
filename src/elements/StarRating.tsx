import { useState } from "react";

const containerStyle = { display: "flex", alignItems: "center" };

type Props = {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  messages?: string[];
  rating?: number;
  starsOnly?: boolean;
  onSetRating?: (rating: number) => void;
};

export function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 36,
  className = "",
  messages = [],
  rating = 0,
  starsOnly = false,
}: Props) {
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
            fillStatus={
              rating < i + 0.5 //4.5
                ? "empty"
                : rating >= i + 1
                ? "filled"
                : "half-filled"
            }
            color={color}
            size={size}
            key={i + 1}
          />
        ))}
      </div>
      {!starsOnly && (
        <span style={ratingStyle}>
          {messages.length === maxRating ? messages[rating - 1] : rating || ""}
        </span>
      )}
    </div>
  );
}

type StarIconProps = {
  fillStatus: "filled" | "half-filled" | "empty";
  color: string;
  size: number;
};
function StarIcon({ color, size, fillStatus = "empty" }: StarIconProps) {
  // Define colors for each half based on props
  const leftHalfColor = fillStatus !== "empty" ? color : "transparent";
  const rightHalfColor = fillStatus === "filled" ? color : "transparent";

  return (
    <span
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: "block",
        position: "relative",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        style={{ width: "100%", height: "100%" }}
      >
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          style={{ clipPath: "polygon(0 0, 50.5% 0, 50.5% 100%, 0 100%)" }}
          fill={leftHalfColor}
          stroke={color}
        />
        <path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          style={{
            clipPath: "polygon(49.5% 0, 100% 0, 100% 100%, 49.5% 100%)",
          }}
          fill={rightHalfColor}
          stroke={color}
        />
      </svg>
    </span>
  );
}
