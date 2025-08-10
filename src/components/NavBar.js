import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <header className="flex justify-between p-4 bg-white dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ThemeToggle />
    </header>
  );
}
