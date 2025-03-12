"use client";

import Button from "@/components/button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/pointer";
import { easeInOut, motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();

    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: [0, 1] }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 0] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightDesignAnimate([
            [rightDesignScope.current, {opacity: 1}, {duration:0.5, delay:1.5}],
            [rightDesignScope.current, {y:0, x:0}, {duration:0.5}]
        ]);
        rightPointerAnimate([
            [rightPointerScope.current, { opacity: 1 }, { duration: 0.5, delay:1.5 }],
            [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, []);
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <motion.div
                    className="absolute -left-32 top-16 max-lg:hidden"
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                >
                    <Image
                        src={designExample1Image}
                        alt="Design example 1 image"
                    />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96"
                >
                    <Pointer name="Andrea" />
                </motion.div>
                <motion.div
                    className="absolute -right-64 -top-16 max-lg:hidden"
                    ref={rightDesignScope}
                    initial={{ opacity: 0, y: 100, x: 100 }}
                >
                    <Image
                        src={designExample2Image}
                        alt="design example image 2"
                    />
                </motion.div>

                <motion.div
                    className="absolute right-80"
                    ref={rightPointerScope}
                    initial={{ opacity: 0, y: 100, x: 275}}
                >
                    <Pointer name="Bryan" color="red" />
                </motion.div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-neutral-950 font-semibold">
                        ✨$7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl font-medium text-center mt-6 md:text-7xl ">
                    Impact design, created effortlessly
                </h1>
                <p className="text-center text-4xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Design tools shouldn&apos;t slow you down. Layers combines
                    powerful features with an intuitive interface that keeps you
                    in your creative flow.
                </p>
            </div>

            <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                <input
                    type="text"
                    placeholder="Enter your email"
                    className="bg-transparent px-4 md:flex-1 w-full"
                />
                <Button
                    type="submit"
                    variant="primary"
                    className="whitespace-nowrap"
                    size="sm"
                >
                    Sign Up
                </Button>
            </form>
        </section>
    );
}
