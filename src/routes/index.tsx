import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div>
            <h1 class="text-3xl font-bold underline">
                Hello world!
            </h1>

            <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Sign in
            </button>

            <Link class="mindblow" href="/flower">
                Blow my mind 🤯
            </Link>
        </div>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
};
