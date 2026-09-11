/**
 * Clerk configuration.
 *
 * The publishable key comes from the environment so it is never committed.
 * When it is absent, `hasClerk` is false and the app mounts without
 * ClerkProvider — the site keeps working and the auth controls simply do not
 * render, rather than the whole page failing.
 */
export const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY ?? "";

export const hasClerk = Boolean(publishableKey);

/**
 * Clerk renders its own markup, so the design system is handed over as values
 * rather than Tailwind classes. These are the hex equivalents of the tokens
 * already in use: amber-700, stone-900, stone-500, amber-100, stone-50, and
 * the site's display face.
 */
export const clerkAppearance = {
  variables: {
    colorPrimary: "#b45309",
    colorText: "#1c1917",
    colorTextSecondary: "#78716c",
    colorBackground: "#fafaf9",
    colorInputBackground: "#fef3c7",
    colorInputText: "#1c1917",
    fontFamily: "ClashDisplay_Regular",
    borderRadius: "0.125rem",
  },
};
