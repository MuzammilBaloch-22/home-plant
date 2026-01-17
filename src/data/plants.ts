import monsteraImg from '@/assets/plants/monstera.jpg';
import fiddleLeafImg from '@/assets/plants/fiddle-leaf.jpg';
import snakePlantImg from '@/assets/plants/snake-plant.jpg';
import pothosImg from '@/assets/plants/pothos.jpg';
import peaceLilyImg from '@/assets/plants/peace-lily.jpg';
import rubberPlantImg from '@/assets/plants/rubber-plant.jpg';

export interface Plant {
  id: string;
  name: string;
  price: number;
  image: string;
  careLevel: 'Easy Care' | 'Low Light' | 'Pet Friendly' | 'Air Purifying';
  description: string;
}

export const plants: Plant[] = [
  {
    id: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    price: 45,
    image: monsteraImg,
    careLevel: 'Easy Care',
    description: 'The iconic Swiss cheese plant with stunning split leaves.',
  },
  {
    id: 'fiddle-leaf-fig',
    name: 'Fiddle Leaf Fig',
    price: 65,
    image: fiddleLeafImg,
    careLevel: 'Low Light',
    description: 'A statement plant with large, violin-shaped leaves.',
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    price: 35,
    image: snakePlantImg,
    careLevel: 'Air Purifying',
    description: 'Nearly indestructible with striking vertical leaves.',
  },
  {
    id: 'pothos-golden',
    name: 'Golden Pothos',
    price: 25,
    image: pothosImg,
    careLevel: 'Easy Care',
    description: 'Trailing vine with heart-shaped golden leaves.',
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    price: 40,
    image: peaceLilyImg,
    careLevel: 'Pet Friendly',
    description: 'Elegant white blooms and air-purifying qualities.',
  },
  {
    id: 'rubber-plant',
    name: 'Rubber Plant',
    price: 55,
    image: rubberPlantImg,
    careLevel: 'Air Purifying',
    description: 'Bold, glossy leaves in deep burgundy green.',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Interior Designer',
    content: 'The quality of plants from Leafy is exceptional. They arrived healthy and have thrived in my clients\' spaces.',
    avatar: 'SM',
  },
  {
    id: 2,
    name: 'James Chen',
    role: 'Home Owner',
    content: 'Finally found a plant shop that delivers quality. My monstera is the star of my living room now!',
    avatar: 'JC',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Plant Enthusiast',
    content: 'The care instructions included were so helpful. Even as a beginner, I\'ve managed to keep all my plants alive!',
    avatar: 'ET',
  },
];
