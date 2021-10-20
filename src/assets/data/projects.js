import { v4 as uuidv4 } from 'uuid';
import Whatsapp from '../images/whatsapp.png';
import Mutawa from '../images/mutawa.png';
import V_serv from '../images/vserv.png';
import CoinTrackerImg from '../images/cointracker.jpg';
import near_deal from '../images/near_deal.png';
import Travel from '../images/travel.png';
import Movie from '../images/movie.png';
import Facebook from '../images/facebook.png';
import Tasty from '../images/tasty_.png';
import Cars from '../images/cars.png';
import Go_Web from '../images/go_web_proj.png';
import Delivery from '../images/delivery.png';


const projects = [
  {
    id: uuidv4(),
    name: "Near Deal App",
    desc:
      'Building E-commerce application using (React - React Google Maps - React Geolocation - API\'S - Firebase - Adobe XD) to help users found the most nearby shops satisfying their requirements.',
    img: near_deal,
    link : 'https://hurt-education.surge.sh'
  },
  {
    id: uuidv4(),
    name: 'Mutawa Marine',
    desc:
      'I was responsible for developing the front end using (React - ES6 - REST.API) for this website which has a lot of marine\'s services.',
    img: Mutawa,
    link : 'https://www.mutawamarine.com'
  },
  {
    id: uuidv4(),
    name: 'V-SERV Company',
    desc:
      'I was responsible for developing all components using (HTML - CSS - JS - PHP) for this website which has a virtual business services.',
    img: V_serv,
    link : 'https://simplistic-orange.surge.sh'
  },
  {
    id: uuidv4(),
    name: 'Chat App',
    desc:
      'Building a chat app clone using (React - React chat engine - Firebase) with a real-time group chat and sharing photos and files for social media services',
    img: Whatsapp,
    link : 'https://github.com/mohamedelsayed0149/WhatsApp-Clone'
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
    link : 'https://github.com/mohamedelsayed0149/Price-Tracker'
  },
  {
    id: uuidv4(),
    name: 'Travel Agency',
    desc:
      'A full responsive website was built by me for traveling services including all tours needs using ( HTML - CSS - JS - SCSS ).',
    img: Travel,
    link : 'https://unwritten-mind.surge.sh'
  },
  {
    id: uuidv4(),
    name: 'Movie App',
    desc:
      'A simple movie application with an API\'S request from a free list of movies using (React - Bootstrap - Typescript - react rating stars components) for users.',
    img: Movie,
    link : 'https://strong-walk.surge.sh'
  },
  {
    id: uuidv4(),
    name: 'Facebook Clone',
    desc:
      'Facebook Application satisfy all real clone\'s requirements with an chat application.',
    img: Facebook,
    link : 'https://github.com/mohamedelsayed0149/Facebook-Clone'
  },
  {
    id: uuidv4(),
    name: 'Tasty App',
    desc:
      'I was responsible for developing all components using (HTML - CSS - JS) for this website which has a online food ordering services like otlob.',
    img: Tasty,
    link : 'https://separate-beds.surge.sh'
  },
  {
    id: uuidv4(),
    name: 'Rent A Car',
    desc:
    'I was responsible for developing all components using (HTML - CSS - JS) for this website which has a car services for rent and repairs.',
    img: Cars,
    link : 'https://separate-beds.surge.sh'
  },
  {
    id: uuidv4(),
    name: 'Delivery App',
    desc:
    'I was responsible for developing all components using (HTML - CSS - JS) for this website which has all delivery services from anywhere to help people connect with each other.',
    img: Delivery,
    link : 'https://separate-beds.surge.sh'
  },
  {
    id: uuidv4(),
    name: 'Go web Company',
    desc:
    'I was responsible for developing all components using (React - Styled Components - Swiper) for this company which i own as a freelancer to work with my team in web & marketing services.',
    img: Go_Web,
    link : 'https://separate-beds.surge.sh'
  }
  
];

export default projects;
