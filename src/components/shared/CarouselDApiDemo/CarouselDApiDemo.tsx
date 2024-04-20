import * as React from "react"
import CarouselDApiDemoDB from './CarouselDApiDemoDB.json';
import {CarouselDApiDemoTYPE} from '@/src/lib/types/CarouselDApiDemoTYPE.ts'



import { Card, CardContent } from '@/src/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/src/components/ui/carousel"

export function CarouselDApiDemo() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <div className={`max-w-[700px]`}>
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent className={``}>
                    {
                        CarouselDApiDemoDB.map((item:CarouselDApiDemoTYPE,index:number)=>(
                            <CarouselItem key={index}>
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold"><img src={item.img}/></span>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))
                    }

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
                Slide {current} of {count}
            </div>
        </div>
    )
}

