import React from "react";

interface RoundedSquareProps {
  width?: number;
  height?: number;
  borderRadius?: [number, number, number, number];
  className?: string;
  style?: React.CSSProperties;
  variant?: "fill" | "outline";
  fillColor?: string;
  borderColor?: string;
  borderWidth?: number;
  children?: React.ReactNode;
}

const RoundedSquare: React.FC<RoundedSquareProps> = ({
  width = 200,
  height = 200,
  borderRadius = [0, 0, 0, 0],
  className = "",
  style = {},
  variant = "fill",
  fillColor = "bg-primary",
  borderColor = "border-primary",
  borderWidth = 1,
  children,
}) => {
  const [topLeft, topRight, bottomRight, bottomLeft] = borderRadius;

  const squareStyle: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    borderWidth: variant === "outline" ? borderWidth : 0,
    borderTopLeftRadius: `${topLeft}px`,
    borderTopRightRadius: `${topRight}px`,
    borderBottomRightRadius: `${bottomRight}px`,
    borderBottomLeftRadius: `${bottomLeft}px`,
    ...style,
  };

  const variantClass =
    variant === "fill"
      ? `${fillColor}`
      : `${borderColor} ${borderWidth} bg-transparent`;

  return (
    <div className={`${variantClass} ${className}`} style={squareStyle}>
      {children}
    </div>
  );
};

export default RoundedSquare;
