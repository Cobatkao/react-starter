import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #f9f9f9;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .clearfix:after {visibility: hidden;display: block;font-size: 0;content: ".";clear: both;height: 0;}
  .clearfix {zoom: 1;}
  
  @font-face {
    font-family: "iconfont";
    src: url("./iconfont.eot?t=1610193353147"); /* IE9 */
    src: url("./iconfont.eot?t=1610193353147#iefix") format("embedded-opentype"),
      /* IE6-IE8 */
        url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAARwAAsAAAAACLAAAAQkAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqEeIQhATYCJAMQCwoABCAFhG0HOxuGB8iOkVtELcsv/H8E1X6fPW/30/5DVoAKLZc/Lo+gVBLpopLy0dEEKvbm/z39m83JjHRCBrt9UHHTdspOmsHtg/g30E/2wTV1UTqwPHubS2RZVOIAx60Di2idyHgDlrHvAZ5hgg+eJ1BMcYHsxSZnAxWZMy0QD2IhF6iUtHIPOTQV9Za1GcQ7oKhZbZI7g7fx9+OnlVABKrUEnLn7VzECEP7F4lmWvPS/1LIQBXjrmSFtImEZkImbVusZ+dS/TF4xohVsAJquuWKtHt9nWf//M/9WpE3+yyNUElEHjrSD8GuBxBcLHyH44otQ8SVLKyE2T26iEx+B6AL8wHs0ZNUYhipraBuoqOhjJtqVY9fQzVccBA1Gi/T2gmMXfbYYGvLrnYXXr4mOE8JjVxwAcixjNzk1BQp7HRuNVw35cpqv+4j27tWrazIx5dSfHO00sj/cdemUL+eA4fmrGRevhjdHS9IPGBy/FrrsnVnNp7EtVx0br5of69BE2WrZaB62eMl+C/So0SLuMM4BoAQ6UTafQ2Qcjiw+IDinpwFIG7Et0whSzr58HbnmkDZfIUmvDszZcj0rZ9+WZhnvyuYmlew6irfg/dIrVwIvu5bynLydky3OPH9NnkjUdDFR1Xz3D536pBH7k6z+6MgYtdEf7EAHwvW2RvY7BPz/gdlXq2+8Y+XuHvb20LuhockHX3+cStba9P063pkefliexSrvgO9Epj80T3jdQizpoHJWjU7mIo31sswM+d85KBriyLYq5Tp6x3hlW9gn4u/O4FHW2olggoy76BB9EWr850Vdyw1Ny5GL5IlDryv8DpUws/5uiGIEQTmyxerLsaTwwCcrOMxpY/3fJrYfbS1A2Fbgq1eY1/YUwNk+UVl1IqLDU1VVZaIOVFVV4t4ckPLGq+PVq2HWRtboXKTpTpmPQOAj24GsiEXKHWoGjw9WAV4dnzQryUtTh/xE+lOM82H1ReuVmsFfVbAPxfXZcuhkXDGe983yDN5fQJ2RHtRvoSlwNDnrbObG/PEFsnvKvKNlioJXdPa5t4Z80EgmNA3mUGmYhKRpGp3xy1DTtgZ1TZtQLInb3NaPJi+yKmDROoDQox0qXd5D0uMsOuPvQs2Qt1DXE/JQnIbunm2zIUajaMhloADnleNiPlVIegYGTVIzobA4n0sXBTGFDWmJ2IV7EO7VUBwshPQaCyQlQk+GIXGSpgrwWLgM5udTeBFN5UI+Q4gYpijQzY1sexHBpwoAahcN4mJAAjiecjgxPkohMmzMQGufzwQJFcvHRffUNJjZIJqEuH+cB4L7CHSctHBUzbMMligh5InBIHkSiUYpgItFM5Tv+im4ovZRuSA+BkE0w1skkBvVI8dKif3lBe9wExTOEznkEHlEAVEE6QUWykVwlSSQS/NFAAA=")
        format("woff2"),
      url("./iconfont.woff?t=1610193353147") format("woff"),
      url("./iconfont.ttf?t=1610193353147") format("truetype"),
      /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url("./iconfont.svg?t=1610193353147#iconfont") format("svg"); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .icon-pen:before {
    content: "\e61e";
  }

  .icon-Aa:before {
    content: "\e636";
  }

  .icon-search:before {
    content: "\e653";
  }
`