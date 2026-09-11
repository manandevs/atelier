import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { pathToFileURL } from 'url';

/**
 * Mounts the /api/contact handler on the dev server so `npm run dev` runs the
 * same server-side path as production, token and all.
 *
 * The AIRTABLE_* values are read with an empty prefix (so non-`VITE_` names are
 * picked up from .env.local) and copied onto this Node process's environment,
 * which is where the handler looks for them. They are never passed to `define`
 * and never prefixed with `VITE_`, so they stay out of the client bundle — in
 * production the host supplies the same names as real environment variables.
 */
function contactApiPlugin(env) {
  return {
    name: 'atelier-contact-api',
    apply: 'serve',
    configureServer(server) {
      for (const key of ['AIRTABLE_PAT', 'AIRTABLE_BASE_ID', 'AIRTABLE_TABLE_NAME']) {
        if (env[key] && !process.env[key]) process.env[key] = env[key];
      }

      server.middlewares.use('/api/contact', async (req, res) => {
        try {
          // Re-imported per request so edits to api/*.js take effect without
          // restarting the dev server.
          const url = pathToFileURL(path.resolve(__dirname, './api/contact.js'));
          url.searchParams.set('t', Date.now().toString());
          const { default: handler } = await import(url.href);
          await handler(req, res);
        } catch (error) {
          server.config.logger.error(`[atelier] /api/contact failed: ${error}`);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ ok: false, error: 'Internal error.' }));
        }
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), contactApiPlugin(env)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: 'localhost',
    },
  };
});
