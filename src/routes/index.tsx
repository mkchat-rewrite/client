import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>
            <div class="h-24 flex items-center justify-between p-8">
                <Link href="/"><h1 class="text-white">[LOGO]</h1></Link>

                <div class="flex gap-3">
                    <Link href="/about"><button class="rounded-md py-2 px-4 text-white/60 hover:underline">About</button></Link>
                    <Link href="/rules"><button class="rounded-md py-2 px-4 text-white/60 hover:underline">Rules</button></Link>
                    <Link href="/discord"><button class="rounded-md py-2 px-4 text-white/60 hover:underline">Discord Server</button></Link>
                </div>


                <div class="flex gap-4">
                    <button class="rounded-md py-2 px-4 text-white/60 hover:underline">Login</button>
                    <button class="bg-indigo-600/10 rounded-md py-2 px-4 text-white/80 border-1 border-indigo-600/80 hover:bg-indigo-600">Signup</button>
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
