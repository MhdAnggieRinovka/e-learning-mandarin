import {
  BookOpen,
  Bot,
  House,
  Languages,
  LibraryBig,
  Settings,
} from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    title: "Beranda",
    path: "/",
    icon: House,
  },
  {
    title: "Latihan",
    path: "/practice",
    icon: BookOpen,
  },
  {
    title: "Guru AI",
    path: "/tutor",
    icon: Bot,
  },
  {
    title: "Kosakata",
    path: "/vocabulary",
    icon: LibraryBig,
  },
  {
    title: "Pengaturan",
    path: "/settings",
    icon: Settings,
  },
];

export function AppLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-muted/30">
      <aside className="flex w-64 shrink-0 flex-col border-r bg-background">
        <div className="flex h-20 items-center gap-3 border-b px-5">
          <div className="grid size-10 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Languages className="size-5" />
          </div>

          <div>
            <p className="font-semibold">Mandarin AI</p>
            <p className="text-xs text-muted-foreground">
              Desktop Tutor
            </p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 p-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  ].join(" ")
                }
              >
                <Icon className="size-4" />
                {item.title}
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t p-4">
          <div className="rounded-lg bg-muted p-3">
            <div className="mb-1 flex items-center gap-2">
              <span className="size-2 rounded-full bg-amber-500" />
              <span className="text-xs font-medium">
                Engine belum terhubung
              </span>
            </div>

            <p className="text-xs text-muted-foreground">
              Ollama dan Piper akan dipasang berikutnya.
            </p>
          </div>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b bg-background px-6">
          <div>
            <p className="font-semibold">你好, Selamat belajar!</p>
            <p className="text-xs text-muted-foreground">
              Tingkatkan kemampuan Mandarin setiap hari.
            </p>
          </div>

          <Badge variant="outline">Prototype v0.1.0</Badge>
        </header>

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}