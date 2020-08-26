const Theme = Object.freeze({
  DEFAULT: 0,
  LIGHT: 1,
})

const Background = Object.freeze({
  WHITE: 0,
  GRAY: 1,
})

const BaseBehavior = Object.freeze({
  OWNERSHIP: 0,
  COMMUNICATE: 1,
  GIVE: 2,
  PEOPLE: 3,
  GROWTH: 4,
})

const LogoSize = Object.freeze({
  DEFAULT: 0,
  SMALL: 1,
  LARGE: 2,
})

const Companies = [
  {
    name: "google",
    src: "google.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "facebook",
    src: "facebook.png",
    size: LogoSize.LARGE,
  },
  {
    name: "amazon",
    src: "amazon.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "microsoft",
    src: "microsoft.png",
    size: LogoSize.LARGE,
  },
  {
    name: "stripe",
    src: "stripe.png",
    size: LogoSize.SMALL,
  },
  {
    name: "robinhood",
    src: "robinhood.png",
    size: LogoSize.LARGE,
  },
  {
    name: "jane street",
    src: "janestreet.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "blend",
    src: "blend.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "rubrik",
    src: "rubrik.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "ea",
    src: "ea.png",
    size: LogoSize.SMALL,
  },
  {
    name: "adobe",
    src: "adobe.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "airbnb",
    src: "airbnb.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "lambda",
    src: "lambdaschool.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "linkedin",
    src: "linkedin.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "github",
    src: "github.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "salesforce",
    src: "salesforce.png",
    size: LogoSize.SMALL,
  },
  {
    name: "mongo",
    src: "mongoDB.png",
    size: LogoSize.LARGE,
  },
  {
    name: "spotify",
    src: "spotify.png",
    size: LogoSize.DEFAULT,
  },
  {
    name: "workday",
    src: "workday.png",
    size: LogoSize.DEFAULT,
  },
]

const Exec = [
  {
    name: "Raymond Guo",
    position: "President",
    src: "raymond.jpg",
  },
  {
    name: "Isabelle Zhou",
    position: "VP of Projects",
    src: "isabelle.jpg",
  },
  {
    name: "Carolyn Duan",
    position: "VP of Internal",
    src: "carolyn.jpg",
  },
  {
    name: "Andrew Kou",
    position: "VP of Internal",
    src: "andrew.jpg",
  },
  {
    name: "Rachel Lau",
    position: "VP of External",
    src: "rachel.jpg",
  },
  {
    name: "Julia Wang",
    position: "VP of External",
    src: "julia.jpg",
  },
]

const PMs = [
  {
    name: "Michael Chen",
    position: "Client PM",
    src: "michael.jpg",
  },
  {
    name: "Francesca Song",
    position: "Client PM",
    src: "francesca.jpg",
  },
  {
    name: "Selina Feng",
    position: "Client PM",
    src: "selina.jpg",
  },
  {
    name: "Kelvin Jue",
    position: "Client PM",
    src: "kelvin.jpg",
  },
  {
    name: "Warren Wang",
    position: "Client PM",
    src: "warren.jpg",
  },
  {
    name: "William Zhou",
    position: "Client PM",
    src: "william.jpg",
  },
  {
    name: "Jodie Lu",
    position: "Client PM",
    src: "jodie.jpg",
  },
  {
    name: "Kyle Golden",
    position: "Client PM",
    src: "kyle.jpg",
  },
  {
    name: "Bianca Lee",
    position: "Mentored PM",
    src: "bianca.jpg",
  },
  {
    name: "Richard Liu",
    position: "Mentored PM",
    src: "richard.jpg",
  },
]

const CardColors = [
  "cb-card-blue",
  "cb-card-navy",
  "cb-card-green",
  "cb-card-orange",
]

export {
  Theme,
  BaseBehavior,
  Companies,
  LogoSize,
  Exec,
  PMs,
  CardColors,
  Background,
}
