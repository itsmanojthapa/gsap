import { Outlet } from "react-router-dom";

export default function Layout({ navbar }: { navbar?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      {navbar && (
        <nav className="text-center m-5">
          <a href="/" className="text-5xl">
            🏠
          </a>
        </nav>
      )}

      {/* Page content */}
      <main className="flex-1 mt-5">
        <Outlet />
      </main>
    </div>
  );
}
