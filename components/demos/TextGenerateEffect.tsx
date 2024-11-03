"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `At Kabs Digital Solution, we empower businesses through innovative technology. Our mission is to transform visionary ideas into digital realities with tailored solutions in custom software, web and mobile applications, e-commerce, and digital marketing.
Our dedicated team excels in navigating the complexities of the digital landscape, delivering high-quality solutions that drive success and enhance user experiences. We view every challenge as an opportunity to innovate, guiding our clients with clarity and purpose.
Join us on this journey—your success is our mission.
`;

export function TextGenerateEffectDemo() {
    return <TextGenerateEffect words={words} />;
}
