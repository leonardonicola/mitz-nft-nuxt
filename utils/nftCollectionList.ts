interface NftsProps {
  name: string
  url: string
  creator: string
  price: number
  link: string
  [key: string]: string | number
}

interface StateProps {
  [key: string]: NftsProps[]
}
 
const collections: StateProps = {
    hapeprime: [
      {
        name: 'HAPE #39123',
        url: 'hape1.webp',
        creator: 'Hape Prime',
        price: 0.45,
        link: 'https://opensea.io/collection/hapeprime',
      },
      {
        name: 'HAPE #02182',
        url: 'hape2.webp',
        creator: 'Hape Prime',
        price: 0.43,
        link: 'https://opensea.io/collection/hapeprime',
      },
      {
        name: 'HAPE #00293',
        url: 'hape3.webp',
        creator: 'Hape Prime',
        price: 0.41,
        link: 'https://opensea.io/collection/hapeprime',
      },
      {
        name: 'HAPE #00291',
        url: 'hape4.webp',
        creator: 'Hape Prime',
        price: 0.49,
        link: 'https://opensea.io/collection/hapeprime',
      },
    ],
    karafuru: [
      {
        name: 'Karafuru x Hypebeast #30182',
        url: 'karafuru1.jpg',
        creator: 'Karafuru',
        price: 0.12,
        link: 'https://opensea.io/collection/karafuru-x-hypebeast-x-atmos',
      },
      {
        name: 'Karafuru x Hypebeast #31241',
        url: 'karafuru2.jpg',
        creator: 'Karafuru',
        price: 0.14,
        link: 'https://opensea.io/collection/karafuru-x-hypebeast-x-atmos',
      },
      {
        name: 'Karafuru x Hypebeast #32512',
        url: 'karafuru3.jpg',
        creator: 'Karafuru',
        price: 0.05,
        link: 'https://opensea.io/collection/karafuru-x-hypebeast-x-atmos',
      },
      {
        name: 'Karafuru x Hypebeast #39673',
        url: 'karafuru4.jpg',
        creator: 'Karafuru',
        price: 0.06,
        link: 'https://opensea.io/collection/karafuru-x-hypebeast-x-atmos',
      },
    ],
    clonex: [
      {
        name: 'CloneX #10958',
        url: 'clonex1.webp',
        creator: 'CloneX',
        price: 5.86,
        link: 'https://opensea.io/collection/clonex',
      },
      {
        name: 'CloneX #10959',
        url: 'clonex2.webp',
        creator: 'CloneX',
        price: 5.83,
        link: 'https://opensea.io/collection/clonex',
      },
      {
        name: 'CloneX #10960',
        url: 'clonex3.webp',
        creator: 'CloneX',
        price: 5.31,
        link: 'https://opensea.io/collection/clonex',
      },
      {
        name: 'CloneX #10961',
        url: 'clonex4.webp',
        creator: 'CloneX',
        price: 5.95,
        link: 'https://opensea.io/collection/clonex',
      },
    ],
    metasamurai: [
      {
        name: 'Meta Samurai #00122',
        url: 'meta1.webp',
        creator: 'Meta Samurai',
        price: 1.21,
        link: 'https://opensea.io/collection/metasamurai-official',
      },
      {
        name: 'Meta Samurai #00123',
        url: 'meta2.webp',
        creator: 'Meta Samurai',
        price: 1.32,
        link: 'https://opensea.io/collection/metasamurai-official',
      },
      {
        name: 'Meta Samurai #00124',
        url: 'meta3.webp',
        creator: 'Meta Samurai',
        price: 1.43,
        link: 'https://opensea.io/collection/metasamurai-official',
      },
      {
        name: 'Meta Samurai #00125',
        url: 'meta4.webp',
        creator: 'Meta Samurai',
        price: 1.31,
        link: 'https://opensea.io/collection/metasamurai-official',
      },
    ],
  }

export {NftsProps, collections}