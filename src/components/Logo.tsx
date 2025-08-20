export default function Logo() {
  return (
    <svg
      width="280"
      height="80"
      viewBox="0 0 280 80"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="title desc"
    >
      <title id="title">Herobase Logo</title>
      <desc id="desc">Shield with star and comic-style text Herobase</desc>
      <path
        d="M40 8
       L70 20
       V38
       c0 20 -14 32 -30 38
       c-16 -6 -30 -18 -30 -38
       V20
       Z"
        fill="none"
        stroke="#D62828"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      <path d="M34 12 h12 v14 l-6 -4 -6 4 V12 Z" fill="#003f88" />

      <path
        d="M40 30
       l3 6
       6.5 1
       -4.8 4.5
       1 6.2
       -5.7 -3
       -5.7 3
       1 -6.2
       -4.8 -4.5
       6.5 -1
       Z"
        fill="#ffffff"
      />
      <path
        d="M20 40
       c5 12 18 20 20 21
       c2 -1 15 -9 20 -21"
        fill="none"
        stroke="#48cae4"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <text
        x="90"
        y="55"
        fontSize="36"
        fontFamily="'Bangers', sans-serif"
        fill="#ffffff"
        stroke="#D62828"
        strokeWidth="2"
        paintOrder="stroke"
      >
        Herobase
      </text>
    </svg>
  );
}
