import React from "react";

export default {
  title: 'Forms/<input>/type="text"',
  argTypes: {
    type: {
      type: { name: "string", required: false },
      options: ["text"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "text" },
      },
      control: {
        type: "select",
      },
    },
    disabled: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    readOnly: {
      name: "readonly",
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    required: {
      type: { name: "boolean", required: false },
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    placeholder: {
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
    defaultValue: {
      name: "value",
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "" },
      },
    },
  },
};

const Template = (args) => <input {...args} />;

export const input = Template.bind({});

input.storyName = "<input>";

export const text = Template.bind({});

text.storyName = 'type="text"';
text.args = {
  type: "text",
};

export const placeholder = Template.bind({});

placeholder.storyName = "placeholder";
placeholder.args = {
  placeholder: "Placeholder",
};

export const value = Template.bind({});

value.storyName = "value";
value.args = {
  defaultValue: "Example",
};

export const disabled = Template.bind({});

disabled.storyName = "disabled";
disabled.args = {
  defaultValue: "Disabled",
  disabled: true,
};

export const readonly = Template.bind({});

readonly.storyName = "readonly";
readonly.args = {
  defaultValue: "Read-only",
  readOnly: true,
};

export const requiredEmpty = Template.bind({});

requiredEmpty.storyName = "required empty";
requiredEmpty.args = {
  required: true,
};

export const requiredFilled = Template.bind({});

requiredFilled.storyName = "required filled";
requiredFilled.args = {
  defaultValue: "Required filled",
  required: true,
};
