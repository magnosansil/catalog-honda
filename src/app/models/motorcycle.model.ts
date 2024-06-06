export interface Motorcycle {
  id: string;
  name: string;
  images: string[];
  consortiumPlans: { [key: string]: any };
  specifications?: {
    capacities?: { [key: string]: any };
    chassis?: { [key: string]: any };
    dimensions?: { [key: string]: any };
    electricalSystem?: { [key: string]: any };
    motor?: { [key: string]: any };
  };
  colors: string[];
}
