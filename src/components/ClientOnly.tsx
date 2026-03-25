/**
 * Wrapper that only renders children on the client (after hydration).
 *
 * During SSR, renders nothing (or an optional fallback).
 * Used to wrap components that depend on browser APIs.
 */

import { useState, useEffect, type ReactNode } from "react";

interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default function ClientOnly({ children, fallback = null }: ClientOnlyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? children : fallback;
}
