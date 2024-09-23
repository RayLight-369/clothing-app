// import { Search } from "lucide-react";

export const NavLinks = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Store",
    href: "/store"
  }
];

export const API = {
  CLOTHES: "/api/clothes",
  CLOTHE: ( id ) => `/api/clothes/${ id }`,
  NEW_CLOTHE: "/api/clothes",
  EDIT_CLOTHE: "/api/clothes",
  DEL_CLOTHE: "/api/clothes",
};