interface Props {
  className: string;
}

export default function VectorOne({ className }: Props) {
  return (
    <svg
      className={className}
      width="174"
      height="4"
      viewBox="0 0 174 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.17708 2.67514C45.6162 3.73039 90.0792 3.11241 134.542 3.50376C147.248 3.6158 159.956 3.71851 172.658 3.83024C174.194 3.84293 174.421 0.624844 172.88 0.630497C128.384 0.593009 83.8859 0.517893 39.3815 0.732908C26.6585 0.788473 13.9336 1.00325 1.2107 1.19005C-0.496615 1.50001 0.940541 2.67749 1.17708 2.67514Z"
        fill="#3B72FE"
      />
    </svg>
  );
}
