import * as React from "react"
const SvgComponent = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path fill={"currentColor"} d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-7 10.5h-1V15H9.5v-1.5h-3V9H8v3h1.5V9H11v3h1v1.5m6 1.5h-1.8l-1.8-2.2V15H13V9h1.5v2.2L16.2 9H18l-2.2 3 2.2 3Z" />
    </svg>
)
export default SvgComponent