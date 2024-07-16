export type ButtonStarProps = {
  onSelect: () => void;
  text?: string;
  isMobile ?: boolean;
  appState ?: any;
};


export type GenericButtonProps = {
  onClick?: () => void;
  text: string;
  theme?: 'dark' | 'light';
  fullWidth?: boolean;
  isLink: boolean;
  link?: string;
  type: 'solid' | 'light';
};