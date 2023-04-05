/**
 * Do not edit directly
 * Generated on Wed, 05 Apr 2023 05:32:49 GMT
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
    "primary": DesignToken
  },
  "tokenSetOrder": {
    "0": DesignToken
  }
}