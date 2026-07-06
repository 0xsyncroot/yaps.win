interface SparkleProps {
  className?: string;
  title?: string;
}

/**
 * The 4-point sparkle from the Reply Guys logo, as a single tintable glyph.
 * Fills with currentColor so it can be recolored via text-* utilities.
 */
export default function Sparkle({ className, title }: SparkleProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path d="M256,76.8 C268.8,187.7 324.3,243.2 435.2,256 C324.3,268.8 268.8,324.3 256,435.2 C243.2,324.3 187.7,268.8 76.8,256 C187.7,243.2 243.2,187.7 256,76.8 Z" />
    </svg>
  );
}
