import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { GoogleLogo } from "~/components/icons/google";
import { DiscordLogo } from "~/components/icons/discord";

export default component$(() => {
    return (
        <div class="w-screen h-screen grid place-items-center">
            <div class="grid w-96 gap-5">
                <form class="grid gap-3" action="https://api.mkchat.app/auth/account/register" method="POST" preventDefault:submit onSubmit$={async (event: Event) => {
                    const target = event.target as HTMLFormElement;
                    const data = new FormData(event.target as HTMLFormElement);
                    const formData = Array.from(data.entries()).map((e) => e.join("=")).join("&");

                    const res = await fetch(target.action, {
                        method: target.method,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: formData
                    });

                    console.log(await res.text());
                }}>
                    <div class="flex gap-2 mb-1">
                        <button class="flex justify-center items-center gap-2 rounded-md py-2 px-3 w-full bg-black/50 text-white">
                            <GoogleLogo />
                            <span>Google</span>
                        </button>
                        <button class="flex justify-center items-center gap-2 rounded-md py-2 px-3 w-full bg-black/50 text-white">
                            <DiscordLogo />
                            <span>Discord</span>
                        </button>
                    </div>

                    <div class="relative flex gap-3 items-center">
                        <div class="flex-grow border-t border-white/50"></div>
                        <span class="text-white/50 leading-normal">or</span>
                        <div class="flex-grow border-t border-white/50"></div>
                    </div>

                    <label class="block">
                        <span class="block font-medium text-white/70">Email</span>
                        <input type="text" name="email" class="bg-white/5 rounded-md py-2 px-3 text-white/80 border-1 border-white/50 outline-none w-full text-white" />
                    </label>

                    <label class="block">
                        <span class="block font-medium text-white/70">Username</span>
                        <input type="text" name="username" maxLength={20} class="bg-white/5 rounded-md py-2 px-3 text-white/80 border-1 border-white/50 outline-none w-full text-white" />
                    </label>

                    <label class="block">
                        <span class="block font-medium text-white/70">Password</span>
                        <input type="password" name="password" class="bg-white/5 rounded-md py-2 px-3 text-white/80 border-1 border-white/50 outline-none w-full text-white" />
                    </label>

                    <button type="submit" class="rounded-md mt-4 py-2 px-3 bg-brand-100 w-full text-white hover:bg-brand-200">Register</button>
                </form>

                <div class="text-sm flex gap-1">
                    <span class="text-white/50">Have an account?</span>
                    <Link href="/login" class="text-brand-100/60 underline">Login</Link>
                </div>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
    title: "[TBD] | Register",
};