interface Props {
  className: string;
}

export default function Vector({ className }: Props) {
  return (
    <svg
      className={className}
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 0C4.97702 0 0.5 3.85257 0.5 8.60513C0.5 11.6987 2.39711 14.4094 5.24382 15.9263C5.03453 16.7766 4.48643 19.0057 4.3766 19.4828C4.24139 20.0749 4.57605 20.067 4.79519 19.9074C4.96718 19.7828 7.53569 17.8824 8.64381 17.062C9.24527 17.1589 9.86538 17.2103 10.5 17.2103C16.023 17.2103 20.5 13.3571 20.5 8.60513C20.5 3.85314 16.023 0 10.5 0Z"
        fill="#191600"
      />
    </svg>
  );
}
