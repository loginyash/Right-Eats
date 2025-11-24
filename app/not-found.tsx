import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { MapPin } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-[var(--color-primary)]/20 blur-3xl rounded-full" />
                <MapPin className="w-32 h-32 text-[var(--color-primary)] relative z-10 animate-bounce" />
            </div>

            <h1 className="text-6xl font-bold text-[var(--color-foreground)] mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6">Lost in the Dunes?</h2>
            <p className="text-gray-500 max-w-md mb-8">
                The page you are looking for seems to have vanished like a mirage in the Thar Desert.
            </p>

            <Link href="/">
                <Button size="lg" className="rounded-full">
                    Return to Civilization
                </Button>
            </Link>
        </div>
    );
}
