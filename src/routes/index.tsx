import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
            <span class="bg-rose-600/50 text-sm w-full h-8 flex items-center justify-center gap-2">
                <span class="text-white">Warning:</span>
                <span class="text-white/70 flex gap-1">
                    <span>This site is under construction, please return to</span>
                    <Link class="underline" href="https://mkchat.app">https://mkchat.app</Link>
                </span>
            </span>
            <div class="h-24 flex items-center justify-between p-8">
                <Link href="/"><h1 class="text-white">[LOGO]</h1></Link>

                <div class="flex gap-3">
                    <Link href="/about"><button class="rounded-md py-2 px-4 text-white/60 hover:underline">About</button></Link>
                    <Link href="/rules"><button class="rounded-md py-2 px-4 text-white/60 hover:underline">Rules</button></Link>
                    <Link href="https://discord.com/invite/GbWngkTSZg" target="blank"><button class="rounded-md py-2 px-4 text-white/60 hover:underline">Discord Server</button></Link>
                </div>

                <div class="flex gap-4">
                    <Link href="/login"><button class="rounded-md py-2 px-4 text-white/60 hover:underline">Login</button></Link>
                    <Link href="/register"><button class="bg-indigo-600/10 rounded-md py-2 px-4 text-white/80 border-1 border-indigo-600/80 hover:bg-indigo-600">Register</button></Link>
                </div>
            </div>

            {/* <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Sign in
            </button>

            <Link class="mindblow" href="/flower">
                Blow my mind 🤯
            </Link> */}
        </>
    );
});

export const head: DocumentHead = {
    title: "[TBD]",
};
