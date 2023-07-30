export interface Pokemon {
  abilities: [
    {
      ability?: { name: string; url: string }
      is_hidden?: boolean
      slot?: number
    },
  ]
  base_experience: number
  forms: [{ name: string; url: string }]
  game_indices: [
    {
      game_index: number
      version: { name: string; url: string }
    },
  ]
  height: number
  held_items: [
    {
      item: { name: string; url: string }
      version_details: [
        {
          rarity: number
          version: { name: string; url: string }
        },
      ]
    },
  ]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: [
    {
      move: {
        name: string
        url: string
      }
      version_group_details: [
        {
          level_learned_at: number
          move_learn_method: { name: string; url: string }
          version_group: { name: string; url: string }
        },
      ]
    },
  ]
  name: 'pichu'
  order: 34
  past_types: []
  species: {
    name: 'pichu'
    url: 'https://pokeapi.co/api/v2/pokemon-species/172/'
  }
  sprites: {
    back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/172.png'
    back_female: null
    back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/172.png'
    back_shiny_female: null
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png'
    front_female: null
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/172.png'
    front_shiny_female: null
    other: {
      dream_world: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/172.svg'
        front_female: null
      }
      home: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/172.png'
        front_female: null
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/172.png'
        front_shiny_female: null
      }
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/172.png'
      }
    }
    versions: {
      'generation-i': {
        'red-blue': {
          back_default: null
          back_gray: null
          back_transparent: null
          front_default: null
          front_gray: null
          front_transparent: null
        }
        yellow: {
          back_default: null
          back_gray: null
          back_transparent: null
          front_default: null
          front_gray: null
          front_transparent: null
        }
      }
      'generation-ii': {
        crystal: {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/172.png'
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/172.png'
          back_shiny_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/172.png'
          back_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/172.png'
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/172.png'
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/172.png'
          front_shiny_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/172.png'
          front_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/172.png'
        }
        gold: {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/172.png'
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/172.png'
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/172.png'
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/172.png'
          front_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/172.png'
        }
        silver: {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/172.png'
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/172.png'
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/172.png'
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/172.png'
          front_transparent: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/172.png'
        }
      }
      'generation-iii': {
        emerald: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/172.png'
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/172.png'
        }
        'firered-leafgreen': {
          back_default: null
          back_shiny: null
          front_default: null
          front_shiny: null
        }
        'ruby-sapphire': {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/172.png'
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/172.png'
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/172.png'
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/172.png'
        }
      }
      'generation-iv': {
        'diamond-pearl': {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/172.png'
          back_female: null
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/172.png'
          back_shiny_female: null
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/172.png'
          front_female: null
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/172.png'
          front_shiny_female: null
        }
        'heartgold-soulsilver': {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/172.png'
          back_female: null
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/172.png'
          back_shiny_female: null
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/172.png'
          front_female: null
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/172.png'
          front_shiny_female: null
        }
        platinum: {
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/172.png'
          back_female: null
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/172.png'
          back_shiny_female: null
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/172.png'
          front_female: null
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/172.png'
          front_shiny_female: null
        }
      }
      'generation-v': {
        'black-white': {
          animated: {
            back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/172.gif'
            back_female: null
            back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/172.gif'
            back_shiny_female: null
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/172.gif'
            front_female: null
            front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/172.gif'
            front_shiny_female: null
          }
          back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/172.png'
          back_female: null
          back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/172.png'
          back_shiny_female: null
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/172.png'
          front_female: null
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/172.png'
          front_shiny_female: null
        }
      }
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/172.png'
          front_female: null
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/172.png'
          front_shiny_female: null
        }
        'x-y': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/172.png'
          front_female: null
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/172.png'
          front_shiny_female: null
        }
      }
      'generation-vii': {
        icons: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/172.png'
          front_female: null
        }
        'ultra-sun-ultra-moon': {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/172.png'
          front_female: null
          front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/172.png'
          front_shiny_female: null
        }
      }
      'generation-viii': {
        icons: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/172.png'
          front_female: null
        }
      }
    }
  }
  stats: [
    {
      base_stat: 20
      effort: 0
      stat: {
        name: 'hp'
        url: 'https://pokeapi.co/api/v2/stat/1/'
      }
    },
  ]
  types: [
    {
      slot: 1
      type: {
        name: 'electric'
        url: 'https://pokeapi.co/api/v2/type/13/'
      }
    },
  ]
  weight: 20
}
