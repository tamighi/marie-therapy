import { marie_portrait } from "../assets";
import { Card } from "../components";
import { AboutText, tools } from "../constants";

export const About = () => {
    return (
        <div className="flex h-full flex-col my-8 md:my-16 gap-16">
            <div className="flex md:flex-row flex-col-reverse items-center gap-8">
                <Card className="flex flex-col gap-8">
                    <h2 className="font-bold">Qui suis-je ?</h2>
                    <span
                        dangerouslySetInnerHTML={{ __html: AboutText }}
                    ></span>
                </Card>
                <img src={marie_portrait}></img>
            </div>
            <div className="flex flex-col items-center gap-8">
                {tools.map((tool, i) => (
                    <Card
                        key={i}
                        className={`flex flex-col
                        ${i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"}
                        gap-16 md:items-start items-center`}
                    >
                        <div className="flex flex-col gap-8">
                            <h2 className={"font-bold text-center"}>
                                {tool.title}
                            </h2>
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: tool.description,
                                }}
                            ></span>
                        </div>
                        <img
                            src={tool.img}
                            className="max-w-[90%] md:max-w-[25%]"
                        ></img>
                    </Card>
                ))}
            </div>
        </div>
    );
};
