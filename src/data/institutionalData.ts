export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const COMPANY = {
  name: "SOCON",
  fullName: "SOCON Soluções e Consultoria Organizacional LTDA",
  city: "Aracaju, Sergipe",
  phoneDisplay: "(79) 99941-3137",
  whatsappNumber: "5579999413137",
  email: "soconsolucoeseconsultoria@gmail.com",
  address: "Av. Senador Júlio Leite, nº 1045, Sala 09, Bairro Aeroporto, Aracaju/SE, CEP 49.037-580",
  cnpj: "48.813.137/0001-91",
};

export const whatsappLink = (text: string) =>
  `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`;

// >>> Cole aqui o link da página / área do cliente do GED Kaisen. Enquanto estiver vazio, os botões levam para o contato.
export const GED_KAISEN_URL = "";
export const kaisenLink = { href: GED_KAISEN_URL || "#contato", external: Boolean(GED_KAISEN_URL) };

export const DOC_TYPES = ["Licitações", "Contratos", "Documentos financeiros", "Documentos contábeis", "Processos administrativos", "Registros institucionais"];

export const SERVICES: ServiceItem[] = [
  {
    id: "ged",
    title: "Gestão Eletrônica de Documentos",
    description: "Organização e estruturação dos documentos digitais para consultar, localizar e gerenciar informações com facilidade.",
    items: ["Classificação e indexação documental", "Estruturação de fluxos documentais", "Implantação de soluções de GED", "Apoio à preservação e à segurança das informações"],
  },
  {
    id: "consultoria",
    title: "Consultoria em gestão pública e empresarial",
    description: "Apoio para organizar processos e melhorar a rotina de trabalho de prefeituras, órgãos públicos e empresas.",
    items: ["Organização de processos administrativos", "Planejamento e melhoria de fluxos de trabalho", "Apoio à transparência e à prestação de contas"],
  },
  {
    id: "treinamentos",
    title: "Capacitação e treinamento",
    description: "Formação das equipes para manter os arquivos organizados e usar as ferramentas digitais com autonomia.",
    items: ["Treinamentos em gestão documental", "Boas práticas de organização de arquivos", "Utilização de ferramentas digitais"],
  },
];

export const METHODOLOGY = [
  { title: "Diagnóstico", text: "Mapeamento do acervo, dos tipos documentais e das necessidades do órgão." },
  { title: "Tratamento e digitalização", text: "Higienização física, captura digital e OCR." },
  { title: "Indexação e entrega", text: "Estruturação em nuvem, treinamento da equipe e acesso imediato." },
];
