export function WarliFooterMural({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 80"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Ground line */}
      <line x1="0" y1="65" x2="1200" y2="65" strokeWidth="0.8" />

      {/* Group of 3 walking figures */}
      <g>
        {/* Figure 1 */}
        <circle cx="40" cy="28" r="6" strokeWidth="1" />
        <path d="M40 34 L35 52 L45 52 Z" strokeWidth="1" />
        <line x1="36" y1="42" x2="28" y2="38" strokeWidth="0.8" />
        <line x1="44" y1="42" x2="52" y2="38" strokeWidth="0.8" />
        <line x1="37" y1="52" x2="33" y2="64" strokeWidth="0.8" />
        <line x1="43" y1="52" x2="47" y2="64" strokeWidth="0.8" />
        {/* Figure 2 */}
        <circle cx="70" cy="30" r="6" strokeWidth="1" />
        <path d="M70 36 L65 54 L75 54 Z" strokeWidth="1" />
        <line x1="66" y1="44" x2="58" y2="40" strokeWidth="0.8" />
        <line x1="74" y1="44" x2="82" y2="40" strokeWidth="0.8" />
        <line x1="67" y1="54" x2="63" y2="64" strokeWidth="0.8" />
        <line x1="73" y1="54" x2="77" y2="64" strokeWidth="0.8" />
        {/* Figure 3 */}
        <circle cx="100" cy="26" r="6" strokeWidth="1" />
        <path d="M100 32 L95 50 L105 50 Z" strokeWidth="1" />
        <line x1="96" y1="40" x2="88" y2="36" strokeWidth="0.8" />
        <line x1="104" y1="40" x2="112" y2="36" strokeWidth="0.8" />
        <line x1="97" y1="50" x2="93" y2="64" strokeWidth="0.8" />
        <line x1="103" y1="50" x2="107" y2="64" strokeWidth="0.8" />
      </g>

      {/* Tree 1 */}
      <g>
        <line x1="160" y1="64" x2="160" y2="22" strokeWidth="1" />
        <path d="M160 22 L150 32 M160 22 L170 32" strokeWidth="0.8" />
        <path d="M160 35 L148 45 M160 35 L172 45" strokeWidth="0.8" />
        <circle cx="160" cy="18" r="4" strokeWidth="0.8" />
        <circle cx="150" cy="29" r="3" strokeWidth="0.6" />
        <circle cx="170" cy="29" r="3" strokeWidth="0.6" />
      </g>

      {/* Deer/animal */}
      <g>
        <circle cx="230" cy="38" r="4" strokeWidth="0.8" />
        <line x1="230" y1="42" x2="230" y2="35" strokeWidth="0.6" />
        <path d="M222 40 L240 42" strokeWidth="0.8" />
        <path d="M240 42 L242 46 L240 50 L238 46 Z" strokeWidth="0.8" />
        {/* Legs */}
        <line x1="225" y1="43" x2="223" y2="64" strokeWidth="0.6" />
        <line x1="230" y1="44" x2="228" y2="64" strokeWidth="0.6" />
        <line x1="235" y1="44" x2="237" y2="64" strokeWidth="0.6" />
        <line x1="238" y1="43" x2="240" y2="64" strokeWidth="0.6" />
        {/* Antlers */}
        <path d="M228 35 L225 26 L222 30 M232 35 L235 26 L238 30" strokeWidth="0.6" />
      </g>

      {/* Zigzag pattern */}
      <path d="M280 55 L290 45 L300 55 L310 45 L320 55 L330 45 L340 55 L350 45 L360 55 L370 45 L380 55" strokeWidth="0.8" />

      {/* Figure with laptop */}
      <g>
        <circle cx="430" cy="25" r="7" strokeWidth="1" />
        <path d="M430 32 L422 55 L438 55 Z" strokeWidth="1" />
        <line x1="424" y1="42" x2="414" y2="38" strokeWidth="0.8" />
        <line x1="436" y1="42" x2="446" y2="38" strokeWidth="0.8" />
        {/* Laptop */}
        <rect x="443" y="34" width="14" height="8" strokeWidth="0.7" />
        <line x1="450" y1="42" x2="450" y2="45" strokeWidth="0.6" />
        <line x1="445" y1="45" x2="455" y2="45" strokeWidth="0.6" />
        <line x1="425" y1="55" x2="422" y2="64" strokeWidth="0.8" />
        <line x1="435" y1="55" x2="438" y2="64" strokeWidth="0.8" />
      </g>

      {/* Tree 2 */}
      <g>
        <line x1="520" y1="64" x2="520" y2="20" strokeWidth="1" />
        <path d="M520 20 L510 30 M520 20 L530 30" strokeWidth="0.8" />
        <path d="M520 33 L508 43 M520 33 L532 43" strokeWidth="0.8" />
        <circle cx="520" cy="16" r="4" strokeWidth="0.8" />
        <circle cx="510" cy="27" r="3" strokeWidth="0.6" />
        <circle cx="530" cy="27" r="3" strokeWidth="0.6" />
      </g>

      {/* Birds */}
      <path d="M580 20 L588 12 L596 20" strokeWidth="0.8" />
      <path d="M610 25 L616 18 L622 25" strokeWidth="0.8" />
      <path d="M640 22 L646 15 L652 22" strokeWidth="0.8" />

      {/* Dots row */}
      {[...Array(8)].map((_, i) => (
        <circle key={`d-${i}`} cx={680 + i * 12} cy="50" r="1.5" fill="currentColor" strokeWidth="0" />
      ))}

      {/* Two figures */}
      <g>
        <circle cx="810" cy="30" r="6" strokeWidth="1" />
        <path d="M810 36 L805 54 L815 54 Z" strokeWidth="1" />
        <line x1="806" y1="44" x2="798" y2="40" strokeWidth="0.8" />
        <line x1="814" y1="44" x2="822" y2="40" strokeWidth="0.8" />
        <line x1="807" y1="54" x2="803" y2="64" strokeWidth="0.8" />
        <line x1="813" y1="54" x2="817" y2="64" strokeWidth="0.8" />

        <circle cx="845" cy="28" r="6" strokeWidth="1" />
        <path d="M845 34 L840 52 L850 52 Z" strokeWidth="1" />
        <line x1="841" y1="42" x2="833" y2="38" strokeWidth="0.8" />
        <line x1="849" y1="42" x2="857" y2="38" strokeWidth="0.8" />
        <line x1="842" y1="52" x2="838" y2="64" strokeWidth="0.8" />
        <line x1="848" y1="52" x2="852" y2="64" strokeWidth="0.8" />
      </g>

      {/* Another animal - small bird/peacock */}
      <g>
        <circle cx="910" cy="45" r="4" strokeWidth="0.8" />
        <path d="M910 49 L907 60 L913 60 Z" strokeWidth="0.8" />
        <path d="M907 45 L898 38 M908 43 L900 33 M910 42 L906 30 M912 43 L918 33 M913 45 L922 38" strokeWidth="0.6" />
      </g>

      {/* Tree 3 */}
      <g>
        <line x1="970" y1="64" x2="970" y2="24" strokeWidth="1" />
        <path d="M970 24 L960 34 M970 24 L980 34" strokeWidth="0.8" />
        <path d="M970 37 L958 47 M970 37 L982 47" strokeWidth="0.8" />
        <circle cx="970" cy="20" r="4" strokeWidth="0.8" />
      </g>

      {/* Ending geometric pattern */}
      <g>
        <path d="M1020 55 L1030 45 L1040 55 L1050 45 L1060 55" strokeWidth="0.8" />
        <path d="M1080 55 L1090 45 L1100 55 L1110 45 L1120 55" strokeWidth="0.8" />
        {/* Small triangles */}
        <path d="M1140 55 L1145 45 L1150 55 Z" strokeWidth="0.6" />
        <path d="M1155 55 L1160 45 L1165 55 Z" strokeWidth="0.6" />
        <path d="M1170 55 L1175 45 L1180 55 Z" strokeWidth="0.6" />
      </g>

      {/* Scattered small dots */}
      <circle cx="200" cy="58" r="1" fill="currentColor" strokeWidth="0" />
      <circle cx="470" cy="58" r="1" fill="currentColor" strokeWidth="0" />
      <circle cx="770" cy="58" r="1" fill="currentColor" strokeWidth="0" />
      <circle cx="1000" cy="58" r="1" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}
