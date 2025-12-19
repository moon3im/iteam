const PsIcon = ({ size = 34, color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      stroke={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="512" height="512" fill={color} />
      <path
        d="M175.4 337.2h51.2l37-114.4h-51.2l-37 114.4zm76.5-155.6c0 19.8-14.4 32.7-40.7 32.7h-29.4v-65.4h29.4c26.3 0 40.7 12.9 40.7 32.7z"
      />
    </svg>
  );
};

export default PsIcon;
