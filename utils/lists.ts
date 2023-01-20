interface NftsProps {
  name: string
  url: string
  creator: string
  price: number
  link: string
}

interface StateProps {
  [key: string]: NftsProps[]
}

interface InfluencersProps {
  name: string
  numOfArts: string
  phrase: string
  photo: string
}
 
export const collections: StateProps = {
    hapeprime: [
      {
        name: 'HAPE #39123',
        url: '/nfts/hape/hape1.webp',
        creator: 'Hape Prime',
        price: 0.45,
        link: 'https://opensea.io/collection/hapeprime',
      },
      {
        name: 'HAPE #02182',
        url: '/nfts/hape/hape2.webp',
        creator: 'Hape Prime',
        price: 0.43,
        link: 'https://opensea.io/collection/hapeprime',
      },
      {
        name: 'HAPE #00293',
        url: '/nfts/hape/hape3.webp',
        creator: 'Hape Prime',
        price: 0.41,
        link: 'https://opensea.io/collection/hapeprime',
      },
      {
        name: 'HAPE #00291',
        url: '/nfts/hape/hape4.webp',
        creator: 'Hape Prime',
        price: 0.49,
        link: 'https://opensea.io/collection/hapeprime',
      },
    ],
    karafuru: [
      {
        name: 'Karafuru x Hypebeast #30182',
        url: '/nfts/karafuru/karafuru1.jpg',
        creator: 'Karafuru',
        price: 0.12,
        link: 'https://opensea.io/collection/karafuru-x-hypebeast-x-atmos',
      },
      {
        name: 'Karafuru x Hypebeast #31241',
        url: '/nfts/karafuru/karafuru2.jpg',
        creator: 'Karafuru',
        price: 0.14,
        link: 'https://opensea.io/collection/karafuru-x-hypebeast-x-atmos',
      },
      {
        name: 'Karafuru x Hypebeast #32512',
        url: '/nfts/karafuru/karafuru3.jpg',
        creator: 'Karafuru',
        price: 0.05,
        link: 'https://opensea.io/collection/karafuru-x-hypebeast-x-atmos',
      },
      {
        name: 'Karafuru x Hypebeast #39673',
        url: '/nfts/karafuru/karafuru4.jpg',
        creator: 'Karafuru',
        price: 0.06,
        link: 'https://opensea.io/collection/karafuru-x-hypebeast-x-atmos',
      },
    ],
    clonex: [
      {
        name: 'CloneX #10958',
        url: '/nfts/clonex/clonex1.webp',
        creator: 'CloneX',
        price: 5.86,
        link: 'https://opensea.io/collection/clonex',
      },
      {
        name: 'CloneX #10959',
        url: '/nfts/clonex/clonex2.webp',
        creator: 'CloneX',
        price: 5.83,
        link: 'https://opensea.io/collection/clonex',
      },
      {
        name: 'CloneX #10960',
        url: '/nfts/clonex/clonex3.webp',
        creator: 'CloneX',
        price: 5.31,
        link: 'https://opensea.io/collection/clonex',
      },
      {
        name: 'CloneX #10961',
        url: '/nfts/clonex/clonex4.webp',
        creator: 'CloneX',
        price: 5.95,
        link: 'https://opensea.io/collection/clonex',
      },
    ],
    metasamurai: [
      {
        name: 'Meta Samurai #00122',
        url: '/nfts/metasamurai/meta1.webp',
        creator: 'Meta Samurai',
        price: 1.21,
        link: 'https://opensea.io/collection/metasamurai-official',
      },
      {
        name: 'Meta Samurai #00123',
        url: '/nfts/metasamurai/meta2.webp',
        creator: 'Meta Samurai',
        price: 1.32,
        link: 'https://opensea.io/collection/metasamurai-official',
      },
      {
        name: 'Meta Samurai #00124',
        url: '/nfts/metasamurai/meta3.webp',
        creator: 'Meta Samurai',
        price: 1.43,
        link: 'https://opensea.io/collection/metasamurai-official',
      },
      {
        name: 'Meta Samurai #00125',
        url: '/nfts/metasamurai/meta4.webp',
        creator: 'Meta Samurai',
        price: 1.31,
        link: 'https://opensea.io/collection/metasamurai-official',
      },
    ],
  }

export const populars: NftsProps[] = [
    {
      name: 'CloneX #10959',
      url: '/nfts/clonex/clonex2.webp',
      creator: 'CloneX',
      price: 5.83,
      link: 'https://opensea.io/collection/clonex',
    },
    {
      name: 'Karafuru x Hypebeast #30182',
      url: '/nfts/karafuru/karafuru1.jpg',
      creator: 'Karafuru',
      price: 0.12,
      link: 'https://opensea.io/collection/karafuru-x-hypebeast-x-atmos',
    },
    {
      name: 'HAPE #02182',
      url: '/nfts/hape/hape2.webp',
      creator: 'Hape Prime',
      price: 0.43,
      link: 'https://opensea.io/collection/hapeprime',
    },
    {
      name: 'Meta Samurai #00125',
      url: '/nfts/metasamurai/meta4.webp',
      creator: 'Meta Samurai',
      price: 1.31,
      link: 'https://opensea.io/collection/metasamurai-official',
    },
    {
      name: 'HAPE #39123',
      url: '/nfts/hape/hape1.webp',
      creator: 'Hape Prime',
      price: 0.45,
      link: 'https://opensea.io/collection/hapeprime',
    },
    {
      name: 'CloneX #10960',
      url: '/nfts/clonex/clonex3.webp',
      creator: 'CloneX',
      price: 5.31,
      link: 'https://opensea.io/collection/clonex',
    },
  ]

export const influencers: InfluencersProps[] = [
    {
      name: 'Mac Demarco',
      numOfArts: '2',
      phrase:
        "Everybody's a multifaceted, emotional, living being, I think. Sometimes it's fun to goof around, sometimes you've got to think about things, sometimes you've got to be strange, and then you've got to be jiggly. That's just what being a human's all about.",
      photo: 'demarco.jpg',
    },
    {
      name: 'Tyler, the Creator',
      numOfArts: '9',
      phrase: 'You make my earth quake.',
      photo: 'tyler.webp',
    },
    {
      name: 'Frank Ocean',
      numOfArts: '2',
      phrase:
        "Don't confuse my personality with my attitude. My personality is who I am, and my attitude depends on who you are.",
      photo: 'frank.jpg',
    },
    {
      name: 'Joji',
      numOfArts: '3',
      phrase: 'Love it!',
      photo: 'jojio.jpg',
    },
    {
      name: 'ASAP Rocky',
      numOfArts: '13',
      phrase: 'Mannn this website made my rich as fu@*!',
      photo: 'asap.jpg',
    },
    {
      name: 'MF DOOM',
      numOfArts: '13',
      phrase:
        "I'm always trying to show versatility. I'm juggling, and I'm flipping fire, and I'm chewing gum and rhyming at the same time... on a unicycle, while playing the drums.",
      photo: 'mfdoom.jpg',
    },
  ]
