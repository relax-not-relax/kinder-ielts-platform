/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.{js,ts}",
  ],
  safelist: [
    "text-custom-green",
    "text-custom-yellow",
    "text-custom-red",
    "text-custom-purple",
    "text-custom-dark-green",
    "border-custom-green",
    "border-custom-yellow",
    "border-custom-red",
    "border-custom-purple",
    "border-custom-dark-green",
  ],
  theme: {
    extend: {
      screens: {
        sm: "376px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        //green: "#159E64",
        yellow: "#F6E721",
        "custom-green": "#159E64",
        "custom-dark-green": "#125237",
        "custom-yellow": "#EBA612",
        "custom-red": "#D92323",
        "custom-blur-green": "#D0ECE0",
        "custom-purple": "#6A1EB6",
        "light-green": "#DCF0E8",
      },
      progress: {
        defaultProps: {
          variant: "filled",
          color: "blue",
          size: "md",
          value: 0,
          label: false,
          className: "",
          barProps: {},
        },
        valid: {
          variants: ["filled", "gradient"],
          colors: [
            "blue-gray",
            "gray",
            "brown",
            "deep-orange",
            "orange",
            "amber",
            "yellow",
            "lime",
            "light-green",
            "green",
            "teal",
            "cyan",
            "light-blue",
            "blue",
            "indigo",
            "deep-purple",
            "purple",
            "pink",
            "red",
          ],
          sizes: ["sm", "md", "lg"],
        },
        styles: {
          base: {
            container: {
              initial: {
                display: "flex",
                justifyContent: "flex-start",
                bg: "bg-blue-gray-50",
                overflow: "overflow-hidden",
                width: "w-full",
                fontFamily: "font-sans",
                borderRadius: "rounded-full",
                fontSize: "text-xs",
                fontWeight: "font-medium",
              },
              withLabel: {},
            },
            bar: {
              display: "flex",
              justifyContent: "justify-center",
              alignItems: "items-center",
              height: "h-full",
              overflow: "overflow-hidden",
              wordBreak: "break-all",
              borderRadius: "rounded-full",
            },
          },
          sizes: {
            sm: {
              container: {
                initial: {
                  height: "h-1.5",
                },
                withLabel: {
                  height: "h-3.5",
                },
              },
              bar: {},
            },
            md: {
              container: {
                initial: {
                  height: "h-2.5",
                },
                withLabel: {
                  height: "h-4",
                },
              },
              bar: {},
            },
            lg: {
              container: {
                initial: {
                  height: "h-3.5",
                },
                withLabel: {
                  height: "h-5",
                },
              },
              bar: {},
            },
          },
          variants: {
            filled: {
              "blue-gray": {
                backgroud: "bg-blue-gray-500",
                color: "text-white",
              },
              gray: {
                backgroud: "bg-gray-500",
                color: "text-white",
              },
              brown: {
                backgroud: "bg-brown-500",
                color: "text-white",
              },
              "deep-orange": {
                backgroud: "bg-deep-orange-500",
                color: "text-white",
              },
              orange: {
                backgroud: "bg-orange-500",
                color: "text-white",
              },
              amber: {
                backgroud: "bg-amber-500",
                color: "text-black",
              },
              yellow: {
                backgroud: "bg-yellow-500",
                color: "text-black",
              },
              lime: {
                backgroud: "bg-lime-500",
                color: "text-black",
              },
              "light-green": {
                backgroud: "#159E64",
                color: "text-white",
              },
              green: {
                backgroud: "#159E64",
                color: "text-white",
              },
              teal: {
                backgroud: "bg-teal-500",
                color: "text-white",
              },
              cyan: {
                backgroud: "bg-cyan-500",
                color: "text-white",
              },
              "light-blue": {
                backgroud: "bg-light-blue-500",
                color: "text-white",
              },
              blue: {
                backgroud: "bg-blue-500",
                color: "text-white",
              },
              indigo: {
                backgroud: "bg-indigo-500",
                color: "text-white",
              },
              "deep-purple": {
                backgroud: "bg-deep-purple-500",
                color: "text-white",
              },
              purple: {
                backgroud: "bg-purple-500",
                color: "text-white",
              },
              pink: {
                backgroud: "bg-pink-500",
                color: "text-white",
              },
              red: {
                backgroud: "bg-red-500",
                color: "text-white",
              },
            },
            gradient: {
              "blue-gray": {
                backgroud:
                  "bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400",
                color: "text-white",
              },
              gray: {
                backgroud: "bg-gradient-to-tr from-gray-600 to-gray-400",
                color: "text-white",
              },
              brown: {
                backgroud: "bg-gradient-to-tr from-brown-600 to-brown-400",
                color: "text-white",
              },
              "deep-orange": {
                backgroud:
                  "bg-gradient-to-tr from-deep-orange-600 to-deep-orange-400",
                color: "text-white",
              },
              orange: {
                backgroud: "bg-gradient-to-tr from-orange-600 to-orange-400",
                color: "text-white",
              },
              amber: {
                backgroud: "bg-gradient-to-tr from-amber-600 to-amber-400",
                color: "text-black",
              },
              yellow: {
                backgroud: "bg-gradient-to-tr from-yellow-600 to-yellow-400",
                color: "text-black",
              },
              lime: {
                backgroud: "bg-gradient-to-tr from-lime-600 to-lime-400",
                color: "text-black",
              },
              "light-green": {
                backgroud:
                  "bg-gradient-to-tr from-light-green-600 to-light-green-400",
                color: "text-white",
              },
              green: {
                backgroud: "bg-gradient-to-tr from-green-600 to-green-400",
                color: "text-white",
              },
              teal: {
                backgroud: "bg-gradient-to-tr from-teal-600 to-teal-400",
                color: "text-white",
              },
              cyan: {
                backgroud: "bg-gradient-to-tr from-cyan-600 to-cyan-400",
                color: "text-white",
              },
              "light-blue": {
                backgroud:
                  "bg-gradient-to-tr from-light-blue-600 to-light-blue-400",
                color: "text-white",
              },
              blue: {
                backgroud: "bg-gradient-to-tr from-blue-600 to-blue-400",
                color: "text-white",
              },
              indigo: {
                backgroud: "bg-gradient-to-tr from-indigo-600 to-indigo-400",
                color: "text-white",
              },
              "deep-purple": {
                backgroud:
                  "bg-gradient-to-tr from-deep-purple-600 to-deep-purple-400",
                color: "text-white",
              },
              purple: {
                backgroud: "bg-gradient-to-tr from-purple-600 to-purple-400",
                color: "text-white",
              },
              pink: {
                backgroud: "bg-gradient-to-tr from-pink-600 to-pink-400",
                color: "text-white",
              },
              red: {
                backgroud: "bg-gradient-to-tr from-red-600 to-red-400",
                color: "text-white",
              },
            },
          },
        },
      },
    },
  },
  plugins: [],
});
