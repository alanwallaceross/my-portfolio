import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section id="about" className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-start">
            <div className="w-64 h-64 relative drop-shadow-[2px_3px_3px_#000000]">
              <Image
                src="/me_wall.jpg"
                priority
                alt="Alan"
                width="250"
                height="40"
                className="rounded-full object-cover"
              />
            </div>
          </div>

          <p className="text-lg mt-12">
            Full-stack developer with 5 years of experience in building web
            applications. I specialise in JavaScript/TypeScript, React, and
            Node.js.
          </p>
        </div>
      </section>

      <section id="projects" className="">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 border border-gray-300 rounded">
              <h3 className="text-xl font-semibold">Coming Soon</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

