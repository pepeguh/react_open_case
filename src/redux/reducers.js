import { SET_BALANCE, SET_SKINS } from './actions';

const initialState = {
  balance: 500,
  skins:[
    {
      name: "Oscillator",
      type: "UMP-45",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0v73ZDBSuImJkYyOlOPmPKzQgG5u5Mx2gv3--Y3nj1H68ks-ZTj2JoeUIAc3Mw6FrwLsx-e7hZ7v75qcmydlvygmtimLnBC01wYMMLLb9wWKMQ",
      rarity:"milspec",
      price:1,
    },
    {
      name: "Windblown",
      type: "Nova",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouLWzKjhzw8zGfitD08u_moS0k_7nI77DhWpd18l4jeHVyoD0mlOx5UptZm-nIdeXcgBrYQ3UqFW5l-bugcTp6ZSbzyBmvnFx5S7cmUe2hBFSLrs4oxm_23A",
      rarity:"milspec",
      price:35,
    },
    {
      name: "O.S.I.P.R.",
      type: "M249",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-jxcjhnwMzFI2kb09-5mYKCmfLLP7LWnn9u5MRjjeyPo4qt3wbgrhVkam_2JIDAJlM-aFrVq1W8xLq-hZO1upSfyHsy63Z2tmGdwUIJtswwdA",
      rarity:"milspec",
      price:40,
    },
    {
      name: "Heavy Metal",
      type: "SG 553",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf1OD3YjoXuY-JkIWKg__5Nq_QmlRd4cJ5ntbN9J7yjRq3_0JsZ2inJdeTew49aQzTqFe4l-zuhZW-vpjNyXRl73F3tHeLyhG2n1gSOQK8z5S-",
      rarity:"milspec",
      price:43,
    },
    {
      name: "Junk Yard",
      type: "R8 Revolver",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3di59_oSJhpWYg_z9PbzummJW4NFOhujT8om73Qbg_kJrazqlLILAc1RoaQzX_QTsxr_s0MW9tcnIyXoyvSAj5n6JnAv330-b64w-6g",
      rarity:"milspec",
      price:45,
    },
    {
      name: "Circaetus",
      type: "CZ75-Auto",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotaDyfgZf0Ob3cicVueOhnImZm-D9Pb_ummJW4NFOhujT8om70ALi-0prZGn0IICTdwNtYl3QqAO5k-7ngse0752fyCRi6CUnsX_cyQv330-K5zDKuQ",
      rarity:"milspec",
      price:48,
    },
    {
      name: "Clear Polymer",
      type: "Glock-18",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf1OD3djFN79eJhI-HjvrxIYTdn2xZ_Pp9i_vG8MKsiQHiqUJpMWuncdPEdw46ZgrQ8lO-kuu-0Z-0vs7Izntl6XMqsH-OgVXp1pCcljBx",
      rarity:"milspec",
      price:50,
    },
    {
      name: "dev_texture",
      type: "Negev",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJkIWdg_LsJ67Dk1Rd4cJ5ntbN9J7yjRq1-xBqNWuld9TEIQ9qZV_TrlbsyLrvgZO-u5rKwXZg6SIq4XnVnEC0n1gSOdjW9rAC",
      rarity:"restricted",
      price:150,
    },
    {
      name: "Button Masher",
      type: "MAC-10",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJhI-Zg_b2P77ummJW4NFOhujT8om7jACx8kRtYW6iLYTAIVRvYFrY8lXrxL-5hZ6_7czBzXRrvyQq4y3elgv330_bBVmBuA",
      rarity:"restricted",
      price:80,
    },
    {
      name: "Cyber Shell",
      type: "P250",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhnwMzYI2gS09-vloWZhP_xP7fummJW4NFOhujT8om70VLk_0NkMD2mLI-dJlI2YF7Q81S6wL_n0JC06svInyQ2siEh53-Lywv3309nhbYnfQ",
      rarity:"restricted",
      price:110,
    },
    {
      name: "Trigger Discipline",
      type: "Desert Eagle",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJgJKCkPDxIYTVn3hS4dV9g-fEyoD8j1yglB89IT6mOo_BegA_ZFHU_we-xue6hsC76czBzSFmvSJ0sXzZmxW_100ZaOZrhKaACQLJyKyK7VI",
      rarity:"restricted",
      price:280,
    },
    {
      name: "Slate",
      type: "AK-47",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhnwMzJemkV08ykm4aOhOT9PLXQmlRd4cJ5ntbN9J7yjRqw-0o4ZWvwcIbEdQQ7Ml7Tr1nvwufvgMC6us-bmHZi6HEgsCvYlkC_n1gSOasHEuYf",
      rarity:"restricted",
      price:1100,
    },
    {
      name: "XOXO",
      type: "XM1014",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PLZTiVPvYznwL-bgvn_DLfYkWNF18lwmO7Eu9T23lG2_hE_NWvwIIeSewE_YgnV-AO_kOu6h5Tvupmay3MwvyIi5XjD30vg9oIGPLs",
      rarity:"classified",
      price:450,
    },
    {
      name: "Food Chain",
      type: "MP9",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6r8FAR17P7YKAJE49Oyq4ODlv76DLfYkWNF18lwmO7Eu9mt0QGy_xA_a2_3J46SIwA_MFvX8lK6xu7vhpHpusidyHtmuXYlsSnD30vgbTUHI8E",
      rarity:"classified",
      price:800,
    },
    {
      name: "Chromatic Aberration",
      type: "Galil AR",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczLZAJF7dC_mL-In-X7PrruhmJf4_p9g-7J4bP5iUazrl05YWCgdo6WelJrYA6D_FK_ybrsg8PovsnOy3Rg6Cd0tiqLnhXmhUxEcKUx0gvh2894",
      rarity:"classified",
      price:1500,
    },
    {
      name: "In Living Color",
      type: "M4A4",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW09C5goW0m_7zO6_ummpD78A_3--W89r02wTs_hI5NzrydY6SelJqYFjY8lC_xeq6gp61tMzLnSBg7j5iuyjjy9o9kg",
      rarity:"covert",
      price:4050,
    },
    {
      name: "The Traitor",
      type: "USP-S",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09ulq5WYh-TLO7rfkW5V5cR_teXI8oTht1i1uRQ5fTjzJY6cclBqNArY-VK7xe3o0cC77cvPz3Zi6ydw4Snbyhfh0ksdbeFxxavJpJcZ4v4",
      rarity:"covert",
      price:5450,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return {
        ...state,
        balance: action.payload,
      };
      case SET_SKINS:
      return {
        ...state,
        skins: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;