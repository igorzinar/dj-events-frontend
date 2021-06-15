const image =
  "https://image.shutterstock.com/image-photo/portrait-confident-young-dj-headphones-260nw-1082977484.jpg";
const title = "Super Popular DJ From the World";
const description =
  // eslint-disable-next-line max-len
  "Everyone you need add event in your profile.";

export default {
  canonical: "https://igorzinar.com",
  locale: "en_US",
  title,
  description,
  openGraph: {
    title,
    description,
    image,
    locale: "en_US",
    type: "website",
    url: "https://igorzinar.com",
    site_name: "Igor Zinar",
    images: [
      {
        url: image,
        width: 872,
        height: 826,
        alt: "I like to create interest projects",
      },
    ],
  },
  twitter: {
    handle: "@IgorZinar",
    site: "@IgorZinar",
    cardType: "summary_large_image",
    image,
  },
  facebook: {
    appId: "",
  },
};
