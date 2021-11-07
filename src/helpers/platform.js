import images from 'assets/images';

const PLATFORM_LOGOS = {
  AliExpress: images.AliExpressLogo,
  Amazon: images.AmazonLogo,
  Carousell: images.CarousellLogo,
  Ebay: images.EbayLogo,
  Lazada: images.LazadaLogo,
  Qoo10: images.Qoo10Logo,
  Shopee: images.ShopeeLogo
};

export function platformLogo(platform) {
  return PLATFORM_LOGOS[platform];
}
