export interface AppFeature {
  id: string;
  title: string;
  description: string;
}

export interface AppPrivacyPoint {
  id: string;
  title: string;
  description: string;
}

export interface AppSeo {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  ogType?: string;
  twitterCard?: string;
}

export interface AppMetadata {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  screenshot: string;
  features: AppFeature[];
  privacyPolicy: AppPrivacyPoint[];
  seo: AppSeo;
}

const apps: AppMetadata[] = [
  {
    slug: 'brotto',
    name: 'Brotto',
    tagline: 'Gestão local de plantas: fotos e regas sem servidor',
    shortDescription:
      'Brotto é um app de monitoramento de plantas que guarda fotos e registros de rega localmente no dispositivo do usuário.',
    longDescription:
      'Brotto fornece um diário completo para suas plantas, com notificações locais, histórico de rega e fotos armazenadas localmente. ' +
      'Todas as informações permanecem no seu dispositivo, sem upload para servidores externos, garantindo privacidade e controle total.',
    screenshot: '/brotto.png',
    features: [
      {
        id: 'watering-log',
        title: 'Registro de Regas',
        description: 'Registre e visualiza o histórico de regas com lembretes confiáveis.',
      },
      {
        id: 'photo-gallery',
        title: 'Galeria Local',
        description:
          'Salve fotos de suas plantas localmente sem nunca enviar imagens a servidores.',
      },
      {
        id: 'local-notifications',
        title: 'Notificações Locais',
        description: 'Receba alertas de cuidados e mantenha seu jardim saudável.',
      },
    ],
    privacyPolicy: [
      {
        id: 'local-storage',
        title: 'Dados 100% locais',
        description:
          'Fotos e logs são armazenados apenas no dispositivo do usuário e não são compartilhados.',
      },
      {
        id: 'no-server-upload',
        title: 'Sem envio ao servidor',
        description:
          'Nenhuma imagem ou registro de planta é enviado para servidor externo por padrão.',
      },
      {
        id: 'notifications',
        title: 'Notificações locais',
        description:
          'As notificações são geradas e entregues localmente no dispositivo sem retenção externa.',
      },
    ],
    seo: {
      title: 'Brotto - Plant care local app',
      description:
        'Brotto mantém fotos e registros de rega localmente no seu celular, com foco em privacidade e controles offline.',
      keywords: ['brottyo', 'plant care', 'local plant journal', 'watering reminders', 'privacy'],
      ogImage: '/brotto.png',
      ogType: 'website',
      twitterCard: 'summary_large_image',
    },
  },
];

export function getAllApps(): AppMetadata[] {
  return [...apps];
}

export function getAppBySlug(slug: string): AppMetadata | undefined {
  return apps.find((x) => x.slug === slug);
}
