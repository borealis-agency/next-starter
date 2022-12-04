module.exports = {
  customSyntax: "postcss-scss",
  overrides: [
    {
      files: ["**/*.{css}"],
      extends: ["stylelint-config-standard", "stylelint-config-prettier"],
    },
    {
      files: ["**/*.{scss}"],
      extends: ["stylelint-config-standard-scss", "stylelint-config-prettier"],
      rules: {
        "scss/double-slash-comment-empty-line-before": [
          "always",
          {
            except: ["inside-block"],
            ignore: ["between-comments"],
          },
        ],
        "scss/dollar-variable-empty-line-before": null,
        "scss/at-function-pattern": "^[a-z][a-zA-Z0-9-]+$",
      },
    },
  ],
  rules: {
    "selector-class-pattern":
      "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
    "keyframes-name-pattern": "^[a-z][a-zA-Z0-9-]+$",
    "font-family-name-quotes": "always-unless-keyword",
    "shorthand-property-no-redundant-values": null,
    "rule-empty-line-before": [
      "always",
      {
        except: ["first-nested", "after-single-line-comment"],
      },
    ],
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["first-nested", "blockless-after-same-name-blockless"],
        ignore: ["after-comment"],
      },
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"],
      },
    ],
    "no-descending-specificity": null,
  },
};
