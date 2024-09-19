import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="about" className="">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="w-64 h-64 relative mt-4 drop-shadow-[2px_3px_3px_#000000]">
              <Image
                src="/me_wall.jpg" // Adjust this path to where your image is located
                alt="Your Name"
                fill
                quality={100}
                className="rounded-full object-cover"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4 mt-4">About Me</h2>
          <p className="text-lg">
            I&#39;m a full-stack developer with 5 years of experience in
            building web applications. I specialize in JavaScript/TypeScript,
            React, and Node.js.
          </p>
        </div>
      </section>

      <section id="projects" className="">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4 mt-4">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Example project cards */}
            <div className="p-4 border border-gray-300 rounded">
              <h3 className="text-xl font-semibold">Coming Soon</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

