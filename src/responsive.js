import { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen (max-width: 50em){
            ${props}
        }
    `
}

