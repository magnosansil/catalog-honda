import { Motorcycle } from "../models/motorcycle.model";

export const motorcycles: Motorcycle[] = [
  {
    id: "pop110",
    name: "Pop 110i",
    colors: ['branco', 'preto', 'vermelho'],
    images: [
      'https:/www.honda.com.br/motos/sites/hda/files/2024-04/imagem-home-pop-110i-es-branco-ross-white-dianteira-direita.webp',
      'https:/www.honda.com.br/motos/sites/hda/files/2024-05/imagem-home-pop-110i-es-vermelho-fighting-red-dianteira-direita.webp',
      'https:/www.honda.com.br/motos/sites/hda/files/2024-04/imagem-home-pop-110i-es-preto-black-dianteira-direita.webp'
    ],
    consortiumPlans: {
      '12x': 1106.13,
      '18x': 741.73,
      '24x': 559.54,
      '36x': 380.42,
      '48x': 288.76,
      '60x': 236.43,
      '80x': 181.00
    },
    specifications: {
      capacities: { 
        fuel_tank: 42,
        motor_oil: 1,
        oil_change: 0.8
      },
      chassis: {
        front_brake_diameter: "A tambor / 110 mm",
        front_suspension_travel: "Garfo telescópico / 100 mm",
        front_tire: "60/100 - 17",
        rear_brake_diameter: "A tambor / 110 mm",
        rear_suspension_travel: "Dois amortecedores / 79 mm",
        rear_tire: "80/100 - 14",
        type: "Monobloco"
      },
      dimensions: {
        distance_between_axles: 1238,
        dry_weight: 87,
        ground_minimum_distance: 745,
        motorcycle_height: 1031,
        motorcycle_length: 1843,
        motorcycle_width: 727,
      },
      electricalSystem: {
        battery: "12V - 4Ah",
        headlght: "35/35 W",
        ignition: "Eletrônica"
      },
      motor: {
        compression_ratio: "10.0:1",
        cylinder_capacity: 109.5,
        diameter_stroke: "47,0 x 63,1 mm",
        fuel: "Gasolina",
        maximum_power: "8,43 cv a 7.250 rpm",
        maximum_torque: "0,945 kgf.m a 5.000 rpm",
        power_system: "Injeção Eletrônica PGM-FI",
        starting_system: "Elétrica",
        transmission: 4,
        type: "OHC, Monocilíndrico, 4 tempos, arrefecido a ar"
      }
    }
  },
  {
    id: "pop110+10",
    name: "Pop 110i",
    colors: ['branco', 'preto', 'vermelho'],
    images: [
      'https://www.honda.com.br/motos/sites/hda/files/2024-04/imagem-home-pop-110i-es-branco-ross-white-dianteira-direita.webp',
      'https://www.honda.com.br/motos/sites/hda/files/2024-05/imagem-home-pop-110i-es-vermelho-fighting-red-dianteira-direita.webp',
      'https://www.honda.com.br/motos/sites/hda/files/2024-04/imagem-home-pop-110i-es-preto-black-dianteira-direita.webp'
    ],
    consortiumPlans: {
      '12x': 1216.77,
      '18x': 815.93,
      '24x': 615.51,
      '36x': 418.47,
      '48x': 317.64,
      '60x': 257.88,
      '80x': 199.11
    },
    specifications: {
      capacities: { 
        fuel_tank: 42,
        motor_oil: 1,
        oil_change: 0.8
      },
      chassis: {
        front_brake_diameter: "A tambor / 110 mm",
        front_suspension_travel: "Garfo telescópico / 100 mm",
        front_tire: "60/100 - 17",
        rear_brake_diameter: "A tambor / 110 mm",
        rear_suspension_travel: "Dois amortecedores / 79 mm",
        rear_tire: "80/100 - 14",
        type: "Monobloco"
      },
      dimensions: {
        distance_between_axles: 1238,
        dry_weight: 87,
        ground_minimum_distance: 745,
        motorcycle_height: 1031,
        motorcycle_length: 1843,
        motorcycle_width: 727,
      },
      electricalSystem: {
        battery: "12V - 4Ah",
        headlght: "35/35 W",
        ignition: "Eletrônica"
      },
      motor: {
        compression_ratio: "10.0:1",
        cylinder_capacity: 109.5,
        diameter_stroke: "47,0 x 63,1 mm",
        fuel: "Gasolina",
        maximum_power: "8,43 cv a 7.250 rpm",
        maximum_torque: "0,945 kgf.m a 5.000 rpm",
        power_system: "Injeção Eletrônica PGM-FI",
        starting_system: "Elétrica",
        transmission: 4,
        type: "OHC, Monocilíndrico, 4 tempos, arrefecido a ar"
      }
    }
  },
]