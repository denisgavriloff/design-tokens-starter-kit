/**
 * Do not edit directly
 * Generated on Thu, 27 Apr 2023 06:12:35 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "color": {
    "white": DesignToken,
    "black": DesignToken,
    "primary": DesignToken,
    "card": {
      "bg": DesignToken,
      "fg": DesignToken
    },
    "header": {
      "bg": DesignToken,
      "fg": DesignToken
    },
    "footer": {
      "bg": DesignToken,
      "fg": DesignToken
    },
    "green": DesignToken,
    "main-section": {
      "bg": DesignToken,
      "fg": DesignToken
    },
    "haze": DesignToken,
    "red": DesignToken,
    "dark-blue": DesignToken
  },
  "spacing": {
    "small": DesignToken,
    "medium": DesignToken
  },
  "sizing": {
    "large": DesignToken,
    "small": DesignToken,
    "medium": DesignToken
  },
  "tokenSetOrder": {
    "0": DesignToken
  }
}