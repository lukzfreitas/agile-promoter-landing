import Image from "next/image";

const Mobile = (props: { id: string }) => {
    return (
        <div id={props.id} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 items-center justify-center">
                <div className="flex justify-center">
                    <Image aria-hidden height={400} width={320} src="/app.gif" alt="aplicativo promotor ágil" />
                </div>
                <div>
                    <h1 className="text-center text-5xl font-semibold tracking-tight text-blue-900 sm:text-5xl">
                        Compatível com Android e IOS
                    </h1>
                    <br></br>
                    <h1 className="text-center text-5xl font-semibold tracking-tight text-gray-500 sm:text-4xl max-w-2xl">
                        Uso para tablet e celular
                    </h1>
                </div>
            </dl>
        </div>
    );
}

export default Mobile;