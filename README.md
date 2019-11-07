# To reproduce

## Install

```shell
cd /tmp
git clone https://github.com/jonathaningram/ts-34796.git
cd /tmp/ts-34796
yarn
yarn start
```

## Observe error

```
Failed to compile.

/private/tmp/ts-34796/src/Link.tsx
TypeScript error in /private/tmp/ts-34796/src/Link.tsx(17,5):
No overload matches this call.
  Overload 1 of 3, '(first: CSSObject | TemplateStringsArray | InterpolationFunction<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>>, Theme>>, ...rest: Interpolation<...>[]): StyledComponent<...>', gave the following error.
    Argument of type 'FlattenInterpolation<ThemeProps<Theme>>' is not assignable to parameter of type 'Interpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>>, Theme>>'.
      Type 'FlattenInterpolation<ThemeProps<Theme>>' is not assignable to type 'FlattenInterpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>>, Theme>>'.
        Types of property 'concat' are incompatible.
          Type '{ (...items: ConcatArray<Interpolation<ThemeProps<Theme>>>[]): Interpolation<ThemeProps<Theme>>[]; (...items: (string | ... 10 more ... | undefined)[]): Interpolation<...>[]; }' is not assignable to type '{ (...items: ConcatArray<Interpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>>, Theme>>>[]): Interpolation<...>[]; (...items: (string | ... 10 more ... | undefined)[]): Interpolation<...>[]; }'.
            Types of parameters 'items' and 'items' are incompatible.
              Type 'ConcatArray<Interpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>>, Theme>>>' is not assignable to type 'ConcatArray<Interpolation<ThemeProps<Theme>>>'.
                Type 'Interpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>>, Theme>>' is not assignable to type 'Interpolation<ThemeProps<Theme>>'.
                  Type 'FlattenInterpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>>, Theme>>' is not assignable to type 'Interpolation<ThemeProps<Theme>>'.
                    Type 'FlattenInterpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>>, Theme>>' is not assignable to type 'FlattenInterpolation<ThemeProps<Theme>>'.
                      The types returned by 'concat(...)' are incompatible between these types.
                        Type 'Interpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>>, Theme>>[]' is not assignable to type 'Interpolation<ThemeProps<Theme>>[]'.
                          Type 'Interpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>>, Theme>>' is not assignable to type 'Interpolation<ThemeProps<Theme>>'.
                            Type 'FlattenInterpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>>, Theme>>' is not assignable to type 'Interpolation<ThemeProps<Theme>>'.
  Overload 2 of 3, '(first: CSSObject | TemplateStringsArray | InterpolationFunction<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>> & object, Theme>>, ...rest: Interpolation<...>[]): StyledComponent<...>', gave the following error.
    Argument of type 'FlattenInterpolation<ThemeProps<Theme>>' is not assignable to parameter of type 'Interpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>> & object, Theme>>'.
      Type 'FlattenInterpolation<ThemeProps<Theme>>' is not assignable to type 'FlattenInterpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>> & object, Theme>>'.
        Types of property 'concat' are incompatible.
          Type '{ (...items: ConcatArray<Interpolation<ThemeProps<Theme>>>[]): Interpolation<ThemeProps<Theme>>[]; (...items: (string | ... 10 more ... | undefined)[]): Interpolation<...>[]; }' is not assignable to type '{ (...items: ConcatArray<Interpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>> & object, Theme>>>[]): Interpolation<...>[]; (...items: (string | ... 10 more ... | undefined)[]): Interpolation<...>[]; }'.
            Types of parameters 'items' and 'items' are incompatible.
              Type 'ConcatArray<Interpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>> & object, Theme>>>' is not assignable to type 'ConcatArray<Interpolation<ThemeProps<Theme>>>'.
                Type 'Interpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>> & object, Theme>>' is not assignable to type 'Interpolation<ThemeProps<Theme>>'.
                  Type 'FlattenInterpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>> & object, Theme>>' is not assignable to type 'Interpolation<ThemeProps<Theme>>'.
                    Type 'FlattenInterpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>> & object, Theme>>' is not assignable to type 'FlattenInterpolation<ThemeProps<Theme>>'.
                      The types returned by 'concat(...)' are incompatible between these types.
                        Type 'Interpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>> & object, Theme>>[]' is not assignable to type 'Interpolation<ThemeProps<Theme>>[]'.
                          Type 'Interpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>> & object, Theme>>' is not assignable to type 'Interpolation<ThemeProps<Theme>>'.
                            Type 'FlattenInterpolation<ThemedStyledProps<LinkProps<unknown> & RefAttributes<Link<unknown>> & object, Theme>>' is not assignable to type 'Interpolation<ThemeProps<Theme>>'.  TS2769

    15 |
    16 | const Link = styled(ReactRouterLink)`
  > 17 |   ${linkCSS}
       |     ^
    18 | `;
    19 |
    20 | export default Link;
```
