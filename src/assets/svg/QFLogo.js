import * as React from "react";
function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 320 280"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__linear-gradient"
          x1={249.64}
          y1={216.74}
          x2={249.64}
          y2={261.37}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f2f6fc" />
          <stop offset={0.94} />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-2"
          x1={51.01}
          y1={177.68}
          x2={307.64}
          y2={177.68}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.17} stopColor="#cff6fc" />
          <stop offset={0.63} stopColor="#6961e6" />
          <stop offset={0.79} stopColor="#7461fe" />
          <stop offset={1} stopColor="#9d38ff" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={49.64}
          y1={96.44}
          x2={274.39}
          y2={197.19}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#1572ff" />
          <stop offset={0.58} stopColor="#7461fe" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-4"
          x1={51.01}
          y1={169.66}
          x2={276.2}
          y2={169.66}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#1572ff" />
          <stop offset={0.57} stopColor="#94a7ff" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-5"
          x1={73.77}
          y1={282.2}
          x2={235.61}
          y2={94.37}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#1572ff" />
          <stop offset={0.48} stopColor="#7cb5f4" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-6"
          x1={141.94}
          y1={341.69}
          x2={110.03}
          y2={69.53}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#0084ee" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-7"
          x1={51.01}
          y1={230.68}
          x2={342}
          y2={230.68}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={0.17} stopColor="#cff6fc" />
          <stop offset={0.58} stopColor="#6961e6" />
          <stop offset={0.74} stopColor="#7461fe" />
          <stop offset={1} stopColor="#c016ff" />
        </linearGradient>
        <clipPath id="prefix__clip-path" transform="translate(-33.12 -34.2)">
          <path
            d="M252.74 216.74h-50.83l44.63 44.63h-67.21a83.68 83.68 0 1174-44.57h48.25A128.33 128.33 0 1053 155.4c0 .16-.05.32-.07.49a126.2 126.2 0 00-.67 4.34c-.06.42-.11.83-.16 1.24-.2 1.51-.36 3-.5 4.54 0 .33-.06.66-.08 1-.14 1.61-.25 3.22-.32 4.84v.59q-.18 4.22-.08 8.45c0 .51 0 1 .06 1.53s0 1.06.06 1.6.08 1.38.12 2.07c0 .34 0 .67.07 1 0 .81.12 1.62.2 2.43v.61c.09.91.19 1.81.29 2.71v.31c.12 1 .25 2 .38 2.91v.09a128 128 0 003.94 18v.11c.27.92.55 1.84.85 2.75l.12.36c.26.83.54 1.65.82 2.47l.24.67c.25.71.51 1.42.77 2.13l.39 1c.22.59.45 1.17.68 1.75l.57 1.38c.19.46.37.91.57 1.36s.5 1.16.76 1.74c.14.33.29.65.44 1 .31.69.64 1.38 1 2.07l.3.61c.38.79.77 1.57 1.17 2.35l.16.33c.44.85.89 1.71 1.35 2.56v.08a127.3 127.3 0 0010 15.56v.06q.89 1.17 1.8 2.34l.19.24c.57.71 1.13 1.42 1.71 2.12l.39.47c.52.62 1 1.25 1.59 1.87.21.25.42.49.64.73.46.53.93 1.06 1.4 1.58s.7.76 1.06 1.14.7.77 1.07 1.15q1.07 1.13 2.16 2.22v.06l.06.05q1.09 1.09 2.22 2.16c.38.36.76.72 1.15 1.07s.75.71 1.14 1.06l1.57 1.4.74.65c.62.53 1.24 1.06 1.87 1.58l.47.39c.7.58 1.41 1.14 2.12 1.7l.24.2c.78.61 1.56 1.21 2.34 1.79h.06a128 128 0 0015.55 10l.1.05 2.55 1.35.33.17 2.34 1.16.63.3c.68.33 1.37.65 2.06 1l1 .44 1.73.76 1.36.57 1.37.56 1.77.69 1 .39 2.14.77.66.24 2.47.83.36.11c.91.3 1.83.58 2.76.86h.1a126.65 126.65 0 0018 3.95h.3c1 .14 1.94.27 2.92.39h.3c.91.11 1.81.21 2.72.3l.6.05c.81.07 1.63.15 2.45.2l1 .07c.7 0 1.4.09 2.11.12.52 0 1 0 1.56.06l1.56.06h3.18l11.81-.06h100l.06.06H342z"
            fill="none"
          />
        </clipPath>
        <style>
          {
            ".prefix__cls-4,.prefix__cls-5{fill:#1d1d1b}.prefix__cls-5{stroke:#fff;stroke-width:2.78px}.prefix__cls-9{opacity:.75;mix-blend-mode:multiply}.prefix__cls-15{fill:url(#prefix__linear-gradient-7)}"
          }
        </style>
        <mask
          id="prefix__mask"
          x={168.79}
          y={182.54}
          width={95.46}
          height={44.63}
          maskUnits="userSpaceOnUse"
        >
          <path
            fill="url(#prefix__linear-gradient)"
            d="M297.37 261.37l-44.63-44.63h-50.83l44.63 44.63h50.83z"
            transform="translate(-33.12 -34.2)"
          />
        </mask>
      </defs>
      <g style={{ isolation: "isolate" }}>
        <g id="prefix__Layer_1" data-name="Layer 1">
          <g clipPath="url(#prefix__clip-path)">
            <path
              d="M179.33 261.37a83.68 83.68 0 1174-44.57h48.25a128.36 128.36 0 10-31.5 51.62q3.42-3.44 6.54-7.05z"
              transform="translate(-33.12 -34.2)"
              fill="url(#prefix__linear-gradient-2)"
            />
            <path
              d="M306.39 159.84a128.31 128.31 0 10-249.11 57.54C75 211.65 88 204.63 97.88 196.89a83.64 83.64 0 0169.73-102h.32c1.15-.16 2.32-.31 3.49-.42a128.33 128.33 0 01136.15 87.73 129.91 129.91 0 00-1.18-22.36z"
              transform="translate(-33.12 -34.2)"
              fill="url(#prefix__linear-gradient-3)"
            />
            <path
              d="M95.64 177.68a83.29 83.29 0 0118.08-51.91l.57-.74c0-.06.09-.11.13-.16.51-.62 1-1.22 1.55-1.82A128.33 128.33 0 01276.2 93.52 128.32 128.32 0 1098.57 277.41 129.59 129.59 0 00117.14 290c7.91-17.4 5.42-36.44.31-55.92a83.42 83.42 0 01-21.81-56.4z"
              transform="translate(-33.12 -34.2)"
              fill="url(#prefix__linear-gradient-4)"
            />
            <path
              d="M176.17 261.29A83.68 83.68 0 0196 185c0-.49-.1-1-.13-1.46v-.78c0-.58-.06-1.17-.08-1.75a128.33 128.33 0 0197-130.94 128.32 128.32 0 10-4.49 255.63 129.32 129.32 0 0022.12-3.49c-7.51-18.55-20.1-31-34.25-40.92z"
              transform="translate(-33.12 -34.2)"
              fill="url(#prefix__linear-gradient-5)"
            />
            <path fill="#a55299" d="M220.19 182.6h48.25" />
            <path
              d="M85.48 90.18a127.83 127.83 0 00-34.37 82.31c-.06 1.56-.09 3.11-.1 4.66v1A128.25 128.25 0 00177.81 306h2.81q3.81 0 7.66-.31a129.75 129.75 0 0021.42-3.32v-1.86a82.66 82.66 0 00-16.15-24.45c-2.47-2.62-11.2-7.52-18.88-11.29-5.39-2.65-10.26-4.74-12.08-5.1a83.29 83.29 0 01-39.94-20.44l-.4-.34c-.79-.75-1.57-1.52-2.34-2.29a128.42 128.42 0 01-32-131.74 126.88 126.88 0 0114.24-29.68 129.37 129.37 0 00-16.64 15"
              transform="translate(-33.12 -34.2)"
              fill="url(#prefix__linear-gradient-6)"
            />
            <path
              className="prefix__cls-15"
              d="M342 306l-89.26-89.26h-50.83l44.63 44.63h-67.21A128.34 128.34 0 0153 155.37 128.39 128.39 0 00179.33 306l11.81-.06h100l.06.06z"
              transform="translate(-33.12 -34.2)"
            />
            <path
              className="prefix__cls-15"
              d="M342 306l-89.26-89.26h-50.83l44.63 44.63h-67.21A128.34 128.34 0 0153 155.37 128.39 128.39 0 00179.33 306l11.81-.06h100l.06.06z"
              transform="translate(-33.12 -34.2)"
            />
            <g mask="url(#prefix__mask)">
              <path
                fill="#fff"
                d="M264.25 227.17l-44.63-44.63h-50.83l44.63 44.63h50.83z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
export default SvgComponent;
