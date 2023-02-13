import { MantineThemeOverride } from "@mantine/core";

const themeOverride: MantineThemeOverride = {
  defaultRadius: "md",

  primaryColor: "grape",

  fontFamily: "Dosis, sans-serif",
  fontFamilyMonospace: "Roboto Mono, monospace",

  headings: {
    fontFamily: "Dosis, sans-serif",
    fontWeight: 600,
    sizes: {
      h1: {
        fontSize: "3rem",
        lineHeight: "3.5rem",
      },
      h2: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
      },
      h3: {
        fontSize: "2rem",
        lineHeight: "2.5rem",
      },
      h4: {
        fontSize: "1.5rem",
        lineHeight: "2rem",
      },
      h5: {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
      },
      h6: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
    },
  },

  loader: "dots",

  dateFormat: "dd MMMM yyyy",
};

export default themeOverride;
