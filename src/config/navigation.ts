interface NavLink {
  path: string;
  name: string;
}

export const headerLinks: NavLink[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/contact",
    name: "Contact",
  },
];
