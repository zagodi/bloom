export type Genre = {
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  newest_published_date: string;
  oldest_published_date: string;
  updated: string;
};

export type GenresResponse = {
  status: string;
  results: Genre[];
  num_results: number;
};
