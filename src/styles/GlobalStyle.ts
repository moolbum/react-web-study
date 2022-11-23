import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard Variable';
        font-weight: 45 920;
        font-style: normal;
        font-display: swap;
        src: local('Pretendard Variable'), url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/packages/pretendard/dist/web/variable/woff2/PretendardVariable.woff2') format('woff2-variations');
    }

    html {
        font-family: Pretendard Variable, sans-serif;
    }

    * {
        box-sizing: border-box;
    }


    #root, #root > div{
        height:100%;
    }
`;

export default GlobalStyle;

export const zIndex = {
  modal: 1000,
  alert: 1005,
  toast: 1010,
  fullLoading: 1015,
};
