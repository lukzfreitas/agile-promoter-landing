import { BellAlertIcon, CircleStackIcon, MapPinIcon, PhotoIcon, PresentationChartBarIcon, WifiIcon } from '@heroicons/react/24/outline'

const Features = (props: { id: string }) => {

    const features = [
        {
            name: 'Monitoramento em tempo real',
            description:
                'Acompanhe em tempo real a rotina de seus promotores e suas atividades programadas no dia.',
            icon: MapPinIcon,
        },
        {
            name: 'Suas atividades off-line',
            description:
                'Seu promotor realiza sua rotina sem precisar estar conectado a internet, a sincronização é realizada de forma automática quando estiver online.',
            icon: WifiIcon,
        },
        {
            name: 'Alertas',
            description:
                'Alertas em tempo real de controle de data crítica, reportes de ruputuras e faltas em estoque.',
            icon: BellAlertIcon,
        },
        {
            name: 'Armazenamento de imagens',
            description:
                'Fotos tiradas pelos promotores ficam armazenadas para controle de suas atividades.',
            icon: CircleStackIcon,
        },
        {
            name: 'Reconhecimento de imagens',
            description:
                'Uso de inteligência artificial para processamento de imagens. Agilizando o acompanhamento dos resultados.',
            icon: PhotoIcon,
        },
        {
            name: 'Relatório de desempenho',
            description:
                'Geração de relatórios para clientes com fluxo de aprovação de imagens e resultados.',
            icon: PresentationChartBarIcon,
        },
    ]

    return (
        <div id={props.id} className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                        <dt className="text-base/7 font-semibold text-blue-900">
                            <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                <feature.icon aria-hidden="true" className="size-6 text-white" />
                            </div>
                            {feature.name}
                        </dt>
                        <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                    </div>
                ))}
            </dl>
        </div>
    )
}

export default Features;