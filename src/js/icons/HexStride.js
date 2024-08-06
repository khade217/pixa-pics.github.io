import * as React from "react"
const HexStride = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 24 24"
        {...props}
    >
        <defs>
            <clipPath id="a">
                <path d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
        <g clipPath="url(#a)">
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.599 2.478 12 2.132l-.648.374v9.618l-8.281 4.78v.693l.647.374h.001l8.257-4.767 8.281 4.781.672-.388v-.664l-8.33-4.81V2.478zm-2.323.649-1.248.721v6.931L3.071 14.22v1.441l7.205-4.161V3.127zM8.005 4.438l-1.247.72V9.47l-3.687 2.128v1.44l4.934-2.848V4.438zM5.849 5.683l-1.248.72v1.881l-1.53.883v1.44l2.778-1.603V5.683zM4.796 18.592l1.247.721 5.93-3.425 5.959 3.439 1.246-.72-7.205-4.159-7.177 4.144zm2.27 1.311 1.247.72 3.661-2.112 3.686 2.128 1.247-.721-4.932-2.848-4.909 2.833zm2.156 1.245 1.247.72 1.555-.897 1.53.884 1.248-.722-2.778-1.603-2.802 1.618zM14.924 3.82l-1.247-.72v8.404l7.252 4.187V14.25l-6.004-3.466-.001-6.964zm2.272 1.311-1.247-.719-.002 5.78 4.982 2.875v-1.44l-3.734-2.156.001-4.34zM19.3 8.198l.001-1.851-1.247-.72-.002 3.29 2.877 1.661v-1.44l-1.629-.94z"
            />
        </g>
    </svg>
)
export default HexStride