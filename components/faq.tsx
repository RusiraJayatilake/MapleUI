import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { PlusIcon } from "lucide-react";

interface IFAQ {
  faqTitle: string;
  faqSubtitle: string;
  faqData: { question: string; answer: string }[];
}

const FAQ: React.FC<IFAQ> = ({ faqTitle, faqSubtitle, faqData }) => {
  return (
    <div id="faq" className="w-full max-w-screen-xl mx-auto py-8 xs:py-16 px-6">
      <h2 className="md:text-center text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tighter">
        {faqTitle}
      </h2>
      <p className="mt-1.5 md:text-center xs:text-lg text-muted-foreground">
        {faqSubtitle}
      </p>

      <div className="min-h-[550px] md:min-h-[320px] xl:min-h-[300px]">
        <Accordion
          type="single"
          collapsible
          className="mt-8 space-y-4 mx-[180px]"
        >
          {Array.isArray(faqData) && faqData.length > 0 ? (
            faqData.map(({ question, answer }, index) => (
              <AccordionItem
                key={question || `question-${index}`} // Ensure a unique key
                value={`question-${index}`}
                className="bg-accent py-1 px-4 rounded-xl border-none !mt-0 !mb-4 break-inside-avoid"
              >
                <AccordionPrimitive.Header className="flex">
                  <AccordionPrimitive.Trigger
                    className={cn(
                      "flex flex-1 items-center justify-between py-4 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                      "text-start text-lg"
                    )}
                  >
                    {question}
                    <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionContent className="text-[15px]">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <p>No Items</p>
          )}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
