import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">Portfolio</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#resume" className="transition-colors hover:text-foreground/80">
                Resume
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center">
              <Link href="https://github.com/Brownie1100" target="_blank" rel="noreferrer" className="p-2">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/srijanjaiswal02/" target="_blank" rel="noreferrer" className="p-2">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:srijanjaiswal97@gmail.com" className="p-2">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="container py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Hi, I'm <span className="text-primary">Your Name</span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">Full Stack Developer</p>
              <p className="mt-4 max-w-prose text-muted-foreground">
                I'm a passionate developer with expertise in building modern web applications. With a strong foundation
                in both frontend and backend technologies, I create seamless, user-friendly experiences that solve
                real-world problems.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <Link href="#contact">Get in touch</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#projects">View my work</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary">
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="Profile"
                  className="object-cover"
                  width={320}
                  height={320}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="container py-24 sm:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Resume</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              My professional background and experience
            </p>
            <a href="/resume_2-2.pdf" download>
              <Button variant="outline" className="gap-1">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Education</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-xl font-semibold">Bachelor of Technology(Information Technology)</h4>
                  <p className="text-muted-foreground">KIET Group of Institutions, 2019-2023</p>
                  <p className="mt-2">Graduated with honors. Focused on web development and software engineering.</p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-xl font-semibold">10th and 12th</h4>
                  <p className="text-muted-foreground">City Montessori School</p>
                  <p className="mt-2">Did my Highschool and Intermediate with 1st Distinction.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Experience</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-xl font-semibold">Software Engineer</h4>
                  <p className="text-muted-foreground">Newgen Softwares, 2023-Present</p>
                  <p className="mt-2">
                    Developing and maintaining softwares using Core Java,Oracle Database, Angular.
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="text-xl font-semibold">Data Science Intern</h4>
                  <p className="text-muted-foreground">Yantra Bytes, 2021</p>
                  <p className="mt-2">Assisted in cleaning and modelling big data using Python and Jupytor.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-4xl py-8">
            <h3 className="text-2xl font-bold mb-6">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Java",
                "PostgreSQL",
                "SQLLite",
                "WebLogic",
                "Angular",
                "Spring Boot",
                "System Design",                
                "JavaScript",
                "SVN",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "HTML/CSS",
                "Tailwind CSS",
              ].map((skill) => (
                <div key={skill} className="bg-background rounded-md p-3 text-center shadow-sm border">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="container py-24 sm:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Projects</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Check out some of my recent work
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Finance Dashboard",
                description: "Designed a user-friendly dashboard for financial records with scope for further improvements as it’s under development.",
                tags: ["React", "Java", "Spring Boot", "DB Lite"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "COVID-19 Live Cases Website",
                description: " Displayed real-time data for 200+ countries. Ensured data accuracy with a 99.9% uptime using Firebase for backend operations",
                tags: ["React", "Firebase", "JavaScript","API"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Smart Bio Monitoring System",
                description: "A teamproject where we created a hardware-software solution for real-time monitoring of biological conditions. Monitored and logged biological conditions every 5 seconds with 95% accuracy",
                tags: ["Arduino", "C++", "JavaScript"],
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: " Music Bot for Discord",
                description: "Built a bot and successfully integrated API for music playback via Discord commands for community servers, currently in use. Managed 10,000+ commandexecutions without service interruption",
                tags: ["Python", "discord.py", "youtube-dl"],
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover transition-all hover:scale-105"
                    width={300}
                    height={200}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="container py-24 sm:py-32 bg-muted/50">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Feel free to reach out for collaborations or just a friendly hello
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="text-muted-foreground">
                I'm currently available for full-time positions.
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:srijanjaiswal97@gmail.com" className="hover:underline">
                  srijanjaiswal97@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/srijanjaiswal02/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    https://www.linkedin.com/in/srijanjaiswal02/
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/Brownie1100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    https://github.com/Brownie1100
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/Brownie1100" target="_blank" rel="noreferrer" className="p-2">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/srijanjaiswal02/" target="_blank" rel="noreferrer" className="p-2">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:srijanjaiswal97@gmail.com" className="p-2">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
