# 🧵 Atelier

<!-- Replace the src below with your actual project screenshot -->
<img width="1920" height="904" alt="Atelier Hero Section" src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2274&auto=format&fit=crop" />

<br />

> **Where Innovative Design Meets Timeless Sophistication.**
> A premium, design-driven web experience inspired by modern fashion houses and contemporary craftsmanship.

<div align="center">

  [![Live Demo](https://img.shields.io/badge/Live_Demo-View_Atelier-e11d48?style=for-the-badge&logo=vercel&logoColor=white)](https://your-demo-link.com)
  [![Repo Size](https://img.shields.io/github/repo-size/yourusername/atelier?style=for-the-badge&color=94a3b8)](https://github.com/yourusername/atelier)
  [![License](https://img.shields.io/badge/License-MIT-rose?style=for-the-badge)](LICENSE)

</div>

<br />

## 💎 Project Overview

**Atelier** is a client-side showcase interface built with **HTML5**, **Tailwind CSS**, and **Vanilla JavaScript**. It is designed to represent a digital "Haute Couture" experience, focusing on typography hierarchy, negative space, and micro-interactions. The UI moves away from heavy contrasts, favoring soft gradients (Rose/Pink/Slate) and glass-like overlays to present a clean, breathable aesthetic.

## ✨ Key Features

<table>
  <tr>
    <td align="center" width="33%">
      <br>
      <h3>📐 Golden Ratio Layout</h3>
      <p>Spacing and proportions are meticulously calculated to ensure a breathable, editorial feel.</p>
      <br>
    </td>
    <td align="center" width="33%">
      <br>
      <h3>🎨 Soft Gradient UI</h3>
      <p>A refined palette using Rose, Pink, and Slate gradients for a modern, feminine-yet-bold look.</p>
      <br>
    </td>
    <td align="center" width="33%">
      <br>
      <h3>⚡ Zero Dependencies</h3>
      <p>Built with pure HTML/JS and Tailwind via CDN (or CLI), requiring no heavy framework overhead.</p>
      <br>
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <br>
      <h3>✒️ Typography First</h3>
      <p>Carefully balanced font weights (Medium/Semibold) and tracking for maximum readability and elegance.</p>
      <br>
    </td>
    <td align="center" width="33%">
      <br>
      <h3>🪄 Subtle Motion</h3>
      <p>Floating background elements and smooth hover transitions powered by CSS and Tailwind utilities.</p>
      <br>
    </td>
    <td align="center" width="33%">
      <br>
      <h3>📱 Fully Responsive</h3>
      <p>Fluid typography and layouts that adapt gracefully from mobile screens to 4k desktops.</p>
      <br>
    </td>
  </tr>
</table>

## 🛠️ Tech Stack

<div align="center">

  <!-- Core -->
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  </a>

  <br />

  <!-- Assets -->
  <a href="https://lucide.dev/">
    <img src="https://img.shields.io/badge/Lucide_Icons-F05032?style=for-the-badge&logo=svg&logoColor=white" alt="Lucide Icons" />
  </a>
  <a href="https://fonts.google.com/">
    <img src="https://img.shields.io/badge/Google_Fonts-4285F4?style=for-the-badge&logo=google-fonts&logoColor=white" alt="Google Fonts" />
  </a>

</div>

## 📮 Contact Form & Environment

The concierge form posts to **`/api/contact`**, a small server-side handler that
writes the enquiry into the Airtable base. The Airtable personal access token is
never sent to the browser.

### Why there is a server-side handler

A PAT can write to the base. Anything exposed to Vite under a `VITE_` prefix is
inlined into the client bundle and readable by every visitor, so the token is
deliberately kept **unprefixed** and read only in Node:

| File | Runs | Sees the token |
| :--- | :--- | :--- |
| `api/_enquiry.js` | server | ✅ validation + Airtable write |
| `api/contact.js` | server | ✅ HTTP entry point |
| `src/lib/enquiries.js` | browser | ❌ just `fetch("/api/contact")` |

### Local setup

Copy `.env.example` to `.env.local` and fill in:

```bash
AIRTABLE_PAT=pat...          # scope: data.records:write
AIRTABLE_BASE_ID=appHxVIvsomlNKVNS
AIRTABLE_TABLE_NAME=Enquiries
```

`npm run dev` mounts the real handler on the dev server (see the plugin in
`vite.config.js`), so local submissions write to Airtable exactly as production
does.

### Deploying

`npm run build` emits a static `dist/`, but the form needs the `/api/contact`
function to run — deploy on a host that executes the `api/` directory (Vercel,
Netlify, or equivalent) and set the three variables above **as environment
variables in the host's dashboard**, not in a committed file. On a purely static
host the form will return a 405 and no enquiry is delivered.

### The Airtable table

`Enquiries` in the *Atelier Haute Couture* base:

| Field | Type |
| :--- | :--- |
| Name | Single line text |
| Email | Email |
| Phone | Phone |
| Salon City | Single select — Paris / London / New York |
| Subject | Single select — matches the form's five options |
| Message | Long text |
| Consent | Checkbox |
| Submitted At | Date & time (UTC, ISO) |
| Status | Single select — New / Replied / Closed |

The select options are mirrored in `api/_enquiry.js`; values outside those lists
are rejected rather than submitted with `typecast`, which would silently create
stray options. Change the options in Airtable and that list together.
