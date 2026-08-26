"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Network, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
    { label: "Explore", href: "/" },
    { label: "Skills", href: "/skills" },
    { label: "Jobs", href: "/jobs" },
    { label: "Companies", href: "/companies" },
    { label: "Search", href: "/search", icon: Search },
];

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="border-b bg-white">
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-2 text-xl font-semibold tracking-tight text-primary"
                >
                    <Network className="h-6 w-6" />
                    <span>SkillGraph</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-2 md:flex">
                    {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${isActive(item.href)
                                        ? "bg-primary-light text-primary"
                                        : "text-text-secondary hover:bg-surface-muted hover:text-primary"
                                    }`}
                            >
                                {Icon && <Icon className="h-4 w-4" />}
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop CTA */}
                <Button className="hidden md:flex">
                    <Link href="/career">My Career</Link>
                </Button>

                {/* Mobile */}
                <div className="flex items-center gap-2 md:hidden">
                    <Button size="sm">
                        <Link href="/career">My Career</Link>
                    </Button>

                    <Sheet>
                        <SheetTrigger
                            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-white text-text-secondary transition-colors hover:bg-surface-muted hover:text-primary"
                            aria-label="Open navigation menu"
                        >
                            <Menu className="h-5 w-5" />
                        </SheetTrigger>

                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle className="flex items-center gap-2 text-primary">
                                    <Network className="h-5 w-5" />
                                    SkillGraph
                                </SheetTitle>
                            </SheetHeader>

                            <div className="mt-6 flex flex-col gap-2">
                                {navItems.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${isActive(item.href)
                                                    ? "bg-primary-light text-primary"
                                                    : "text-text-secondary hover:bg-surface-muted hover:text-primary"
                                                }`}
                                        >
                                            {Icon && <Icon className="h-4 w-4" />}
                                            {item.label}
                                        </Link>
                                    );
                                })}

                                <Button className="mt-4">
                                    <Link href="/career">My Career</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}