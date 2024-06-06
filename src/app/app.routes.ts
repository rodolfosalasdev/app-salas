import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "/menu", pathMatch: "full" },
  {
    path: "menu",
    loadComponent: () =>
      import("./components/menu/menu.component").then((c) => c.MenuComponent),
  },
];
