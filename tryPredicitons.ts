export interface Prediction {
  name: string,
  players: PlayerDetails[]
}

export interface PlayerDetails {
  name: string,
  url: string
}


export const merch: Prediction[] = [
  {
    name: "BA",
    players: [
      {
        name: "Kontoni Staggs",
        url: "https://www.nrl.com/players/nrl-premiership/broncos/kontoni-staggs/"
      },
      {
        name: "Reuben Garrick",
        url: "https://www.nrl.com/players/nrl-premiership/sea-eagles/reuben-garrick/"
      }
    ]
  },
  {
    name: "Buzz",
    players: [
      {
        name: "Suliasi Vunivalu",
        url: "https://www.nrl.com/players/nrl-premiership/storm/suliasi-vunivalu/ "
      },
      {
        name: "Maika Sivo",
        url: "https://www.nrl.com/players/nrl-premiership/eels/maika-sivo/"
      }
    ]
  },
  {
    name: "Muller",
    players: [
      {
        name: "Stephen Crichton",
        url: "https://www.nrl.com/players/nrl-premiership/panthers/stephen-crichton/"
      },
      {
        name: "Daniel Tupou",
        url: "https://www.nrl.com/players/nrl-premiership/roosters/daniel-tupou/"
      }
    ]
  },
  {
    name: "Burger",
    players: [
      {
        name: "David Nofoaluma",
        url: "https://www.nrl.com/players/nrl-premiership/wests-tigers/david-nofoaluma/"
      },
      {
        name: "Josh Addo-Carr",
        url: "https://www.nrl.com/players/nrl-premiership/storm/josh-addo-carr/"
      }
    ]
  },
  {
    name: "Larter",
    players: [
      {
        name: "Campbell Graham",
        url: "https://www.nrl.com/players/nrl-premiership/rabbitohs/campbell--graham/"
      },
      {
        name: "Valentine Holmes",
        url: "https://www.nrl.com/players/nrl-premiership/cowboys/valentine-holmes/"
      }
    ]
  },
  {
    name: "KT",
    players: [
      {
        name: "Jack Wighton",
        url: "https://www.nrl.com/players/nrl-premiership/raiders/jack-wighton/"
      },
      {
        name: "Sione Katoa",
        url: "https://www.nrl.com/players/nrl-premiership/sharks/sione-katoa/"
      }
    ]
  },

]