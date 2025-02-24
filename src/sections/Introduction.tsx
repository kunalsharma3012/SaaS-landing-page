import Tag from "@/components/tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return <section className="py-24">
        <div className="container">
           <Tag>Introducing Layers</Tag>
            
            <div>
                <span>Your creative process deserves better.</span>
                <span>{text}</span>
                <span>That&apos;s why we build layers.</span>
            </div>
        </div>
    </section>;
}
