export type GestureCoord = {x: number; y: number};

export interface ThemeInfo {
  isDarkTheme: boolean;
  colorTheme: colorThemeType;
}

export type colorThemeType =
  | 'default'
  | 'blue'
  | 'pink'
  | 'green'
  | 'orange'
  | 'red'
  | 'yellow'
  | 'cyan';
