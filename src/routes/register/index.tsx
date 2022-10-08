import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <div class="w-screen h-screen grid place-items-center">
            <div class="grid w-96 gap-5">
                <form class="grid gap-3">
                    <label class="block">
                        <span class="block font-medium text-white/70">Email</span>
                        <input type="text" name="email" class="bg-white/10 rounded-md py-2 px-3 text-white/80 border-1 border-white/50 outline-none w-full text-white" />
                    </label>

                    <label class="block">
                        <span class="block font-medium text-white/70">Username</span>
                        <input type="text" name="username" maxLength={20} class="bg-white/10 rounded-md py-2 px-3 text-white/80 border-1 border-white/50 outline-none w-full text-white" />
                    </label>

                    <label class="block">
                        <span class="block font-medium text-white/70">Password</span>
                        <input type="password" name="password" class="bg-white/10 rounded-md py-2 px-3 text-white/80 border-1 border-white/50 outline-none w-full text-white" />
                    </label>

                    <button type="submit" class="rounded-md mt-4 py-2 px-3 bg-indigo-600 w-full text-white hover:bg-indigo-700">Register</button>
                </form>

                <div class="relative flex gap-3 items-center">
                    <div class="flex-grow border-t border-white/50"></div>
                    <span class="text-white/50">or</span>
                    <div class="flex-grow border-t border-white/50"></div>
                </div>

                <button type="submit" class="flex justify-center items-center gap-2 rounded-md py-2 px-3 bg-discord w-full text-white">
                    <svg class="h-4" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.5875 1.85805C24.5794 1.8425 24.5661 1.83032 24.5498 1.82368C22.6696 0.964724 20.6854 0.352223 18.6469 0.00150237C18.6284 -0.00192585 18.6093 0.00054731 18.5922 0.00857012C18.5752 0.0165929 18.5611 0.0297569 18.5521 0.04619C18.2819 0.534458 18.0366 1.03599 17.8172 1.54887C15.6198 1.21675 13.3847 1.21675 11.1873 1.54887C10.9665 1.03469 10.7173 0.533031 10.4409 0.04619C10.4314 0.0301141 10.4173 0.0172532 10.4003 0.00928254C10.3834 0.00131184 10.3645 -0.00139929 10.346 0.00150237C8.30728 0.351487 6.32296 0.964034 4.44298 1.82373C4.42688 1.83052 4.4133 1.84212 4.40411 1.85692C0.644506 7.4472 -0.385393 12.9 0.119841 18.2853C0.121262 18.2985 0.125334 18.3113 0.131816 18.3229C0.138298 18.3345 0.147056 18.3447 0.15757 18.3528C2.34675 19.9668 4.79538 21.1987 7.39896 21.9961C7.4173 22.0015 7.43688 22.0013 7.45507 21.9954C7.47326 21.9894 7.48919 21.9781 7.50071 21.9629C8.0599 21.2053 8.55539 20.4031 8.98213 19.5644C8.988 19.5529 8.99135 19.5402 8.99196 19.5274C8.99257 19.5145 8.99043 19.5016 8.98568 19.4896C8.98093 19.4776 8.97368 19.4667 8.96441 19.4577C8.95513 19.4487 8.94405 19.4417 8.93188 19.4373C8.15053 19.1396 7.3941 18.7808 6.66967 18.3641C6.65651 18.3564 6.64546 18.3456 6.63749 18.3327C6.62952 18.3197 6.62488 18.305 6.62398 18.2898C6.62308 18.2746 6.62594 18.2595 6.63232 18.2457C6.6387 18.2319 6.64839 18.2198 6.66055 18.2106C6.81255 18.0972 6.96465 17.9793 7.1098 17.8602C7.1227 17.8496 7.1383 17.8428 7.15486 17.8406C7.17141 17.8384 7.18826 17.8408 7.20351 17.8476C11.9495 20.0042 17.0877 20.0042 21.7775 17.8476C21.7928 17.8403 21.8099 17.8376 21.8267 17.8396C21.8434 17.8416 21.8593 17.8484 21.8724 17.859C22.0176 17.9782 22.1697 18.0972 22.3228 18.2106C22.335 18.2197 22.3448 18.2317 22.3513 18.2454C22.3578 18.2592 22.3608 18.2743 22.36 18.2895C22.3592 18.3047 22.3546 18.3194 22.3468 18.3324C22.3389 18.3455 22.3279 18.3563 22.3148 18.3641C21.5921 18.7843 20.8349 19.1429 20.0515 19.4362C20.0394 19.4408 20.0283 19.4479 20.0191 19.457C20.0099 19.4662 20.0027 19.4772 19.9981 19.4893C19.9934 19.5014 19.9914 19.5143 19.9921 19.5273C19.9928 19.5402 19.9963 19.5528 20.0022 19.5644C20.4361 20.3984 20.9309 21.1996 21.4825 21.9615C21.4937 21.9772 21.5096 21.9889 21.5278 21.9951C21.5461 22.0012 21.5658 22.0015 21.5843 21.9959C24.1925 21.2013 26.6454 19.9692 28.8373 18.3528C28.848 18.3451 28.8569 18.3352 28.8634 18.3237C28.8699 18.3123 28.8739 18.2996 28.8751 18.2865C29.4799 12.0605 27.8624 6.65235 24.5875 1.85805ZM9.69091 15.0062C8.26201 15.0062 7.08465 13.7006 7.08465 12.0972C7.08465 10.4937 8.23918 9.188 9.69091 9.188C11.154 9.188 12.32 10.5051 12.2971 12.0971C12.2971 13.7006 11.1425 15.0062 9.69091 15.0062ZM19.327 15.0062C17.8982 15.0062 16.7208 13.7006 16.7208 12.0972C16.7208 10.4937 17.8753 9.188 19.327 9.188C20.7902 9.188 21.9561 10.5051 21.9333 12.0971C21.9333 13.7006 20.7902 15.0062 19.327 15.0062Z" fill="white" />
                    </svg>

                    <span>Continue with Discord</span>
                </button>

                <div class="text-sm flex gap-1">
                    <span class="text-white/50">Have an account?</span>
                    <Link href="/login" class="text-indigo-600/60 underline">Login</Link>
                </div>
            </div>
        </div>
    );
});

export const head: DocumentHead = {
    title: "[TBD] | Register",
};