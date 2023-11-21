"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IChildProps } from "@/utils/types";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const ReactQueryProvider = ({ children }: IChildProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

export default ReactQueryProvider;
