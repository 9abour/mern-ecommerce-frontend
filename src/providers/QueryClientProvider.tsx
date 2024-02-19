"use client"

import { IChildren } from "@/types/index.types";
import { QueryClient, QueryClientProvider } from "react-query";


const QueryProvider = ({children}: IChildren) => {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>

  )
}

export default QueryProvider;