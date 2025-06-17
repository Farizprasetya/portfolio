import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Portfolio() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold texround">
        Product Manager | Digital Problem Solver | Human-Cent-center">M. Fariz Prasetya</h1>
      <p className="text-center text-muted-foregtered Thinker
      </p>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p>
            Starting with a background in psychology, I have journeyed through customer service, HR, and sales before finding my true calling in product management. I don’t just build digital products—I solve real human problems through tech.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Highlighted Projects</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Xampr (Singapore):</strong> Regional Product Manager representing Indonesia, increased user onboarding by 30%.
            </li>
            <li>
              <strong>ADA (Axiata Digital):</strong> Built a self-service advertising platform for SMEs; launched a custom CRM that cut sales process time by 25%.
            </li>
            <li>
              <strong>SiCepat Ekspres:</strong> Designed an automated pricing engine that improved cost efficiency by 15%.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Skills & Tools</h2>
          <p>
            Product Strategy, Agile/Scrum, UX Collaboration, Market Research, Jira, Notion, Trello, Google Analytics, Looker, Figma.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Testimonials</h2>
          <blockquote className="italic">“Fariz is a rare hybrid of empathy and execution.” – Former Supervisor</blockquote>
          <blockquote className="italic mt-2">“He sees what users need, even before they realize it.” – CRM Client</blockquote>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 text-center">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>Email: garizprasetya@gmail.com</p>
          <p>Location: Indonesia (Open to Remote)</p>
          <Button className="mt-4" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Hide More" : "See Full Resume"}
          </Button>
          {showMore && (
            <div className="mt-4 text-sm text-left">
              <p>Additional resume details and project breakdown coming soon…</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
