"use client";

import { Menu, X, User2, LogOut, Settings } from "lucide-react";
import { useState } from "react";
import GoogleSignInButton from "../SignIn/Google";
import { useAuthStore } from "@/stores/authStatus";
import { signOut } from "next-auth/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { session: userSession } = useAuthStore();

  console.log("userSession", userSession);

  const navigationItems = [
    { name: "Explore", href: "#explore" },
    { name: "Upload", href: "#upload" },
    { name: "Community", href: "#community" },
  ];

  const getUserInitials = (name: string) => {
    console.log("name", name);
    return name
      ?.split(" ")
      ?.map((n) => n[0])
      ?.join("")
      ?.toUpperCase()
      ?.slice(0, 2);
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-base-100/90">
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </div>
            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}>
                      {item.name}
                    </a>
                  </li>
                ))}
                <div className="divider my-2"></div>
                {userSession ? (
                  <li>
                    <div className="flex items-center space-x-2 p-2">
                      <div className="avatar">
                        <div className="w-8 rounded-full">
                          <img
                            src={userSession?.image}
                            alt={userSession?.name}
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              const nextSibling = e.currentTarget
                                .nextElementSibling as HTMLDivElement | null;
                              if (nextSibling?.style) {
                                nextSibling.style.display = "flex";
                              }
                            }}
                          />
                          <div
                            className="w-8 h-8 rounded-full bg-primary text-primary-content flex items-center justify-center text-xs font-medium"
                            style={{ display: "block" }}>
                            {getUserInitials(userSession?.name || "")}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {userSession?.name}
                        </p>
                        <p className="text-xs text-base-content/60 truncate">
                          {userSession?.email}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => signOut()}
                      className="btn btn-outline btn-sm w-full mt-2">
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </li>
                ) : (
                  <li>
                    <GoogleSignInButton />
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2">
              {navigationItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm font-medium hover:text-primary transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center - Logo */}
        <div className="navbar-center">
          <a href="/" className="btn btn-ghost text-xl lg:text-2xl font-bold">
            <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
              AkhiloPedia
            </span>
          </a>
        </div>

        {/* Right - User Session */}
        <div className="navbar-end">
          {userSession ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={userSession?.image}
                    alt={userSession?.name}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const nextSibling = e.currentTarget
                        .nextElementSibling as HTMLDivElement;
                      if (nextSibling?.style) {
                        nextSibling.style.display = "flex";
                      }
                    }}
                  />
                  <div
                    className="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center text-sm font-medium"
                    style={{ display: "none" }}>
                    {getUserInitials(userSession.name)}
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-2 shadow-lg border">
                <li className="menu-title">
                  <div className="flex flex-col">
                    <span className="font-medium">{userSession.name}</span>
                    <span className="text-xs text-base-content/60">
                      {userSession.email}
                    </span>
                  </div>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <a className="flex items-center">
                    <User2 size={16} />
                    Profile
                  </a>
                </li>
                <li>
                  <a className="flex items-center">
                    <Settings size={16} />
                    Settings
                  </a>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <button
                    onClick={() => signOut()}
                    className="text-error hover:bg-error/10 flex items-center">
                    <LogOut size={16} />
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <GoogleSignInButton />
          )}
        </div>
      </div>
    </>
  );
}
