import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CustomDoc from "./Simple.mdx";
import "./style.css";

const customProperties = {
  "--color-primary": [
    { value: "#ff017d", selector: ":root" },
    { value: "blue", selector: ":root", media: "(min-width: 960px)" },
    { value: "gold", selector: ".foo" },
  ],
  "--amount-suffix-content": [{ value: '"$"', selector: '[data-lang="us"]' }],
};

export default {
  title: "Simple Component/CSF",
  parameters: {
    cssprops: { customProperties },
    docs: { page: CustomDoc },
  },
  component: (args) => <div className={args.className}>Hello world!</div>,
} as Meta;

export const DefaultGroup: StoryObj = {
  args: {
    className: "foo",
  },
};
export const FlatGroup: StoryObj = {
  parameters: {
    cssprops: {
      group: {
        label: "{{name}} @ {{selector}}{{#if media}} {{media}}{{/if}}",
      },
    },
  },
};
export const SubcategoryGroup: StoryObj = {
  parameters: {
    cssprops: {
      group: {
        label: "{{#if media}}{{media}}{{else}}default{{/if}}",
        category: "{{selector}}",
        subcategory: "{{name}}",
      },
    },
  },
};
export const RegExpGroup: StoryObj = {
  parameters: {
    cssprops: {
      group: {
        label: "{{#if media}}{{media}}{{else}}default{{/if}}",
        category: "{{selector}}",
        subcategory: "{{#regex name='^--(?<foo>.*)$'}}{{foo}}{{/regex}}",
      },
    },
  },
};
