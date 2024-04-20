import {useEffect} from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/components/ui/accordion"

export const SecretarDashboard = () => {

    useEffect(() => {

    }, []);
    return (
        <div className={`py-10`}>
            <div>
                <p className={`text-3xl text-center`}>Это старница управления секретаря</p>
            </div>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
};
