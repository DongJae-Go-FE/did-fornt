import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Drawer from "@/components/drawer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SUPPORTED_LANGS = ["kr", "en", "jp", "cn"];

export default function Header() {
  const [value, setValue] = useState("kr");

  useEffect(() => {
    const pathname = window.location.pathname;
    const firstSegment = pathname.split("/")[1];

    setValue(SUPPORTED_LANGS.includes(firstSegment) ? firstSegment : "kr");
  }, []);

  const handleLanguageChange = (lang: string) => {
    setValue(lang);

    const pathname = window.location.pathname;
    const segments = pathname.split("/").filter(Boolean);
    const firstSegment = segments[0];

    const newPath = SUPPORTED_LANGS.includes(firstSegment)
      ? "/" + [lang, ...segments.slice(1)].join("/")
      : `/${lang}/${segments.join("/")}`;

    window.location.href = newPath || `/${lang}`;
  };

  return (
    <header className="w-full h-30 text-white flex items-center px-8 fixed top-0 left-0 z-50 justify-between">
      <h1>
        <Link to="/">
          <img
            src="/logo.svg"
            alt="wyd logo"
            width={80}
            height={40}
            className="w-auto h-auto"
          />
        </Link>
      </h1>

      <ul className="flex items-center gap-x-1">
        <li>
          <Select value={value} onValueChange={handleLanguageChange}>
            <SelectTrigger
              className="border-none font-black text-lg bg-b"
              size="lg"
            >
              <SelectValue className="placeholder:text-white data-placeholder:text-white" />
            </SelectTrigger>
            <SelectContent size="lg" className="font-black">
              <SelectItem value="kr" size="lg">
                KR
              </SelectItem>
              <SelectItem value="en" size="lg">
                ENG
              </SelectItem>
              <SelectItem value="jp" size="lg">
                JP
              </SelectItem>
              <SelectItem value="cn" size="lg">
                CN
              </SelectItem>
            </SelectContent>
          </Select>
        </li>

        <li>
          <Drawer />
        </li>
      </ul>
    </header>
  );
}
