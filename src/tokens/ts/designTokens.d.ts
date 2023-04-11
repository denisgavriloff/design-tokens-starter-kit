/**
 * Do not edit directly
 * Generated on Tue, 11 Apr 2023 14:35:39 GMT
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
    }
  },
  "spacing": {
    "small": DesignToken
  },
  "sizing": {
    "large": DesignToken
  },
  "tokenSetOrder": {
    "0": DesignToken
  }
}