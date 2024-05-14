interface Catalogo {
    id: number;
    name: string;
    descripcion:string,
    img: string;
    price: number;
}

const catalogoData: Catalogo[] = [
    {
        id: 1,
        name: 'Frijoles',
        descripcion:'rojos de grano grande',
        img: "https://www.santevet.es/uploads/images/es_ES/razas/gatocomuneuropeo.jpeg",
        price: 10.99
    },
    {
        id: 2,
        name: 'Arroz',
        descripcion:'Diana',
        img: "https://www.santevet.es/uploads/images/es_ES/razas/gatocomuneuropeo.jpeg",
        price: 10.99
    },
    {
        id: 3,
        name: 'Aceite',
        descripcion:'oliva',
        img: "https://www.santevet.es/uploads/images/es_ES/razas/gatocomuneuropeo.jpeg",
        price: 10.99
    },
];

export default catalogoData;