import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Whether you have a question or just want to say hi, feel free to
            reach out!
          </p>
          <div className="flex justify-center items-center space-x-3 mb-8">
            <Mail className="h-5 w-5 text-primary" />
            <Link
              href="mailto:contact@andrebezerra.com"
              className="text-lg hover:text-primary transition-colors"
            >
              contact@andrebezerra.com
            </Link>
          </div>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="lg" asChild>
              <Link href="http://x.com/ardbezerra" target="_blank">
                <FaXTwitter className="mr-2 h-4 w-4" />
                X (Twitter)
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="http://linkedin.com/in/arbezerra" target="_blank">
                <FaLinkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/arbezerra" target="_blank">
                <FaGithub className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
