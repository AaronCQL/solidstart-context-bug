# SolidStart Context Bug

## Issue

Setting a state within an `onMount` hook of a context doesn't work as expected when the provider component is wrapping the `Routes` component. The `onMount` hook is called and it does indeed run, but any `setState` calls within it are not reflected in the UI.

## Steps to Reproduce

Refer to <https://github.com/AaronCQL/solidstart-context-bug>, which contains the minimal reproducible code. See commit [`92ad2d`](https://github.com/AaronCQL/solidstart-context-bug/commit/92ad2dda6f64af094026848bdac616af934b761a) for the minimal changes.

Steps to reproduce:

1. Clone the repo
2. Install all deps with `pnpm i`
3. Run `pnpm dev` and launch the website
4. Open the dev tools
5. Refresh the browser and notice that the console statement `"onMount from context.tsx"` from the `onMount` function is properly logged, but the count isn't updated in the UI even though there is a call to `setCount(10000000)`

## Possible Fixes

This issue seems to only occur when the provider component is wrapping the `Routes` component:

```tsx
// in root.tsx:
<CountProvider>
  <Routes>
    <FileRoutes />
  </Routes>
</CountProvider>
```

If we were to instead wrap the `Home` component in `routes/index.tsx` with the provider component, then the count will be updated as expected on first page load.
