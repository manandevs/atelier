import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Keeps the site's in-page anchors working alongside react-router.
 *
 * Two things need handling that the router does not cover on its own:
 *
 * 1. A plain `<a href="#collection">` click only pushes a hash — it fires
 *    `hashchange`, never `popstate` — so react-router's location never
 *    updates. We listen for `hashchange` ourselves.
 * 2. Those anchors point at sections that live on the home route. When one is
 *    clicked from another route (the Footer and AnnouncementBar links, for
 *    instance) the target is not in the document, so we route home first and
 *    scroll once it has mounted.
 */

// The target may mount in the same commit as the navigation, so give React a
// couple of frames before giving up.
function scrollToId(id, attempt = 0) {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ block: 'start' });
    return true;
  }
  if (attempt < 3) {
    requestAnimationFrame(() => scrollToId(id, attempt + 1));
  }
  return false;
}

export function useScrollToHash() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const resolve = (rawHash, currentPath) => {
      const id = rawHash.replace(/^#/, '');

      if (!id) {
        window.scrollTo({ top: 0 });
        return;
      }

      if (document.getElementById(decodeURIComponent(id))) {
        scrollToId(decodeURIComponent(id));
        return;
      }

      // Not on this route — the home page owns it.
      if (currentPath !== '/') {
        navigate(`/${rawHash.startsWith('#') ? rawHash : `#${rawHash}`}`);
        return;
      }

      scrollToId(decodeURIComponent(id));
    };

    resolve(hash, pathname);

    // Read from window.location so the listener never sees a stale path.
    const handleHashChange = () =>
      resolve(window.location.hash, window.location.pathname);

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [pathname, hash, navigate]);
}
