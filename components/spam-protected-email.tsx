"use client";

import { useCallback } from "react";

export function SpamProtectedEmail({
  user,
  domain,
}: {
  user: string;
  domain: string;
}) {
  const handleClick = useCallback(() => {
    window.location.href = `mailto:${user}@${domain}`;
  }, [user, domain]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-left underline underline-offset-4 transition-colors hover:text-foreground"
    >
      {user}&#64;{domain}
    </button>
  );
}
