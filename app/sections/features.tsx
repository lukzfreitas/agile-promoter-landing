import { BellAlertIcon, CircleStackIcon, MapPinIcon, PhotoIcon, PresentationChartBarIcon, WifiIcon } from '@heroicons/react/24/outline'


const Features = () => {

    const features = [
        {
            name: 'Acompanhe em tempo real',
            description:
                'Acompanhe em tempo real você e seus clientes o roteiro de seus promotores e suas atividades programadas no dia.',
            icon: MapPinIcon,
        },
        {
            name: 'Suas atividades off-line',
            description:
                'Seu promotor pode realizar suas tarefas básicas sem precisar estar conectado a internet.',
            icon: WifiIcon,
        },
        {
            name: 'Alertas',
            description:
                'Alertas em tempo real de controle de data crítica e reportes de ruputuras e faltas de estoque.',
            icon: BellAlertIcon,
        },
        {
            name: 'Armazenamento de imagens',
            description:
                'Armazene as fotos tiradas pelo promotor para ter controle de suas atividades.',
            icon: CircleStackIcon,
        },
        {
            name: 'Reconhecimento de imagens',
            description:
                'Uso de inteligência artificial para processamento de imagens para identificação de itens na gôndola e quantidade.',
            icon: PhotoIcon,
        },
        {
            name: 'Relatório de desempenho',
            description:
                'Analise preditiva de desempenho de seus promotores para antecipar cenário futuros, util para seu planejamento estratégico e orçamentário.',
            icon: PresentationChartBarIcon,
        },
    ]

    return (
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
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