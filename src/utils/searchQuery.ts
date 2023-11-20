import { useSearchParams } from "next/navigation";

export function searchQuery() {
  const searchParams = useSearchParams();
  return new URLSearchParams(searchParams);
}
