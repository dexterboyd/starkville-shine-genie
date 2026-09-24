# Mobile page-speed improvements

## Changes
- Keep the existing home video and all inner-page gradient headers visually unchanged.
- Remove delayed entrance effects from the home headline, intro, and primary action so text paints immediately.
- Self-host only the Montserrat and Open Sans weights used by the site, enable `font-display: swap`, and preload the two first-paint fonts.
- Convert all below-fold service photos to compact responsive WebP files and add explicit dimensions, lazy loading, asynchronous decoding, `srcset`, and `sizes`.
- Remove the faint placeholder request from the About header and remove unused runtime providers that add JavaScript without serving current pages.
- Keep external scripts absent; reduce the home video’s network priority without removing autoplay or changing its appearance.

## Verification
- Build all static pages and verify every generated page still includes its H1 and body text before JavaScript.
- Verify image pages contain responsive lazy-loaded WebP markup with dimensions.
- Check the home and an inner page at mobile and desktop sizes for visual regressions, loading errors, and layout shifts.
- Confirm no Google Fonts request or entrance delay remains.

## Technical details
- Store local font files in `public/fonts` and local image variants in `src/assets`.
- Preserve existing routes, metadata, schema, copy, colors, spacing, and gradient headers.
- The inner-page LCP remains text, so no image preload will be added to those pages.
