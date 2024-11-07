import { cloneElement } from "react";
import { marie_portrait } from "../assets";
import { Card, Fieldset, LazyImage } from "../components";
import { AboutText, tools } from "../constants";
import { BasePage } from "./BasePage";

export const AboutPage = () => {
    return (
        <BasePage className="flex h-full flex-col gap-16 items-center">
            <div className="flex md:flex-row flex-col-reverse items-center gap-8">
                <Card className="flex flex-col gap-8">
                    <h2 className="font-bold">Qui suis-je ?</h2>
                    <p dangerouslySetInnerHTML={{ __html: AboutText }} />
                </Card>
                <LazyImage
                    src={marie_portrait}
                    className="md:min-w-[367px] max-w-[75%] min-w-[75%]
                        aspect-square"
                />
            </div>
            <Fieldset label="Mes outils" className="md:mt-12" />
            <div className="flex flex-col items-center gap-8">
                {tools.map((tool, i) => (
                    <Card
                        key={i}
                        className={`flex flex-col
                        ${i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"}
                        gap-16 md:items-start`}
                    >
                        <div className="flex flex-col gap-8">
                            <h2 className={"font-bold text-center"}>
                                {tool.title}
                            </h2>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: tool.description,
                                }}
                            />
                        </div>
                        {cloneElement(tool.img, {
                            className:
                                "max-h-[340px] max-w-full md:min-w-[360px]",
                        })}
                    </Card>
                ))}
            </div>
        </BasePage>
    );
};
