import { create } from '@storybook/theming';

export default create({
    base: 'light',

    colorPrimary: '#404040',
    colorSecondary: '#2eaadc',

    // UI
    appBg: '#FFFFFF',
    appContentBg: '#FFFFFF',
    appBorderColor: 'lightgrey',
    appBorderRadius: 8,

    // Typography
    fontBase: 'Noto Sans, sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#404040',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: '#808080',
    barSelectedColor: '#37352f',
    barBg: '#FFFFFF',

    // Form colors
    inputBg: '#FFFFFF',
    inputBorder: '#808080',
    inputTextColor: '#404040',
    inputBorderRadius: 8,

    brandTitle: 'notion apps',
    brandTarget: '_self',
});
