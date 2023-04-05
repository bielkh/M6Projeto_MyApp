import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    .tituloPedido {
        display: flex;
        justify-content: center;
        margin: 80px 0px;
        font-size: 45px;
    }
    `;

    export default Global;