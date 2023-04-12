/**
 * Do not edit directly
 * Generated on Wed, 12 Apr 2023 10:02:35 GMT
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
    "green": DesignToken
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