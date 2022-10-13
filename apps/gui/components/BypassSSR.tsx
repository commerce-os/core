import { ReactNode } from 'react';

function BypasSSR({ children }: { children: ReactNode }) {
    return (
      <div suppressHydrationWarning>
        {typeof window === 'undefined' ? null : children}
      </div>
    )
  }

export default BypasSSR;