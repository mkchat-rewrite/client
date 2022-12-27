import { Head } from "$fresh/runtime.ts";

export default function Home() {
    return (
        <main style="background-color: #1b1b1b;" class="h-screen">
            <Head>
                <title>mkchat</title>
            </Head>
            <div class="p-4 mx-auto max-w-screen-md flex flex-col gap-4">
                <h1 class="text-4xl font-bold text-white">mkchat</h1>

                <div>
                    <input type="text" class="w-96 p-2 my-4 border border-gray-300 rounded-md" placeholder="Chat Message" />
                    <button class="px-4 py-2 text-white bg-pink-500 rounded-md">Send</button>
                </div>
                <button class="px-4 py-2 text-white bg-purple-500 rounded-md">Start Typing</button>
                <button class="px-4 py-2 text-white bg-purple-500 rounded-md">Stop Typing</button>
                <button class="px-4 py-2 text-white bg-blue-500 rounded-md">Reconnect</button>
            </div>
        </main>
    );
}
