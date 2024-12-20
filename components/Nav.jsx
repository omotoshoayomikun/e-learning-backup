"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
// import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push(`/role/?route=login`);
  };

  const handleSignup = () => {
    router.push(`/role`);
  };
  //const isUserLoggedIn = true;
  // const { data: session } = useSession();

  // const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  // useEffect(() => {
  //   const setUpProviders = async () => {
  //     const response = await getProviders();

  //     setProviders(response);
  //   };

  //   setUpProviders();
  // }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/logo.svg"
          alt="vconnect"
          width={230}
          height={70}
          className="object-contain"
        />
      </Link>

      {/* Desktop nav */}
      <div className="sm:flex hidden">
        {/* {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : ( */}
          <>
            {/* {providers &&
              Object.values(providers).map((provider) => ( */}
                <div className="flex gap-3 md:gap-5">
                  <div className="flex-between justify-evenly gap-14 mr-5">
                    <Link href="" className="text-[#626262]">Features</Link>

                    <Link href="" className="text-[#626262]">How it works?</Link>

                    <Link href="" className="text-[#626262]">About us</Link>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogin}
                    className="outline_btn"
                  >
                    Login
                  </button>

                  <button
                    type="button"
                    onClick={handleSignup}
                    className="brown_btn"
                  >
                    Sign Up
                  </button>
                </div>
              {/* ))
              } */}
          </>
        {/* )} */}
      </div>

      {/* MOBILE NAV BAR */}
      <div className="sm:hidden flex relative">
        {/* {session?.user ? ( */}
          {/* <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Post
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut;
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div> */}
        {/* ) : ( */}
          <>
            {/* {providers &&
              Object.values(providers).map((provider) => ( */}
                <button
                  type="button"
                  // key={provider.name}
                  onClick={handleSignup}
                  className="brown_btn"
                >
                  Sign In
                </button>
              {/* ))
              } */}
          </>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Nav;
