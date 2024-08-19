import imageAqua from '../images/products/image-aqua.png';
import imageRose from '../images/products/image-rose.png';
import imageYellow from '../images/products/image-yellow.png';
import imageSteel from '../images/products/image-steel.png';
import avatarDaniel from '../images/avatars/daniel.jpg';
import avatarkristy from '../images/avatars/kristy.png';
import avatarVeronika from '../images/avatars/veronika.jpg';
import avatarMolly from '../images/avatars/molly.png';

function generateVoteCount() {
  return Math.floor((Math.random() * 50) + 15);
}


const products = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: avatarDaniel,
    productImageUrl: imageAqua,
  },
  {
    id: 2,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn points when your favorite politicians pass legislation.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: avatarkristy,
    productImageUrl: imageRose,
  },
  {
    id: 3,
    title: 'Tinfoild: Tailored tinfoil hats',
    description: 'We already have your measurements and shipping address.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: avatarVeronika,
    productImageUrl: imageSteel,
  },
  {
    id: 4,
    title: 'Haught or Naught',
    description: 'High-minded or absent-minded? You decide.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: avatarMolly,
    productImageUrl: imageYellow,
  },
];

export default products;