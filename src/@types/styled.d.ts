import 'styled-components';
import { defaultTheme } from '../Styles/themes/Default';


type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}
