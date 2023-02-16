interface Props {
  className: string;
}

export default function Menu({ className }: Props) {
  return (
    <svg
      className={className}
      width="28"
      height="18"
      viewBox="0 0 28 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 7.83398H28V10.1673H0V7.83398ZM0 14.834H28V17.1673H0V14.834Z"
        fill="#0B0B0C"
      />
      <path d="M28 0.833984H0V3.16732H28V0.833984Z" fill="#0B0B0C" />
    </svg>
  );
}
