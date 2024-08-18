import { About, Contact, Presentation, Projects } from "./components/ui";


export default function Home() {
  return (
    <>
    <div className="flex-block justify-items-center">
    <Presentation />
    <About />
    <Projects />
    <Contact />
    </div>
    </>
  );
}
