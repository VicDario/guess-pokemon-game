export interface PokemonListResponse {
  count: number;
  next: string;
  previous: null | string;
  results: PokemonResult[];
}

export interface PokemonResult {
  name: string;
  url: string;
}
