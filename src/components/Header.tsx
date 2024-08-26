import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="bg-grey-900 h-16 rounded-b-xl w-full flex items-center justify-center lg:hidden">
      <Image src={"images/logo-large.svg"} width={122} height={22} alt="logo" />
    </header>
  );
}

export default Header;
