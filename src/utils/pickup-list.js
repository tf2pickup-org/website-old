//List of all active pickups and minimum information required
//Template of data
// {
//    region: 'EU', //Double check if region of added pickup is present in pickup tab component currently: EU, CIS, NA, AO
//    link: 'link to pickup website',
//    apiUrl: 'link to queue api endpoint'
//    name: 'name',
//    logo: 'path to local logo asset'

export const pickupList = [
  {
    region: 'EU',
    link: 'https://tf2pickup.cz/',
    apiUrl: 'https://api.tf2pickup.cz/queue',
    name: 'tf2pickup.cz',
    logo: 'static/images/pickup-logos/tf2pickup_logo_white.png',
  },
  {
    region: 'CIS',
    link: 'https://tf2pickup.pl/',
    apiUrl: 'https://api.tf2pickup.pl/queue',
    name: 'tf2pickup.pl',
    logo: 'static/images/pickup-logos/tf2pickup_logo_white.png',
  },
];
//TODO: Finish this file to include all pickups
