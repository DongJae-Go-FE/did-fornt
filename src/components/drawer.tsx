import { Drawer } from "vaul";
import React, { useState, useEffect } from "react";

export default function VaulDrawer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Drawer.Root direction={isMobile ? "bottom" : "right"}>
      <Drawer.Trigger
        className="relative flex h-15 shrink-0 items-center justify-center gap-2 overflow-hidden px-4"
        title="메뉴 버튼"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.97485 5.9751C2.97485 5.42281 3.42257 4.9751 3.97485 4.9751L19.9749 4.9751C20.5271 4.9751 20.9749 5.42281 20.9749 5.9751C20.9749 6.52738 20.5271 6.9751 19.9749 6.9751L3.97485 6.9751C3.42257 6.9751 2.97485 6.52738 2.97485 5.9751Z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.97485 11.9751C2.97485 11.4228 3.42257 10.9751 3.97485 10.9751L19.9749 10.9751C20.5271 10.9751 20.9749 11.4228 20.9749 11.9751C20.9749 12.5274 20.5271 12.9751 19.9749 12.9751L3.97485 12.9751C3.42257 12.9751 2.97485 12.5274 2.97485 11.9751Z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.97485 17.9751C2.97485 17.4228 3.42257 16.9751 3.97485 16.9751L19.9749 16.9751C20.5271 16.9751 20.9749 17.4228 20.9749 17.9751C20.9749 18.5274 20.5271 18.9751 19.9749 18.9751L3.97485 18.9751C3.42257 18.9751 2.97485 18.5274 2.97485 17.9751Z"
            fill="#fff"
          />
        </svg>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-100 bg-black/40 duration-0" />
        <Drawer.Content
          className="
            fixed z-200 outline-none flex
            max-[767px]:bottom-0 max-[767px]:left-0 max-[767px]:right-0 max-[767px]:rounded-t-[10px] max-[767px]:mt-24 max-[767px]:h-[80%]
            md:right-0 md:top-0 md:bottom-0 md:w-[50dvw] md:rounded-[16px_0_0_16px]
            lg:w-[28dvw]
          "
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className="bg-gray-100 dark:bg-zinc-900 h-full w-full grow p-5 flex flex-col md:rounded-[16px_0_0_16px] md:shadow-lg md:bg-zinc-50">
            <div className="max-w-md">
              <Drawer.Title className="font-medium mb-2 text-zinc-900">
                임시 타이틀
              </Drawer.Title>
              <Drawer.Description className="text-zinc-600 mb-2">
                추후 수정
              </Drawer.Description>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
