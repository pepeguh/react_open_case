import { SET_BALANCE, SET_FRACTURE_SKINS, SET_SNAKEBITE_SKINS } from './actions';

const initialState = {
  balance: 500,
  snakebite_skins:[
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
  fracture_skins:[
    {
      name: "Ultralight",
      type: "Negev",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpouL-iLhFf0Ob3fzhF6cqJgYyfhfb4OrzZglRd4cJ5ntbN9J7yjRqy_0Rqa2mgctXBd1U8NArR_1i6l7rq1MO5vcidwCEy7CFwt3mJlkbjn1gSORALg32d",
      rarity:"milspec",
      price:1,
    },
    {
      name: "Gnarled",
      type: "P2000",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovrG1eVcwg8zJYAJSvozmxL-HmOTgDKzehGdV18l4jeHVyoD0mlOx5UI4azvxdYeRIARsZArX8lbskOrqhZS8uc-byiRiuSMk4neJzUCxiRpSLrs4DPAc4sI",
      rarity:"milspec",
      price:30,
    },
    {
      name: "Ol' Rusty",
      type: "SG 553",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopb3wflFf1OD3YjoXuY-JhpWYg-7LP7LWnn9u5MRjjeyP9tnxjAzm-0c6Z22hcYDAdA4-Z1HW-VLrk-zphMS6upvNyHZnvnZ042GdwUL6H1mM1A",
      rarity:"milspec",
      price:25,
    },
    {
      name: "Mainframe 001",
      type: "SG 553",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopamie19f0Ob3Yi5FvISJmYGCmfHmMrbUqWdY781lteXA54vwxgOw_BdkZWindY6VIFBrMgqF_1C6wLjujMDu6J7Lm3tm7HIm4XbbzEOpwUYbzunpojk",
      rarity:"milspec",
      price:45,
    },
    {
      name: "Cassette",
      type: "P250",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-3h5OOg-PxDLfYkWNF18lwmO7Eu9Tw3gay8xBta23xJdTGJ1Q9Zl-F81TvkOi-jZa67pjOz3U16XYl5n7D30vgEiB9r4A",
      rarity:"milspec",
      price:25,
    },
      {
      name: "Freight",
      type: "P90",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FABz7OORIQJB49KilYmFkuXLP7LWnn9u5MRjjeyP8ImtjAPj8kBtaz-gJYWTdVQ_Ml7TqAPokOzvh8K6vpvImHJivSFx5GGdwUJl-uhAcw",
      rarity:"milspec",
      price:25,
    },
      {
      name: "Runic",
      type: "PP-Bizon",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLO_JAlf1OD3czRY49KJnIWHm-X1Or_UhFRd4cJ5ntbN9J7yjRq3_BI9Z2H0JoCdIAdraVCC-AS5l7zu08C_75Wayyc273Ig4SvZmhW3n1gSOWigl-N3",
      rarity:"milspec",
      price:30,
    },
      {
      name: "Monster Call",
      type: "MAG-7",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7uifDhjxszFcDoV09G5mpOfkuXLMLrdmlRd4cJ5ntbN9J7yjRrsqRdqZWnxJtXBIwI5MArY_we5wrvog5Po757MzHBl7yZz5yyImEO3n1gSOSCZljDB",
      rarity:"restricted",
      price:180,
    },
      {
      name: "Brother",
      type: "Tec-9",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhnwMzcdD4b09ujkZKCm_v1DLfYkWNF18lwmO7Eu9us3gHn_xBsamj3J4CUJ1NtZlHWrwLtlevqgJ61v53JwHQ1vSV07HnD30vgpLbVCkY",
      rarity:"restricted",
      price:190,
    },
      {
      name: "Allure",
      type: "MAC-10",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou7umeldf0Ob3fDxBvYyJnZOEmPn6MoTdn2xZ_Pp9i_vG8MKl2AC1_xc4NW6mLYWUelVoMw3Z8lW6ybzu1pXutJXBnyZn63Z07SuJgVXp1mZoDeap",
      rarity:"restricted",
      price:190,
    },
    {
      name: "Connexion",
      type: "Galil AR",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbupIgthwczPYgJF7dC_mL-bn_jxPbLJqWdY781lteXA54vwxgLm8kNlMm-mI4adIwM4NFDW_VjsyL--jJS-uc-YzXFr6CEn5nbYnhSpwUYbtmvWxUo",
      rarity:"restricted",
      price:170,
    },
      {
      name: "Kitbash",
      type: "MP5-SD",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou6rwOANf1OD3fC0X_9iJg4GYg_L4MrXVqWdU78Ryk9bN_Iv9nGu4qgE7Nnf6IdTEewQ2NQvSqVi_wbu9jZe1vZTNy3Bk63Er5HbbyUHhh0xFO7A-m7XAHt-G88cu",
      rarity:"restricted",
      price:170,
    },
      {
      name: "Tooth Fairy",
      type: "M4A4",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhjxszFJTwW082jkYWFkfb9IaLummJW4NFOhujT8om7jQGyqUNuYWj3IYKRcFVoaV2Cq1W2xLrn1pXv6snNn3RgsyEr5neInwv330_EUH3GMA",
      rarity:"classified",
      price:1110,
    },
      {
      name: "Vogue",
      type: "Glock-18",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposbaqKAxf0Ob3djFN79eJkZmOlPj6J7rSglRd4cJ5ntbN9J7yjRqyqURla2GnJdKWJg9oN1nV8we2wLrs1pbotczLnCMw6Ckl4yrflxG1n1gSOanH9nA-",
      rarity:"classified",
      price:1180,
    },
      {
      name: "Entombed",
      type: "XM1014 ",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgporrf0e1Y07PDdTiVPvYznwL-KmuL4Nq_ulGdE7fp9g-7J4bP5iUazrl1tYG72IICSJlM4ZQ6Cq1e5x-zqhsfvu5rImyFq6XUqs3fezRPmiU5LcKUx0sbazufk",
      rarity:"classified",
      price:1080,
    },
      {
      name: "Printstream",
      type: "Desert Eagle",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJhJKCmePnJ6nUl2Zu5Mx2gv3--Y3nj1H6qUdqazz2IoCVdVJvYlGGqFPtyea6gZ-_uJjPy3tj7HQnsS3cmBHkiQYMMLIjaxhhAw",
      rarity:"covert",
      price:12600,
    },
    {
      name: "Legion of Anubis",
      type: "AK-47",
      src: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszJemkV0924gYKChMj4OrzZglRd6dd2j6eUp43wiwfgqkM4Z270LIOUcFA6aF7SqFa5yO7tjJLu7sjIzXFnvSkn-z-DyMloWsFc",
      rarity:"covert",
      price:2850,
    }

  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BALANCE:
      return {
        ...state,
        balance: action.payload,
      };
      case SET_SNAKEBITE_SKINS:
      return {
        ...state,
        snakebite_skins: action.payload,
      };
      case SET_FRACTURE_SKINS:
        return{
          ...state,
          fracture_skins:action.payload,
        }
    default:
      return state;
  }
};
export default rootReducer;