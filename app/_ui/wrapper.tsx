"use client";

import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { usePathname } from "next/navigation";
import Header from "./header/header";

type WrapperProps = {
  children: React.ReactNode;
};

export default function Wrapper({ children }: WrapperProps) {
  const pathname = usePathname();

  return (
    <main className="bg-dark text-light w-full min-h-screen">
      <Header />
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait" initial={false}>
          <section key={pathname} className="">
            {/* slide from bottom div */}
            <m.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 1 }}
              transition={{ duration: 0.7, ease: [0.24, 1, 0.48, 1] }}
              className="SLIDE-IN absolute inset-0 bg-light origin-top"
            />

            {/* slide from top div */}
            <m.div
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              exit={{ scaleY: 0 }}
              transition={{ duration: 0.7, ease: [0.24, 1, 0.48, 1] }}
              className="SLIDE-OUT absolute inset-0 bg-light origin-bottom"
            />

            {children}
          </section>
        </AnimatePresence>
      </LazyMotion>
    </main>
  );
}
