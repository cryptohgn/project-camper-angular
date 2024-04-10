export interface Camper {
    id: number;
    title: string;
    brand: string;
    price: number;
    km: number;
    year: number;
    img: string;
    model: string;
    seats: number;
    fuel: string;
    isolation: {
      isolation: boolean;
      isolationMaterial: string[];
    };
    solarpanel: boolean;
    liftedRoof: boolean;
    backCam: boolean;
    androidIOAuto: boolean;
    doors: number;
    kw: number;
    change: string;
    description: string;
    location: {
      latitude: number;
      longitude: number;
      city: string;
      region: string;
      country: string;
    };
    user: string;
  }