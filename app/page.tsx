import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />

      <footer style={{ padding: "48px 24px", borderTop: "1px solid #18181b", textAlign: "center", fontSize: "0.75rem", color: "#52525b" }}>
        <p>© {new Date().getFullYear()} Manikantha Kasireddy. Built with Next.js & CSS Modules.</p>
      </footer>
    </main>
  );
}