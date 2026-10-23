import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { relationshipViewHash } from "../../utils/state/relationshipViewUrl.js";

export function useRelationshipViewParams() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();
  const params = useMemo(() => new URLSearchParams(hash.replace(/^#/, "")), [hash]);
  const onParamsChange = useCallback(
    (changes: Record<string, string | null>, replace = false) => {
      const next = relationshipViewHash(hash, changes);
      if (next !== hash) void navigate({ pathname, search, hash: next }, { preventScrollReset: true, replace });
    },
    [pathname, search, hash, navigate],
  );
  return { params, onParamsChange };
}
