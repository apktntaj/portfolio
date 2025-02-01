export type Activities = {
  id: number;
  time: string;
  category: Category;
};

enum Category {
  TIDUR = "TIDUR",
  BANGUN = "BANGUN",
  MINUM_SUSU = "MINUM_SUSU",
  SISA_SUSU = "SISA_SUSU",
  PUP = "PUP",
  GANTI_PAMPERS = "GANTI_PAMPERS",
}
